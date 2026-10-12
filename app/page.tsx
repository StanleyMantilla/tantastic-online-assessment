
"use client";

import { useState } from "react";

export default function Home() {
  const [role, setRole] = useState<"student" | "admin">("student");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [message, setMessage] = useState("");
  const [mode, setMode] = useState<"login" | "register">("login");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(
      "Your form is ready! Authentication will be connected in the next step."
    );
  }

  return (
    <main className="landing">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="navbar">
        <a className="brand" href="#home">
          <span className="brand-icon">🎓</span>
          <span>TanTasTic</span>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="mailto:tantastic@example.com">Contact</a>
        </nav>

        <a className="nav-button" href="#login">
          Get Started <span>↗</span>
        </a>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <div className="eyebrow">
            <span className="status-dot" />
            YOUR SMARTER WAY TO LEARN
          </div>

          <div className="hero-brand">
            <div className="hero-logo">🎓</div>
            <div>
              <h1>TanTasTic</h1>
              <p className="hero-subtitle">ONLINE ASSESSMENT</p>
            </div>
          </div>

          <h2>
            Turn Your Learning
            <br />
            Materials Into
            <br />
            <span>Smart Assessments.</span>
          </h2>

          <p className="hero-description" id="about">
            Upload your learning materials, choose your assessment type,
            and prepare for your next exam. Your learning journey
            starts here.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#login">
              Start Learning <span>→</span>
            </a>
            <a className="secondary-button" href="#features">
              Explore Features
            </a>
          </div>

          <div className="trust-row">
            <div>
              <span className="trust-icon">✦</span>
              <span>AI-ready learning</span>
            </div>
            <div>
              <span className="trust-icon">◇</span>
              <span>Secure accounts</span>
            </div>
            <div>
              <span className="trust-icon">✓</span>
              <span>Easy to use</span>
            </div>
          </div>
        </div>

        <div className="login-area" id="login">
          <div className="login-glow" />

          <section className="login-card">
            <div className="card-brand">
              <span className="mini-logo">🎓</span>
              <span>TanTasTic</span>
            </div>

            <div className="login-heading">
              <span className="welcome-label">
                {mode === "login" ? "WELCOME BACK" : "JOIN TANTASTIC"}
              </span>
              <h2>
                {mode === "login" ? "Welcome back!" : "Create your account"}
              </h2>
              <p>
                {mode === "login"
                  ? "Sign in to continue your learning journey."
                  : "Create an account to get started."}
              </p>
            </div>

            <div className="role-tabs">
              <button
                type="button"
                className={role === "student" ? "role-tab active" : "role-tab"}
                onClick={() => {
                  setRole("student");
                  setMessage("");
                }}
              >
                Student Login
              </button>
              <button
                type="button"
                className={role === "admin" ? "role-tab active" : "role-tab"}
                onClick={() => {
                  setRole("admin");
                  setMessage("");
                }}
              >
                Admin Login
              </button>
            </div>

            <form className="login-form" onSubmit={handleSubmit}>
              <div className="field-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="field-group">
                <label htmlFor="password">Password</label>
                <div className="password-wrap">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    autoComplete={
                      mode === "login" ? "current-password" : "new-password"
                    }
                    minLength={8}
                    required
                  />
                  <button
                    className="password-toggle"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {mode === "login" && (
                <div className="form-options">
                  <label className="remember-option">
                    <input
                      type="checkbox"
                      checked={remember}
                      onChange={(event) => setRemember(event.target.checked)}
                    />
                    <span>Remember me</span>
                  </label>
                  <button
                    type="button"
                    className="text-button"
                    onClick={() =>
                      setMessage(
                        "Password recovery will be available after backend setup."
                      )
                    }
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              <button className="submit-button" type="submit">
                {mode === "login" ? "Sign In" : "Create Account"}
                <span>→</span>
              </button>

              {message && (
                <p className="form-message" role="status">
                  {message}
                </p>
              )}
            </form>

            <div className="register-prompt">
              {mode === "login"
                ? "Don't have an account?"
                : "Already have an account?"}
              <button
                type="button"
                onClick={() => {
                  setMode(mode === "login" ? "register" : "login");
                  setMessage("");
                }}
              >
                {mode === "login" ? "Register" : "Sign in"}
              </button>
            </div>

            <div className="card-footer">
              <span>✦ Built for better learning</span>
              <span>TanTasTic © 2026</span>
            </div>
          </section>
        </div>
      </section>

      <section className="features-section" id="features">
        <div className="section-heading">
          <span className="eyebrow">LEARN SMARTER</span>
          <h2>Everything you need to prepare</h2>
          <p>
            A single platform for learning materials, practice exams,
            and tracking your progress.
          </p>
        </div>

        <div className="feature-grid">
          <article className="feature-card">
            <div className="feature-icon purple">✧</div>
            <h3>AI Assessment Generation</h3>
            <p>
              Prepare to turn your learning materials into practice questions
              with planned AI integration.
            </p>
          </article>

          <article className="feature-card">
            <div className="feature-icon blue">▤</div>
            <h3>Multiple Exam Types</h3>
            <p>
              Practice multiple choice, identification, true or false,
              enumeration, and mixed assessments.
            </p>
          </article>

          <article className="feature-card">
            <div className="feature-icon teal">↗</div>
            <h3>Track Your Progress</h3>
            <p>
              Review your assessment history, scores, and learning
              progress in one place.
            </p>
          </article>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand" href="#home">
          <span className="brand-icon">🎓</span>
          <span>TanTasTic</span>
        </a>
        <p>Learn with purpose. Assess with confidence.</p>
      </footer>
    </main>
  );
}
