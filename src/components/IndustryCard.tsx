import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { IndustryCardData } from '../data/industries';

export default function IndustryCard({ data }: { data: IndustryCardData }) {
  const { name, description, bullets, cta, route, icon: Icon } = data;

  return (
    <Link
      to={route}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-navy-900/8 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-2xl hover:shadow-navy-900/10"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(120% 100% at 0% 0%, rgba(255,122,0,0.06), transparent 60%), radial-gradient(120% 100% at 100% 100%, rgba(0,217,255,0.06), transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 text-cyan-400 shadow-inner">
        <Icon size={28} strokeWidth={2} aria-hidden="true" />
      </div>

      <h3 className="relative mt-6 text-xl font-bold text-navy-900">{name}</h3>
      <p className="relative mt-3 text-sm leading-relaxed text-navy-900/65">{description}</p>

      {bullets && (
        <ul className="relative mt-5 grid grid-cols-2 gap-x-3 gap-y-1.5">
          {bullets.slice(0, 8).map((b) => (
            <li key={b} className="truncate text-xs text-navy-900/55">
              &bull;&nbsp;{b}
            </li>
          ))}
        </ul>
      )}

      <span className="relative mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-500">
        {cta}
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
