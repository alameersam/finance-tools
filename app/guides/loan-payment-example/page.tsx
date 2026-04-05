import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loan Payment Example Step by Step (Simple Calculation)",
  description:
    "Learn how loan payments are calculated with a simple step-by-step example.",
};

export default function LoanPaymentExamplePage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <article className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">
          Loan Payment Example Step by Step
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          Understanding a real loan payment example helps you clearly see how monthly payments are calculated.
        </p>

        <section className="mt-10 space-y-6 bg-white p-8 rounded-2xl">

          <div>
            <h2 className="text-2xl font-semibold">Step 1: Loan details</h2>
            <p className="mt-2 text-slate-600">
              Assume a loan of $50,000 at 5% interest for 10 years.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Step 2: Monthly rate</h2>
            <p className="mt-2 text-slate-600">
              Monthly interest rate = 5% ÷ 12.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Step 3: Number of payments</h2>
            <p className="mt-2 text-slate-600">
              10 years × 12 months = 120 payments.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Step 4: Result</h2>
            <p className="mt-2 text-slate-600">
              Using the formula, you get the monthly payment amount.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Related guides</h2>
            <p className="mt-2 text-slate-600">
              Learn more in our{" "}
              <a
                href="/guides/loan-payment-formula-explained"
                className="font-medium text-emerald-700 hover:underline"
              >
                loan payment formula explained guide
              </a>
              , and understand interest in our{" "}
              <a
                href="/guides/how-to-calculate-loan-interest"
                className="font-medium text-emerald-700 hover:underline"
              >
                loan interest step-by-step guide
              </a>
              .
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