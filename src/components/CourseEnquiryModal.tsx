import React, { useState } from 'react';
import { Course, BookingSubmission } from '../types';
import { COURSES_DATA } from '../data/academyData';
import { X, CheckCircle, ArrowRight, ShieldCheck, Mail, Phone } from 'lucide-react';

interface CourseEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCourse?: Course | null;
}

export const CourseEnquiryModal: React.FC<CourseEnquiryModalProps> = ({
  isOpen,
  onClose,
  initialCourse
}) => {
  const [formData, setFormData] = useState<BookingSubmission>({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    countryCode: '+44',
    courseId: initialCourse ? initialCourse.id : 'noorani-qaida',
    ageGroup: '7-12',
    tutorPreference: 'no-preference',
    languagePreference: 'english-tamil',
    timezone: 'GMT (UK)',
    preferredDays: ['Weekend'],
    preferredSlot: 'evening',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  React.useEffect(() => {
    if (initialCourse) {
      setFormData((prev) => ({ ...prev, courseId: initialCourse.id }));
    }
  }, [initialCourse]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.studentName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      return;
    }
    setIsSubmitted(true);
  };

  const selectedCourse = COURSES_DATA.find((c) => c.id === formData.courseId) || COURSES_DATA[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#072026]/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#FBF9F4] rounded-2xl border border-[#E8E2D5] shadow-2xl overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Bar */}
        <div className="h-2 w-full bg-[#0D7E6C]" />

        {/* Modal Header */}
        <div className="p-6 bg-white border-b border-[#E8E2D5] flex items-start justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D7E6C] block mb-1">
              Course Admissions &amp; Enquiries
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#072026]">
              Enquire About {selectedCourse.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#4B5563] mt-1">
              Submit your enquiry or reach out directly on WhatsApp at <strong className="text-[#072026]">+91 81242 06223</strong>.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#6B7280] hover:text-[#072026] hover:bg-[#F4EFE6] rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Contact Pill Bar */}
        <div className="bg-[#EBF5F0] px-6 py-2.5 border-b border-[#D5E8DF] flex flex-wrap items-center justify-between text-xs text-[#075E54] gap-2">
          <a
            href="https://wa.me/918124206223"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-bold hover:underline"
          >
            <span>💬 Direct WhatsApp: +91 81242 06223</span>
          </a>
          <a
            href="mailto:mohamedthalha323@gmail.com"
            className="hover:underline text-[#3E4946]"
          >
            ✉️ mohamedthalha323@gmail.com
          </a>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 max-h-[72vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-[#EBF5F0] text-[#0D7E6C] flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-[#0D7E6C] block mb-1">
                Enquiry Successfully Received
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#072026] mb-2">
                Jazakallahu Khair, {formData.parentName || formData.studentName}
              </h3>
              <p className="text-sm text-[#4B5563] max-w-md mx-auto mb-6">
                Our academic coordinator will reach out to you on WhatsApp at{' '}
                <span className="font-semibold text-[#072026]">
                  {formData.countryCode} {formData.phone}
                </span>{' '}
                or via email (<span className="font-semibold text-[#072026]">{formData.email}</span>).
              </p>

              {/* Summary Card */}
              <div className="bg-white rounded-xl border border-[#E8E2D5] p-5 text-left max-w-md mx-auto mb-6 shadow-sm text-xs space-y-2">
                <div className="flex justify-between border-b border-[#E8E2D5]/70 pb-2">
                  <span className="text-[#6B7280]">Course:</span>
                  <span className="font-bold text-[#072026]">{selectedCourse.title}</span>
                </div>
                <div className="flex justify-between border-b border-[#E8E2D5]/70 pb-2">
                  <span className="text-[#6B7280]">Student:</span>
                  <span className="font-semibold text-[#072026]">{formData.studentName}</span>
                </div>
                <div className="flex justify-between border-b border-[#E8E2D5]/70 pb-2">
                  <span className="text-[#6B7280]">Timezone:</span>
                  <span className="font-semibold text-[#072026]">{formData.timezone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B7280]">Medium:</span>
                  <span className="font-semibold text-[#072026]">Tamil &amp; English bilingual</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/918124206223?text=${encodeURIComponent(
                    `Assalamu Alaikum, I have submitted an enquiry for ${selectedCourse.title} for student ${formData.studentName}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-semibold rounded-md shadow-sm transition-colors inline-flex items-center justify-center gap-2"
                >
                  <span>Chat on WhatsApp Now</span>
                </a>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#0D7E6C] hover:bg-[#0A6456] text-white text-sm font-semibold rounded-md shadow-sm transition-colors cursor-pointer"
                >
                  Done &amp; Return to Home
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Course Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#072026] mb-1.5">
                  Selected Course
                </label>
                <select
                  value={formData.courseId}
                  onChange={(e) => setFormData({ ...formData, courseId: e.target.value })}
                  className="w-full h-11 px-3 bg-white border border-[#D1D5DB] rounded-lg text-sm text-[#072026] focus:outline-none focus:ring-2 focus:ring-[#0D7E6C]/30 focus:border-[#0D7E6C]"
                >
                  {COURSES_DATA.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.title} — ({c.targetAudience})
                    </option>
                  ))}
                </select>
              </div>

              {/* Names */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#072026] mb-1.5">
                    Student&apos;s Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Zayd / Maryam"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    className="w-full h-11 px-3 bg-white border border-[#D1D5DB] rounded-lg text-sm text-[#072026] focus:outline-none focus:ring-2 focus:ring-[#0D7E6C]/30 focus:border-[#0D7E6C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#072026] mb-1.5">
                    Parent / Contact Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Brother Mohamed / Sister Ayesha"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full h-11 px-3 bg-white border border-[#D1D5DB] rounded-lg text-sm text-[#072026] focus:outline-none focus:ring-2 focus:ring-[#0D7E6C]/30 focus:border-[#0D7E6C]"
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#072026] mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-11 px-3 bg-white border border-[#D1D5DB] rounded-lg text-sm text-[#072026] focus:outline-none focus:ring-2 focus:ring-[#0D7E6C]/30 focus:border-[#0D7E6C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#072026] mb-1.5">
                    WhatsApp Number *
                  </label>
                  <div className="flex">
                    <select
                      value={formData.countryCode}
                      onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                      className="h-11 px-2.5 bg-[#F4EFE6] border border-r-0 border-[#D1D5DB] rounded-l-lg text-xs font-semibold text-[#072026] focus:outline-none"
                    >
                      <option value="+44">UK (+44)</option>
                      <option value="+65">SG (+65)</option>
                      <option value="+971">UAE (+971)</option>
                      <option value="+1">USA/CA (+1)</option>
                      <option value="+91">IN (+91)</option>
                      <option value="+94">LK (+94)</option>
                      <option value="+60">MY (+60)</option>
                      <option value="+61">AU (+61)</option>
                    </select>
                    <input
                      type="tel"
                      required
                      placeholder="7123 456789"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full h-11 px-3 bg-white border border-[#D1D5DB] rounded-r-lg text-sm text-[#072026] focus:outline-none focus:ring-2 focus:ring-[#0D7E6C]/30 focus:border-[#0D7E6C]"
                    />
                  </div>
                </div>
              </div>

              {/* Timezone & Language Preference */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#072026] mb-1.5">
                    Your Local Timezone
                  </label>
                  <select
                    value={formData.timezone}
                    onChange={(e) => setFormData({ ...formData, timezone: e.target.value })}
                    className="w-full h-11 px-3 bg-white border border-[#D1D5DB] rounded-lg text-sm text-[#072026] focus:outline-none focus:ring-2 focus:ring-[#0D7E6C]/30 focus:border-[#0D7E6C]"
                  >
                    <option value="GMT (UK / London)">London / UK (GMT/BST)</option>
                    <option value="SGT (Singapore / Malaysia)">Singapore &amp; Malaysia (SGT)</option>
                    <option value="GST (Dubai / UAE / Gulf)">Gulf &amp; UAE (GST/AST)</option>
                    <option value="IST (India / Sri Lanka)">India &amp; Sri Lanka (IST)</option>
                    <option value="EST (US East / Toronto)">US East Coast &amp; Toronto (EST)</option>
                    <option value="CST / PST (US Central &amp; West)">US Central &amp; Pacific (CST/PST)</option>
                    <option value="AEST (Australia / Sydney)">Australia (AEST)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#072026] mb-1.5">
                    Language Medium
                  </label>
                  <select
                    value={formData.languagePreference}
                    onChange={(e) => setFormData({ ...formData, languagePreference: e.target.value as any })}
                    className="w-full h-11 px-3 bg-white border border-[#D1D5DB] rounded-lg text-sm text-[#072026] focus:outline-none focus:ring-2 focus:ring-[#0D7E6C]/30 focus:border-[#0D7E6C]"
                  >
                    <option value="english-tamil">Tamil &amp; English (Bilingual)</option>
                    <option value="tamil">Tamil medium only</option>
                    <option value="english">English medium</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full h-12 inline-flex items-center justify-center gap-2 bg-[#0D7E6C] hover:bg-[#0A6456] text-white font-semibold rounded-lg shadow-sm transition-all duration-200 cursor-pointer active:scale-[0.99]"
                >
                  <span>Submit Course Enquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="flex items-center justify-center gap-2 mt-2.5 text-[11px] text-[#6B7280]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0D7E6C]" />
                  <span>Respectful privacy · Dedicated guidance for every student</span>
                </div>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
