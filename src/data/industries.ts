import {
  HeartPulse,
  Building2,
  GraduationCap,
  BriefcaseBusiness,
  type LucideIcon,
} from 'lucide-react';

export type IndustryId = 'healthcare' | 'real-estate' | 'it-training' | 'other-businesses';

export interface AudienceItem {
  icon: LucideIcon;
  label: string;
}

export interface IndustryService {
  icon: LucideIcon;
  title: string;
}

export interface IndustryCardData {
  id: IndustryId;
  name: string;
  icon: LucideIcon;
  description: string;
  bullets?: string[];
  cta: string;
  route: string;
}

export const homepageIndustries: IndustryCardData[] = [
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: HeartPulse,
    description: 'Digital growth solutions for hospitals, clinics and healthcare professionals.',
    bullets: [
      'Hospitals',
      'Dentists',
      'Dental Clinics',
      'Physiotherapists',
      'Speech & Hearing Clinics',
      'Nutritionists & Dieticians',
      'Doctors',
      'Specialty Clinics',
    ],
    cta: 'Explore Healthcare',
    route: '/healthcare',
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    icon: Building2,
    description:
      'Digital marketing and lead generation solutions for builders, developers and real estate professionals.',
    cta: 'Explore Real Estate',
    route: '/real-estate',
  },
  {
    id: 'it-training',
    name: 'IT Training Institutes',
    icon: GraduationCap,
    description:
      'Digital growth solutions designed to attract students, generate enquiries and increase admissions.',
    cta: 'Explore IT Training',
    route: '/it-training',
  },
  {
    id: 'other-businesses',
    name: 'Other Businesses',
    icon: BriefcaseBusiness,
    description: "Don't see your industry here? We also work with businesses across other industries.",
    cta: 'Talk to Us',
    route: '/other-businesses',
  },
];

export const healthcareAudience: AudienceItem[] = [
  { icon: HeartPulse, label: 'Hospitals' },
  { icon: HeartPulse, label: 'Dental Clinics' },
  { icon: HeartPulse, label: 'Physiotherapy Clinics' },
  { icon: HeartPulse, label: 'Speech & Hearing Clinics' },
  { icon: HeartPulse, label: 'Nutritionists' },
  { icon: HeartPulse, label: 'Specialty Clinics' },
  { icon: HeartPulse, label: 'Other Healthcare Professionals' },
];

export const itTrainingAudience: AudienceItem[] = [
  { icon: GraduationCap, label: 'IT Training Institutes' },
  { icon: GraduationCap, label: 'Software Training Centers' },
  { icon: GraduationCap, label: 'Professional Certification Institutes' },
  { icon: GraduationCap, label: 'Career Training Centers' },
  { icon: GraduationCap, label: 'Upskilling Programs' },
  { icon: GraduationCap, label: 'Online Training Providers' },
];

export const healthcareJourney = [
  'Patient Searches',
  'Discovers Healthcare Business',
  'Visits Website / Social Profile',
  'Builds Trust',
  'Makes Enquiry',
  'WhatsApp / Call',
  'Appointment',
  'Patient',
];

export const realEstateJourney = [
  'Property Search / Advertisement',
  'Property Enquiry',
  'Lead Qualification',
  'WhatsApp / Call',
  'Site Visit',
  'Follow-up',
  'Purchase',
];

export const itTrainingJourney = [
  'Student Searches Course',
  'Sees Advertisement',
  'Visits Course Page',
  'Submits Enquiry',
  'WhatsApp / Call',
  'Counselling',
  'Admission',
  'Course Enrollment',
];

export const growthJourney = [
  'Visibility',
  'Engagement',
  'Leads',
  'Follow-up',
  'Customers',
  'Growth',
];
