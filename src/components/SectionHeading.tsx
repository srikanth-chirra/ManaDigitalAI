interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  tone?: 'dark' | 'light';
  as?: 'h1' | 'h2';
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  tone = 'dark',
  as = 'h2',
}: SectionHeadingProps) {
  const Heading = as;
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const titleColor = tone === 'dark' ? 'text-navy-900' : 'text-white';
  const subtitleColor = tone === 'dark' ? 'text-navy-900/70' : 'text-white/70';

  return (
    <div className={`max-w-3xl ${alignClass} animate-fade-up`}>
      {eyebrow && (
        <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-orange-500">
          {eyebrow}
        </span>
      )}
      <Heading className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight ${titleColor}`}>
        {title}
      </Heading>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${subtitleColor}`}>{subtitle}</p>
      )}
    </div>
  );
}
