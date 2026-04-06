import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loan Payment Example Step by Step (With Real Numbers)",
  description:
    "See a complete loan payment example with real numbers, including monthly payment and total cost.",
};

export default function LoanPaymentExamplePage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900">
      <article className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">
          Loan Payment Example Step by Step
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          Let’s walk through a real loan example so you can clearly understand how monthly payments are calculated.
        </p>

        <section className="mt-10 space-y-6 bg-white p-8 rounded-2xl">

          <div>
            <h2 className="text-2xl font-semibold">Loan details</h2>
            <p className="mt-2 text-slate-600">
              Loan amount: $20,000<br />
              Interest rate: 6% annually<br />
              Term: 5 years (60 months)
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Monthly payment</h2>
            <p className="mt-2 text-slate-600">
              The monthly payment is approximately <strong>$386.66</strong>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Total payment</h2>
            <p className="mt-2 text-slate-600">
              Total paid over the loan: <strong>$23,199.60</strong>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Total interest</h2>
            <p className="mt-2 text-slate-600">
              Total interest paid: <strong>$3,199.60</strong>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">What this shows</h2>
            <p className="mt-2 text-slate-600">
              Even a moderate interest rate adds a significant cost over time, especially for longer loans.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Related guides</h2>
            <p className="mt-2 text-slate-600">
              Read our{" "}
              <a href="/guides/loan-payment-formula-explained" className="text-emerald-700 hover:underline">
                loan payment formula guide
              </a>{" "}
              and{" "}
              <a href="/guides/how-loan-interest-works-monthly" className="text-emerald-700 hover:underline">
                monthly interest explanation
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