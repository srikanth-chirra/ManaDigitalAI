import type { AudienceItem } from '../data/industries';

export default function AudienceGrid({ items }: { items: AudienceItem[] }) {
  return (
    <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {items.map(({ icon: Icon, label }) => (
        <div
          key={label}
          className="flex flex-col items-center gap-3 rounded-2xl border border-navy-900/8 bg-white px-4 py-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-navy-900/5"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-950 text-cyan-400">
            <Icon size={22} aria-hidden="true" />
          </div>
          <span className="text-sm font-semibold leading-snug text-navy-900">{label}</span>
        </div>
      ))}
    </div>
  );
}
