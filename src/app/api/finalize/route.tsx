import { NextResponse } from "next/server";
import { pdf } from "@react-pdf/renderer";
import ReportTemplate from "../../../components/ReportTemplate";
import { sendAuditEmail } from "../../../lib/sendEmail";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const baseUrl = process.env.BASE_URL || "http://localhost:3000";
    const { company, audit, email } = body;

    // Generate PDF document
    const pdfDocument = (
      <ReportTemplate
        company={company}
        audit={audit}
      />
    );

    // Convert PDF to stream
    const pdfBuffer = await pdf(pdfDocument).toBuffer();

    const chunks: Uint8Array[] = [];

    for await (const chunk of pdfBuffer as any) {
      chunks.push(chunk);
    }

    const finalBuffer = Buffer.concat(chunks);

    const base64Pdf = finalBuffer.toString("base64");

    const pdfUrl = `data:application/pdf;base64,${base64Pdf}`;

    // Send email separately
    try {
      await sendAuditEmail({
        email: body.email,
        company,
        pdfBuffer: finalBuffer,
      });

      console.log(
        "Email sent successfully"
      );
    } catch (emailError) {
      console.error(
        "EMAIL SEND ERROR:",
        emailError
      );
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message:
        "Audit generated successfully",
      pdfUrl,
    });
  } catch (error) {
    console.error(
      "Finalize Error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to generate PDF",
      },
      { status: 500 }
    );
  }
}