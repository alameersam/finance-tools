import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Much Should I Save Each Month to Reach $100,000?",
  description:
    "Find out how much you need to save each month to reach $100,000 with clear examples.",
};

export default function SavingsGoalPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900">
      <article className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">
          How Much Should I Save Each Month to Reach $100,000?
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          If your goal is to save $100,000, the monthly amount depends on how
          long you give yourself and the interest your savings earn.
        </p>

        <section className="mt-10 space-y-6 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <div>
            <h2 className="text-2xl font-semibold">Example</h2>
            <p className="mt-2 text-slate-600">
              Goal: $100,000
              <br />
              Time: 10 years
              <br />
              Interest rate: 5% annually
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Monthly savings needed</h2>
            <p className="mt-2 text-slate-600">
              To reach $100,000 in 10 years at 5% annual growth, you would need
              to save approximately <strong>$644 per month</strong>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Total amount contributed</h2>
            <p className="mt-2 text-slate-600">
              Over 10 years, you would contribute about{" "}
              <strong>$77,280</strong>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Growth from interest</h2>
            <p className="mt-2 text-slate-600">
              The remaining <strong>$22,720</strong> comes from growth and
              compounding.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Related guides</h2>
            <p className="mt-2 text-slate-600">
              See our{" "}
              <a
                href="/guides/how-much-will-my-savings-grow-in-10-years"
                className="font-medium text-emerald-700 hover:underline"
              >
                10-year savings growth guide
              </a>{" "}
              and{" "}
              <a
                href="/guides/how-much-will-my-savings-grow-in-5-years"
                className="font-medium text-emerald-700 hover:underline"
              >
                5-year savings growth example
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