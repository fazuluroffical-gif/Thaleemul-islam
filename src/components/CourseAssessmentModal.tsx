import React, { useState } from 'react';
import { Course } from '../types';
import { COURSES_DATA } from '../data/academyData';
import { X, Check, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';

interface CourseAssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectRecommendedCourse: (course: Course) => void;
}

export const CourseAssessmentModal: React.FC<CourseAssessmentModalProps> = ({
  isOpen,
  onClose,
  onSelectRecommendedCourse
}) => {
  const [step, setStep] = useState<number>(1);
  const [studentType, setStudentType] = useState<string>('child');
  const [recitationLevel, setRecitationLevel] = useState<string>('zero');
  const [primaryGoal, setPrimaryGoal] = useState<string>('reading');

  if (!isOpen) return null;

  let recommendedCourseId = 'noorani-qaida';
  if (recitationLevel === 'zero' || recitationLevel === 'letters-only') {
    recommendedCourseId = 'noorani-qaida';
  } else if (recitationLevel === 'reads-no-tajweed') {
    recommendedCourseId = 'quran-reading-tajweed';
  } else if (primaryGoal === 'hifz') {
    recommendedCourseId = 'quran-memorisation-hifz';
  } else if (primaryGoal === 'arabic') {
    recommendedCourseId = 'spoken-quranic-arabic';
  } else if (primaryGoal === 'akhlaq') {
    recommendedCourseId = 'islamic-studies-akhlaq';
  } else {
    recommendedCourseId = 'quran-reading-tajweed';
  }

  const recommendedCourse = COURSES_DATA.find((c) => c.id === recommendedCourseId) || COURSES_DATA[0];

  const handleFinish = () => {
    onClose();
    onSelectRecommendedCourse(recommendedCourse);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#072026]/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#FBF9F4] rounded-2xl border border-[#E8E2D5] shadow-2xl overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-white border-b border-[#E8E2D5] flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D7E6C] block mb-1">
              Interactive Academic Assessment
            </span>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#072026]">
              Find Your Ideal Learning Path
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#6B7280] hover:text-[#072026] hover:bg-[#F4EFE6] rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-[#E8E2D5] h-1.5">
          <div 
            className="bg-[#0D7E6C] h-1.5 transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {step === 1 && (
            <div>
              <span className="text-xs text-[#6B7280] font-medium block mb-2">Step 1 of 3</span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#072026] mb-4">
                Who will be taking the lessons?
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  { id: 'child', label: 'Young Child (Age 4 - 8)', desc: 'Gentle, visual, highly patient pace' },
                  { id: 'youth', label: 'School Student (Age 9 - 16)', desc: 'Structured progress around school hours' },
                  { id: 'sister', label: 'Adult Sister', desc: 'Private 1-on-1 with dedicated female Ustadha' },
                  { id: 'brother', label: 'Adult Brother', desc: 'Flexible early morning or late evening slots' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setStudentType(item.id)}
                    className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                      studentType === item.id
                        ? 'border-[#0D7E6C] bg-white ring-2 ring-[#0D7E6C]/20 shadow-sm'
                        : 'border-[#E8E2D5] bg-white/70 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-serif font-bold text-base text-[#072026]">{item.label}</span>
                      {studentType === item.id && <Check className="w-4 h-4 text-[#0D7E6C]" />}
                    </div>
                    <span className="text-xs text-[#6B7280]">{item.desc}</span>
                  </button>
                ))}
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-[#0D7E6C] hover:bg-[#0A6456] rounded-md transition-colors cursor-pointer"
                >
                  <span>Next: Current Level</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <span className="text-xs text-[#6B7280] font-medium block mb-2">Step 2 of 3</span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#072026] mb-4">
                What is the student&apos;s current recitation capability?
              </h3>
              
              <div className="space-y-3 mb-6">
                {[
                  { id: 'zero', title: 'Absolute Beginner (Starting from zero)', desc: 'Cannot recognize Arabic alphabets yet' },
                  { id: 'letters-only', title: 'Knows single letters slowly', desc: 'Recognizes some letters but cannot join them into words' },
                  { id: 'reads-no-tajweed', title: 'Can read Qur\'an but hesitant on Tajweed', desc: 'Struggles with pronunciation, Makharij, and stopping signs' },
                  { id: 'fluent', title: 'Reads fluently with basic Tajweed', desc: 'Ready for memorization (Hifz) or learning Arabic grammar' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setRecitationLevel(item.id)}
                    className={`w-full p-4 rounded-xl text-left border transition-all cursor-pointer ${
                      recitationLevel === item.id
                        ? 'border-[#0D7E6C] bg-white ring-2 ring-[#0D7E6C]/20 shadow-sm'
                        : 'border-[#E8E2D5] bg-white/70 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-serif font-bold text-sm sm:text-base text-[#072026]">{item.title}</span>
                      {recitationLevel === item.id && <Check className="w-4 h-4 text-[#0D7E6C]" />}
                    </div>
                    <span className="text-xs text-[#6B7280]">{item.desc}</span>
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#4B5563] hover:text-[#072026] cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-[#0D7E6C] hover:bg-[#0A6456] rounded-md transition-colors cursor-pointer"
                >
                  <span>Next: Main Goal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <span className="text-xs text-[#6B7280] font-medium block mb-2">Step 3 of 3</span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#072026] mb-4">
                What is your primary educational priority?
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  { id: 'reading', title: 'Flawless Qur\'an Recitation', desc: 'Build steady confidence and classical Tajweed' },
                  { id: 'hifz', title: 'Qur\'an Memorisation (Hifz)', desc: 'Structured retention of Surahs or full Juz' },
                  { id: 'arabic', title: 'Understanding Arabic & Duas', desc: 'Direct linguistic comprehension in Tamil' },
                  { id: 'akhlaq', title: 'Character & Islamic Manners', desc: 'Salah practice, Hadith, and prophetic values' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setPrimaryGoal(item.id)}
                    className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                      primaryGoal === item.id
                        ? 'border-[#0D7E6C] bg-white ring-2 ring-[#0D7E6C]/20 shadow-sm'
                        : 'border-[#E8E2D5] bg-white/70 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-serif font-bold text-sm text-[#072026]">{item.title}</span>
                      {primaryGoal === item.id && <Check className="w-4 h-4 text-[#0D7E6C]" />}
                    </div>
                    <span className="text-xs text-[#6B7280]">{item.desc}</span>
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <button
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#4B5563] hover:text-[#072026] cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  onClick={() => setStep(4)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-[#0D7E6C] hover:bg-[#0A6456] rounded-md transition-colors cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>View Recommended Course</span>
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="text-center py-2">
              <div className="w-12 h-12 rounded-full bg-[#EBF5F0] text-[#0D7E6C] flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-6 h-6" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-[#0D7E6C] block mb-1">
                Your Tailored Recommendation
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#072026] mb-3">
                {recommendedCourse.title}
              </h3>
              <p className="text-sm text-[#4B5563] max-w-lg mx-auto mb-6">
                {recommendedCourse.tagline}
              </p>

              {/* Plan Recommendation Box */}
              <div className="p-5 bg-white rounded-xl border border-[#E8E2D5] text-left max-w-lg mx-auto mb-6 shadow-sm">
                <div className="grid grid-cols-2 gap-4 text-xs mb-3 pb-3 border-b border-[#E8E2D5]">
                  <div>
                    <span className="text-[#6B7280] block">Suggested Schedule:</span>
                    <span className="font-bold text-[#072026]">{recommendedCourse.frequency}</span>
                  </div>
                  <div>
                    <span className="text-[#6B7280] block">Estimated Duration:</span>
                    <span className="font-bold text-[#072026]">{recommendedCourse.duration}</span>
                  </div>
                </div>
                <div className="text-xs text-[#0D7E6C] font-medium">
                  ✓ Teacher matched for: {studentType === 'sister' ? 'Dedicated Female Ustadha' : 'Certified Instructors with Tamil fluency'}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="text-xs font-semibold text-[#4B5563] hover:text-[#072026] py-2 px-4 cursor-pointer"
                >
                  Retake Assessment
                </button>
                <button
                  onClick={handleFinish}
                  className="px-6 py-3 text-sm font-semibold text-white bg-[#0D7E6C] hover:bg-[#0A6456] rounded-md shadow-md transition-all cursor-pointer"
                >
                  Explore this Course Syllabus →
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
