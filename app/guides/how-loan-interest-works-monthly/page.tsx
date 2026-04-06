import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Does Loan Interest Work Monthly? (Simple Explanation)",
  description:
    "Learn how loan interest is calculated monthly with a simple explanation and example.",
};

export default function LoanInterestMonthlyPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <article className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">
          How Does Loan Interest Work Monthly?
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          Loan interest is usually calculated monthly, even if the rate is given annually.
        </p>

        <section className="mt-10 space-y-6 bg-white p-8 rounded-2xl">

          <div>
            <h2 className="text-2xl font-semibold">Annual vs monthly interest</h2>
            <p className="mt-2 text-slate-600">
              Lenders convert annual interest rates into monthly rates by dividing by 12.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">How it is applied</h2>
            <p className="mt-2 text-slate-600">
              Each month, interest is calculated on the remaining loan balance.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Example</h2>
            <p className="mt-2 text-slate-600">
              A 6% annual interest rate becomes 0.5% per month. This rate is applied to your remaining balance.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Related guides</h2>
            <p className="mt-2 text-slate-600">
              Learn more in our{" "}
              <a
                href="/guides/how-to-calculate-loan-interest"
                className="font-medium text-emerald-700 hover:underline"
              >
                loan interest calculation guide
              </a>{" "}
              and our{" "}
              <a
                href="/guides/loan-payment-formula-explained"
                className="font-medium text-emerald-700 hover:underline"
              >
                loan payment formula explanation
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Key takeaway</h2>
            <p className="mt-2 text-slate-600">
              Monthly interest calculations determine how much of your payment goes toward interest versus principal.
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