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
    Understanding how loan payments are calculated can help you make better
    financial decisions. Your monthly payment depends on three main factors:
    the loan amount, interest rate, and repayment term.
  </p>

  <section className="mt-10 space-y-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
    <div>
      <h2 className="text-2xl font-semibold">The 3 key factors</h2>
      <ul className="mt-4 list-disc pl-6 text-slate-600 space-y-2">
        <li><strong>Loan amount:</strong> The total money you borrow.</li>
        <li><strong>Interest rate:</strong> The cost of borrowing.</li>
        <li><strong>Loan term:</strong> How long you take to repay.</li>
      </ul>
    </div>

    <div>
      <h2 className="text-2xl font-semibold">How interest affects your loan</h2>
      <p className="mt-3 text-slate-600">
        Higher interest rates increase your monthly payment and total repayment.
        Even a small change in interest rate can significantly impact how much
        you pay over time.
      </p>
    </div>

    <div>
      <h2 className="text-2xl font-semibold">Short vs long loan term</h2>
      <p className="mt-3 text-slate-600">
        A shorter loan term means higher monthly payments but less total
        interest. A longer term reduces your monthly payment but increases the
        total interest paid.
      </p>
    </div>

    <div>
      <h2 className="text-2xl font-semibold">Example</h2>
      <p className="mt-3 text-slate-600">
        A $100,000 loan at 5% interest over 15 years will cost significantly less
        in total interest than the same loan over 30 years, even though the
        monthly payment is higher.
      </p>
    </div>

    <div>
      <h2 className="text-2xl font-semibold">Try it yourself</h2>
      <p className="mt-3 text-slate-600">
        Use the loan calculator to test different loan terms and interest rates
        to see how they affect your monthly payment and total cost.
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