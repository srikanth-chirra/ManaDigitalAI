const steps = [
  { number: '01', title: 'Understand', description: 'Understand your business, customers, market and goals.' },
  { number: '02', title: 'Build', description: 'Build the right digital presence, campaigns and customer acquisition systems.' },
  { number: '03', title: 'Grow', description: 'Measure results, optimize performance and continuously improve.' },
];

export default function ProcessSection() {
  return (
    <div className="relative mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
      <div
        className="pointer-events-none absolute top-10 left-0 right-0 hidden h-px bg-gradient-to-r from-transparent via-navy-900/15 to-transparent sm:block"
        aria-hidden="true"
      />
      {steps.map((step) => (
        <div key={step.number} className="relative flex flex-col items-center text-center sm:items-start sm:text-left">
          <span className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-navy-950 text-2xl font-extrabold text-cyan-400 shadow-lg shadow-navy-900/20">
            {step.number}
          </span>
          <h3 className="mt-6 text-xl font-bold text-navy-900">{step.title}</h3>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-navy-900/65">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
