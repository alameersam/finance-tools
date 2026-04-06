import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compound Interest Example (Step-by-Step with Real Numbers)",
  description:
    "Learn compound interest with a real example showing how savings grow over time.",
};

export default function CompoundInterestExamplePage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900">
      <article className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">
          Compound Interest Example Step by Step
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          Let’s walk through a real example to see how compound interest grows your savings over time.
        </p>

        <section className="mt-10 space-y-6 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">

          <div>
            <h2 className="text-2xl font-semibold">Starting details</h2>
            <p className="mt-2 text-slate-600">
              Initial savings: $10,000<br />
              Interest rate: 5% annually<br />
              Time: 10 years
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Final value</h2>
            <p className="mt-2 text-slate-600">
              After 10 years, your savings grow to approximately{" "}
              <strong>$16,288.95</strong>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Total interest earned</h2>
            <p className="mt-2 text-slate-600">
              Interest earned = <strong>$6,288.95</strong>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">What this shows</h2>
            <p className="mt-2 text-slate-600">
              Compound interest allows your money to grow faster because you earn interest on both your original amount and previous interest.
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
                compound interest formula guide
              </a>{" "}
              and our{" "}
              <a
                href="/guides/how-much-will-my-savings-grow-in-5-years"
                className="font-medium text-emerald-700 hover:underline"
              >
                5-year savings growth guide
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