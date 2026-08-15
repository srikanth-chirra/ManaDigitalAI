import SEO from '../components/SEO';
import Button from '../components/Button';

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found | ManaDigitalAI"
        description="The page you're looking for doesn't exist."
        path="/404"
      />
      <section className="flex min-h-[70vh] items-center justify-center bg-off-white py-24">
        <div className="container-page text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">404</p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-900">
            We couldn't find that page.
          </h1>
          <p className="mx-auto mt-4 max-w-md text-navy-900/65">
            The page you're looking for may have moved. Let's get you back on track.
          </p>
          <Button to="/" size="lg" className="mt-8">
            Back to Home
          </Button>
        </div>
      </section>
    </>
  );
}
