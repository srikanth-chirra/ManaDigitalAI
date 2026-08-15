import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description?: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="group flex items-start gap-4 rounded-2xl border border-navy-900/8 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/20 hover:shadow-lg hover:shadow-navy-900/5">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-950 text-cyan-400 transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
        <Icon size={20} aria-hidden="true" />
      </div>
      <div>
        <h3 className="font-semibold text-navy-900">{title}</h3>
        {description && <p className="mt-1 text-sm leading-relaxed text-navy-900/60">{description}</p>}
      </div>
    </div>
  );
}
