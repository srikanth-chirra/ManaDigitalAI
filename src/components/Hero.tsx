import Button from './Button';
import GrowthVisual from './GrowthVisual';
import { CALENDLY_URL } from '../lib/calendly';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div
        className="pointer-events-none absolute -top-32 -right-32 h-[36rem] w-[36rem] rounded-full bg-blue-500/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[28rem] w-[28rem] -translate-x-1/3 rounded-full bg-orange-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page relative grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-12">
        <div className="animate-fade-up text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight text-white">
            Don't just get leads. <span className="text-gradient-grow">Get the right customers.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70 lg:mx-0">
            AI-powered digital marketing built for businesses that want to get noticed, reach the
            right audience and turn attention into real opportunities. From digital marketing and
            lead generation to websites, automation and AI-powered solutions, ManaDigitalAI helps
            businesses attract more customers, generate better opportunities and build sustainable
            digital growth.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <Button to={CALENDLY_URL} size="lg">
              Book a Growth Call
            </Button>
            <Button href="#solutions" size="lg" variant="outline-light">
              Explore Our Solutions
            </Button>
          </div>

          <p className="mt-6 text-sm font-medium text-white/45">
            Built for businesses that want to grow, not just be visible online.
          </p>
        </div>

        <div className="lg:pl-4">
          <GrowthVisual />
        </div>
      </div>
    </section>
  );
}
