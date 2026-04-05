import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Calculate Loan Interest Step by Step (Simple Example)",
  description:
    "Learn how to calculate loan interest step by step with a simple example.",
};

export default function LoanInterestPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <article className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">
          How to Calculate Loan Interest Step by Step
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          Understanding how loan interest is calculated helps you know the true cost of borrowing.
        </p>

        <section className="mt-10 space-y-6 bg-white p-8 rounded-2xl">
          <div>
            <h2 className="text-2xl font-semibold">Step 1: Know your loan amount</h2>
            <p className="mt-2 text-slate-600">
              This is the total amount you borrowed.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Step 2: Identify interest rate</h2>
            <p className="mt-2 text-slate-600">
              Use the annual interest rate provided by your lender.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Step 3: Apply the formula</h2>
            <p className="mt-2 text-slate-600">
              Interest = Loan Amount × Rate × Time
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Example</h2>
            <p className="mt-2 text-slate-600">
              A $10,000 loan at 5% interest for 1 year results in $500 interest.
            </p>
          </div>

          <a
            href="/loan-calculator"
            className="inline-block mt-4 bg-black text-white px-5 py-3 rounded-lg"
          >
            Open Loan Calculator
          </a>
        </section>
      </article>
    </main>
  );
}