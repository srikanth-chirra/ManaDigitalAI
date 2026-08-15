import { ArrowRight, ArrowDown } from 'lucide-react';

interface JourneyFlowProps {
  steps: string[];
  tone?: 'dark' | 'light';
}

export default function JourneyFlow({ steps, tone = 'light' }: JourneyFlowProps) {
  const isDark = tone === 'dark';
  const nodeBg = isDark ? 'bg-white/[0.06] border-white/15' : 'bg-white border-navy-900/10';
  const textColor = isDark ? 'text-white' : 'text-navy-900';
  const arrowColor = isDark ? 'text-cyan-400/70' : 'text-orange-500/70';

  return (
    <div className="mt-14">
      {/* Desktop: horizontal */}
      <div className="hidden md:flex md:items-center md:justify-center md:flex-wrap md:gap-x-2 md:gap-y-6">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center">
            <div
              className={`flex min-h-[4.5rem] min-w-[8.5rem] items-center justify-center rounded-2xl border px-5 py-3 text-center text-sm font-semibold shadow-sm ${nodeBg} ${textColor}`}
            >
              {step}
            </div>
            {i < steps.length - 1 && (
              <ArrowRight size={20} className={`mx-2 shrink-0 ${arrowColor}`} aria-hidden="true" />
            )}
          </div>
        ))}
      </div>

      {/* Mobile: vertical */}
      <div className="flex flex-col items-center gap-3 md:hidden">
        {steps.map((step, i) => (
          <div key={step} className="flex flex-col items-center">
            <div
              className={`w-full max-w-xs rounded-2xl border px-5 py-3.5 text-center text-sm font-semibold shadow-sm ${nodeBg} ${textColor}`}
            >
              {step}
            </div>
            {i < steps.length - 1 && (
              <ArrowDown size={18} className={`my-1.5 ${arrowColor}`} aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
