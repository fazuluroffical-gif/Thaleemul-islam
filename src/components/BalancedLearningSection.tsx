import React, { useState } from 'react';
import { BookOpen, Sparkles, CheckCircle2, ChevronRight, Volume2 } from 'lucide-react';

interface BalancedLearningSectionProps {
  onOpenTajweedStudio: () => void;
  onExploreCourses: () => void;
}

export const BalancedLearningSection: React.FC<BalancedLearningSectionProps> = ({
  onOpenTajweedStudio,
  onExploreCourses
}) => {
  const [selectedTopic, setSelectedTopic] = useState<number>(0);

  const enrichmentTopics = [
    {
      id: 'tajweed',
      title: 'Tajweed rules & practice',
      tamilSubtitle: 'தஜ்வீத் விதிகள் மற்றும் நடைமுறை பயிற்சி',
      icon: '⚙',
      badge: 'Core Component',
      summary: 'Accurate articulation of Arabic letters (Makharij) and phonological rules including Noon Saakin, Meem Saakin, Madd, and Qalqalah.',
      details: [
        'Preventing major recitation errors (Lahn Jali) that change word meanings',
        'Mastering natural voice cadence, breath control, and proper pausing (Waqf)',
        'One-on-one auditory correction and repetition until pronunciation is effortless'
      ],
      quote: '“The best of you are those who learn the Qur’an and teach it.” — Sahih al-Bukhari'
    },
    {
      id: 'hadith',
      title: 'Authentic Hadith & Duas',
      tamilSubtitle: 'ஆதாரப்பூர்வ ஹதீஸ்கள் மற்றும் அன்றாட துஆக்கள்',
      icon: '☽',
      badge: 'Spiritual Uplift',
      summary: 'Essential daily supplications from Hisn al-Muslim (Fortress of the Muslim) alongside foundational Hadith from Imam Nawawi’s 40 Hadith.',
      details: [
        'Morning and evening protection Adhkar with Tamil translation and context',
        'Situational duas: entering/leaving home, masjid, eating, illness, travel',
        'Memorizing short, impactful sayings of the Prophet (ﷺ) for daily ethics'
      ],
      quote: '“Dua is the essence of worship.” — Jami` at-Tirmidhi'
    },
    {
      id: 'akhlaq',
      title: 'Islamic manners (Akhlaq & Adab)',
      tamilSubtitle: 'இஸ்லாமிய நற்குணங்கள் மற்றும் வாழ்வியல் ஒழுக்கம்',
      icon: '✦',
      badge: 'Character Building',
      summary: 'Practical ethics based on the character of the Prophet (ﷺ), shaping respectful, truthful, and compassionate Muslim youths.',
      details: [
        'Reverence and gentle speech with parents, elders, and teachers',
        'Integrity in friendship, digital manners, and avoiding harmful speech',
        'Developing inner peace, modesty (Haya), and sincere gratitude to Allah'
      ],
      quote: '“I was sent only to perfect good character.” — Al-Muwaṭṭa'
    },
    {
      id: 'fiqh',
      title: 'Basic Fiqh & Salah guidance',
      tamilSubtitle: 'அடிப்படை வணக்க வழிமுறைகள் & தொழுகை பயிற்சி',
      icon: '🏛',
      badge: 'Practical Worship',
      summary: 'Step-by-step practical masterclass on ritual purity (Taharah), Wudhu, and the physical and spiritual mechanics of daily Salah.',
      details: [
        'Correct demonstration of Wudhu invalidators and Sunnah actions',
        'Salah postures, conditions, mandatory recitations and Tashahhud',
        'Addressing common mistakes children and youths make during prayer'
      ],
      quote: '“Pray as you have seen me praying.” — Sahih al-Bukhari'
    },
    {
      id: 'tamil',
      title: 'Tamil-medium explanation with Arabic phonetics',
      tamilSubtitle: 'தமிழ் வழிக் கற்பித்தல் & அரபு ஒலிப்பு முறை',
      icon: '📖',
      badge: 'Mother Tongue Ease',
      summary: 'Removing the language barrier so concepts sink deep into the heart. Clear Tamil explanations paired with precise Arabic phonetics.',
      details: [
        'Clear distinctions between Tamil consonants and unique Arabic throat/tongue sounds',
        'Relatable analogies and cultural warmth that children love',
        'Bilingual bridge for children born abroad who speak English and Tamil'
      ],
      quote: 'Bridging hearts and minds through loving, mother-tongue mentorship.'
    }
  ];

  const current = enrichmentTopics[selectedTopic];

  return (
    <section className="py-16 lg:py-24 bg-[#F4EFE6] border-t border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#C29B38]" />
            <span className="text-xs sm:text-[13px] font-bold tracking-[0.14em] uppercase text-[#0D7E6C]">
              MORE THAN A LESSON
            </span>
            <span className="w-6 h-[2px] bg-[#C29B38]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#072026] tracking-tight mb-4">
            A balanced Islamic learning experience
          </h2>

          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
            Alongside your selected course, explore enrichment topics and suitable class formats for your family.
          </p>
        </div>

        {/* 2-Column Interactive Topic Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Topic Selector */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {enrichmentTopics.map((topic, index) => {
              const isSelected = selectedTopic === index;
              return (
                <button
                  key={topic.id}
                  onClick={() => setSelectedTopic(index)}
                  className={`text-left p-4 sm:p-5 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between group ${
                    isSelected
                      ? 'bg-white border-[#0D7E6C] shadow-academic text-[#072026]'
                      : 'bg-white/60 hover:bg-white border-[#E8E2D5] text-[#4B5563]'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span className={`w-9 h-9 rounded-lg flex items-center justify-center font-serif text-base shrink-0 ${
                      isSelected ? 'bg-[#0D7E6C] text-white' : 'bg-[#EBF5F0] text-[#0D7E6C]'
                    }`}>
                      {topic.icon}
                    </span>
                    <div>
                      <h3 className={`font-serif text-base sm:text-lg font-bold leading-snug ${
                        isSelected ? 'text-[#072026]' : 'text-[#374151]'
                      }`}>
                        {topic.title}
                      </h3>
                      <p className="text-xs text-[#6B7280]">
                        {topic.tamilSubtitle}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 shrink-0 transition-transform ${
                    isSelected ? 'text-[#0D7E6C] translate-x-1' : 'text-[#9CA3AF] group-hover:text-[#4B5563]'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Topic Display Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-7 sm:p-9 border border-[#E8E2D5] shadow-academic">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D7E6C] bg-[#EBF5F0] px-3 py-1 rounded-full">
                {current.badge}
              </span>
              <span className="text-xs text-[#6B7280]">
                Included in curriculum
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#072026] mb-2">
              {current.title}
            </h3>
            <p className="text-sm font-medium text-[#0D7E6C] mb-5">
              {current.tamilSubtitle}
            </p>

            <p className="text-base text-[#4B5563] leading-relaxed mb-6">
              {current.summary}
            </p>

            {/* Checklist details */}
            <div className="space-y-3 mb-8">
              {current.details.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#EBF5F0] text-[#0D7E6C] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm text-[#374151] leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Scholarly quote callout */}
            <div className="p-4 rounded-xl bg-[#FBF9F4] border-l-4 border-[#C29B38] mb-8 text-sm italic font-serif text-[#072026]">
              {current.quote}
            </div>

            {/* Actions inside card */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#E8E2D5]">
              <button
                onClick={onOpenTajweedStudio}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#0D7E6C] bg-[#EBF5F0] hover:bg-[#D4EFE6] rounded-md transition-colors cursor-pointer"
              >
                <Volume2 className="w-4 h-4" />
                <span>Open Interactive Tajweed Sound Studio</span>
              </button>

              <button
                onClick={onExploreCourses}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0D7E6C] hover:bg-[#0A6456] rounded-md transition-colors cursor-pointer"
              >
                <span>Explore Course Modules</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
