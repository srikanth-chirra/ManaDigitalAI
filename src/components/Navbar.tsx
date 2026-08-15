import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import Button from './Button';
import { CALENDLY_URL } from '../lib/calendly';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Healthcare', to: '/healthcare' },
  { label: 'Real Estate', to: '/real-estate' },
  { label: 'IT Training', to: '/it-training' },
  { label: 'Other Businesses', to: '/other-businesses' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-navy-950/95 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-navy-950/40 backdrop-blur-sm'
      }`}
    >
      <nav className="container-page flex h-20 sm:h-24 items-center justify-between" aria-label="Primary">
        <Logo className="h-17 sm:h-20" />

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive ? 'text-cyan-400' : 'text-white/85 hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button to={CALENDLY_URL} size="md">
            Book a Call
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-white/10"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="lg:hidden border-t border-white/10 bg-navy-950">
          <div className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-3 text-base font-medium ${
                    isActive ? 'text-cyan-400 bg-white/5' : 'text-white/85 hover:bg-white/5'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Button to={CALENDLY_URL} size="md" className="mt-3 w-full">
              Book a Call
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
