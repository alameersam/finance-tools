import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Calculate Loan Interest Step by Step (With Example)",
  description:
    "Learn how to calculate loan interest step by step with a clear example and actual numbers.",
};

export default function LoanInterestPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900">
      <article className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">
          How to Calculate Loan Interest Step by Step
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          Let’s use a simple example to show exactly how loan interest is calculated.
        </p>

        <section className="mt-10 space-y-6 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <div>
            <h2 className="text-2xl font-semibold">Step 1: Loan amount</h2>
            <p className="mt-2 text-slate-600">
              Assume you borrow <strong>$10,000</strong>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Step 2: Interest rate</h2>
            <p className="mt-2 text-slate-600">
              Assume the annual interest rate is <strong>5%</strong>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Step 3: Time period</h2>
            <p className="mt-2 text-slate-600">
              Assume the loan is for <strong>1 year</strong>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Step 4: Apply the formula</h2>
            <p className="mt-2 text-slate-600">
              Interest = Loan Amount × Interest Rate × Time
              <br />
              Interest = $10,000 × 5% × 1
              <br />
              Interest = <strong>$500</strong>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">What this means</h2>
            <p className="mt-2 text-slate-600">
              In this simple example, the total interest cost for one year is $500.
              If the loan lasts longer, the total interest usually becomes higher.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Related guides</h2>
            <p className="mt-2 text-slate-600">
              To understand the full payment, read our{" "}
              <a
                href="/guides/loan-payment-formula-explained"
                className="font-medium text-emerald-700 hover:underline"
              >
                loan payment formula explained guide
              </a>
              . You can also compare repayment periods in our{" "}
              <a
                href="/guides/loan-term-vs-interest-cost"
                className="font-medium text-emerald-700 hover:underline"
              >
                loan term vs interest cost article
              </a>
              .
            </p>
          </div>

          <a
            href="/loan-calculator"
            className="inline-block mt-4 rounded-lg bg-black px-5 py-3 text-white"
          >
            Open Loan Calculator
          </a>
        </section>
      </article>
    </main>
  );
}
<div>
  <h2 className="text-2xl font-semibold">Related</h2>
  <p className="mt-2 text-slate-600">
    If you want to understand the full cost of a loan, including total interest,
    see this detailed example:
    <a
      href="/guides/how-much-interest-will-i-pay-on-a-loan"
      className="text-emerald-700 hover:underline ml-1"
    >
      How much interest will I pay on a loan
    </a>.
  </p>
</div>