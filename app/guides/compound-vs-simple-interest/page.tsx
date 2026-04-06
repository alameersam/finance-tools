import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compound Interest vs Simple Interest (Which Is Better?)",
  description:
    "Learn the difference between compound and simple interest and which one is better for your savings.",
};

export default function InterestComparisonPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900">
      <article className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">
          Compound Interest vs Simple Interest: Which Is Better?
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          Understanding the difference between compound and simple interest helps you choose better savings and investment options.
        </p>

        <section className="mt-10 space-y-6 bg-white p-8 rounded-2xl">

          <div>
            <h2 className="text-2xl font-semibold">Simple interest</h2>
            <p className="mt-2 text-slate-600">
              Simple interest is calculated only on the original amount. It grows at a constant rate over time.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Compound interest</h2>
            <p className="mt-2 text-slate-600">
              Compound interest is calculated on both the initial amount and the accumulated interest, making your money grow faster.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Example</h2>
            <p className="mt-2 text-slate-600">
              If you invest $10,000 at 5% for 10 years:
              <br />
              Simple interest gives you steady growth.
              <br />
              Compound interest results in significantly higher returns.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Which is better?</h2>
            <p className="mt-2 text-slate-600">
              Compound interest is usually better because it accelerates growth over time.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Related guides</h2>
            <p className="mt-2 text-slate-600">
              Read our{" "}
              <a href="/guides/compound-interest-example" className="text-emerald-700 hover:underline">
                compound interest example
              </a>{" "}
              and{" "}
              <a href="/guides/compound-interest-formula-explained" className="text-emerald-700 hover:underline">
                compound interest formula guide
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Key takeaway</h2>
            <p className="mt-2 text-slate-600">
              Compound interest grows your money faster, especially over longer periods.
            </p>
          </div>

          <a
            href="/savings-calculator"
            className="inline-block mt-4 bg-black text-white px-5 py-3 rounded-lg"
          >
            Open Savings Calculator
          </a>

        </section>
      </article>
    </main>
  );
}