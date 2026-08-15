import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  path: string;
}

const SITE_URL = 'https://manadigitalai.com';
const OG_IMAGE = `${SITE_URL}/images/og-image.png`;

function setMetaTag(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLinkTag(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export default function SEO({ title, description, path }: SEOProps) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    document.title = title;

    setMetaTag('name', 'description', description);
    setLinkTag('canonical', url);

    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:site_name', 'ManaDigitalAI');
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', url);
    setMetaTag('property', 'og:image', OG_IMAGE);

    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', OG_IMAGE);
  }, [title, description, path]);

  return null;
}
