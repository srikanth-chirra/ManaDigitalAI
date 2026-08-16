import type { ComponentType } from 'react';
import { Mail, Phone, Globe } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import WhatsAppIcon from '../components/WhatsAppIcon';
import FacebookIcon from '../components/FacebookIcon';
import InstagramIcon from '../components/InstagramIcon';
import { WHATSAPP_URL } from '../lib/whatsapp';

const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61592578925736';
const INSTAGRAM_URL = 'https://www.instagram.com/mana.digitalai/';

interface ContactItem {
  icon: ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: string;
  href: string;
  iconClass: string;
  external?: boolean;
}

const reachUsDetails: ContactItem[] = [
  {
    icon: Mail,
    label: 'Email',
    value: 'manadigitalai@gmail.com',
    href: 'mailto:manadigitalai@gmail.com',
    iconClass: 'bg-navy-950 text-cyan-400',
  },
  {
    icon: Phone,
    label: 'Mobile',
    value: '+91-9177484155',
    href: 'tel:+919177484155',
    iconClass: 'bg-navy-950 text-cyan-400',
  },
  {
    icon: Globe,
    label: 'Website',
    value: 'www.manadigitalai.com',
    href: 'https://www.manadigitalai.com/',
    iconClass: 'bg-navy-950 text-cyan-400',
    external: true,
  },
];

const followUsDetails: ContactItem[] = [
  {
    icon: WhatsAppIcon,
    label: 'WhatsApp',
    value: 'Chat with us',
    href: WHATSAPP_URL,
    iconClass: 'bg-[#25D366] text-white',
    external: true,
  },
  {
    icon: FacebookIcon,
    label: 'Facebook',
    value: '@manadigitalai',
    href: FACEBOOK_URL,
    iconClass: 'bg-[#1877F2] text-white',
    external: true,
  },
  {
    icon: InstagramIcon,
    label: 'Instagram',
    value: '@mana.digitalai',
    href: INSTAGRAM_URL,
    iconClass: 'bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] text-white',
    external: true,
  },
];

function ContactRow({ icon: Icon, label, value, href, iconClass, external }: ContactItem) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="flex items-center gap-5 rounded-2xl transition-opacity hover:opacity-80"
    >
      <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${iconClass}`}>
        <Icon size={26} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-semibold uppercase tracking-wide text-navy-900/50">
          {label}
        </span>
        <span className="block break-words text-lg sm:text-xl font-bold text-navy-900">
          {value}
        </span>
      </span>
    </a>
  );
}

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact ManaDigitalAI | Book a Growth Call"
        description="Tell us about your business, your current challenges and where you want to go. We'll explore how digital marketing, technology and AI can help."
        path="/contact"
      />

      <PageHero
        title="Let's Talk About Your Business."
        subtitle="Tell us about your business, your current challenges and where you want to go. We'll explore how digital marketing, technology and AI can help."
      />

      <section className="bg-off-white py-20 sm:py-28">
        <div className="container-page">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 rounded-3xl border border-navy-900/8 bg-white p-8 shadow-sm sm:p-12 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-navy-900">Reach Us Directly</h2>
              <p className="mt-2 text-base text-navy-900/60">
                Email, call or visit our website — we usually respond quickly.
              </p>
              <div className="mt-8 space-y-6">
                {reachUsDetails.map((item) => (
                  <ContactRow key={item.label} {...item} />
                ))}
              </div>
            </div>

            <div className="border-t border-navy-900/8 pt-8 md:border-t-0 md:border-l md:pl-8 md:pt-0">
              <h2 className="text-2xl font-bold text-navy-900">Follow Us</h2>
              <p className="mt-2 text-base text-navy-900/60">
                Follow along or message us directly on your platform of choice.
              </p>
              <div className="mt-8 space-y-6">
                {followUsDetails.map((item) => (
                  <ContactRow key={item.label} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
