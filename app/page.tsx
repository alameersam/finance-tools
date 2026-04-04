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
  <div className="max-w-3xl">
    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
      Simple financial calculators to make smarter decisions
    </h1>

    <p className="mt-6 text-lg leading-8 text-slate-600">
      Use our free tools to calculate loan payments, grow your savings, and
      evaluate investments in seconds.
    </p>

    <div className="mt-8 flex gap-4">
      <a
        href="/calculators"
        className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
      >
        View Calculators
      </a>

      <a
        href="/guides"
        className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
      >
        Learn More
      </a>
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
        title: "ROI Calculator",
        description: "Calculate return on investment and profit.",
        href: "/roi-calculator",
      },
      {
        title: "Savings Calculator",
        description: "Project future savings growth.",
        href: "/savings-calculator",
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