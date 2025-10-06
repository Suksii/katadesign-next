import { PrismaClient } from "@/generated/prisma";
import bcrypt from "bcryptjs";
import { SignJWT } from "jose";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

const loginAttempts = new Map();
const MAX_ATTEMPTS = 5;
const BLOCK_DURATION = 15 * 60 * 1000;

function checkRateLimit(ip) {
  const now = Date.now();
  const attempts = loginAttempts.get(ip) || { count: 0, blockedUntil: 0 };

  if (attempts.blockedUntil > now) {
    const minutesLeft = Math.ceil((attempts.blockedUntil - now) / 60000);
    return { blocked: true, minutesLeft };
  }

  if (attempts.count >= MAX_ATTEMPTS) {
    attempts.blockedUntil = now + BLOCK_DURATION;
    loginAttempts.set(ip, attempts);
    return { blocked: true, minutesLeft: 15 };
  }

  return { blocked: false };
}

function recordFailedAttempt(ip) {
  const attempts = loginAttempts.get(ip) || { count: 0, blockedUntil: 0 };
  attempts.count += 1;
  loginAttempts.set(ip, attempts);
}

function resetAttempts(ip) {
  loginAttempts.delete(ip);
}

export async function POST(request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";

    const rateCheck = checkRateLimit(ip);
    if (rateCheck.blocked) {
      return NextResponse.json(
        {
          error: `Previše neuspješnih pokušaja. Pokušajte ponovo za ${rateCheck.minutesLeft} minuta.`,
        },
        { status: 429 }
      );
    }

    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email i password su obavezni" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      recordFailedAttempt(ip);
      return NextResponse.json(
        { error: "Pogrešan email ili password" },
        { status: 401 }
      );
    }

    const user = await prisma.admin.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (!user) {
      recordFailedAttempt(ip);
      return NextResponse.json(
        { error: "Pogrešan email ili password" },
        { status: 401 }
      );
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      recordFailedAttempt(ip);
      return NextResponse.json(
        { error: "Password nije validan" },
        { status: 401 }
      );
    }

    resetAttempts(ip);

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const token = await new SignJWT({
      userId: user.id,
      email: user.email,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("7d")
      .sign(secret);

    const cookieStore = await cookies();

    cookieStore.set("auth-token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Greška na serveru" }, { status: 500 });
  }
}
