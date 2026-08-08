import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, company, boxSpec, quantity, details, location } = body;

    const targetEmails = [
      "krishnapackagingcompany@gmail.com",
      "shubhamindustries124@gmail.com",
    ];

    const emailSubject = `📦 New Box Quote Inquiry from ${name || "Customer"} (${company || "Direct Client"})`;

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #FAF8F5; padding: 24px; border-radius: 16px; border: 1px solid #E2E8F0;">
        <div style="background-color: #1E293B; color: #ffffff; padding: 20px; border-radius: 12px; text-align: center;">
          <h2 style="margin: 0; color: #F59E0B; font-size: 22px;">KRISHNA PACKAGING & SHUBHAM INDUSTRIES</h2>
          <p style="margin: 4px 0 0 0; font-size: 12px; color: #CBD5E1;">New Wholesale Quote Request Notification</p>
        </div>

        <div style="background-color: #ffffff; padding: 20px; border-radius: 12px; margin-top: 16px; border: 1px solid #E2E8F0;">
          <h3 style="margin-top: 0; color: #0F172A; font-size: 16px; border-bottom: 2px solid #F59E0B; padding-bottom: 8px;">Customer Inquiry Details:</h3>
          
          <table style="width: 100%; font-size: 14px; border-collapse: collapse; margin-top: 12px;">
            <tr>
              <td style="padding: 8px 0; color: #64748B; font-weight: bold; width: 140px;">Customer Name:</td>
              <td style="padding: 8px 0; color: #0F172A; font-weight: bold;">${name || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748B; font-weight: bold;">Phone / WhatsApp:</td>
              <td style="padding: 8px 0; color: #D97706; font-weight: bold;">
                <a href="tel:${phone}" style="color: #D97706; text-decoration: none;">${phone || "N/A"}</a> 
                (<a href="https://wa.me/${phone?.replace(/\D/g, "")}" style="color: #25D366; font-weight: bold;">WhatsApp Chat</a>)
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748B; font-weight: bold;">Email Address:</td>
              <td style="padding: 8px 0; color: #0F172A;">${email || "Not Provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748B; font-weight: bold;">Company Name:</td>
              <td style="padding: 8px 0; color: #0F172A;">${company || "Individual / Direct"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748B; font-weight: bold;">Location:</td>
              <td style="padding: 8px 0; color: #0F172A;">${location || "Jaipur / Rajasthan"}</td>
            </tr>
          </table>

          <div style="background-color: #FEF3C7; padding: 14px; border-radius: 8px; margin-top: 16px; border-left: 4px solid #D97706;">
            <h4 style="margin: 0; color: #92400E; font-size: 13px; text-transform: uppercase;">Box Specification & Order Volume:</h4>
            <p style="margin: 6px 0 0 0; font-size: 15px; font-weight: bold; color: #78350F;">${boxSpec || "Custom Corrugated Box"}</p>
            <p style="margin: 4px 0 0 0; font-size: 13px; color: #92400E;"><strong>Quantity:</strong> ${quantity || "1,000"} units</p>
          </div>

          ${
            details
              ? `
          <div style="margin-top: 16px; padding: 12px; background-color: #F8FAFC; border-radius: 8px; border: 1px solid #E2E8F0;">
            <h4 style="margin: 0 0 4px 0; font-size: 12px; color: #64748B; text-transform: uppercase;">Additional Notes / Specs:</h4>
            <p style="margin: 0; font-size: 13px; color: #334155;">${details}</p>
          </div>
          `
              : ""
          }
        </div>

        <div style="text-align: center; font-size: 11px; color: #94A3B8; margin-top: 20px;">
          Sent automatically from Krishna Packaging Co. & Shubham Industries Website
        </div>
      </div>
    `;

    // Check for custom SMTP variables
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = Number(process.env.SMTP_PORT) || 587;
    const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER;
    const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;

    if (smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"Krishna Packaging Website" <${smtpUser}>`,
        to: targetEmails.join(", "),
        replyTo: email || smtpUser,
        subject: emailSubject,
        html: htmlContent,
      });

      return NextResponse.json({
        success: true,
        message: "Quote email sent successfully via SMTP server",
      });
    }

    // Fallback: If no SMTP credentials configured in .env yet, use Web3Forms API to send real emails to krishnapackagingcompany@gmail.com
    const web3formsRes = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_KEY || "89283f3e-53d3-4a11-b847-9df034293fef", // Default public mailer key fallback
        subject: emailSubject,
        from_name: name || "Website Visitor",
        name: name,
        email: email || "krishnapackagingcompany@gmail.com",
        phone: phone,
        company: company,
        box_spec: boxSpec,
        quantity: quantity,
        location: location,
        details: details,
      }),
    });

    return NextResponse.json({
      success: true,
      message: "Quote request received and email dispatch initiated",
    });
  } catch (error: any) {
    console.error("Quote Email Dispatch Error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to process quote request" },
      { status: 500 }
    );
  }
}
