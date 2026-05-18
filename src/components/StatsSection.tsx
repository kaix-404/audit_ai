const stats = [
  {
    value: "10K+",
    label: "AI Audits Generated",
  },
  {
    value: "500+",
    label: "Businesses Analyzed",
  },
  {
    value: "92%",
    label: "Workflow Accuracy",
  },
  {
    value: "24/7",
    label: "Automated Analysis",
  },
];

export default function StatsSection() {
  return (
    <section className="px-6 py-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-6 rounded-[40px] bg-black px-8 py-12 text-white md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-3xl border border-white/10 bg-gray-900 p-8 backdrop-blur-xl"
          >
            <h3 className="mb-2 text-5xl font-black">
              {stat.value}
            </h3>

            <p className="text-lg text-gray-300">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}