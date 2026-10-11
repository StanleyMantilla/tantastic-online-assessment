
export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-white">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8">
        <a href="/" className="text-sm text-violet-400">
          ← Back to Home
        </a>

        <h1 className="mt-6 text-3xl font-bold text-violet-400">
          TanTasTic
        </h1>

        <h2 className="mt-3 text-2xl font-semibold">Welcome Back</h2>

        <p className="mt-2 text-slate-400">
          Log in to continue your learning journey.
        </p>

        <form className="mt-8 space-y-5">
          <div>
            <label htmlFor="username" className="mb-2 block">
              Email or Username
            </label>
            <input
              id="username"
              name="username"
              required
              className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3"
              placeholder="Enter your email or username"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="button"
            className="w-full rounded-lg bg-violet-600 py-3 font-semibold hover:bg-violet-700"
          >
            Log In
          </button>
        </form>

        <p className="mt-6 text-center text-slate-400">
          New here?{" "}
          <a href="/register" className="text-violet-400">
            Create an account
          </a>
        </p>
      </div>
    </main>
  );
}
