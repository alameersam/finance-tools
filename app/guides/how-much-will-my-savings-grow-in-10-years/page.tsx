import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Much Will My Savings Grow in 10 Years? (With Example)",
  description:
    "See how much your savings can grow in 10 years with a real example, final balance, interest earned, and percentage growth.",
};

export default function SavingsGrowthTenYearsPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900">
      <article className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">
          How Much Will My Savings Grow in 10 Years?
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          Let’s use a simple example to see exactly how much savings can grow
          over 10 years with compound interest.
        </p>

        <section className="mt-10 space-y-6 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <div>
            <h2 className="text-2xl font-semibold">Example</h2>
            <p className="mt-2 text-slate-600">
              Starting savings: $10,000
              <br />
              Interest rate: 5% annually
              <br />
              Time: 10 years
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Final amount</h2>
            <p className="mt-2 text-slate-600">
              After 10 years, your savings grow to approximately{" "}
              <strong>$16,288.95</strong>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Interest earned</h2>
            <p className="mt-2 text-slate-600">
              Total interest earned is approximately{" "}
              <strong>$6,288.95</strong>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Percentage increase</h2>
            <p className="mt-2 text-slate-600">
              Your savings increased by about <strong>62.9%</strong> over 10
              years.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Why the growth is bigger over 10 years</h2>
            <p className="mt-2 text-slate-600">
              The longer your money stays saved, the more compounding helps.
              Interest is added to your balance, and future interest is earned
              on a larger amount.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Related guides</h2>
            <p className="mt-2 text-slate-600">
              Compare this with our{" "}
              <a
                href="/guides/how-much-will-my-savings-grow-in-5-years"
                className="font-medium text-emerald-700 hover:underline"
              >
                5-year savings growth example
              </a>{" "}
              and our{" "}
              <a
                href="/guides/compound-interest-example"
                className="font-medium text-emerald-700 hover:underline"
              >
                compound interest example
              </a>
              .
            </p>
          </div>

          <a
            href="/savings-calculator"
            className="inline-block mt-4 rounded-lg bg-black px-5 py-3 text-white"
          >
            Open Savings Calculator
          </a>
        </section>
      </article>
    </main>
  );
}