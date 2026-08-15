import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  linkClassName?: string;
}

export default function Logo({ className = 'h-10 w-auto', linkClassName = '' }: LogoProps) {
  return (
    <Link
      to="/"
      aria-label="ManaDigitalAI — Empowered by AI — Home"
      className={`inline-flex items-center ${linkClassName}`}
    >
      <img
        src="/images/manadigitalai-logo.png"
        alt="ManaDigitalAI — Empowered by AI"
        className={`${className} object-contain`}
      />
    </Link>
  );
}
