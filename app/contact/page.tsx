"use client";

import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
  e.preventDefault();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    alert("Please fill all fields");
    return;
  }

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address");
    return;
  }

  setSubmitted(true);
}

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
          Contact
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Get in touch
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          If you have questions, feedback, or suggestions, feel free to reach out.
        </p>

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          {submitted ? (
            <div className="text-center">
              <p className="text-lg font-semibold text-emerald-700">
                Message sent successfully
              </p>
              <p className="mt-2 text-sm text-slate-600">
                We will get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3"
                  placeholder="Write your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Send message
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}