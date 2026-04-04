import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loan Payment Formula Explained with Example",
  description:
    "Learn the loan payment formula, how it works, and see a simple example calculation.",
};

export default function LoanFormulaPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <article className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">
          Loan Payment Formula Explained with Example
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          The loan payment formula helps you calculate how much you need to pay
          every month. It depends on the loan amount, interest rate, and loan term.
        </p>

        <section className="mt-10 space-y-6 bg-white p-8 rounded-2xl">
          <div>
            <h2 className="text-2xl font-semibold">The formula</h2>
            <p className="mt-2 text-slate-600">
              Monthly Payment = P × r × (1 + r)^n / ((1 + r)^n − 1)
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">What each part means</h2>
            <ul className="mt-2 text-slate-600 list-disc pl-6">
              <li>P = loan amount</li>
              <li>r = monthly interest rate</li>
              <li>n = number of payments</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Example</h2>
            <p className="mt-2 text-slate-600">
              If you borrow $100,000 at 5% annual interest for 30 years,
              your monthly payment can be calculated using this formula.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Use the calculator</h2>
            <p className="mt-2 text-slate-600">
              Instead of calculating manually, use the loan calculator to get instant results.
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