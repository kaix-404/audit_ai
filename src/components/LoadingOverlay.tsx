export default function LoadingOverlay() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md">
      <div className="rounded-[32px] bg-white p-10 shadow-2xl">
        <div className="mb-6 flex justify-center">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-violet-200 border-t-violet-700" />
        </div>

        <h2 className="mb-2 text-center text-2xl font-bold text-gray-900">
          Generating Your Audit
        </h2>

        <p className="text-center text-gray-600">
          Scraping website, analyzing business workflows,
          and building your executive report.
        </p>
      </div>
    </div>
  );
}