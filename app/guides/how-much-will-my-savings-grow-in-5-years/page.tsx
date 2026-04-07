import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Much Will My Savings Grow in 5 Years? (With Example)",
  description:
    "See exactly how much your savings can grow in 5 years with a real example and clear numbers.",
};

export default function SavingsGrowthFiveYearsPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900">
      <article className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">
          How Much Will My Savings Grow in 5 Years?
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          Let’s answer this with a real example so you can clearly see how much your savings can grow.
        </p>

        <section className="mt-10 space-y-6 bg-white p-8 rounded-2xl">

          <div>
            <h2 className="text-2xl font-semibold">Example</h2>
            <p className="mt-2 text-slate-600">
              Starting savings: $10,000<br />
              Interest rate: 5% annually<br />
              Time: 5 years
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Final amount</h2>
            <p className="mt-2 text-slate-600">
              After 5 years, your savings grow to approximately{" "}
              <strong>$12,762.82</strong>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Total growth</h2>
            <p className="mt-2 text-slate-600">
              You earned about <strong>$2,762.82</strong> in interest.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Percentage increase</h2>
            <p className="mt-2 text-slate-600">
              This is a total increase of about <strong>27.6%</strong> over 5 years.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">What this means</h2>
            <p className="mt-2 text-slate-600">
              Even a moderate interest rate can grow your savings significantly over time thanks to compounding.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Related guides</h2>
            <p className="mt-2 text-slate-600">
              Learn more in our{" "}
              <a
                href="/guides/compound-interest-example"
                className="text-emerald-700 hover:underline"
              >
                compound interest example
              </a>{" "}
              and{" "}
              <a
                href="/guides/compound-interest-formula-explained"
                className="text-emerald-700 hover:underline"
              >
                compound interest formula guide
              </a>
              .
            </p>
          </div>

          <a
            href="/savings-calculator"
            className="inline-block mt-4 bg-black text-white px-5 py-3 rounded-lg"
          >
            Open Savings Calculator
          </a>

        </section>
      </article>
    </main>
  );
}