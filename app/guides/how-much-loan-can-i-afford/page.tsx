import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Much Loan Can I Afford",
  description:
    "Learn how to estimate how much loan you can afford based on your income and expenses.",
};

export default function LoanAffordabilityPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <article className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">
          How Much Loan Can I Afford
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          Before taking a loan, it is important to understand how much you can
          comfortably afford without financial stress.
        </p>

        <section className="mt-10 space-y-6 bg-white p-8 rounded-2xl">
          <div>
            <h2 className="text-2xl font-semibold">Consider your income</h2>
            <p className="mt-2 text-slate-600">
              Your monthly income determines how much you can allocate toward loan payments.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Check your expenses</h2>
            <p className="mt-2 text-slate-600">
              Subtract your fixed expenses to understand how much is left for loan payments.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Use a calculator</h2>
            <p className="mt-2 text-slate-600">
              Use the loan calculator to estimate monthly payments and adjust values to match your budget.
            </p>

            <a href="/loan-calculator" className="mt-4 inline-block bg-black text-white px-5 py-3 rounded-lg">
              Open Loan Calculator
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}