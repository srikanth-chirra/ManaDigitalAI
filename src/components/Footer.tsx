import { Link } from 'react-router-dom';
import Logo from './Logo';
import Button from './Button';
import { CALENDLY_URL } from '../lib/calendly';

const columns = [
  {
    title: 'Company',
    links: [
      { label: 'Home', to: '/' },
      { label: 'About', to: '/about' },
      { label: 'Services', to: '/services' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Healthcare', to: '/healthcare' },
      { label: 'Real Estate', to: '/real-estate' },
      { label: 'IT Training', to: '/it-training' },
      { label: 'Other Businesses', to: '/other-businesses' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Digital Marketing', to: '/services' },
      { label: 'Lead Generation', to: '/services' },
      { label: 'Websites', to: '/services' },
      { label: 'Automation', to: '/services' },
      { label: 'AI Solutions', to: '/services' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-page py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr]">
          <div>
            <Logo className="h-11" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              Digital growth solutions that help businesses attract, engage and grow.
            </p>
            <Button to={CALENDLY_URL} size="md" className="mt-6">
              Book a Call
            </Button>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-white/75 transition-colors hover:text-cyan-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 border-t border-white/10 pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-sm font-medium text-white/70">
            We help businesses grow in the digital world.
          </p>
          <p className="text-xs text-white/40">
            &copy; 2026 ManaDigitalAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
