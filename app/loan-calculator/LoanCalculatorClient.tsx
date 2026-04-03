"use client";

import { useMemo, useState } from "react";
import Input from "../../components/Input";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(value);
}

function calculateLoan(principal: number, rate: number, years: number) {
  const monthlyRate = rate / 100 / 12;
  const months = years * 12;

  if (monthlyRate === 0) {
    const monthly = principal / months;
    return {
      monthly,
      total: principal,
      interest: 0,
    };
  }

  const monthly =
    (principal *
      (monthlyRate * Math.pow(1 + monthlyRate, months))) /
    (Math.pow(1 + monthlyRate, months) - 1);

  const total = monthly * months;
  const interest = total - principal;

  return { monthly, total, interest };
}

export default function LoanCalculatorClient() {
  const [amount, setAmount] = useState("100000");
  const [rate, setRate] = useState("5");
  const [years, setYears] = useState("15");

  const amountNumber = Number(amount);
  const rateNumber = Number(rate);
  const yearsNumber = Number(years);

  const errors = useMemo(() => {
    const validationErrors: string[] = [];

    if (!amount || isNaN(amountNumber) || amountNumber <= 0) {
      validationErrors.push("Loan amount must be greater than 0.");
    }

    if (!rate || isNaN(rateNumber) || rateNumber < 0) {
      validationErrors.push("Interest rate cannot be negative.");
    }

    if (!years || isNaN(yearsNumber) || yearsNumber <= 0) {
      validationErrors.push("Loan term must be greater than 0.");
    }

    return validationErrors;
  }, [amount, rate, years, amountNumber, rateNumber, yearsNumber]);

  const result = useMemo(() => {
    if (errors.length > 0) {
      return {
        monthly: 0,
        total: 0,
        interest: 0,
      };
    }

    return calculateLoan(amountNumber, rateNumber, yearsNumber);
  }, [amountNumber, rateNumber, yearsNumber, errors]);

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
            Financial Calculator
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Loan Calculator
          </h1>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Estimate your monthly payment, total repayment, and total interest
            for a fixed-rate loan in seconds.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:p-8">
            <h2 className="text-xl font-semibold">Loan Details</h2>
            <p className="mt-2 text-sm text-slate-500">
              Enter your loan amount, interest rate, and repayment term.
            </p>

            <div className="mt-8 space-y-6">
              <Input
                label="Loan Amount"
                value={amount}
                onChange={setAmount}
                placeholder="100000"
              />

              <Input
                label="Annual Interest Rate (%)"
                value={rate}
                onChange={setRate}
                placeholder="5"
              />

              <Input
                label="Loan Term (Years)"
                value={years}
                onChange={setYears}
                placeholder="15"
              />
            </div>

            {errors.length > 0 && (
              <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4">
                <p className="text-sm font-semibold text-red-700">
                  Please fix the following:
                </p>
                <ul className="mt-2 list-disc pl-5 text-sm text-red-700">
                  {errors.map((error) => (
                    <li key={error}>{error}</li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:p-8">
            <h2 className="text-xl font-semibold">Estimated Results</h2>
            <p className="mt-2 text-sm text-slate-500">
              These results update automatically as you change the values.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="text-sm text-slate-500">Monthly Payment</p>
                <p className="mt-2 text-3xl font-bold text-slate-900">
                  {formatCurrency(result.monthly)}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="text-sm text-slate-500">Total Payment</p>
                <p className="mt-2 text-3xl font-bold text-slate-900">
                  {formatCurrency(result.total)}
                </p>
              </div>

              <div className="rounded-2xl bg-emerald-50 p-5">
                <p className="text-sm text-emerald-700">Total Interest</p>
                <p className="mt-2 text-3xl font-bold text-emerald-800">
                  {formatCurrency(result.interest)}
                </p>
              </div>
            </div>
          </section>
        </div>

        <section className="mt-10 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:p-8">
          <h2 className="text-2xl font-semibold">How this calculator works</h2>
          <p className="mt-4 leading-7 text-slate-600">
            This calculator uses your loan amount, annual interest rate, and
            repayment term to estimate a fixed monthly payment. It also shows
            the total amount repaid over the full loan term and how much of that
            total is interest.
          </p>

          <p className="mt-4 leading-7 text-slate-600">
            It is useful for personal loans, car loans, and other simple
            fixed-rate borrowing scenarios.
          </p>
        </section>
      </div>
    </main>
  );
}