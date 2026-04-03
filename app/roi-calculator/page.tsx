import type { Metadata } from "next";
import ROICalculatorClient from "./ROICalculatorClient";

export const metadata: Metadata = {
  title: "ROI Calculator - Return on Investment",
  description:
    "Calculate return on investment (ROI), profit, and percentage return easily with this free ROI calculator.",
};

export default function ROICalculatorPage() {
  return <ROICalculatorClient />;
}