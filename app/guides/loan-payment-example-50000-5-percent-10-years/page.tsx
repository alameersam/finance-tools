import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loan Payment Example: $50,000 at 5% for 10 Years",
  description:
    "See a detailed example of a $50,000 loan at 5% over 10 years and how monthly payments are calculated.",
};

export default function LoanPaymentExampleSpecificPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <article className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">
          Loan Payment Example: $50,000 at 5% for 10 Years
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          Let’s break down a real loan example to understand how monthly payments are calculated.
        </p>

        <section className="mt-10 space-y-6 bg-white p-8 rounded-2xl">

          <div>
            <h2 className="text-2xl font-semibold">Loan details</h2>
            <p className="mt-2 text-slate-600">
              Loan amount: $50,000<br />
              Interest rate: 5% annually<br />
              Term: 10 years (120 months)
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Monthly interest</h2>
            <p className="mt-2 text-slate-600">
              Monthly rate = 5% ÷ 12 = 0.4167%
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Result</h2>
            <p className="mt-2 text-slate-600">
              Using the formula, you can calculate the exact monthly payment.
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
                monthly interest explanation
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Key takeaway</h2>
            <p className="mt-2 text-slate-600">
              Real examples help you understand how loan terms and interest rates impact your payments.
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