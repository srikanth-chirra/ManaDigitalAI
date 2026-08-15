import { Megaphone, Cpu, Workflow, Bot, BarChart3, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import { CALENDLY_URL } from '../lib/calendly';

const pillars = [
  { icon: Megaphone, title: 'Marketing', description: 'Strategy built around how your customers actually search, compare and decide.' },
  { icon: Cpu, title: 'Technology', description: 'Websites, landing pages and systems built to convert, not just to look good.' },
  { icon: Workflow, title: 'Automation', description: 'Follow-up and lead management that works even when your team is busy.' },
  { icon: Bot, title: 'AI', description: 'AI used as a technology advantage — enhancing marketing and automation, not replacing strategy.' },
  { icon: BarChart3, title: 'Data', description: 'Decisions guided by what the numbers actually show, not assumptions.' },
  { icon: Sparkles, title: 'Creative Strategy', description: 'Messaging and creative shaped around your audience and industry.' },
];

export default function About() {
  return (
    <>
      <SEO
        title="About ManaDigitalAI | Digital Marketing & Growth Agency"
        description="ManaDigitalAI combines marketing, technology, automation, AI, data and creative strategy to help businesses grow in the digital world."
        path="/about"
      />

      <PageHero
        title="We Help Businesses Make Better Use of Digital."
        subtitle="Digital marketing should not be about simply being present everywhere. It should help a business attract the right audience, create trust, generate opportunities and grow."
      />

      <section className="bg-white py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Experience"
            title="15 Years of Enterprise IT Experience."
            subtitle="ManaDigitalAI is built on hands-on experience inside large-scale technology and business environments — not just marketing theory."
          />
          <div className="mt-14 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
            <p className="text-base leading-relaxed text-navy-900/70">
              Before ManaDigitalAI, our founder spent 15 years working across enterprise IT roles
              at some of the world's largest technology and services companies. That experience —
              working inside how large organizations plan, decide and operate — now shapes how we
              approach digital growth for our clients: practical, structured and focused on real
              business outcomes.
            </p>
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              <div className="flex h-24 items-center justify-center rounded-2xl border border-navy-900/8 bg-off-white p-5 sm:h-28">
                <img
                  src="/images/capgemini-logo.svg"
                  alt="Capgemini"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex h-24 items-center justify-center rounded-2xl border border-navy-900/8 bg-off-white p-5 sm:h-28">
                <img src="/images/hsbc-logo.png" alt="HSBC" className="h-full w-full object-contain" />
              </div>
              <div className="flex h-24 items-center justify-center rounded-2xl border border-navy-900/8 bg-off-white p-5 sm:h-28">
                <img src="/images/wipro-logo.svg" alt="Wipro" className="h-full w-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-off-white py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Approach"
            title="Marketing, Technology and AI — Working Together."
            subtitle="ManaDigitalAI combines the following disciplines to build growth systems that fit your business, not a generic template."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-2xl border border-navy-900/8 bg-white p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-950 text-cyan-400">
                  <p.icon size={20} aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-bold text-navy-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-900/60">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading eyebrow="Results" title="Case Studies" />
          <div className="mx-auto mt-12 max-w-2xl rounded-3xl border border-dashed border-navy-900/15 bg-off-white p-12 text-center">
            <h3 className="text-xl font-bold text-navy-900">Case Studies Coming Soon</h3>
            <p className="mt-3 text-sm leading-relaxed text-navy-900/60">
              As we complete engagements, we'll publish real case studies here — covering the
              client's industry, challenge, strategy, campaign approach and business outcome. We
              only share results we can stand behind.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Let's Talk About Your Business."
        subtitle="Tell us what you're building and where you want to go — we'll explore how digital marketing, technology and AI can help."
        primaryLabel="Book a Call"
        primaryTo={CALENDLY_URL}
      />
    </>
  );
}
