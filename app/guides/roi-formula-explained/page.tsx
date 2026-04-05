import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ROI Formula Explained (With Example)",
  description:
    "Learn the ROI formula, what it means, and see a simple example of how return on investment is calculated.",
};

export default function ROIFormulaExplainedPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <article className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">
          ROI Formula Explained with Example
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          ROI, or return on investment, measures how profitable an investment is
          compared to its original cost.
        </p>

        <section className="mt-10 space-y-6 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <div>
            <h2 className="text-2xl font-semibold">The formula</h2>
            <p className="mt-2 text-slate-600">
              ROI = (Profit / Investment) × 100
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">What each part means</h2>
            <ul className="mt-2 list-disc pl-6 text-slate-600">
              <li>Profit = Final Value − Initial Investment</li>
              <li>Investment = Original amount invested</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Example</h2>
            <p className="mt-2 text-slate-600">
              If you invest $10,000 and your final value becomes $12,000, your
              profit is $2,000. ROI = ($2,000 / $10,000) × 100 = 20%.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Use the calculator</h2>
            <p className="mt-2 text-slate-600">
              Use the ROI calculator to test different investment scenarios and
              compare returns quickly.
            </p>

            <a
              href="/roi-calculator"
              className="mt-4 inline-block rounded-lg bg-black px-5 py-3 text-white"
            >
              Open ROI Calculator
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}