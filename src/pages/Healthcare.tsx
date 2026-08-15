import { Search, TrendingDown, Clock3, ShieldCheck, MessagesSquare, Users2 } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import AudienceGrid from '../components/AudienceGrid';
import ServiceCard from '../components/ServiceCard';
import JourneyFlow from '../components/JourneyFlow';
import CTASection from '../components/CTASection';
import { healthcareAudience, healthcareJourney } from '../data/industries';
import { healthcareServices } from '../data/services';
import { CALENDLY_URL } from '../lib/calendly';

const challenges = [
  {
    icon: Search,
    title: 'Patients search online first',
    description: 'Most patients research and compare providers online before ever making contact.',
  },
  {
    icon: TrendingDown,
    title: 'Competition is increasing',
    description: 'More healthcare businesses are investing in digital, raising the bar for visibility.',
  },
  {
    icon: Users2,
    title: 'A weak presence loses enquiries',
    description: 'An outdated website or thin social presence can quietly reduce patient enquiries.',
  },
  {
    icon: MessagesSquare,
    title: 'Attention isn’t appointments',
    description: 'Social media attention does not always translate into booked appointments.',
  },
  {
    icon: Clock3,
    title: 'Slow follow-up loses patients',
    description: 'Delayed responses to enquiries can result in lost opportunities to competitors.',
  },
  {
    icon: ShieldCheck,
    title: 'Trust comes before conversion',
    description: 'Healthcare decisions are high-trust — your digital presence needs to earn that trust first.',
  },
];

export default function Healthcare() {
  return (
    <>
      <SEO
        title="Healthcare Digital Marketing & Growth Solutions | ManaDigitalAI"
        description="Digital marketing and growth solutions for hospitals, clinics, dentists and healthcare professionals."
        path="/healthcare"
      />

      <PageHero
        eyebrow="Healthcare"
        title="Helping Healthcare Businesses Grow Through Digital."
        subtitle="Digital marketing and growth solutions designed for hospitals, clinics and healthcare professionals who want to attract more patients and build a stronger digital presence."
        ctaLabel="Book a Healthcare Growth Call"
        ctaTo={CALENDLY_URL}
      />

      <section className="bg-off-white py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading title="Built for Healthcare Businesses" />
          <AudienceGrid items={healthcareAudience} />
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            title="Patient Discovery Is Changing."
            subtitle="Understanding how patients search, compare and choose is the first step to growing a healthcare business online."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {challenges.map((c) => (
              <div key={c.title} className="rounded-2xl border border-navy-900/8 bg-off-white p-6">
                <c.icon className="text-orange-500" size={26} aria-hidden="true" />
                <h3 className="mt-4 font-bold text-navy-900">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-900/60">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-off-white py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading eyebrow="What we do" title="Healthcare Growth Services" />
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {healthcareServices.map((s) => (
              <ServiceCard key={s.title} icon={s.icon} title={s.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading title="The Healthcare Patient Journey" tone="light" />
          <JourneyFlow steps={healthcareJourney} tone="dark" />
        </div>
      </section>

      <CTASection
        title="Ready to Grow Your Healthcare Business?"
        subtitle="Let's understand your patients, your specialty and your goals — then build a digital growth plan around them."
        primaryLabel="Book a Healthcare Growth Call"
        primaryTo={CALENDLY_URL}
      />
    </>
  );
}
