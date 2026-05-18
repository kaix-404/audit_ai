import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChartBar,
  faBolt,
  faFileAlt,
  faGlobe,
  faBrain,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

const features = [
  {
    title: "AI Business Analysis",
    description:
      "Understand operational bottlenecks, workflow inefficiencies, and growth opportunities instantly using AI-powered insights.",
    icon: <FontAwesomeIcon icon={faChartBar} className="text-3xl text-violet-500"/>,
  },
  {
    title: "Automation Opportunities",
    description:
      "Identify repetitive processes that can be automated with AI tools to improve efficiency and scalability.",
    icon: <FontAwesomeIcon icon={faBolt} className="text-3xl text-violet-500"/>,
  },
  {
    title: "Executive PDF Reports",
    description:
      "Generate polished, executive-grade audit reports ready to share with clients, stakeholders, or internal teams.",
    icon: <FontAwesomeIcon icon={faFileAlt} className="text-3xl text-violet-500"/>,
  },
  {
    title: "Website Intelligence",
    description:
      "Extract meaningful business insights directly from company websites using intelligent scraping workflows.",
    icon: <FontAwesomeIcon icon={faGlobe} className="text-3xl text-violet-500"/>,
  },
  {
    title: "Smart Recommendations",
    description:
      "Receive actionable recommendations tailored to each business model and operational structure.",
    icon: <FontAwesomeIcon icon={faBrain} className="text-3xl text-violet-500"/>,
  },
  {
    title: "Instant Audit Workflow",
    description:
      "From website analysis to downloadable reports — everything happens in a seamless automated pipeline.",
    icon: <FontAwesomeIcon icon={faRocket} className="text-3xl text-violet-500"/>,
  },
];

export default function FeaturesSection() {
  return (
    <section 
        className="relative overflow-hidden px-6 py-28 lg:px-16"
        id="features"
    >
      {/* BACKGROUND BLURS */}
      <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-violet-200/30 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">
            Platform Features
          </p>

          <h2 className="mb-6 text-5xl font-black leading-tight text-gray-900">
            Built for modern business intelligence.
          </h2>

          <p className="text-lg leading-relaxed text-gray-600">
            Everything you need to analyze businesses, uncover
            automation opportunities, and generate professional
            AI-powered reports.
          </p>
        </div>

        {/* FEATURE GRID */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-[32px] border border-white/40 bg-white/80 p-8 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* ICON */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center transition group-hover:scale-110">
                {feature.icon}
              </div>

              {/* TITLE */}
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                {feature.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="leading-relaxed text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}