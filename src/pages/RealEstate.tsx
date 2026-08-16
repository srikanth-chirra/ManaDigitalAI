import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import JourneyFlow from '../components/JourneyFlow';
import CTASection from '../components/CTASection';
import { realEstateJourney } from '../data/industries';
import { realEstateServices } from '../data/services';
import { CALENDLY_URL } from '../lib/calendly';

export default function RealEstate() {
  return (
    <>
      <SEO
        title="Real Estate Digital Marketing & Lead Generation | ManaDigitalAI"
        description="Digital marketing and lead generation solutions designed for builders, developers, real estate companies and property professionals."
        path="/real-estate"
      />

      <PageHero
        eyebrow="Real Estate"
        title="Don't just list properties. Create demand."
        subtitle="AI-powered digital marketing built for builders, developers and real estate businesses that want to stand out, reach serious buyers and turn property visibility into qualified enquiries."
        ctaLabel="Book a Real Estate Growth Call"
        ctaTo={CALENDLY_URL}
      />

      <section className="bg-off-white py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading eyebrow="What we do" title="Real Estate Growth Services" />
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {realEstateServices.map((s) => (
              <ServiceCard key={s.title} icon={s.icon} title={s.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading title="The Property Buyer Journey" tone="light" />
          <JourneyFlow steps={realEstateJourney} tone="dark" />
        </div>
      </section>

      <CTASection
        title="Grow Your Property Leads"
        subtitle="Let's understand your projects, your buyers and your sales process — then build the right lead generation system around them."
        primaryLabel="Book a Real Estate Growth Call"
        primaryTo={CALENDLY_URL}
      />
    </>
  );
}
