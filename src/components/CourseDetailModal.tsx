import React from 'react';
import { Course } from '../types';
import { X, CheckCircle, ArrowUpRight } from 'lucide-react';

interface CourseDetailModalProps {
  course: Course | null;
  onClose: () => void;
  onEnquire: (course: Course) => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  course,
  onClose,
  onEnquire
}) => {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#072026]/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-[#FBF9F4] rounded-2xl border border-[#E8E2D5] shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Bar */}
        <div 
          className="h-2 w-full" 
          style={{ backgroundColor: course.accentColor || '#C29B38' }} 
        />

        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-white border-b border-[#E8E2D5] flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D7E6C] bg-[#EBF5F0] px-2.5 py-0.5 rounded-md">
                {course.category}
              </span>
              {course.tamilTitle && (
                <span className="text-xs font-medium text-[#6B7280]">
                  {course.tamilTitle}
                </span>
              )}
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#072026]">
              {course.title}
            </h2>
            <p className="text-sm text-[#4B5563] mt-1">
              {course.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#6B7280] hover:text-[#072026] hover:bg-[#F4EFE6] rounded-full transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[68vh] overflow-y-auto space-y-8">
          
          {/* Key Facts Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-[#F4EFE6] rounded-xl border border-[#E8E2D5] text-xs">
            <div>
              <span className="text-[#6B7280] block mb-1">Target Learner</span>
              <span className="font-semibold text-[#072026]">{course.targetAudience}</span>
            </div>
            <div>
              <span className="text-[#6B7280] block mb-1">Estimated Duration</span>
              <span className="font-semibold text-[#072026]">{course.duration}</span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-[#6B7280] block mb-1">Class Frequency</span>
              <span className="font-semibold text-[#072026]">{course.frequency}</span>
            </div>
          </div>

          {/* Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D7E6C] mb-2">
              Course Overview &amp; Philosophy
            </h4>
            <p className="text-sm sm:text-base text-[#374151] leading-relaxed">
              {course.description}
            </p>
          </div>

          {/* Prerequisites & Recommended For */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-xl border border-[#E8E2D5]">
              <span className="text-xs font-bold text-[#072026] block mb-1">Prerequisites:</span>
              <p className="text-xs text-[#4B5563]">{course.prerequisites}</p>
            </div>
            <div className="p-4 bg-white rounded-xl border border-[#E8E2D5]">
              <span className="text-xs font-bold text-[#072026] block mb-1">Ideal For:</span>
              <ul className="text-xs text-[#4B5563] space-y-1">
                {course.recommendedFor.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Detailed Syllabus Roadmap */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D7E6C] mb-4">
              Comprehensive Syllabus Modules
            </h4>
            <div className="space-y-4">
              {course.syllabus.map((mod, index) => (
                <div key={index} className="p-5 bg-white rounded-xl border border-[#E8E2D5]">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-bold text-[#0D7E6C] bg-[#EBF5F0] w-6 h-6 rounded-full flex items-center justify-center shrink-0">
                      0{index + 1}
                    </span>
                    <h5 className="font-serif font-bold text-base text-[#072026]">
                      {mod.title}
                    </h5>
                  </div>
                  <p className="text-xs text-[#6B7280] mb-3 ml-8">
                    {mod.description}
                  </p>
                  <div className="ml-8 grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {mod.topics.map((t, tidx) => (
                      <div key={tidx} className="flex items-center gap-2 text-xs text-[#374151]">
                        <CheckCircle className="w-3.5 h-3.5 text-[#0D7E6C] shrink-0" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-5 sm:p-6 bg-[#F4EFE6] border-t border-[#E8E2D5] flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#4B5563] hover:text-[#072026] transition-colors cursor-pointer"
          >
            Close Overview
          </button>

          <button
            onClick={() => {
              onClose();
              onEnquire(course);
            }}
            className="inline-flex items-center gap-1.5 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0D7E6C] hover:bg-[#0A6456] rounded-md shadow-sm transition-colors cursor-pointer"
          >
            <span>Enquire About this Course</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
