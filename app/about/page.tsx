export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <p className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
          About FinanceTools
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Helping people make smarter financial decisions
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          FinanceTools is built to make everyday financial calculations simple,
          fast, and accessible. The goal is to provide practical tools that help
          users estimate payments, compare options, and plan with more
          confidence.
        </p>

        <section className="mt-12 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold">What this website offers</h2>
          <p className="mt-4 leading-7 text-slate-600">
            This website focuses on easy-to-use financial calculators for common
            personal finance questions such as loans, savings growth, debt
            planning, and other money decisions. Each tool is designed to be
            simple, clear, and useful without unnecessary complexity.
          </p>
        </section>

        <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold">Why it was created</h2>
          <p className="mt-4 leading-7 text-slate-600">
            Many financial websites are either too complicated, too cluttered,
            or focused more on marketing than usability. FinanceTools aims to
            provide a cleaner experience where users can quickly get helpful
            answers from reliable calculator interfaces.
          </p>
        </section>

        <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold">Our approach</h2>
          <p className="mt-4 leading-7 text-slate-600">
            We believe financial tools should be straightforward, fast, and easy
            to understand. That is why the website is built around clear input
            fields, readable results, and practical calculator pages that users
            can access without creating an account.
          </p>
        </section>

        <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold">Important note</h2>
          <p className="mt-4 leading-7 text-slate-600">
            The calculators and information on this site are provided for
            educational and informational purposes only. They are not financial,
            legal, or tax advice. Users should confirm major financial decisions
            with qualified professionals when needed.
          </p>
        </section>
      </div>
    </main>
  );
}