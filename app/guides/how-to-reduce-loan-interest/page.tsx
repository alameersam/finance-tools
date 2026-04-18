import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Reduce Loan Interest (Simple Strategies)",
  description:
    "Learn practical ways to reduce the total interest you pay on a loan with simple examples.",
};

export default function ReduceLoanInterestPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900">
      <article className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">
          How to Reduce Loan Interest
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          Reducing loan interest can save you thousands of dollars. Here are simple and practical ways to do it.
        </p>

        <section className="mt-10 space-y-6 bg-white p-8 rounded-2xl">

          <div>
            <h2 className="text-2xl font-semibold">1. Choose a shorter loan term</h2>
            <p className="mt-2 text-slate-600">
              Shorter loans usually have less total interest, even if monthly payments are higher.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">2. Make extra payments</h2>
            <p className="mt-2 text-slate-600">
              Paying more than the required monthly amount reduces the principal faster and lowers interest.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">3. Improve your interest rate</h2>
            <p className="mt-2 text-slate-600">
              A lower rate significantly reduces total interest over time.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Example</h2>
            <p className="mt-2 text-slate-600">
              A $30,000 loan at 6% for 5 years costs about $4,800 in interest. Reducing the rate or term can lower this amount significantly.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Related guides</h2>
            <p className="mt-2 text-slate-600">
              Read our{" "}
              <a href="/guides/how-much-interest-will-i-pay-on-a-loan" className="text-emerald-700 hover:underline">
                total loan interest guide
              </a>{" "}
              and{" "}
              <a href="/guides/loan-payment-example" className="text-emerald-700 hover:underline">
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