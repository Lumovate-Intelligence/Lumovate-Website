import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // Parse the request body to get the email details
    const { to, cc, subject, text, html } = await request.json();

    // Create a transporter object using SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Set up email data
    let mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      cc,
      subject,
      text,
      html,
    };

    // Send the email
    let info = await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent", info });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}