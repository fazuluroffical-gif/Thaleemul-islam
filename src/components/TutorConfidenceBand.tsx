import React from 'react';
import { Sparkles, UserCheck, ShieldCheck, ArrowRight } from 'lucide-react';

interface TutorConfidenceBandProps {
  onExploreCourses: () => void;
}

export const TutorConfidenceBand: React.FC<TutorConfidenceBandProps> = ({ onExploreCourses }) => {
  return (
    <section className="py-20 lg:py-24 bg-[#0A5D50] text-white relative overflow-hidden">
      {/* Subtle organic pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#A3E6D8] block mb-3">
            COMFORT &amp; CONFIDENCE
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Learn with the right tutor for you
          </h2>

          <p className="text-base sm:text-lg text-[#E6F5F2]/90 leading-relaxed max-w-2xl mx-auto">
            A respectful learning environment that considers every family&apos;s comfort, modesty, and pedagogical preference.
          </p>
        </div>

        {/* Feature Cards on Emerald Ground */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: Female Tutors */}
          <div className="bg-[#0D7363]/80 backdrop-blur-sm border border-[#218F7D] rounded-2xl p-7 sm:p-8 flex items-start gap-5 hover:bg-[#0D7363] transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-white text-[#0A5D50] flex items-center justify-center shrink-0 shadow-md">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a4 4 0 0 1 4 4c0 2-2 3-4 6-2-3-4-4-4-6a4 4 0 0 1 4-4z" />
                <path d="M22 12a4 4 0 0 1-4 4c-2 0-3-2-6-4 3-2 4-4 6-4a4 4 0 0 1 4 4z" />
                <path d="M2 12a4 4 0 0 0 4 4c2 0 3-2 6-4-3-2-4-4-6-4a4 4 0 0 0-4 4z" />
                <path d="M12 22a4 4 0 0 0 4-4c0-2-2-3-4-6-2 3-4 4-4 6a4 4 0 0 0 4 4z" />
              </svg>
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
                Female tutors for female students
              </h3>
              <p className="text-sm sm:text-base text-[#D4F3EB] leading-relaxed">
                Dedicated female tutor availability for sisters and young girls. Learn in a dignified, warm, and private 1-on-1 atmosphere.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-[#A3E6D8]">
                <ShieldCheck className="w-4 h-4" />
                <span>100% Privacy &amp; Female-to-Female Scheduling</span>
              </div>
            </div>
          </div>

          {/* Card 2: Flexible Formats */}
          <div className="bg-[#0D7363]/80 backdrop-blur-sm border border-[#218F7D] rounded-2xl p-7 sm:p-8 flex items-start gap-5 hover:bg-[#0D7363] transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-white text-[#0A5D50] flex items-center justify-center shrink-0 shadow-md">
              <Sparkles className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
                Flexible 1-on-1 &amp; small batches
              </h3>
              <p className="text-sm sm:text-base text-[#D4F3EB] leading-relaxed">
                Choose between focused individual lessons with undivided teacher attention or shared sibling batches tailored to your routine.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-[#A3E6D8]">
                <UserCheck className="w-4 h-4" />
                <span>Tailored pace with weekly milestone reviews</span>
              </div>
            </div>
          </div>

        </div>

        {/* CTA bottom snippet */}
        <div className="mt-12 text-center">
          <button
            onClick={onExploreCourses}
            className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold text-[#072026] bg-white hover:bg-[#FBF9F4] rounded-md shadow-md transition-all cursor-pointer active:scale-[0.98]"
          >
            <span>Explore Course Pathways</span>
            <ArrowRight className="w-4 h-4 text-[#0D7E6C]" />
          </button>
        </div>

      </div>
    </section>
  );
};
