import { useState, type FormEvent } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { submitLead } from '../lib/leads';

const businessTypes = ['Healthcare', 'Real Estate', 'IT Training Institute', 'Other'];

const primaryGoals = [
  'Generate More Leads',
  'Increase Appointments',
  'Increase Site Visits',
  'Increase Student Admissions',
  'Improve Online Presence',
  'Build a Website',
  'Improve Advertising',
  'Automate Follow-up',
  'Scale Existing Marketing',
  'Other',
];

const budgetRanges = [
  'Under ₹25,000 / month',
  '₹25,000 – ₹50,000 / month',
  '₹50,000 – ₹1,00,000 / month',
  '₹1,00,000+ / month',
  'Not decided yet',
];

const inputClass =
  'w-full rounded-xl border border-navy-900/12 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-900/35 transition-colors focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30';
const labelClass = 'mb-1.5 block text-sm font-semibold text-navy-900';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    submitLead(data);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-navy-900/8 bg-white p-10 text-center shadow-sm">
        <CheckCircle2 className="mx-auto text-orange-500" size={48} aria-hidden="true" />
        <h3 className="mt-5 text-2xl font-bold text-navy-900">Thanks — we've received your details.</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-navy-900/65">
          Our team will review what you've shared and reach out to schedule a time that works for
          you. No meeting has been booked yet — we'll confirm a time with you directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-navy-900/8 bg-white p-6 shadow-sm sm:p-10" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="businessName">Business Name</label>
          <input id="businessName" name="businessName" type="text" required autoComplete="organization" className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="website">Website</label>
          <input id="website" name="website" type="url" placeholder="https://" autoComplete="url" className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="location">Location</label>
          <input id="location" name="location" type="text" required autoComplete="address-level2" className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="businessType">Business Type</label>
          <select id="businessType" name="businessType" required defaultValue="" className={inputClass}>
            <option value="" disabled>Select your business type</option>
            {businessTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="primaryGoal">Primary Goal</label>
          <select id="primaryGoal" name="primaryGoal" required defaultValue="" className={inputClass}>
            <option value="" disabled>Select your primary goal</option>
            {primaryGoals.map((goal) => (
              <option key={goal} value={goal}>{goal}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="budget">Monthly Marketing Budget</label>
          <select id="budget" name="budget" defaultValue="" className={inputClass}>
            <option value="" disabled>Select a budget range</option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="challenge">Current Challenge</label>
          <textarea id="challenge" name="challenge" rows={3} className={inputClass} placeholder="What's holding your growth back right now?" />
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={4} className={inputClass} placeholder="Tell us a bit more about your business and goals." />
        </div>
      </div>

      <button
        type="submit"
        className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/30 sm:w-auto"
      >
        Request a Growth Call
      </button>
    </form>
  );
}
