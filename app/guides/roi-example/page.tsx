import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ROI Example for Beginners (With Real Numbers)",
  description:
    "See a complete ROI example with real numbers and learn how return on investment is calculated.",
};

export default function ROIExamplePage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900">
      <article className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">
          ROI Example for Beginners
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          Let’s use a real example to understand return on investment clearly and simply.
        </p>

        <section className="mt-10 space-y-6 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <div>
            <h2 className="text-2xl font-semibold">Investment details</h2>
            <p className="mt-2 text-slate-600">
              Initial investment: $5,000
              <br />
              Final value: $6,500
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Profit</h2>
            <p className="mt-2 text-slate-600">
              Profit = $6,500 − $5,000 = <strong>$1,500</strong>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">ROI calculation</h2>
            <p className="mt-2 text-slate-600">
              ROI = (Profit ÷ Investment) × 100
              <br />
              ROI = ($1,500 ÷ $5,000) × 100 = <strong>30%</strong>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">What this means</h2>
            <p className="mt-2 text-slate-600">
              A 30% ROI means the investment returned 30% of the original amount as profit.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Related guides</h2>
            <p className="mt-2 text-slate-600">
              Read our{" "}
              <a
                href="/guides/roi-formula-explained"
                className="font-medium text-emerald-700 hover:underline"
              >
                ROI formula explained guide
              </a>{" "}
              and our{" "}
              <a
                href="/guides/what-is-a-good-roi"
                className="font-medium text-emerald-700 hover:underline"
              >
                what is a good ROI article
              </a>
              .
            </p>
          </div>

          <a
            href="/roi-calculator"
            className="inline-block mt-4 rounded-lg bg-black px-5 py-3 text-white"
          >
            Open ROI Calculator
          </a>
        </section>
      </article>
    </main>
  );
}