import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Is a Good ROI",
  description:
    "Understand what is considered a good return on investment and how to evaluate your results.",
};

export default function GoodROIPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <article className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">
          What Is a Good ROI
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          ROI varies depending on the type of investment, risk level, and time horizon.
        </p>

        <section className="mt-10 space-y-6 bg-white p-8 rounded-2xl">
          <div>
            <h2 className="text-2xl font-semibold">Positive ROI</h2>
            <p className="mt-2 text-slate-600">
              A positive ROI means your investment made a profit.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Comparing investments</h2>
            <p className="mt-2 text-slate-600">
              Higher ROI is generally better, but risk should also be considered.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Use the calculator</h2>
            <p className="mt-2 text-slate-600">
              Use the ROI calculator to compare different investment outcomes.
            </p>

            <a href="/roi-calculator" className="mt-4 inline-block bg-black text-white px-5 py-3 rounded-lg">
              Open ROI Calculator
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}