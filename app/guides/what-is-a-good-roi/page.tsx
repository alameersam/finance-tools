import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Is a Good ROI Percentage? (Simple Explanation)",
  description:
    "Learn what a good ROI percentage is and how to evaluate investment returns with simple examples.",
};

export default function GoodROIPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900">
      <article className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">
          What Is a Good ROI Percentage?
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          A good ROI (return on investment) depends on the type of investment,
          risk level, and time period. However, there are general benchmarks you
          can use.
        </p>

        <section className="mt-10 space-y-6 bg-white p-8 rounded-2xl">

          <div>
            <h2 className="text-2xl font-semibold">Typical ROI ranges</h2>
            <p className="mt-2 text-slate-600">
              Low-risk investments: 3% – 6%<br />
              Moderate-risk investments: 7% – 12%<br />
              High-risk investments: 15%+<br />
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Example</h2>
            <p className="mt-2 text-slate-600">
              If you invest $5,000 and earn $500 profit, your ROI is 10%, which is
              generally considered a good return for moderate-risk investments.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">What affects ROI</h2>
            <p className="mt-2 text-slate-600">
              ROI depends on risk, time horizon, and market conditions. Higher
              returns usually come with higher risk.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Related guides</h2>
            <p className="mt-2 text-slate-600">
              Read our{" "}
              <a
                href="/guides/roi-example"
                className="font-medium text-emerald-700 hover:underline"
              >
                ROI example guide
              </a>{" "}
              and our{" "}
              <a
                href="/guides/roi-formula-explained"
                className="font-medium text-emerald-700 hover:underline"
              >
                ROI formula explanation
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Key takeaway</h2>
            <p className="mt-2 text-slate-600">
              A “good” ROI depends on your goals, but anything above inflation
              and risk-adjusted expectations can be considered strong.
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