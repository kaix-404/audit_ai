"use client";

import { useState } from "react";
import { generateAudit } from "../lib/client-ai";
import LoadingOverlay from "./LoadingOverlay";

export default function LeadForm() {
  const [loading, setLoading] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      website: formData.get("website"),
    };

    try {
      const scrapeRes = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!scrapeRes.ok) {
        const errorText = await scrapeRes.text();

        console.error("Scrape API Error:", errorText);

        throw new Error("Failed to scrape website");
      }

      const scrapeData = await scrapeRes.json();

      console.log("Scraped Data:", scrapeData);

      const auditResponse = await generateAudit(`
        You are an AI business consultant.

        Analyze this company professionally.

        Company:
        ${payload.company}

        Website:
        ${payload.website}

        Website Content:
        ${scrapeData.content}

        Return ONLY valid JSON in this exact format:

        {
          "companyOverview": "",
          "businessFocus": "",
          "bottlenecks": [],
          "automationOpportunities": [],
          "recommendations": [],
          "suggestedTools": []
        }

        Do not include markdown.
        Do not wrap in backticks.
        Return raw JSON only.
      `);
        
      const audit = JSON.parse(auditResponse);

      console.log("Generated Audit:", audit);

      const finalizeRes = await fetch("/api/finalize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...payload,
          audit,
        }),
      });

      if (!finalizeRes.ok) {
        const errorText = await finalizeRes.text();

        console.error("Finalize API Error:", errorText);

        throw new Error("Failed to finalize workflow");
      }

      const result = await finalizeRes.json();

      setPdfUrl(result.pdfUrl);
    } catch (error) {
      console.error("Handle Submit Error:", error);

      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  // SUCCESS STATE
  if (pdfUrl) {
    return (
      <div className="w-full max-w-xl rounded-[32px] border border-green-200 bg-white/90 p-10 shadow-2xl backdrop-blur-xl">
        <div className="mb-6 flex justify-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-5xl text-green-600">
            ✓
          </div>
        </div>

        <h2 className="mb-4 text-center text-4xl font-bold text-gray-900">
          Audit Ready
        </h2>

        <p className="mb-8 text-center leading-relaxed text-gray-600">
          Your AI-generated business audit has been created
          successfully. Download the executive PDF report below.
        </p>

        <div className="space-y-4">
          <a
            href={pdfUrl}
            target="_blank"
            className="block w-full rounded-2xl bg-black px-6 py-4 text-center text-lg font-semibold text-white transition hover:opacity-90"
          >
            Download PDF Report
          </a>

          <button
            onClick={() => setPdfUrl("")}
            className="cursor-pointer w-full rounded-2xl border border-gray-200 bg-white px-6 py-4 text-lg font-semibold text-gray-700 transition hover:bg-gray-50"
          >
            Generate Another Audit
          </button>
        </div>
      </div>
    );
  }

  // MAIN FORM
  return (
    <>
      {loading && <LoadingOverlay />}

      <div 
        className="w-full max-w-xl rounded-[32px] border border-white/20 bg-white/80 p-8 shadow-2xl backdrop-blur-xl"
        id="audit-form"
      >
        <div className="mb-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
            AI-Powered Business Intelligence
          </p>

          <h2 className="mb-4 text-4xl font-bold leading-tight text-gray-900">
            Generate professional business audits in seconds.
          </h2>

          <p className="text-gray-600">
            Analyze company websites, uncover automation
            opportunities, and generate executive-grade PDF
            reports instantly.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            name="name"
            placeholder="Your Name"
            className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 outline-none transition focus:border-violet-500"
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 outline-none transition focus:border-violet-500"
            required
          />

          <input
            name="company"
            placeholder="Company Name"
            className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 outline-none transition focus:border-violet-500"
            required
          />

          <input
            name="website"
            placeholder="https://company.com"
            className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 outline-none transition focus:border-violet-500"
            required
          />

          <button
            disabled={loading}
            className="cursor-pointer w-full rounded-2xl bg-black px-6 py-4 text-lg font-semibold text-white transition hover:scale-[1.01] hover:opacity-95 disabled:opacity-50"
          >
            {loading
              ? "Generating Audit..."
              : "Generate AI Audit"}
          </button>
        </form>
      </div>
    </>
  );
}