// import createMiddleware from "next-intl/middleware";
// import { routing } from "./i18n/routing";

// export default createMiddleware(routing);

// export const config = {
//   matcher: ["/", "/(mn|en)/:path*"],
// };

// middleware.js ili middleware.ts u root ili /src/ folderu (gde god već koristiš)

import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const intlMiddleware = createMiddleware(routing);

export default async function middleware(request) {
  const pathname = request.nextUrl.pathname;
  

  // Ekstraktuj locale iz URL-a (npr. /mn/admin → locale = "mn")
  const localeMatch = pathname.match(/^\/(mn|en)/);
  const locale = localeMatch ? localeMatch[1] : 'mn';

  const isAdminRoute = pathname.match(/^\/(mn|en)\/admin/);
  const isLoginPage = pathname.match(/^\/(mn|en)\/admin-login/);

  if (!isAdminRoute) {
    return intlMiddleware(request);
  }

  if (isLoginPage) {
    console.log("✅ Login stranica, propuštam");
    return intlMiddleware(request);
  }

  console.log("🔒 Admin ruta, provjeravam auth...");

  const token = request.cookies.get("auth-token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL(`/${locale}/admin-login`, request.url));
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    await jwtVerify(token, secret);
    return intlMiddleware(request);
  } catch (error) {
    const response = NextResponse.redirect(new URL(`/${locale}/admin-login`, request.url));
    response.cookies.delete("auth-token");
    return response;
  }
}

export const config = {
  matcher: [
    "/",
    "/(mn|en)/:path*",
  ],
};