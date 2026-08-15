import Button from './Button';

interface CTASectionProps {
  title: string;
  subtitle?: string;
  primaryLabel: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}

export default function CTASection({
  title,
  subtitle,
  primaryLabel,
  primaryTo = '/contact',
  secondaryLabel,
  secondaryTo = '/contact',
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-navy-950 py-20 sm:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-page relative text-center">
        <h2 className="mx-auto max-w-3xl text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white animate-fade-up">
          {title}
        </h2>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-white/70">
            {subtitle}
          </p>
        )}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button to={primaryTo} size="lg">
            {primaryLabel}
          </Button>
          {secondaryLabel && (
            <Button to={secondaryTo} size="lg" variant="outline-light">
              {secondaryLabel}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
