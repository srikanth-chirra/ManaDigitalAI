import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import FAQ from '../components/FAQ';
import CTASection from '../components/CTASection';
import { serviceCategories } from '../data/services';
import { CALENDLY_URL } from '../lib/calendly';

const faqItems = [
  {
    question: 'How do you decide which services we need?',
    answer:
      'We start by understanding your business, audience and goals, then recommend a mix of services from the areas above that fit your specific situation — not a fixed package.',
  },
  {
    question: 'Do you only work with Healthcare, Real Estate and IT Training businesses?',
    answer:
      'No. These are our primary specialization areas, but we work with businesses across other industries as well.',
  },
  {
    question: 'Is there a minimum budget to get started?',
    answer:
      'It depends on your goals and the services involved. We discuss scope and budget openly during your growth call.',
  },
  {
    question: 'How is AI actually used in your services?',
    answer:
      'AI enhances marketing, automation and lead management — it works alongside strategy and human oversight, not as a replacement for either.',
  },
];

export default function Services() {
  return (
    <>
      <SEO
        title="Digital Marketing Services | ManaDigitalAI"
        description="Digital solutions built around business growth — digital presence, customer acquisition, engagement, automation, AI and optimization."
        path="/services"
      />

      <PageHero
        eyebrow="Services"
        title="Digital Solutions Built Around Business Growth."
        subtitle="Every business grows differently. We combine the right mix of marketing, technology and AI to fit your goals — not a one-size-fits-all package."
      />

      <section className="bg-off-white py-20 sm:py-28">
        <div className="container-page space-y-16">
          {serviceCategories.map((category, i) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16"
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-950 text-cyan-400">
                    <Icon size={26} aria-hidden="true" />
                  </div>
                  <h2 className="mt-5 text-2xl sm:text-3xl font-extrabold tracking-tight text-navy-900">
                    {category.title}
                  </h2>
                </div>
                <div className={`grid grid-cols-1 gap-3 sm:grid-cols-2 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  {category.items.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-navy-900/8 bg-white px-5 py-4 text-sm font-semibold text-navy-900 shadow-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading eyebrow="FAQ" title="Common Questions" />
          <FAQ items={faqItems} />
        </div>
      </section>

      <CTASection
        title="Not Sure Which Services You Need?"
        subtitle="Tell us about your business and goals — we'll help you figure out where to start."
        primaryLabel="Book a Call"
        primaryTo={CALENDLY_URL}
      />
    </>
  );
}
