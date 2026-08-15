import {
  Users,
  Target,
  Globe,
  Megaphone,
  Share2,
  MessageCircle,
  Bot,
  Workflow,
  BarChart3,
  type LucideIcon,
} from 'lucide-react';

interface Node {
  label: string;
  icon: LucideIcon;
  x: number;
  y: number;
}

const RADIUS = 39;
const rawNodes: { label: string; icon: LucideIcon }[] = [
  { label: 'Customers', icon: Users },
  { label: 'Leads', icon: Target },
  { label: 'Website', icon: Globe },
  { label: 'Advertising', icon: Megaphone },
  { label: 'Social Media', icon: Share2 },
  { label: 'WhatsApp', icon: MessageCircle },
  { label: 'AI', icon: Bot },
  { label: 'Automation', icon: Workflow },
  { label: 'Analytics', icon: BarChart3 },
];

const nodes: Node[] = rawNodes.map((n, i) => {
  const angleDeg = -90 + i * (360 / rawNodes.length);
  const rad = (angleDeg * Math.PI) / 180;
  return {
    ...n,
    x: 50 + RADIUS * Math.cos(rad),
    y: 50 + RADIUS * Math.sin(rad) * 0.92,
  };
});

export default function GrowthVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-xl animate-fade-in [animation-delay:200ms]">
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid meet"
      >
        {nodes.map((node) => (
          <line
            key={node.label}
            x1={50}
            y1={50}
            x2={node.x}
            y2={node.y}
            stroke="url(#lineGradient)"
            strokeWidth={0.35}
            strokeDasharray="1.4 1.6"
            className="motion-safe:animate-dash"
          />
        ))}
        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#FF7A00" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>

      <div
        className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
        style={{ left: '50%', top: '50%' }}
      >
        <div className="rounded-2xl bg-navy-950/60 p-3 shadow-2xl shadow-black/40 ring-1 ring-white/10 backdrop-blur-sm motion-safe:animate-pulse-slow">
          <img
            src="/images/manadigitalai-logo.png"
            alt="ManaDigitalAI — Empowered by AI"
            className="h-auto w-32 object-contain sm:w-40"
          />
        </div>
      </div>

      {nodes.map((node, i) => {
        const Icon = node.icon;
        return (
          <div
            key={node.label}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 animate-fade-in"
            style={{ left: `${node.x}%`, top: `${node.y}%`, animationDelay: `${300 + i * 80}ms` }}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.07] text-cyan-300 shadow-lg backdrop-blur-sm sm:h-12 sm:w-12">
              <Icon size={18} aria-hidden="true" />
            </div>
            <span className="hidden whitespace-nowrap text-[11px] font-medium text-white/70 sm:block">
              {node.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
