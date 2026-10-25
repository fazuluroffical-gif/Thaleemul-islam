import React from 'react';
import { Clock, Users, Home } from 'lucide-react';

export const AcademyDifference: React.FC = () => {
  const differences = [
    {
      id: 'diff-1',
      title: 'Flexible Online Classes',
      description: 'Discuss suitable timings around school, work and family routines.',
      icon: <Clock className="w-6 h-6 text-[#0D7E6C]" />,
      badge: 'Global Timezones'
    },
    {
      id: 'diff-2',
      title: 'Personalised Learning',
      description: 'Choose group learning or ask about dedicated one-to-one sessions.',
      icon: (
        <svg className="w-6 h-6 text-[#0D7E6C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a4 4 0 0 1 4 4c0 2-2 3-4 6-2-3-4-4-4-6a4 4 0 0 1 4-4z" />
          <path d="M22 12a4 4 0 0 1-4 4c-2 0-3-2-6-4 3-2 4-4 6-4a4 4 0 0 1 4 4z" />
          <path d="M2 12a4 4 0 0 0 4 4c2 0 3-2 6-4-3-2-4-4-6-4a4 4 0 0 0-4 4z" />
          <path d="M12 22a4 4 0 0 0 4-4c0-2-2-3-4-6-2 3-4 4-4 6a4 4 0 0 0 4 4z" />
        </svg>
      ),
      badge: '1-on-1 Focus'
    },
    {
      id: 'diff-3',
      title: 'For Beginners & Beyond',
      description: 'Choose a course that matches your current learning level.',
      icon: (
        <span className="font-arabic text-2xl font-bold text-[#0D7E6C] leading-none select-none">
          أ
        </span>
      ),
      badge: 'Zero Prerequisite'
    },
    {
      id: 'diff-4',
      title: 'Learn from Home',
      description: 'Join online classes from wherever you are in the world.',
      icon: <Home className="w-6 h-6 text-[#0D7E6C]" />,
      badge: 'Zero Commute'
    }
  ];

  return (
    <section id="method-section" className="py-16 lg:py-24 bg-[#FBF9F4] border-t border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#C29B38]" />
            <span className="text-xs sm:text-[13px] font-bold tracking-[0.14em] uppercase text-[#0D7E6C]">
              THE ACADEMY DIFFERENCE
            </span>
            <span className="w-6 h-[2px] bg-[#C29B38]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#072026] tracking-tight mb-4">
            A thoughtful way to{' '}
            <span className="text-[#C29B38] font-serif italic">grow</span>
          </h2>

          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
            Build a steady learning habit with clear guidance and supportive mentorship.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {differences.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-[#E8E2D5] shadow-academic shadow-academic-hover flex flex-col justify-between"
            >
              <div>
                {/* Icon Container in subtle light square */}
                <div className="w-12 h-12 rounded-xl bg-[#EBF5F0] border border-[#D5E8DF] flex items-center justify-center mb-6">
                  {item.icon}
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#072026] mb-3">
                  {item.title}
                </h3>

                <p className="text-base text-[#4B5563] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8E2D5]/70 flex items-center justify-between text-xs text-[#6B7280]">
                <span className="font-medium text-[#0D7E6C]">{item.badge}</span>
                <span>Structured Weekly Milestones</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
