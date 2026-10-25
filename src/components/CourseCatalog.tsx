import React, { useState } from 'react';
import { Course } from '../types';
import { ArrowUpRight, BookOpen, Clock, Users, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

interface CourseCatalogProps {
  courses: Course[];
  onSelectCourse: (course: Course) => void;
  onEnquireCourse: (course: Course) => void;
  onOpenAssessment: () => void;
  onSignUpCourse?: (course: Course) => void;
}

export const CourseCatalog: React.FC<CourseCatalogProps> = ({
  courses,
  onSelectCourse,
  onEnquireCourse,
  onOpenAssessment,
  onSignUpCourse
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Courses' },
    { id: 'foundation', label: 'Foundations (Qaida)' },
    { id: 'recitation', label: 'Tajweed & Recitation' },
    { id: 'hifz', label: 'Hifz Memorisation' },
    { id: 'arabic', label: 'Arabic & Meaning' },
    { id: 'character', label: 'Islamic Studies & Akhlaq' }
  ];

  const filteredCourses = activeCategory === 'all'
    ? courses
    : courses.filter((c) => c.category === activeCategory);

  return (
    <section id="courses-section" className="py-16 lg:py-24 bg-[#FBF9F4] border-t border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#C29B38]" />
            <span className="text-xs sm:text-[13px] font-bold tracking-[0.14em] uppercase text-[#0D7E6C]">
              OUR LEARNING PATHWAY
            </span>
            <span className="w-6 h-[2px] bg-[#C29B38]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#072026] tracking-tight mb-4">
            Find the right course{' '}
            <span className="text-[#C29B38] font-serif italic">journey</span>
          </h2>

          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
            Start with the basics or deepen your connection with structured, step-by-step learning.
          </p>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#0D7E6C] text-white shadow-sm font-semibold'
                    : 'bg-white text-[#4B5563] border border-[#E8E2D5] hover:border-[#0D7E6C]/50 hover:bg-[#F4EFE6]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredCourses.map((course) => {
            return (
              <div
                key={course.id}
                className="bg-white rounded-xl border border-[#E8E2D5] overflow-hidden shadow-academic shadow-academic-hover flex flex-col justify-between relative group"
              >
                {/* Top Ochre / Gold Accent Line */}
                <div
                  className="h-1.5 w-full"
                  style={{ backgroundColor: course.accentColor || '#C29B38' }}
                />

                <div className="p-6 sm:p-7 flex-1 flex flex-col">
                  {/* Category & Tamil Title */}
                  <div className="flex items-center justify-between text-xs text-[#6B7280] mb-3">
                    <span className="font-semibold text-[#0D7E6C] uppercase tracking-wider text-[11px]">
                      {course.category}
                    </span>
                    {course.tamilTitle && (
                      <span className="font-medium text-[#072026]/70">
                        {course.tamilTitle}
                      </span>
                    )}
                  </div>

                  {/* Course Title */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#072026] mb-3 group-hover:text-[#0D7E6C] transition-colors">
                    {course.title}
                  </h3>

                  {/* Course Description */}
                  <p className="text-sm text-[#4B5563] leading-relaxed mb-6 flex-1">
                    {course.tagline}
                  </p>

                  {/* Meta items */}
                  <div className="pt-4 border-t border-[#E8E2D5]/70 grid grid-cols-2 gap-2 text-xs text-[#6B7280] mb-6">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#0D7E6C]" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#0D7E6C]" />
                      <span>{course.frequency}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between gap-2 pt-2">
                    {onSignUpCourse ? (
                      <button
                        onClick={() => onSignUpCourse(course)}
                        className="inline-flex items-center gap-1 text-xs font-bold text-white bg-[#0D7E6C] hover:bg-[#0A6456] px-3.5 py-1.5 rounded-md shadow-sm transition-colors cursor-pointer"
                      >
                        <span>Register</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <button
                        onClick={() => onEnquireCourse(course)}
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0D7E6C] hover:text-[#072026] group-hover:underline transition-colors cursor-pointer"
                      >
                        <span>Enquire Now</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    )}

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => onEnquireCourse(course)}
                        className="text-xs font-semibold text-[#072026] hover:text-[#0D7E6C] px-2.5 py-1.5 rounded-md transition-colors cursor-pointer"
                      >
                        Enquire
                      </button>
                      <button
                        onClick={() => onSelectCourse(course)}
                        className="text-xs font-semibold text-[#4B5563] hover:text-[#0D7E6C] hover:bg-[#F4EFE6] px-2.5 py-1.5 rounded-md border border-[#E8E2D5] transition-colors cursor-pointer"
                      >
                        Syllabus
                      </button>
                    </div>
                  </div>
                </div>

                {/* Subtle bottom indicator */}
                <div className="px-6 py-2.5 bg-[#FBF9F4] border-t border-[#E8E2D5]/70 flex items-center justify-between text-[11px] text-[#6B7280]">
                  <span>Target: {course.targetAudience}</span>
                  <span className="text-[#0D7E6C] font-medium">1-on-1 format</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Assessment Banner below courses */}
        <div className="mt-14 p-6 sm:p-8 bg-[#F4EFE6] border border-[#E8E2D5] rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D7E6C] block mb-1">
              Not sure which course is right for your child?
            </span>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#072026] mb-1">
              Take our 60-Second Learning Path Assessment
            </h4>
            <p className="text-sm text-[#4B5563]">
              Answer 3 brief questions to receive our tailored curriculum roadmap and teacher recommendation.
            </p>
          </div>
          <button
            onClick={onOpenAssessment}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#0D7E6C] hover:bg-[#0A6456] rounded-md shadow-sm transition-colors cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#FBF9F4]" />
            <span>Find Your Learning Path</span>
          </button>
        </div>

      </div>
    </section>
  );
};
