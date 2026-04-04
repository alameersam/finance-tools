import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Compound Interest Grows Savings",
  description:
    "Learn how compound interest works and how it can grow your savings over time.",
};

export default function CompoundInterestGuide() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900 lg:px-8">
      <article className="mx-auto max-w-3xl">
        <p className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
          Savings Guide
        </p>

        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
          How Compound Interest Grows Savings
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          Compound interest allows your money to grow faster because you earn
          interest not only on your initial investment but also on previously
          earned interest.
        </p>

        <section className="mt-10 space-y-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <div>
            <h2 className="text-2xl font-semibold">
              What is compound interest?
            </h2>
            <p className="mt-3 text-slate-600">
              Compound interest means that each year your interest is added to
              your total, and the next year you earn interest on that larger
              amount.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              Why time is important
            </h2>
            <p className="mt-3 text-slate-600">
              The longer your money stays invested, the more powerful compounding
              becomes. Time is one of the most important factors in growing
              savings.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              Impact of interest rate
            </h2>
            <p className="mt-3 text-slate-600">
              Even small increases in interest rate can significantly increase
              your future value over long periods.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              Try the savings calculator
            </h2>
            <p className="mt-3 text-slate-600">
              Use the savings calculator to see how your money grows with
              different interest rates and time periods.
            </p>

            <a
              href="/savings-calculator"
              className="mt-4 inline-block rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Open Savings Calculator
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}