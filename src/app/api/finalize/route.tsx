import { NextResponse } from "next/server";
import { pdf } from "@react-pdf/renderer";
import fs from "fs";
import path from "path";
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
    const pdfStream = await pdf(pdfDocument).toBuffer();

    const chunks: Uint8Array[] = [];

    for await (const chunk of pdfStream as any) {
      chunks.push(chunk);
    }

    const pdfBuffer = Buffer.concat(chunks);

    // Ensure public/pdfs directory exists
    const pdfDir = path.join(
      process.cwd(),
      "public/pdfs"
    );

    if (!fs.existsSync(pdfDir)) {
      fs.mkdirSync(pdfDir, {
        recursive: true,
      });
    }

    // Generate filename
    const fileName = `${company
      .replace(/\s+/g, "-")
      .toLowerCase()}-audit.pdf`;

    // Absolute file path
    const filePath = path.join(
      pdfDir,
      fileName
    );

    // Save PDF locally
    fs.writeFileSync(filePath, pdfBuffer);

    // Public URL for frontend
    const pdfUrl = `${baseUrl}/pdfs/${fileName}`;

    // Send email separately
    try {
      await sendAuditEmail({
        email,
        company,
        pdfUrl,
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