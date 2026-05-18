import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export async function sendAuditEmail({
  email,
  company,
  pdfBuffer,
}: {
  email: string;
  company: string;
  pdfBuffer: Buffer;
}) {
  try {
    await resend.emails.send({
      from: "AuditAI <onboarding@resend.dev>",
      to: email,
      subject: `Your AI Business Audit for ${company}`,

      html: `
        <div style="font-family: Arial, sans-serif; padding: 24px;">
          <h1>Your AI Business Audit is Ready</h1>

          <p>
            We analyzed ${company} and generated
            your executive business audit report.
          </p>

          <p>
            Your PDF audit report is attached to this email.
          </p>
        </div>
      `,

      attachments: [
        {
          filename: `${company}-audit.pdf`,
          content: pdfBuffer.toString("base64"),
        },
      ],
    });

    console.log("Email sent successfully");
  } catch (error) {
    console.error("Email Error:", error);

    throw error;
  }
}