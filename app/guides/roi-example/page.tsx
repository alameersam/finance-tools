import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ROI Example for Beginners (Step-by-Step Guide)",
  description:
    "Learn how to calculate ROI with a simple example and understand investment returns.",
};

export default function ROIExamplePage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <article className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">
          ROI Example for Beginners
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          ROI (Return on Investment) shows how much profit you made compared to
          your initial investment.
        </p>

        <section className="mt-10 space-y-6 bg-white p-8 rounded-2xl">
          <div>
            <h2 className="text-2xl font-semibold">Step 1: Investment</h2>
            <p className="mt-2 text-slate-600">
              Assume you invest $5,000.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Step 2: Final value</h2>
            <p className="mt-2 text-slate-600">
              After some time, your investment grows to $6,000.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Step 3: Calculate profit</h2>
            <p className="mt-2 text-slate-600">
              Profit = $6,000 − $5,000 = $1,000.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Step 4: Apply ROI formula</h2>
            <p className="mt-2 text-slate-600">
              ROI = (Profit / Investment) × 100 = 20%.
            </p>
          </div>

          <a
            href="/roi-calculator"
            className="inline-block mt-4 bg-black text-white px-5 py-3 rounded-lg"
          >
            Open ROI Calculator
          </a>
        </section>
      </article>
    </main>
  );
}