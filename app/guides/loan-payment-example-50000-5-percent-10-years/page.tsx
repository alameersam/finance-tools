import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loan Payment Example: $50,000 at 5% for 10 Years",
  description:
    "See a complete example of a $50,000 loan at 5% over 10 years, including monthly payment, total payment, and total interest.",
};

export default function LoanPaymentExampleSpecificPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900">
      <article className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">
          Loan Payment Example: $50,000 at 5% for 10 Years
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          Let’s walk through a real example of a $50,000 loan at 5% annual
          interest over 10 years so you can understand the monthly payment and
          total cost clearly.
        </p>

        <section className="mt-10 space-y-6 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <div>
            <h2 className="text-2xl font-semibold">Loan details</h2>
            <p className="mt-2 text-slate-600">
              Loan amount: $50,000
              <br />
              Interest rate: 5% annually
              <br />
              Term: 10 years
              <br />
              Number of payments: 120 monthly payments
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Monthly payment</h2>
            <p className="mt-2 text-slate-600">
              For this loan, the monthly payment is approximately{" "}
              <strong>$530.33</strong>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Total payment</h2>
            <p className="mt-2 text-slate-600">
              Over 10 years, the total amount paid is approximately{" "}
              <strong>$63,639.60</strong>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Total interest</h2>
            <p className="mt-2 text-slate-600">
              That means the total interest paid is approximately{" "}
              <strong>$13,639.60</strong>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">What this means</h2>
            <p className="mt-2 text-slate-600">
              Even though the loan amount is $50,000, the total cost is much
              higher because interest is added over time. This is why both the
              interest rate and loan term matter so much.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Related guides</h2>
            <p className="mt-2 text-slate-600">
              Read our{" "}
              <a
                href="/guides/loan-payment-example"
                className="font-medium text-emerald-700 hover:underline"
              >
                general loan payment example
              </a>{" "}
              and our{" "}
              <a
                href="/guides/how-loan-interest-works-monthly"
                className="font-medium text-emerald-700 hover:underline"
              >
                monthly loan interest explanation
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Try your own numbers</h2>
            <p className="mt-2 text-slate-600">
              Use the calculator to test different loan amounts, interest rates,
              and loan terms to compare results instantly.
            </p>
          </div>

          <a
            href="/loan-calculator"
            className="inline-block mt-4 rounded-lg bg-black px-5 py-3 text-white"
          >
            Open Loan Calculator
          </a>
        </section>
      </article>
    </main>
  );
}