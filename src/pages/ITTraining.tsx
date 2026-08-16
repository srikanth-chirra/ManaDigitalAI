import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import AudienceGrid from '../components/AudienceGrid';
import ServiceCard from '../components/ServiceCard';
import JourneyFlow from '../components/JourneyFlow';
import CTASection from '../components/CTASection';
import { itTrainingAudience, itTrainingJourney } from '../data/industries';
import { itTrainingServices } from '../data/services';
import { CALENDLY_URL } from '../lib/calendly';

export default function ITTraining() {
  return (
    <>
      <SEO
        title="IT Training Institute Digital Marketing | ManaDigitalAI"
        description="Digital marketing solutions designed to help IT training institutes reach the right students, generate qualified enquiries and increase admissions."
        path="/it-training"
      />

      <PageHero
        eyebrow="IT Training"
        title="Your next student is already searching. Will they find you?"
        subtitle="AI-powered digital marketing built for IT training institutes that want to attract the right students, fill their next batches and turn course interest into qualified admissions."
        ctaLabel="Book an IT Training Growth Call"
        ctaTo={CALENDLY_URL}
      />

      <section className="bg-off-white py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading title="Built for IT Training Businesses" />
          <AudienceGrid items={itTrainingAudience} />
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading eyebrow="What we do" title="IT Training Growth Services" />
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {itTrainingServices.map((s) => (
              <ServiceCard key={s.title} icon={s.icon} title={s.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading title="The Student Enquiry Journey" tone="light" />
          <JourneyFlow steps={itTrainingJourney} tone="dark" />
        </div>
      </section>

      <CTASection
        title="Grow Your Student Enquiries"
        subtitle="Let's understand your courses, your ideal students and your admissions process — then build the right enquiry generation system around them."
        primaryLabel="Book an IT Training Growth Call"
        primaryTo={CALENDLY_URL}
      />
    </>
  );
}
