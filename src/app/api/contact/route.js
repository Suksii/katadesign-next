import nodemailer from "nodemailer";

export async function POST(request) {
  const data = await request.json();
  const { fullName, email, company, subject, message } = data;
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"${fullName}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: subject,
      html: `
      <p><strong>Ime: </strong> ${fullName}</p>
      <p><strong>Email: </strong> ${email}</p>
      <p><strong>Preduzeće: </strong> ${company || "N/A"}</p>
      <p><strong>Poruka: </strong>${message}</p>
      `,
    });

    return new Response(
      JSON.stringify({ message: "Poruka uspjesno poslata" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Greska pri slanju poruke", error }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
