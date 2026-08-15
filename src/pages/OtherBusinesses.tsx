import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';
import { otherBusinessServices } from '../data/services';

export default function OtherBusinesses() {
  return (
    <>
      <SEO
        title="Digital Marketing & Growth Solutions for Businesses | ManaDigitalAI"
        description="ManaDigitalAI works with businesses across industries to improve digital presence, generate leads and grow through marketing, technology and AI."
        path="/other-businesses"
      />

      <PageHero
        eyebrow="Other Businesses"
        title="Don't See Your Industry? Let's Talk."
        subtitle="ManaDigitalAI works with businesses across different industries. If your goal is to improve your digital presence, generate more leads or grow your business, we'd love to understand what you're building."
        ctaLabel="Talk to Us"
      />

      <section className="bg-off-white py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading eyebrow="What we do" title="Growth Services For Any Business" />
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otherBusinessServices.map((s) => (
              <ServiceCard key={s.title} icon={s.icon} title={s.title} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Talk About Your Business"
        subtitle="Tell us what you do, who your customers are and where you want to go — we'll explore what digital growth can look like for you."
        primaryLabel="Talk About Your Business"
      />
    </>
  );
}
