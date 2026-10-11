
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="flex items-center justify-between px-8 py-6">
        <a href="/" className="text-2xl font-bold text-violet-400">
          TanTasTic
        </a>

        <a
          href="/login"
          className="rounded-lg border border-violet-400 px-5 py-2 hover:bg-violet-600"
        >
          Log In
        </a>
      </nav>

      <section className="mx-auto flex max-w-5xl flex-col items-center px-6 py-20 text-center">
        <p className="font-semibold text-violet-400">
          AI-POWERED ONLINE ASSESSMENT
        </p>

        <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
          Turn Your Learning Materials Into Smart Assessments
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          Upload your files, create personalized quizzes, and
          track your learning progress in one place.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="/register"
            className="rounded-lg bg-violet-600 px-7 py-3 font-semibold hover:bg-violet-700"
          >
            Get Started
          </a>

          <a
            href="/login"
            className="rounded-lg border border-slate-600 px-7 py-3 hover:bg-slate-800"
          >
            Log In
          </a>
        </div>

        <div className="mt-16 grid w-full gap-5 text-left md:grid-cols-3">
          {[
            {
              title: "Upload Materials",
              description: "Prepare your learning files for assessment generation.",
            },
            {
              title: "Create Assessments",
              description: "Choose the question types you want to practice.",
            },
            {
              title: "Track Results",
              description: "Review your scores and find areas to improve.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-slate-800 bg-slate-900 p-6"
            >
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="mt-3 text-slate-400">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-800 py-6 text-center text-sm text-slate-400">
        © 2026 TanTasTic Online Assessment
      </footer>
    </main>
  );
}
