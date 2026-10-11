
export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-white">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8">
        <a href="/" className="text-sm text-violet-400">
          ← Back to Home
        </a>

        <h1 className="mt-6 text-3xl font-bold">Create Account</h1>

        <form className="mt-8 space-y-5">
          <div>
            <label htmlFor="name" className="mb-2 block">Full Name</label>
            <input id="name" name="name" required className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3" placeholder="Enter your full name" />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block">Email</label>
            <input id="email" name="email" type="email" required className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3" placeholder="Enter your email" />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block">Password</label>
            <input id="password" name="password" type="password" required className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3" placeholder="Create a password" />
          </div>

          <button
            type="button"
            className="w-full rounded-lg bg-violet-600 py-3 font-semibold"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-slate-400">
          Already registered?{" "}
          <a href="/login" className="text-violet-400">Log In</a>
        </p>
      </div>
    </main>
  );
}
