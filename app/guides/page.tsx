import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial Guides - Learn Finance Basics",
  description:
    "Simple guides explaining loans, savings, ROI, and key financial concepts to help you make better decisions.",
};
const guides = [
  {
    title: "How Loan Payments Work",
    description:
      "Learn how monthly loan payments are calculated and what affects total interest.",
    href: "/guides/how-loan-payments-work",
    category: "Loans",
  },
  {
    title: "How Compound Interest Grows Savings",
    description:
      "Understand how time and interest rate affect the growth of your savings.",
    href: "/guides/how-compound-interest-grows-savings",
    category: "Savings",
  },
  {
    title: "What ROI Really Means",
    description:
      "A simple explanation of return on investment and how to use it in decision making.",
    href: "/guides/what-roi-really-means",
    category: "Investing",
  },
  {
  title: "Loan Term vs Interest Cost",
  description:
    "Learn how a longer or shorter loan term affects monthly payment and total interest.",
  href: "/guides/loan-term-vs-interest-cost",
  category: "Loans",
},
{
  title: "How to Calculate Loan Payment",
  description: "Step-by-step guide to calculate your loan payment.",
  href: "/guides/how-to-calculate-loan-payment",
  category: "Loans",
},
{
  title: "How Much Loan Can I Afford",
  description: "Estimate how much loan fits your budget.",
  href: "/guides/how-much-loan-can-i-afford",
  category: "Loans",
},
{
  title: "How to Calculate Savings Growth",
  description: "Understand how savings grow over time.",
  href: "/guides/how-to-calculate-savings-growth",
  category: "Savings",
},
{
  title: "What Is a Good ROI",
  description: "Learn what ROI is considered good.",
  href: "/guides/what-is-a-good-roi",
  category: "Investing",
},
{
  title: "Loan Payment Formula Explained (With Simple Example)",
  description: "Understand the loan payment formula with a simple example.",
  href: "/guides/loan-payment-formula-explained",
  category: "Loans",
},
{
  title: "ROI Formula Explained (With Example)",
  description: "Learn the ROI formula with a simple example.",
  href: "/guides/roi-formula-explained",
  category: "Investing",
},
{
  title: "Compound Interest Formula Explained (With Example)",
  description: "Understand the compound interest formula with an example.",
  href: "/guides/compound-interest-formula-explained",
  category: "Savings",
},
{
  title: "How to Calculate Loan Interest Step by Step (Simple Example)",
  description: "Step-by-step guide to calculate loan interest with example.",
  href: "/guides/how-to-calculate-loan-interest",
  category: "Loans",
},
{
  title: "Compound Interest Example (Step-by-Step for Beginners)",
  description: "Step-by-step compound interest example for beginners.",
  href: "/guides/compound-interest-example",
  category: "Savings",
},
{
  title: "ROI Example for Beginners (Step-by-Step Guide)",
  description: "Simple ROI example to understand investment returns.",
  href: "/guides/roi-example",
  category: "Investing",
},
];

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
            Financial Guides
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Learn the basics behind the calculators
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Explore simple guides that explain key personal finance concepts and
            help you use the calculators with more confidence.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {guides.map((guide) => (
            <a
              key={guide.title}
              href={guide.href}
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md"
            >
              <p className="text-sm font-medium text-emerald-700">
                {guide.category}
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                {guide.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {guide.description}
              </p>

              <div className="mt-5 text-sm font-medium text-slate-900">
                Read guide →
              </div>
            </a>
          ))}
        </div>
      </div>
      <section className="mt-16">
  <div className="max-w-3xl">
    <h2 className="text-3xl font-bold tracking-tight">
      Try our calculators
    </h2>
    <p className="mt-4 text-lg text-slate-600">
      Apply what you learned using our simple financial tools.
    </p>
  </div>

  <div className="mt-8 grid gap-6 md:grid-cols-3">
    <a
      href="/loan-calculator"
      className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 hover:shadow-md"
    >
      <h3 className="text-xl font-semibold">Loan Calculator</h3>
      <p className="mt-2 text-sm text-slate-600">
        Estimate monthly payments and total interest.
      </p>
    </a>

    <a
      href="/savings-calculator"
      className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 hover:shadow-md"
    >
      <h3 className="text-xl font-semibold">Savings Calculator</h3>
      <p className="mt-2 text-sm text-slate-600">
        See how your savings grow over time.
      </p>
    </a>

    <a
      href="/roi-calculator"
      className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 hover:shadow-md"
    >
      <h3 className="text-xl font-semibold">ROI Calculator</h3>
      <p className="mt-2 text-sm text-slate-600">
        Calculate return on investment.
      </p>
    </a>
  </div>
</section>
    </main>
  );
}