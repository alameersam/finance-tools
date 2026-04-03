import type { Metadata } from "next";
import SavingsCalculatorClient from "./SavingsCalculatorClient";

export const metadata: Metadata = {
  title: "Savings Calculator - Compound Interest Growth",
  description:
    "Estimate future savings growth and earned interest with this free compound interest savings calculator.",
};

export default function SavingsCalculatorPage() {
  return <SavingsCalculatorClient />;
}