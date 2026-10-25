import React from 'react';
import { Check, ArrowUpRight } from 'lucide-react';

interface AboutSectionProps {
  onStartJourney: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onStartJourney
}) => {
  return (
    <section id="about-section" className="py-16 lg:py-24 bg-[#FBF9F4] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Online Class Illustration */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#E8E2D5] shadow-academic bg-[#F4EFE6] aspect-[4/3] sm:aspect-[16/11]">
              <img
                src="./assets/online_class_illustration.jpg"
                alt="Online Islamic class with teacher on laptop and children studying Quran"
                className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#072026]/40 via-transparent to-transparent pointer-events-none" />
              
              {/* Calligraphic badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-3.5 rounded-lg border border-[#E8E2D5] flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0D7E6C] block">
                    ONLINE INTERACTIVE LEARNING
                  </span>
                  <span className="text-xs font-serif font-semibold text-[#072026]">
                    Dedicated 1-on-1 Classes &amp; Guided Recitation
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#EBF5F0] text-[#0D7E6C] flex items-center justify-center font-bold text-xs">
                  ✓
                </div>
              </div>
            </div>

            {/* Subtle decorative geometry backdrop */}
            <div className="absolute -bottom-6 -right-6 w-44 h-44 bg-[#C29B38]/10 rounded-full blur-2xl -z-10" />
          </div>

          {/* Right Column: Editorial Mission & Value Points */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#C29B38]" />
              <span className="text-xs sm:text-[13px] font-bold tracking-[0.14em] uppercase text-[#0D7E6C]">
                ABOUT THE ACADEMY
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#072026] tracking-tight leading-[1.18] mb-6">
              Faith-centred learning wherever you are.
            </h2>

            {/* Narrative text */}
            <p className="text-base text-[#4B5563] leading-relaxed mb-6">
              Tha&apos;leem-Ul-Islam was founded with a singular, noble mission: to provide 
              authentic, patient, and personalized Qur&apos;anic education for Tamil-speaking 
              Muslim families living across the globe.
            </p>

            <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed mb-8">
              We understand the challenge of finding trustworthy, qualified Islamic instructors 
              who can connect with your children in your mother tongue while imparting sound 
              classical Tajweed. Our gentle methodology nurtures a lifelong love for the Qur&apos;an 
              without fear or stress.
            </p>

            {/* Value checklist items */}
            <div className="flex flex-col gap-4 mb-8">
              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-[#EBF5F0] text-[#0D7E6C] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-[#072026]">
                    Online Islamic classes taught in Tamil &amp; English
                  </h4>
                  <p className="text-sm text-[#6B7280]">
                    Learn from anywhere with tutors who explain complex rules in conversational Tamil and English.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-[#EBF5F0] text-[#0D7E6C] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-[#072026]">
                    Individual attention &amp; tailored pace
                  </h4>
                  <p className="text-sm text-[#6B7280]">
                    Support for steady, disciplined progress. No student is rushed or left behind.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-[#EBF5F0] text-[#0D7E6C] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-[#072026]">
                    Safe, parent-transparent virtual classrooms
                  </h4>
                  <p className="text-sm text-[#6B7280]">
                    Regular parent progress updates, attendance logging, and structured weekly checkpoints.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <button
                onClick={onStartJourney}
                className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-[#0D7E6C] hover:bg-[#0A6456] rounded-md shadow-sm transition-all duration-200 cursor-pointer active:scale-[0.98]"
              >
                <span>Explore Learning Pathways</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
