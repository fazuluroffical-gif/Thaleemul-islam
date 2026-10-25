import React from 'react';
import { ArrowUpRight, Check, Sparkles, ShieldCheck } from 'lucide-react';

interface HeroSectionProps {
  onExploreCourses: () => void;
  onOpenAssessment: () => void;
  onOpenSignUp: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreCourses,
  onOpenAssessment,
  onOpenSignUp
}) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-[#FBF9F4]">
      {/* Subtle background ambient warmth */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0D7E6C]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-80 h-80 bg-[#C29B38]/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Editorial Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#C29B38]" />
              <span className="text-xs sm:text-[13px] font-bold tracking-[0.14em] uppercase text-[#0D7E6C]">
                A BEAUTIFUL JOURNEY OF KNOWLEDGE
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#072026] font-bold tracking-tight leading-[1.12] mb-6">
              Bring the light of the{' '}
              <span className="text-[#C29B38] font-serif italic">Qur&apos;an</span>{' '}
              into your home.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg lg:text-[19px] text-[#4B5563] leading-relaxed max-w-2xl mb-8">
              Learn Qur&apos;an reading with Tajweed, memorisation and Arabic online
              — with caring guidance, flexible timings, and a learning path made for you.
            </p>

            {/* Welcome note for Tamil-speaking community */}
            <div className="mb-8 p-4 rounded-lg bg-[#F4EFE6] border border-[#E8E2D5] flex items-center justify-between flex-wrap gap-2 text-sm text-[#072026]">
              <div className="flex items-center gap-2">
                <span className="font-arabic text-lg text-[#0D7E6C]">مَرْحَبًا</span>
                <span className="font-medium">
                  Welcome to Muslims around the world.
                </span>
              </div>
              <span className="text-xs font-semibold text-[#0D7E6C] tracking-wide uppercase">
                — for Tamil-speaking families
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
              <button
                onClick={onOpenSignUp}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-[#0D7E6C] hover:bg-[#0A6456] rounded-md shadow-md transition-all duration-200 cursor-pointer active:scale-[0.98]"
              >
                <span>Student Registration</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreCourses}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-[#072026] bg-[#FFFFFF] hover:bg-[#F4EFE6] border border-[#E8E2D5] rounded-md shadow-sm transition-all duration-200 cursor-pointer"
              >
                <span>Explore Courses</span>
              </button>

              <button
                onClick={onOpenAssessment}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-[#0D7E6C] hover:text-[#072026] hover:bg-[#EBF5F0] rounded-md transition-all duration-200 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#0D7E6C]" />
                <span>Level Quiz</span>
              </button>
            </div>

            {/* Trust checkmarks row */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-[#374151] pt-3 border-t border-[#E8E2D5]/80">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#EBF5F0] text-[#0D7E6C] flex items-center justify-center">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="font-medium">Beginner friendly</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#EBF5F0] text-[#0D7E6C] flex items-center justify-center">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="font-medium">Flexible class timings</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#EBF5F0] text-[#0D7E6C] flex items-center justify-center">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="font-medium">Individual attention</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Arch & Floating Card */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px]">
              
              {/* Classical Arch Frame */}
              <div className="overflow-hidden rounded-t-[180px] sm:rounded-t-[220px] rounded-b-2xl border-4 border-[#FFFFFF] shadow-2xl bg-[#E8E2D5]/40 relative aspect-[4/5]">
                <img
                  src="./assets/quran_stand_rehal.jpg"
                  alt="Holy Quran on carved wooden rehal stand"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Decorative gold hairline arch border overlay */}
                <div className="absolute inset-0 rounded-t-[176px] sm:rounded-t-[216px] rounded-b-xl border border-[#C29B38]/30 pointer-events-none" />

                {/* Soft gradient bottom scrim */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#072026]/70 via-[#072026]/20 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <p className="font-arabic text-xl text-[#FBF9F4] font-medium leading-none mb-1">
                    وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا
                  </p>
                  <p className="text-[12px] text-white/90 font-serif italic">
                    &ldquo;And recite the Qur&apos;an with measured recitation.&rdquo; (73:4)
                  </p>
                </div>
              </div>

              {/* Floating Live Badge Card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-xl border border-[#E8E2D5] shadow-academic max-w-[270px]">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0D7E6C]">
                      LIVE 1-ON-1
                    </span>
                  </div>
                  <span className="text-[10px] bg-[#EBF5F0] text-[#0D7E6C] font-semibold px-2 py-0.5 rounded-full">
                    Zoom / Meet
                  </span>
                </div>
                <h4 className="font-serif font-bold text-sm text-[#072026] mb-1">
                  Learn online from home
                </h4>
                <p className="text-xs text-[#6B7280] leading-snug mb-3">
                  Personalised schedule · Caring guidance · Dedicated tutor for each student.
                </p>
                <div className="flex items-center gap-2 pt-2 border-t border-[#E8E2D5]/70 text-[11px] text-[#072026]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0D7E6C]" />
                  <span>Female tutors available for sisters</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
