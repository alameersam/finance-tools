import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Affects Your Loan Payment? (Simple Explanation)",
  description:
    "Understand the key factors that affect your monthly loan payment with simple examples.",
};

export default function WhatAffectsLoanPaymentPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <article className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">
          What Affects Your Loan Payment?
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          Your monthly loan payment depends on a few key factors. Understanding them helps you make better financial decisions.
        </p>

        <section className="mt-10 space-y-6 bg-white p-8 rounded-2xl">

          <div>
            <h2 className="text-2xl font-semibold">Loan amount</h2>
            <p className="mt-2 text-slate-600">
              The more you borrow, the higher your monthly payment will be.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Interest rate</h2>
            <p className="mt-2 text-slate-600">
              Higher interest rates increase both your monthly payment and total cost.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Loan term</h2>
            <p className="mt-2 text-slate-600">
              A longer term lowers monthly payments but increases total interest.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Related guides</h2>
            <p className="mt-2 text-slate-600">
              Learn how payments are calculated in our{" "}
              <a
                href="/guides/loan-payment-formula-explained"
                className="font-medium text-emerald-700 hover:underline"
              >
                loan payment formula guide
              </a>{" "}
              and see a real{" "}
              <a
                href="/guides/loan-payment-example"
                className="font-medium text-emerald-700 hover:underline"
              >
                loan payment example
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