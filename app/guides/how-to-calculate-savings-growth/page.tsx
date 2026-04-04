import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Calculate Savings Growth",
  description:
    "Learn how to calculate how your savings grow over time using interest and compounding.",
};

export default function SavingsGrowthPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <article className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">
          How to Calculate Savings Growth
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          Savings grow over time based on interest rate and time. The longer you save, the more your money grows.
        </p>

        <section className="mt-10 space-y-6 bg-white p-8 rounded-2xl">
          <div>
            <h2 className="text-2xl font-semibold">Initial amount</h2>
            <p className="mt-2 text-slate-600">
              Start with the amount you plan to save.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Interest rate</h2>
            <p className="mt-2 text-slate-600">
              The higher the rate, the faster your savings grow.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Time</h2>
            <p className="mt-2 text-slate-600">
              Time is the most powerful factor in compounding growth.
            </p>
          </div>

          <a href="/savings-calculator" className="inline-block mt-4 bg-black text-white px-5 py-3 rounded-lg">
            Open Savings Calculator
          </a>
        </section>
      </article>
    </main>
  );
}