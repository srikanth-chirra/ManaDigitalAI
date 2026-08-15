import type { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.07]">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <Icon size={22} aria-hidden="true" />
      </div>
      <h3 className="mt-6 text-lg font-bold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-white/65">{description}</p>
    </div>
  );
}
