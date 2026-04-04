import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Calculate Loan Payment (Step by Step)",
  description:
    "Learn how to calculate your loan payment manually and using a simple calculator.",
};

export default function HowToCalculateLoanPayment() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900 lg:px-8">
      <article className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">
          How to Calculate Loan Payment (Step by Step)
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          Calculating your loan payment helps you understand how much you need
          to pay each month. It depends on your loan amount, interest rate, and
          loan term.
        </p>

        <section className="mt-10 space-y-6 bg-white p-8 rounded-2xl">
          <div>
            <h2 className="text-2xl font-semibold">Step 1: Loan amount</h2>
            <p className="mt-2 text-slate-600">
              Start with the total amount you plan to borrow.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Step 2: Interest rate</h2>
            <p className="mt-2 text-slate-600">
              Use the annual interest rate provided by your lender.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Step 3: Loan term</h2>
            <p className="mt-2 text-slate-600">
              Choose how long you will take to repay the loan.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Use the calculator</h2>
            <p className="mt-2 text-slate-600">
              Instead of calculating manually, use our loan calculator to get
              instant results.
            </p>

            <a
              href="/loan-calculator"
              className="inline-block mt-4 bg-black text-white px-5 py-3 rounded-lg"
            >
              Open Loan Calculator
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}