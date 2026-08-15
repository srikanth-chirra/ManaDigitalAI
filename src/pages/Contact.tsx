import { Mail, Phone } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { WHATSAPP_URL } from '../lib/whatsapp';

const contactDetails = [
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
];

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
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-[1fr_1.6fr] lg:items-start">
            <div className="rounded-3xl border border-navy-900/8 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-lg font-bold text-navy-900">Reach Us Directly</h2>
              <div className="mt-6 space-y-5">
                {contactDetails.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 rounded-xl transition-opacity hover:opacity-80"
                  >
                    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${item.iconClass}`}>
                      <item.icon size={20} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wide text-navy-900/50">
                        {item.label}
                      </span>
                      <span className="block text-sm font-semibold text-navy-900">{item.value}</span>
                    </span>
                  </a>
                ))}

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl transition-opacity hover:opacity-80"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white">
                    <WhatsAppIcon size={20} />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-navy-900/50">
                      WhatsApp
                    </span>
                    <span className="block text-sm font-semibold text-navy-900">Chat with us</span>
                  </span>
                </a>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
