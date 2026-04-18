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

<section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
  <div className="max-w-3xl">
    <h2 className="text-3xl font-bold">
      Free Financial Calculators with Simple Examples
    </h2>
    <p className="mt-4 text-lg text-slate-600">
      Learn how loans, savings, and ROI work with clear step-by-step examples and easy-to-use tools.
    </p>
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
<section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
  <div className="max-w-3xl">
    <h2 className="text-3xl font-bold">
      Latest Guides
    </h2>
    <p className="mt-4 text-lg text-slate-600">
      Learn financial concepts with simple examples.
    </p>
  </div>

  <div className="mt-8 grid gap-6 md:grid-cols-3">

    <a href="/guides/loan-payment-example" className="block p-6 bg-white rounded-2xl shadow-sm hover:shadow-md">
      <h3 className="font-semibold">Loan Payment Example</h3>
      <p className="text-sm text-slate-600 mt-2">
        Step-by-step calculation of loan payments.
      </p>
    </a>

    <a href="/guides/compound-interest-example" className="block p-6 bg-white rounded-2xl shadow-sm hover:shadow-md">
      <h3 className="font-semibold">Compound Interest Example</h3>
      <p className="text-sm text-slate-600 mt-2">
        See how savings grow over time.
      </p>
    </a>

    <a href="/guides/roi-example" className="block p-6 bg-white rounded-2xl shadow-sm hover:shadow-md">
      <h3 className="font-semibold">ROI Example</h3>
      <p className="text-sm text-slate-600 mt-2">
        Understand investment returns easily.
      </p>
    </a>

  </div>
</section>
<section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
  <div className="max-w-3xl">
    <h2 className="text-3xl font-bold">
      Learn with Real Examples
    </h2>
    <p className="mt-4 text-lg text-slate-600">
      Explore simple guides with real numbers to understand loans, ROI, and savings.
    </p>
  </div>

  <ul className="mt-6 space-y-3 text-emerald-700">
    <li>
      <a href="/guides/how-much-interest-will-i-pay-on-a-loan" className="hover:underline">
        How Much Interest Will I Pay on a Loan?
      </a>
    </li>
    <li>
      <a href="/guides/how-to-reduce-loan-interest" className="hover:underline">
        How to Reduce Loan Interest
      </a>
    </li>
    <li>
      <a href="/guides/loan-payment-example" className="hover:underline">
        Loan Payment Example Step by Step
      </a>
    </li>
    <li>
      <a href="/guides/roi-example" className="hover:underline">
        ROI Example for Beginners
      </a>
    </li>
    <li>
      <a href="/guides/compound-interest-example" className="hover:underline">
        Compound Interest Example
      </a>
    </li>
  </ul>
</section>
<section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
  <div className="max-w-3xl">
    <h2 className="text-3xl font-bold">
      Learn with Real Examples
    </h2>
    <p className="mt-4 text-lg text-slate-600">
      Understand loans, ROI, and savings with clear examples and real numbers.
    </p>
  </div>

  <ul className="mt-6 space-y-3 text-emerald-700">
    <li>
      <a href="/guides/loan-payment-example" className="hover:underline">
        Loan Payment Example Step by Step
      </a>
    </li>
    <li>
      <a href="/guides/roi-example" className="hover:underline">
        ROI Example for Beginners
      </a>
    </li>
    <li>
      <a href="/guides/compound-interest-example" className="hover:underline">
        Compound Interest Example
      </a>
    </li>
  </ul>
</section>
<section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
  <div className="max-w-3xl">
    <h2 className="text-3xl font-bold tracking-tight">
      Why use FinanceTools
    </h2>
    <p className="mt-4 text-lg text-slate-600">
      Clear tools, simple explanations, and fast results to help you make better financial decisions.
    </p>
  </div>

  <div className="mt-10 grid gap-6 md:grid-cols-3">
    <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
      <h3 className="text-xl font-semibold">Simple to use</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">
        Enter your numbers and get results instantly without creating an account.
      </p>
    </div>

    <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
      <h3 className="text-xl font-semibold">Built for clarity</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">
        Every calculator is designed to be clean, readable, and easy to understand.
      </p>
    </div>

    <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
      <h3 className="text-xl font-semibold">Learn while you use</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">
        Guides help explain the logic behind loans, savings, and return on investment.
      </p>
    </div>
  </div>
</section>
    </main>
  );
}