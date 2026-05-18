import axios from "axios";
import * as cheerio from "cheerio";

export async function scrapeWebsite(url: string) {
  try {
    const { data } = await axios.get(url);

    const $ = cheerio.load(data);

    const title = $("title").text();

    const metaDescription =
      $('meta[name="description"]').attr("content") || "";

    const headings = $("h1, h2")
      .map((_, el) => $(el).text())
      .get()
      .join(" ");

    const paragraphs = $("p")
      .map((_, el) => $(el).text())
      .get()
      .slice(0, 15)
      .join(" ");

    return {
      title,
      metaDescription,
      headings,
      paragraphs,
    };
  } catch (error) {
    console.error("Scraping failed:", error);

    return {
      title: "",
      metaDescription: "",
      headings: "",
      paragraphs: "",
    };
  }
}