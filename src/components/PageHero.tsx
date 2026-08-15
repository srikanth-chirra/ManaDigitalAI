import type { ReactNode } from 'react';
import Button from './Button';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  ctaLabel?: string;
  ctaTo?: string;
  children?: ReactNode;
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  ctaLabel,
  ctaTo = '/contact',
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy-950 pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div
        className="pointer-events-none absolute -top-40 right-0 h-[32rem] w-[32rem] rounded-full bg-blue-500/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-20 h-[26rem] w-[26rem] rounded-full bg-orange-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <div className="max-w-3xl animate-fade-up">
          {eyebrow && (
            <span className="mb-4 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-300">
              {eyebrow}
            </span>
          )}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight text-white">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">{subtitle}</p>

          {ctaLabel && (
            <div className="mt-9">
              <Button to={ctaTo} size="lg">
                {ctaLabel}
              </Button>
            </div>
          )}
        </div>

        {children}
      </div>
    </section>
  );
}
