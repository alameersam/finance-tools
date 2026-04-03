import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FinanceTools - Free Financial Calculators",
  description:
    "Simple financial calculators for loans, savings, ROI, and more. Fast, clean, and easy to use.",
};
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
              Free financial calculators
            </p>

            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Make smarter money decisions with simple financial tools
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Calculate loans, savings, ROI, and more with fast, clean, and
              easy-to-use tools. No signup needed.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/calculators"
                className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-slate-800"
              >
                Explore calculators
              </a>

              <a
                href="/loan-calculator"
                className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100"
              >
                Try loan calculator
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg ring-1 ring-slate-200">
            <h2 className="text-xl font-semibold">Quick Loan Snapshot</h2>
            <p className="mt-2 text-sm text-slate-500">
              Example layout for your future calculator cards.
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Loan Amount</p>
                <p className="mt-1 text-xl font-semibold">$100,000</p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Interest Rate</p>
                <p className="mt-1 text-xl font-semibold">5.00%</p>
              </div>

              <div className="rounded-2xl bg-emerald-50 p-4">
                <p className="text-sm text-emerald-700">
                  Estimated Monthly Payment
                </p>
                <p className="mt-1 text-2xl font-bold text-emerald-800">
                  $790.79
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR CALCULATORS SECTION */}
<section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
  <div className="flex items-end justify-between">
    <div>
      <h2 className="text-2xl font-bold tracking-tight">
        Popular Calculators
      </h2>
      <p className="mt-2 text-sm text-slate-600">
        Start with the most commonly used financial tools.
      </p>
    </div>

    <a
      href="/calculators"
      className="text-sm font-semibold text-slate-900 hover:underline"
    >
      View all →
    </a>
  </div>

  <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
    {[
      {
        title: "Loan Calculator",
        description: "Estimate monthly payments and total interest.",
        href: "/loan-calculator",
      },
      {
        title: "Extra Payment Calculator",
        description: "See how extra payments reduce loan time.",
        href: "#",
      },
      {
        title: "ROI Calculator",
        description: "Calculate return on investment and profit.",
        href: "/roi-calculator",
      },
      {
        title: "Savings Calculator",
        description: "Project future savings growth.",
        href: "/savings-calculator",
      },
      {
        title: "Debt Payoff Calculator",
        description: "Plan your path to becoming debt-free.",
        href: "#",
      },
    ].map((tool) => (
      <a
        key={tool.title}
        href={tool.href}
        className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md"
      >
        <h3 className="text-lg font-semibold group-hover:text-slate-900">
          {tool.title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          {tool.description}
        </p>

        <div className="mt-4 text-sm font-medium text-slate-500 group-hover:text-slate-900">
          Open →
        </div>
      </a>
    ))}
  </div>
</section>
    </main>
  );
}