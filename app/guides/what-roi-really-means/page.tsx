import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What ROI Really Means - Simple Guide",
  description:
    "Understand return on investment (ROI), how it is calculated, and how to use it for smarter financial decisions.",
};

export default function ROIGuidePage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900 lg:px-8">
      <article className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">What ROI Really Means</h1>

        <p className="mt-6 text-lg text-slate-600">
          ROI (Return on Investment) shows how profitable an investment is.
        </p>

        <section className="mt-10 space-y-6 bg-white p-8 rounded-2xl">
          <div>
            <h2 className="text-2xl font-semibold">What is ROI?</h2>
            <p className="mt-2 text-slate-600">
              ROI compares profit to the initial investment.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Why it matters</h2>
            <p className="mt-2 text-slate-600">
              It helps you compare investments and make better decisions.
            </p>
          </div>

          <div>
            <a
              href="/roi-calculator"
              className="inline-block mt-4 bg-black text-white px-5 py-3 rounded-lg"
            >
              Open ROI Calculator
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}