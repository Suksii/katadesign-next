import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Method not allowed" });
  }
  const { name, email, message, subject } = req.body;

  if (!name || !email || !message || !subject) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name} <${email}>"`,
      to: process.env.EMAIL_USER,
      subject: subject,
      html: message,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Greška pri slanju emaila:", error);
    return res.status(500).json({ error: "Greška pri slanju emaila" });
  }
}
