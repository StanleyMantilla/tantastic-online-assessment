
export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-3xl font-bold text-violet-400">
          TanTasTic Dashboard
        </h1>
        <a href="/" className="text-slate-300 hover:text-white">
          Home
        </a>
      </header>

      <h2 className="mt-10 text-2xl font-semibold">
        Welcome to your learning space!
      </h2>

      <p className="mt-3 text-slate-400">
        Your assessment tools will appear here.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h3 className="text-xl font-semibold">Upload Materials</h3>
          <p className="mt-2 text-slate-400">Prepare your learning files.</p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h3 className="text-xl font-semibold">My Assessments</h3>
          <p className="mt-2 text-slate-400">View your quizzes.</p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h3 className="text-xl font-semibold">My Results</h3>
          <p className="mt-2 text-slate-400">Review scores and feedback.</p>
        </div>
      </div>
    </main>
  );
}
