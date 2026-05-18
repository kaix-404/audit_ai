import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export async function sendAuditEmail({
  email,
  company,
  pdfUrl,
}: {
  email: string;
  company: string;
  pdfUrl: string;
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

          <a
            href="${pdfUrl}"
            style="
              display:inline-block;
              margin-top:20px;
              padding:12px 20px;
              background:black;
              color:white;
              text-decoration:none;
              border-radius:10px;
            "
          >
            Download Audit PDF
          </a>
        </div>
      `,
    });

    console.log("Email sent successfully");
  } catch (error) {
    console.error("Email Error:", error);

    throw error;
  }
}