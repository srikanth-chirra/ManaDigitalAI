import {
  Megaphone,
  LayoutTemplate,
  MessageCircle,
  Workflow,
  TrendingUp,
  Globe,
  Target,
  Bot,
  BarChart3,
  Users,
  Search,
  MapPin,
  Share2,
  PhoneCall,
  CalendarCheck,
  Star,
  Home,
  ListChecks,
  Repeat,
  MapPinned,
  PenSquare,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  type LucideIcon,
} from 'lucide-react';

export interface ServiceGroup {
  id: string;
  title: string;
  icon: LucideIcon;
  items: string[];
}

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
}

// Homepage — "How We Help Businesses Grow"
export const growthServiceGroups: ServiceGroup[] = [
  { id: 'attract', title: 'Attract', icon: Megaphone, items: ['Meta Ads', 'Google Ads', 'SEO', 'Social Media', 'Content Marketing'] },
  { id: 'capture', title: 'Capture', icon: LayoutTemplate, items: ['Websites', 'Landing Pages', 'Lead Forms', 'Conversion-focused pages'] },
  { id: 'engage', title: 'Engage', icon: MessageCircle, items: ['WhatsApp Marketing', 'CRM', 'Lead Follow-up', 'Email Marketing'] },
  { id: 'automate', title: 'Automate', icon: Workflow, items: ['AI-powered workflows', 'Marketing automation', 'Lead management', 'Customer communication'] },
  { id: 'optimize', title: 'Optimize', icon: TrendingUp, items: ['Analytics', 'Conversion Optimization', 'Campaign Optimization', 'Performance Reporting'] },
];

// Services page — five categories
export const serviceCategories: ServiceGroup[] = [
  { id: 'digital-presence', title: 'Digital Presence', icon: Globe, items: ['Website Development', 'Landing Pages', 'Social Media', 'Content'] },
  { id: 'customer-acquisition', title: 'Customer Acquisition', icon: Target, items: ['Meta Ads', 'Google Ads', 'SEO', 'Lead Generation'] },
  { id: 'customer-engagement', title: 'Customer Engagement', icon: MessageCircle, items: ['WhatsApp Marketing', 'CRM', 'Lead Follow-up', 'Email Marketing'] },
  { id: 'automation-ai', title: 'Automation & AI', icon: Bot, items: ['AI-powered Workflows', 'Marketing Automation', 'Lead Management', 'Customer Communication'] },
  { id: 'growth-optimization', title: 'Growth & Optimization', icon: BarChart3, items: ['Analytics', 'Conversion Optimization', 'Campaign Optimization', 'Performance Reporting'] },
];

export const healthcareServices: ServiceItem[] = [
  { icon: Users, title: 'Patient Lead Generation' },
  { icon: Globe, title: 'Healthcare Websites' },
  { icon: LayoutTemplate, title: 'Clinic Landing Pages' },
  { icon: Search, title: 'Google Search Marketing' },
  { icon: Megaphone, title: 'Meta Advertising' },
  { icon: MapPin, title: 'Local SEO' },
  { icon: Share2, title: 'Social Media Marketing' },
  { icon: MessageCircle, title: 'WhatsApp Communication' },
  { icon: PhoneCall, title: 'Lead Follow-up' },
  { icon: CalendarCheck, title: 'Appointment Conversion' },
  { icon: Star, title: 'Reputation & Review Strategy' },
  { icon: Bot, title: 'AI-powered Marketing Automation' },
];

export const realEstateServices: ServiceItem[] = [
  { icon: Home, title: 'Property Lead Generation' },
  { icon: Megaphone, title: 'Meta Ads' },
  { icon: Search, title: 'Google Ads' },
  { icon: LayoutTemplate, title: 'Project Landing Pages' },
  { icon: Globe, title: 'Property Websites' },
  { icon: ListChecks, title: 'Lead Qualification' },
  { icon: MessageCircle, title: 'WhatsApp Automation' },
  { icon: Users, title: 'CRM' },
  { icon: Repeat, title: 'Retargeting' },
  { icon: MapPinned, title: 'Site Visit Conversion' },
  { icon: PenSquare, title: 'Content Marketing' },
  { icon: Bot, title: 'AI-powered Lead Management' },
];

export const itTrainingServices: ServiceItem[] = [
  { icon: GraduationCap, title: 'Student Lead Generation' },
  { icon: Search, title: 'Google Ads' },
  { icon: Megaphone, title: 'Meta Ads' },
  { icon: LayoutTemplate, title: 'Course Landing Pages' },
  { icon: Globe, title: 'Website Development' },
  { icon: Sparkles, title: 'Course Promotion' },
  { icon: MessageCircle, title: 'WhatsApp Enquiry Management' },
  { icon: ListChecks, title: 'Lead Qualification' },
  { icon: PhoneCall, title: 'Student Follow-up' },
  { icon: Repeat, title: 'Remarketing' },
  { icon: CheckCircle2, title: 'Admission Conversion' },
  { icon: Share2, title: 'Social Media Content' },
  { icon: Bot, title: 'AI-powered Enquiry Automation' },
];

export const otherBusinessServices: ServiceItem[] = [
  { icon: Megaphone, title: 'Digital Marketing' },
  { icon: Users, title: 'Lead Generation' },
  { icon: Globe, title: 'Website Development' },
  { icon: Search, title: 'Google Ads' },
  { icon: Target, title: 'Meta Ads' },
  { icon: Share2, title: 'Social Media' },
  { icon: TrendingUp, title: 'SEO' },
  { icon: MessageCircle, title: 'WhatsApp Marketing' },
  { icon: Workflow, title: 'Automation' },
  { icon: Bot, title: 'AI Solutions' },
  { icon: BarChart3, title: 'Conversion Optimization' },
];
