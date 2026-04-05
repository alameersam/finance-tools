import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compound Interest Example Step by Step",
  description:
    "Learn compound interest with a simple step-by-step example and see how savings grow over time.",
};

export default function CompoundInterestExamplePage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <article className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">
          Compound Interest Example Step by Step
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          Compound interest allows your savings to grow faster because you earn
          interest on both your original amount and accumulated interest.
        </p>

        <section className="mt-10 space-y-6 bg-white p-8 rounded-2xl">
          <div>
            <h2 className="text-2xl font-semibold">Step 1: Start amount</h2>
            <p className="mt-2 text-slate-600">
              Assume you invest $10,000.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Step 2: Interest rate</h2>
            <p className="mt-2 text-slate-600">
              Assume an annual interest rate of 5%.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Step 3: Time</h2>
            <p className="mt-2 text-slate-600">
              Let’s calculate growth over 10 years.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Result</h2>
            <p className="mt-2 text-slate-600">
              Over time, your investment grows significantly due to compounding.
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