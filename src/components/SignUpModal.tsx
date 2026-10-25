import React, { useState } from 'react';
import { Course, StudentSignUpData } from '../types';
import { COURSES_DATA } from '../data/academyData';
import { X, CheckCircle, ArrowRight, User, Calendar, Users, Phone, Mail, MapPin, MessageCircle, ShieldCheck, Printer } from 'lucide-react';

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCourse?: Course | null;
}

export const SignUpModal: React.FC<SignUpModalProps> = ({
  isOpen,
  onClose,
  initialCourse
}) => {
  const [formData, setFormData] = useState<StudentSignUpData>({
    name: '',
    age: '',
    gender: 'male',
    fatherName: '',
    phone: '',
    countryCode: '+91',
    email: '',
    courseId: initialCourse ? initialCourse.id : 'noorani-qaida',
    cityCountry: '',
    preferredSlot: 'evening',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submittedData, setSubmittedData] = useState<StudentSignUpData | null>(null);
  const [regNumber, setRegNumber] = useState<string>('');

  React.useEffect(() => {
    if (initialCourse) {
      setFormData((prev) => ({ ...prev, courseId: initialCourse.id }));
    }
  }, [initialCourse]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.age || !formData.fatherName.trim() || !formData.phone.trim()) {
      return;
    }

    const generatedRegNum = `TUI-${Math.floor(100000 + Math.random() * 900000)}`;
    const finalData = {
      ...formData,
      id: generatedRegNum,
      registrationDate: new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      })
    };

    setRegNumber(generatedRegNum);
    setSubmittedData(finalData);
    setIsSubmitted(true);

    // Save to localStorage for record keeping
    try {
      const existing = JSON.parse(localStorage.getItem('thaleem_students') || '[]');
      existing.push(finalData);
      localStorage.setItem('thaleem_students', JSON.stringify(existing));
    } catch {
      // safe fallback
    }
  };

  const selectedCourse = COURSES_DATA.find((c) => c.id === (submittedData ? submittedData.courseId : formData.courseId)) || COURSES_DATA[0];

  const whatsappMessage = submittedData ? encodeURIComponent(
`*New Student Registration - Tha'leem-Ul-Islam*
Reg No: ${regNumber}
Student Name: ${submittedData.name}
Age: ${submittedData.age}
Gender: ${submittedData.gender === 'male' ? 'Male (Boy)' : 'Female (Girl)'}
Father's Name: ${submittedData.fatherName}
Course: ${selectedCourse.title}
WhatsApp: ${submittedData.countryCode} ${submittedData.phone}
Email: ${submittedData.email || 'N/A'}
City/Country: ${submittedData.cityCountry || 'N/A'}`
  ) : '';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-[#072026]/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#FBF9F4] rounded-2xl border border-[#E8E2D5] shadow-2xl overflow-hidden my-4 sm:my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Gold Accent Bar */}
        <div className="h-2 w-full bg-[#0D7E6C]" />

        {/* Modal Header */}
        <div className="p-5 sm:p-7 bg-white border-b border-[#E8E2D5] flex items-start justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-[#0D7E6C] bg-black shrink-0 hidden sm:flex items-center justify-center">
              <img
                src="./assets/aistudio/WhatsApp_Image_2026-10-18_at_7.29.42_AM_6d7265db.jpeg"
                alt="Tha'leem-Ul-Islam Logo"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D7E6C] block mb-0.5">
                Online Student Admissions · மாணவர் சேர்க்கை
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#072026]">
                Student Registration Form
              </h2>
              <p className="text-xs text-[#6B7280]">
                Register student details below to begin structured Qur&apos;an &amp; Arabic classes.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#6B7280] hover:text-[#072026] hover:bg-[#F4EFE6] rounded-full transition-colors cursor-pointer"
            aria-label="Close form"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Direct Contact Notice */}
        <div className="bg-[#EBF5F0] px-5 sm:px-7 py-2.5 border-b border-[#D5E8DF] flex flex-wrap items-center justify-between text-xs text-[#075E54] gap-2">
          <span className="flex items-center gap-1.5 font-medium">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span>Admissions Desk: <strong>+91 81242 06223</strong></span>
          </span>
          <a
            href="mailto:mohamedthalha323@gmail.com"
            className="text-[#3E4946] hover:text-[#072026] hover:underline"
          >
            mohamedthalha323@gmail.com
          </a>
        </div>

        {/* Form Body */}
        <div className="p-5 sm:p-7 max-h-[72vh] overflow-y-auto">
          {isSubmitted && submittedData ? (
            /* Successful Registration Receipt Screen */
            <div className="text-center py-4">
              <div className="w-16 h-16 rounded-full bg-[#EBF5F0] text-[#0D7E6C] flex items-center justify-center mx-auto mb-3 shadow-inner">
                <CheckCircle className="w-8 h-8" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-[#0D7E6C] block mb-1">
                Admission Form Submitted Successfully
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#072026] mb-2">
                Alhamdulillah! Registration Complete
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5563] max-w-md mx-auto mb-5">
                Student <strong className="text-[#072026]">{submittedData.name}</strong> has been registered with Tha&apos;leem-Ul-Islam Academy.
              </p>

              {/* Student Registration Card Slip */}
              <div className="bg-white rounded-xl border border-[#E8E2D5] p-5 text-left max-w-lg mx-auto mb-6 shadow-sm relative">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E8E2D5]">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#6B7280] block">Registration ID</span>
                    <span className="font-mono text-sm font-bold text-[#0D7E6C]">{regNumber}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-bold text-[#6B7280] block">Date</span>
                    <span className="text-xs font-medium text-[#072026]">{submittedData.registrationDate}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-xs">
                  <div>
                    <span className="text-[#6B7280] block">Student Name:</span>
                    <span className="font-bold text-[#072026] text-sm">{submittedData.name}</span>
                  </div>

                  <div>
                    <span className="text-[#6B7280] block">Father&apos;s Name:</span>
                    <span className="font-bold text-[#072026] text-sm">{submittedData.fatherName}</span>
                  </div>

                  <div>
                    <span className="text-[#6B7280] block">Age &amp; Gender:</span>
                    <span className="font-semibold text-[#072026]">
                      {submittedData.age} Years · {submittedData.gender === 'male' ? 'Male' : 'Female'}
                    </span>
                  </div>

                  <div>
                    <span className="text-[#6B7280] block">Course:</span>
                    <span className="font-semibold text-[#0D7E6C]">{selectedCourse.title}</span>
                  </div>

                  <div>
                    <span className="text-[#6B7280] block">WhatsApp Contact:</span>
                    <span className="font-semibold text-[#072026]">{submittedData.countryCode} {submittedData.phone}</span>
                  </div>

                  <div>
                    <span className="text-[#6B7280] block">Email:</span>
                    <span className="font-semibold text-[#072026] truncate block">{submittedData.email || 'N/A'}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E8E2D5] flex items-center justify-between text-[11px] text-[#6B7280]">
                  <span>Preferred Slot: <strong className="text-[#072026] capitalize">{submittedData.preferredSlot}</strong></span>
                  <span className="text-[#0D7E6C] font-semibold">Tamil &amp; English bilingual</span>
                </div>
              </div>

              {/* Instant Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/918124206223?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-semibold rounded-md shadow-md transition-all inline-flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                  <span>Send Registration to WhatsApp (+91 81242 06223)</span>
                </a>

                <button
                  onClick={() => {
                    window.print();
                  }}
                  className="w-full sm:w-auto px-5 py-3 bg-white hover:bg-[#F4EFE6] text-[#072026] border border-[#E8E2D5] text-sm font-semibold rounded-md transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Printer className="w-4 h-4 text-[#6B7280]" />
                  <span>Print Slip</span>
                </button>

                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="w-full sm:w-auto px-5 py-3 bg-[#0D7E6C] hover:bg-[#0A6456] text-white text-sm font-semibold rounded-md transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            /* Sign Up Form with Name, Age, Gender, Father */
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              
              {/* Row 1: Student Name & Age */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4">
                <div className="sm:col-span-8">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#072026] mb-1.5">
                    Student Full Name * (பெயர்)
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#9CA3AF] absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mohamed Aadhil / Fathima Rida"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-11 pl-10 pr-3 bg-white border border-[#D1D5DB] rounded-lg text-sm text-[#072026] focus:outline-none focus:ring-2 focus:ring-[#0D7E6C]/30 focus:border-[#0D7E6C]"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#072026] mb-1.5">
                    Age * (வயது)
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#9CA3AF] absolute left-3.5 top-3.5" />
                    <input
                      type="number"
                      required
                      min="4"
                      max="80"
                      placeholder="e.g. 8"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      className="w-full h-11 pl-10 pr-3 bg-white border border-[#D1D5DB] rounded-lg text-sm text-[#072026] focus:outline-none focus:ring-2 focus:ring-[#0D7E6C]/30 focus:border-[#0D7E6C]"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Gender & Father's Name */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4">
                
                {/* Gender (Male / Female) */}
                <div className="sm:col-span-5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#072026] mb-1.5">
                    Gender * (பாலினம்)
                  </label>
                  <div className="grid grid-cols-2 gap-2 h-11">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, gender: 'male' })}
                      className={`flex items-center justify-center gap-1.5 rounded-lg border text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                        formData.gender === 'male'
                          ? 'bg-[#0D7E6C] text-white border-[#0A6456] shadow-sm'
                          : 'bg-white text-[#4B5563] border-[#D1D5DB] hover:bg-[#F4EFE6]'
                      }`}
                    >
                      <span>Male (ஆண்)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, gender: 'female' })}
                      className={`flex items-center justify-center gap-1.5 rounded-lg border text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                        formData.gender === 'female'
                          ? 'bg-[#0D7E6C] text-white border-[#0A6456] shadow-sm'
                          : 'bg-white text-[#4B5563] border-[#D1D5DB] hover:bg-[#F4EFE6]'
                      }`}
                    >
                      <span>Female (பெண்)</span>
                    </button>
                  </div>
                </div>

                {/* Father's Name */}
                <div className="sm:col-span-7">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#072026] mb-1.5">
                    Father&apos;s Name * (தந்தை பெயர்)
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-[#9CA3AF] absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mohamed Thalha / Abdul Rahman"
                      value={formData.fatherName}
                      onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
                      className="w-full h-11 pl-10 pr-3 bg-white border border-[#D1D5DB] rounded-lg text-sm text-[#072026] focus:outline-none focus:ring-2 focus:ring-[#0D7E6C]/30 focus:border-[#0D7E6C]"
                    />
                  </div>
                </div>

              </div>

              {/* Row 3: Course Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#072026] mb-1.5">
                  Select Desired Course * (பாடநெறி)
                </label>
                <select
                  value={formData.courseId}
                  onChange={(e) => setFormData({ ...formData, courseId: e.target.value })}
                  className="w-full h-11 px-3 bg-white border border-[#D1D5DB] rounded-lg text-sm text-[#072026] focus:outline-none focus:ring-2 focus:ring-[#0D7E6C]/30 focus:border-[#0D7E6C]"
                >
                  {COURSES_DATA.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.title} {c.tamilTitle ? `(${c.tamilTitle})` : ''} — {c.targetAudience}
                    </option>
                  ))}
                </select>
              </div>

              {/* Row 4: WhatsApp Number & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#072026] mb-1.5">
                    WhatsApp Number * (வாட்ஸ்அப் எண்)
                  </label>
                  <div className="flex">
                    <select
                      value={formData.countryCode}
                      onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                      className="h-11 px-2.5 bg-[#F4EFE6] border border-r-0 border-[#D1D5DB] rounded-l-lg text-xs font-semibold text-[#072026] focus:outline-none"
                    >
                      <option value="+91">India (+91)</option>
                      <option value="+94">Sri Lanka (+94)</option>
                      <option value="+65">Singapore (+65)</option>
                      <option value="+60">Malaysia (+60)</option>
                      <option value="+971">UAE (+971)</option>
                      <option value="+44">UK (+44)</option>
                      <option value="+1">USA / Canada (+1)</option>
                      <option value="+61">Australia (+61)</option>
                      <option value="+966">Saudi Arabia (+966)</option>
                    </select>
                    <input
                      type="tel"
                      required
                      placeholder="98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full h-11 px-3 bg-white border border-[#D1D5DB] rounded-r-lg text-sm text-[#072026] focus:outline-none focus:ring-2 focus:ring-[#0D7E6C]/30 focus:border-[#0D7E6C]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#072026] mb-1.5">
                    Email Address (மின்னஞ்சல்)
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#9CA3AF] absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      placeholder="parent@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full h-11 pl-10 pr-3 bg-white border border-[#D1D5DB] rounded-lg text-sm text-[#072026] focus:outline-none focus:ring-2 focus:ring-[#0D7E6C]/30 focus:border-[#0D7E6C]"
                    />
                  </div>
                </div>
              </div>

              {/* Row 5: City / Location & Preferred Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#072026] mb-1.5">
                    City &amp; Country (வசிக்கும் இடம்)
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-[#9CA3AF] absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      placeholder="e.g. Chennai / Colombo / London / Singapore"
                      value={formData.cityCountry}
                      onChange={(e) => setFormData({ ...formData, cityCountry: e.target.value })}
                      className="w-full h-11 pl-10 pr-3 bg-white border border-[#D1D5DB] rounded-lg text-sm text-[#072026] focus:outline-none focus:ring-2 focus:ring-[#0D7E6C]/30 focus:border-[#0D7E6C]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#072026] mb-1.5">
                    Preferred Timing (விருப்பமான நேரம்)
                  </label>
                  <select
                    value={formData.preferredSlot}
                    onChange={(e) => setFormData({ ...formData, preferredSlot: e.target.value })}
                    className="w-full h-11 px-3 bg-white border border-[#D1D5DB] rounded-lg text-sm text-[#072026] focus:outline-none focus:ring-2 focus:ring-[#0D7E6C]/30 focus:border-[#0D7E6C]"
                  >
                    <option value="evening">Weekday Evenings (மாலை நேரம்)</option>
                    <option value="weekend">Weekends (சனி / ஞாயிறு)</option>
                    <option value="morning">Morning Slots (காலை நேரம்)</option>
                    <option value="flexible">Flexible / Any slot</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full h-12 inline-flex items-center justify-center gap-2 bg-[#0D7E6C] hover:bg-[#0A6456] text-white font-semibold rounded-lg shadow-md transition-all duration-200 cursor-pointer active:scale-[0.99]"
                >
                  <span>Complete Student Registration</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-center gap-2 mt-2.5 text-[11px] text-[#6B7280]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0D7E6C]" />
                  <span>Your details are kept completely private and confidential</span>
                </div>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
