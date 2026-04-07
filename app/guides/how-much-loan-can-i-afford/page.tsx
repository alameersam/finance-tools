import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Much Loan Can I Afford? (Simple Example)",
  description:
    "Find out how much loan you can afford with a simple example based on income and monthly payments.",
};

export default function LoanAffordabilityPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900">
      <article className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">
          How Much Loan Can I Afford?
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          The amount of loan you can afford depends mainly on your income and how much you can comfortably pay each month.
        </p>

        <section className="mt-10 space-y-6 bg-white p-8 rounded-2xl">

          <div>
            <h2 className="text-2xl font-semibold">Simple rule</h2>
            <p className="mt-2 text-slate-600">
              A common rule is that your monthly loan payment should not exceed 30% of your monthly income.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Example</h2>
            <p className="mt-2 text-slate-600">
              If your monthly income is $4,000:
              <br />
              30% = $1,200 maximum monthly payment
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">What loan does this allow?</h2>
            <p className="mt-2 text-slate-600">
              With a $1,200 monthly payment, at 5% interest for 10 years, you can afford a loan of approximately{" "}
              <strong>$113,000</strong>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">What affects affordability</h2>
            <p className="mt-2 text-slate-600">
              Interest rate, loan term, and income all affect how much you can borrow.
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
              <a href="/guides/what-affects-loan-payment" className="text-emerald-700 hover:underline">
                loan factors guide
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Key takeaway</h2>
            <p className="mt-2 text-slate-600">
              Your loan affordability depends on what you can safely pay monthly—not just how much lenders approve.
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