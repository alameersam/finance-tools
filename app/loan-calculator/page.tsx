import type { Metadata } from "next";
import LoanCalculatorClient from "./LoanCalculatorClient";

export const metadata: Metadata = {
  title: "Loan Calculator - Monthly Payment & Interest",
  description:
    "Calculate monthly loan payments, total repayment, and total interest with this free loan calculator.",
};

export default function LoanCalculatorPage() {
  return <LoanCalculatorClient />;
}