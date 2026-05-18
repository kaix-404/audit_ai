import LeadForm from "./LeadForm";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 py-20 lg:px-16">
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-violet-300/30 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-300/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">
            Smarter Business Intelligence
          </p>

          <h1 className="mb-6 text-6xl font-black leading-tight text-gray-900">
            AI-powered audits for modern companies.
          </h1>

          <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-600">
            Instantly analyze business websites, uncover operational
            inefficiencies, identify automation opportunities, and
            generate executive-level reports powered by AI.
          </p>

          <div className="flex gap-4">
            <a 
                href="#audit-form" 
                className="rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:opacity-90"
            >
              Start Free Audit
            </a>

            <a 
                href="#features" 
                className="rounded-full border border-gray-300 bg-white px-8 py-4 font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              Learn More
            </a>
          </div>
        </div>

        <LeadForm />
      </div>
    </section>
  );
}