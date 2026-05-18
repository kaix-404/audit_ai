export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6">
      <div className="text-2xl font-bold tracking-tight">
        AuditAI
      </div>

      <button className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:opacity-90">
        Get Started
      </button>
    </nav>
  );
}