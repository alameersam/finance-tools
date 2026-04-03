"use client";

import { useMemo, useState } from "react";
import Input from "../../components/Input";

function calculateROI(investment: number, finalValue: number) {
  const profit = finalValue - investment;
  const roi = (profit / investment) * 100;

  return {
    profit,
    roi,
  };
}

export default function ROICalculatorClient() {
  const [investment, setInvestment] = useState("10000");
  const [finalValue, setFinalValue] = useState("12000");

  const investmentNumber = Number(investment);
  const finalValueNumber = Number(finalValue);

  const errors = useMemo(() => {
    const validationErrors: string[] = [];

    if (!investment || isNaN(investmentNumber) || investmentNumber <= 0) {
      validationErrors.push("Investment must be greater than 0.");
    }

    if (!finalValue || isNaN(finalValueNumber) || finalValueNumber < 0) {
      validationErrors.push("Final value cannot be negative.");
    }

    return validationErrors;
  }, [investment, finalValue, investmentNumber, finalValueNumber]);

  const result = useMemo(() => {
    if (errors.length > 0) {
      return {
        profit: 0,
        roi: 0,
      };
    }

    return calculateROI(investmentNumber, finalValueNumber);
  }, [investmentNumber, finalValueNumber, errors]);

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
            Financial Calculator
          </p>

          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            ROI Calculator
          </h1>

          <p className="mt-4 text-lg text-slate-600">
            Calculate return on investment based on initial investment and final value.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* INPUTS */}
          <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-semibold">Investment Details</h2>

            <div className="mt-8 space-y-6">
              <Input
                label="Initial Investment"
                value={investment}
                onChange={setInvestment}
                placeholder="10000"
              />

              <Input
                label="Final Value"
                value={finalValue}
                onChange={setFinalValue}
                placeholder="12000"
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

          {/* RESULTS */}
          <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-semibold">Results</h2>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="text-sm text-slate-500">Profit</p>
                <p className="mt-2 text-3xl font-bold">
                  ${result.profit.toFixed(2)}
                </p>
              </div>

              <div className="rounded-2xl bg-emerald-50 p-5">
                <p className="text-sm text-emerald-700">ROI (%)</p>
                <p className="mt-2 text-3xl font-bold text-emerald-800">
                  {result.roi.toFixed(2)}%
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}