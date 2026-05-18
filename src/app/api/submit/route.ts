import { NextResponse } from "next/server";
import { LeadSchema } from "../../../types";
import { scrapeWebsite } from "../../../lib/scrape";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const validatedData = LeadSchema.parse(body);

    const scrapedData = await scrapeWebsite(
      validatedData.website
    );

    const combinedContent = `
      Title: ${scrapedData.title}

      Description:
      ${scrapedData.metaDescription}

      Headings:
      ${scrapedData.headings}

      Content:
      ${scrapedData.paragraphs}
    `;

    return NextResponse.json({
      success: true,
      content: combinedContent,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Scraping failed",
      },
      { status: 500 }
    );
  }
}