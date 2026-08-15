import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto mt-12 max-w-3xl divide-y divide-navy-900/8 rounded-3xl border border-navy-900/8 bg-white">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <span className="font-semibold text-navy-900">{item.question}</span>
              <ChevronDown
                size={20}
                className={`shrink-0 text-orange-500 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>
            <div
              id={`faq-panel-${i}`}
              className={`grid overflow-hidden transition-all duration-300 ${
                isOpen ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden px-6">
                <p className="text-sm leading-relaxed text-navy-900/65">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
