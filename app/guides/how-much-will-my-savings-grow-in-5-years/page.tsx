import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Much Will My Savings Grow in 5 Years? (Simple Example)",
  description:
    "Estimate how your savings grow over 5 years using interest and compounding with a simple example.",
};

export default function SavingsGrowthFiveYearsPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <article className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">
          How Much Will My Savings Grow in 5 Years?
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          Your savings growth over 5 years depends on your starting amount,
          interest rate, and compounding.
        </p>

        <section className="mt-10 space-y-6 bg-white p-8 rounded-2xl">

          <div>
            <h2 className="text-2xl font-semibold">Starting amount</h2>
            <p className="mt-2 text-slate-600">
              The more you start with, the higher your final savings.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Interest rate</h2>
            <p className="mt-2 text-slate-600">
              Higher interest rates accelerate growth over time.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Example</h2>
            <p className="mt-2 text-slate-600">
              If you save $10,000 at 5% annual interest, your balance grows
              steadily over 5 years due to compounding.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Related guides</h2>
            <p className="mt-2 text-slate-600">
              Learn more in our{" "}
              <a
                href="/guides/compound-interest-formula-explained"
                className="font-medium text-emerald-700 hover:underline"
              >
                compound interest formula explained guide
              </a>{" "}
              and see a full{" "}
              <a
                href="/guides/compound-interest-example"
                className="font-medium text-emerald-700 hover:underline"
              >
                compound interest example step by step
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