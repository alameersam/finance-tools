import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Much Interest Will I Pay on a Loan? (With Example)",
  description:
    "Calculate how much interest you will pay on a loan with a real example and clear numbers.",
};

export default function LoanInterestTotalPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900">
      <article className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">
          How Much Interest Will I Pay on a Loan?
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          Let’s use a real example to see exactly how much interest you will pay over the life of a loan.
        </p>

        <section className="mt-10 space-y-6 bg-white p-8 rounded-2xl">

          <div>
            <h2 className="text-2xl font-semibold">Loan example</h2>
            <p className="mt-2 text-slate-600">
              Loan amount: $30,000<br />
              Interest rate: 6% annually<br />
              Term: 5 years (60 months)
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Monthly payment</h2>
            <p className="mt-2 text-slate-600">
              Monthly payment ≈ <strong>$579.98</strong>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Total paid</h2>
            <p className="mt-2 text-slate-600">
              Total payment ≈ <strong>$34,798.80</strong>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Total interest</h2>
            <p className="mt-2 text-slate-600">
              Interest paid ≈ <strong>$4,798.80</strong>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">What this shows</h2>
            <p className="mt-2 text-slate-600">
              Even a moderate interest rate adds thousands of dollars over time.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Related guides</h2>
            <p className="mt-2 text-slate-600">
              Read our{" "}
              <a href="/guides/loan-payment-example" className="text-emerald-700 hover:underline">
                loan payment example
              </a>{" "}
              and{" "}
              <a href="/guides/how-loan-interest-works-monthly" className="text-emerald-700 hover:underline">
                monthly interest explanation
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Key takeaway</h2>
            <p className="mt-2 text-slate-600">
              Total interest depends on both the rate and the loan duration.
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