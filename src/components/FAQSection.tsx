import React, { useState } from 'react';
import { FAQS } from '../data/academyData';
import { Plus, Minus } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-24 bg-[#FBF9F4] border-t border-[#E8E2D5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#C29B38]" />
            <span className="text-xs sm:text-[13px] font-bold tracking-[0.14em] uppercase text-[#0D7E6C]">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <span className="w-6 h-[2px] bg-[#C29B38]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#072026] tracking-tight mb-4">
            Everything you need to know
          </h2>

          <p className="text-base text-[#4B5563]">
            Common questions from parents and students starting their online learning journey with us.
          </p>
        </div>

        {/* Minimalist Horizontal Accordion Rows */}
        <div className="divide-y divide-[#E8E2D5] border-y border-[#E8E2D5]">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-5 sm:py-6 transition-colors">
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full flex items-center justify-between text-left gap-4 group cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl font-bold text-[#072026] group-hover:text-[#0D7E6C] transition-colors">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#F4EFE6] group-hover:bg-[#EBF5F0] text-[#0D7E6C] flex items-center justify-center shrink-0 transition-colors">
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-3.5 pr-8 text-sm sm:text-base text-[#4B5563] leading-relaxed animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
