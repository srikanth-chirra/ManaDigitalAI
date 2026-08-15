import { Target, Compass, Cpu, TrendingUp } from 'lucide-react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import IndustryCard from '../components/IndustryCard';
import ProcessSection from '../components/ProcessSection';
import JourneyFlow from '../components/JourneyFlow';
import FeatureCard from '../components/FeatureCard';
import CTASection from '../components/CTASection';
import { homepageIndustries, growthJourney } from '../data/industries';
import { growthServiceGroups } from '../data/services';
import { CALENDLY_URL } from '../lib/calendly';

const whyUs = [
  {
    icon: Target,
    title: 'Business Focused',
    description: 'We focus on business outcomes, not just likes, followers and impressions.',
  },
  {
    icon: Compass,
    title: 'Industry Aware',
    description: 'We adapt our approach to the customer journey and buying behaviour of your industry.',
  },
  {
    icon: Cpu,
    title: 'Technology + Marketing',
    description: 'We combine marketing, technology, automation and AI to create smarter growth systems.',
  },
  {
    icon: TrendingUp,
    title: 'Long-term Growth',
    description: 'We aim to build digital systems that become stronger through continuous testing and optimization.',
  },
];

export default function Home() {
  return (
    <>
      <SEO
        title="ManaDigitalAI | Digital Marketing & Growth Solutions"
        description="ManaDigitalAI helps businesses grow through digital marketing, lead generation, websites, automation, AI and technology-driven growth solutions."
        path="/"
      />

      <Hero />

      <section id="solutions" className="scroll-mt-20 bg-off-white py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            title="What Can We Help You Grow?"
            subtitle="Choose the area that best matches your business and explore solutions designed around your customers, challenges and growth goals."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {homepageIndustries.map((industry) => (
              <IndustryCard key={industry.id} data={industry} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            title="Your Business Is Unique. Your Digital Strategy Should Be Too."
            subtitle="We don't believe in one-size-fits-all marketing. We understand your business, audience and goals first, then build the right digital strategy around them."
          />
          <ProcessSection />
        </div>
      </section>

      <section className="bg-off-white py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading title="How We Help Businesses Grow" />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {growthServiceGroups.map((group) => {
              const Icon = group.icon;
              return (
                <div
                  key={group.id}
                  className="rounded-2xl border border-navy-900/8 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-navy-900/5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-950 text-cyan-400">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-sm font-bold uppercase tracking-wide text-navy-900">
                    {group.title}
                  </h3>
                  <ul className="mt-3 space-y-1.5">
                    {group.items.map((item) => (
                      <li key={item} className="text-sm text-navy-900/60">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <p className="mx-auto mt-12 max-w-2xl text-center text-base font-medium text-navy-900/70">
            The goal isn't simply more traffic. It's more meaningful business opportunities.
          </p>
        </div>
      </section>

      <section className="bg-navy-950 py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading title="From Digital Presence to Business Growth." tone="light" />
          <JourneyFlow steps={growthJourney} tone="dark" />
        </div>
      </section>

      <section className="border-t border-white/5 bg-navy-950 py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading title="Why ManaDigitalAI?" tone="light" />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item) => (
              <FeatureCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Let's Talk About Your Growth Goals."
        subtitle="Whether you want more leads, better visibility, a stronger website, automated follow-ups or a complete digital marketing strategy, let's understand your business and explore what can work for you."
        primaryLabel="Book a Call"
        primaryTo={CALENDLY_URL}
        secondaryLabel="Tell Us About Your Business"
      />
    </>
  );
}
