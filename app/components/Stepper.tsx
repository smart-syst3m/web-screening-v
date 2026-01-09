"use client";

import clsx from "clsx";

const steps = ["Biodata", "Kuesioner", "Hasil"];

type StepperProps = {
  currentStep: number;
};

export default function Stepper({ currentStep }: StepperProps) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold text-slate-500">Progress Screening</p>
      <div className="flex flex-wrap items-center gap-4">
        {steps.map((label, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === currentStep;
          const isCompleted = stepNumber < currentStep;
          return (
            <div key={label} className="flex items-center gap-3">
              <div
                className={clsx(
                  "flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold",
                  isActive && "bg-emerald-600 text-white",
                  isCompleted && "bg-emerald-100 text-emerald-700",
                  !isActive && !isCompleted && "bg-slate-100 text-slate-500"
                )}
              >
                {stepNumber}
              </div>
              <span className={clsx("text-sm font-semibold", isActive ? "text-slate-900" : "text-slate-500")}>
                {label}
              </span>
              {index < steps.length - 1 && (
                <span className="hidden text-slate-300 md:inline">—</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
