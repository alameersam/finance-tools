import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ROI vs Profit: What Is the Difference?",
  description:
    "Learn the difference between ROI and profit with simple explanations and examples.",
};

export default function ROIVsProfitPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <article className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">
          ROI vs Profit: What Is the Difference?
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          ROI and profit are related, but they are not the same. Profit shows
          how much money you made, while ROI shows how efficient the investment was.
        </p>

        <section className="mt-10 space-y-6 bg-white p-8 rounded-2xl">
          <div>
            <h2 className="text-2xl font-semibold">What is profit?</h2>
            <p className="mt-2 text-slate-600">
              Profit is the amount left after subtracting cost from final value.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">What is ROI?</h2>
            <p className="mt-2 text-slate-600">
              ROI measures profit relative to the original investment and is
              usually shown as a percentage.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Why the difference matters</h2>
            <p className="mt-2 text-slate-600">
              Two investments can have the same profit but different ROI, depending
              on how much money was invested.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Related guides</h2>
            <p className="mt-2 text-slate-600">
              Read our{" "}
              <a
                href="/guides/roi-formula-explained"
                className="font-medium text-emerald-700 hover:underline"
              >
                ROI formula explained guide
              </a>{" "}
              and our{" "}
              <a
                href="/guides/what-is-a-good-roi"
                className="font-medium text-emerald-700 hover:underline"
              >
                what is a good ROI article
              </a>
              .
            </p>
          </div>

          <a
            href="/roi-calculator"
            className="inline-block mt-4 bg-black text-white px-5 py-3 rounded-lg"
          >
            Open ROI Calculator
          </a>
        </section>
      </article>
    </main>
  );
}