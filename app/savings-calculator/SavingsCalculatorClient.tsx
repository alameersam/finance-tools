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

function calculateSavings(principal: number, rate: number, years: number) {
  const r = rate / 100;

  const futureValue = principal * Math.pow(1 + r, years);
  const interest = futureValue - principal;

  return {
    futureValue,
    interest,
  };
}

export default function SavingsCalculatorClient() {
  const [amount, setAmount] = useState("10000");
  const [rate, setRate] = useState("5");
  const [years, setYears] = useState("10");

  const amountNumber = Number(amount);
  const rateNumber = Number(rate);
  const yearsNumber = Number(years);

  const errors = useMemo(() => {
    const validationErrors: string[] = [];

    if (!amount || isNaN(amountNumber) || amountNumber <= 0) {
      validationErrors.push("Initial amount must be greater than 0.");
    }

    if (!rate || isNaN(rateNumber) || rateNumber < 0) {
      validationErrors.push("Interest rate cannot be negative.");
    }

    if (!years || isNaN(yearsNumber) || yearsNumber <= 0) {
      validationErrors.push("Years must be greater than 0.");
    }

    return validationErrors;
  }, [amount, rate, years, amountNumber, rateNumber, yearsNumber]);

  const result = useMemo(() => {
    if (errors.length > 0) {
      return {
        futureValue: 0,
        interest: 0,
      };
    }

    return calculateSavings(amountNumber, rateNumber, yearsNumber);
  }, [amountNumber, rateNumber, yearsNumber, errors]);

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
            Financial Calculator
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Savings Calculator
          </h1>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Estimate how your savings grow over time with compound interest.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:p-8">
            <h2 className="text-xl font-semibold">Savings Details</h2>

            <div className="mt-8 space-y-6">
              <Input
                label="Initial Amount"
                value={amount}
                onChange={setAmount}
                placeholder="10000"
              />

              <Input
                label="Annual Interest Rate (%)"
                value={rate}
                onChange={setRate}
                placeholder="5"
              />

              <Input
                label="Years"
                value={years}
                onChange={setYears}
                placeholder="10"
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

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="text-sm text-slate-500">Future Value</p>
                <p className="mt-2 text-3xl font-bold text-slate-900">
                  {formatCurrency(result.futureValue)}
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
      </div>
    </main>
  );
}