import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compound Interest Formula Explained with Example",
  description:
    "Learn the compound interest formula, how it works, and see a simple example of savings growth over time.",
};

export default function CompoundInterestFormulaExplainedPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <article className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">
          Compound Interest Formula Explained with Example
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          Compound interest helps savings grow because you earn interest on both
          your original amount and previously earned interest.
        </p>

        <section className="mt-10 space-y-6 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <div>
            <h2 className="text-2xl font-semibold">The formula</h2>
            <p className="mt-2 text-slate-600">
              Future Value = Principal × (1 + Rate)^Time
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">What each part means</h2>
            <ul className="mt-2 list-disc pl-6 text-slate-600">
              <li>Principal = starting savings amount</li>
              <li>Rate = annual interest rate</li>
              <li>Time = number of years</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Example</h2>
            <p className="mt-2 text-slate-600">
              If you save $10,000 at 5% interest for 10 years, your money grows
              using the compound interest formula. Over time, compounding
              creates a much larger final value.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Use the calculator</h2>
            <p className="mt-2 text-slate-600">
              Use the savings calculator to test how your savings grow with
              different interest rates and time periods.
            </p>

            <a
              href="/savings-calculator"
              className="mt-4 inline-block rounded-lg bg-black px-5 py-3 text-white"
            >
              Open Savings Calculator
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}