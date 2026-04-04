import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Loan Payments Work - Complete Guide",
  description:
    "Learn how loan payments are calculated, including interest rates, loan terms, and total repayment.",
};
export default function HowLoanPaymentsWorkPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900 lg:px-8">
      <article className="mx-auto max-w-3xl">
        <p className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
          Loans Guide
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          How Loan Payments Work
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Monthly loan payments are based on the amount borrowed, the interest
          rate, and the length of the loan. The longer the loan term, the lower
          the monthly payment may be, but the more total interest you usually
          pay over time.
        </p>

        <section className="mt-10 space-y-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <div>
            <h2 className="text-2xl font-semibold">The 3 main inputs</h2>
            <p className="mt-3 leading-7 text-slate-600">
              Most loan calculations depend on three inputs: loan amount,
              annual interest rate, and repayment term in years.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Why interest matters</h2>
            <p className="mt-3 leading-7 text-slate-600">
              Higher interest rates increase the cost of borrowing. Even a small
              change in rate can make a noticeable difference in total repayment.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Why loan term matters</h2>
            <p className="mt-3 leading-7 text-slate-600">
              A longer loan term spreads payments over more months, which lowers
              the monthly payment, but often increases total interest paid.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Try the calculator</h2>
            <p className="mt-3 leading-7 text-slate-600">
              To see these effects in action, use the loan calculator and test
              different amounts, rates, and loan terms.
            </p>

            <a
              href="/loan-calculator"
              className="mt-4 inline-block rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Open Loan Calculator
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}