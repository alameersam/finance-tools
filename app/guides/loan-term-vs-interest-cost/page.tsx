import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loan Term vs Interest Cost",
  description:
    "Learn how a longer or shorter loan term affects monthly payment and total interest cost.",
};

export default function LoanTermVsInterestCostPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900 lg:px-8">
      <article className="mx-auto max-w-3xl">
        <p className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
          Loans Guide
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Loan Term vs Interest Cost
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Choosing a longer loan term can reduce your monthly payment, but it
          often increases the total interest you pay over time. A shorter loan
          term usually means higher monthly payments and lower total interest.
        </p>

        <section className="mt-10 space-y-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <div>
            <h2 className="text-2xl font-semibold">Shorter loan term</h2>
            <p className="mt-3 leading-7 text-slate-600">
              A shorter loan term spreads repayment over fewer months. That
              usually increases the monthly payment, but it reduces the total
              time interest can accumulate.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Longer loan term</h2>
            <p className="mt-3 leading-7 text-slate-600">
              A longer loan term lowers the monthly payment by spreading the
              balance across more months. However, because the loan stays active
              longer, the total interest paid is often much higher.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">What borrowers should compare</h2>
            <p className="mt-3 leading-7 text-slate-600">
              Instead of looking only at the monthly payment, compare both the
              monthly affordability and the total cost over the full loan term.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Try the loan calculator</h2>
            <p className="mt-3 leading-7 text-slate-600">
              Test different loan terms in the calculator to see how the monthly
              payment and total interest change.
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