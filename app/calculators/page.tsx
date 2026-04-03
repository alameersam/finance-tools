const calculators = [
  {
    title: "Loan Calculator",
    description: "Calculate monthly payment, total payment, and interest.",
    href: "/loan-calculator",
  },
  {
    title: "Extra Payment Calculator",
    description: "See how extra payments reduce total loan cost and duration.",
    href: "#",
  },
  {
    title: "Savings Calculator",
    description: "Estimate how your savings can grow over time.",
    href: "/savings-calculator",
  },
  {
    title: "Debt Payoff Calculator",
    description: "Plan your debt repayment more effectively.",
    href: "#",
  },
  {
    title: "ROI Calculator",
    description: "Measure return on investment with simple inputs.",
    href: "/roi-calculator",
  },
  {
    title: "Rent vs Buy Calculator",
    description: "Compare the cost of renting versus buying a home.",
    href: "#",
  },
];

export default function CalculatorsPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold tracking-tight">All Calculators</h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          Explore practical financial calculators designed to help you make
          smarter money decisions.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {calculators.map((calculator) => (
            <a
              key={calculator.title}
              href={calculator.href}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md"
            >
              <h2 className="text-xl font-semibold">{calculator.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {calculator.description}
              </p>
              <div className="mt-4 text-sm font-medium text-slate-500">
                Open →
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}