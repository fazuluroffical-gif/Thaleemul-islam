import React from 'react';
import { Mail, Phone, Globe, ArrowUp, ArrowRight, MessageCircle } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: string) => void;
  onOpenAssessment: () => void;
  onExploreCourses: () => void;
  onOpenSignUp: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectTab,
  onOpenAssessment,
  onExploreCourses,
  onOpenSignUp
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#072026] text-[#E7F3F5] border-t border-[#163840]">
      {/* Top Pre-Footer Callout */}
      <div className="border-b border-[#163840] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#10B981] block mb-2">
              DISCOVER OUR PROGRAMMES
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
              Ready to bring the light of the Qur&apos;an into your home?
            </h3>
            <p className="text-sm text-[#94A3B8] max-w-xl">
              Connect directly with our admissions coordinator on WhatsApp or explore our structured course pathways.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3.5 shrink-0">
            <button
              onClick={onOpenSignUp}
              className="px-6 py-3.5 bg-[#0D7E6C] hover:bg-[#0F937E] text-white text-sm font-semibold rounded-md shadow-md transition-all cursor-pointer active:scale-[0.98] inline-flex items-center gap-2"
            >
              <span>Student Registration Form</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="https://wa.me/918124206223"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-semibold rounded-md shadow-md transition-all cursor-pointer active:scale-[0.98] inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Admissions</span>
            </a>
            <button
              onClick={onExploreCourses}
              className="px-5 py-3.5 bg-transparent hover:bg-[#0A2830] text-[#E7F3F5] border border-[#163840] text-sm font-semibold rounded-md transition-colors cursor-pointer"
            >
              Course Pathways
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info with Official Logo */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-[#0D7E6C] bg-black shrink-0 shadow-sm flex items-center justify-center">
                <img
                  src="./assets/aistudio/WhatsApp_Image_2026-10-18_at_7.29.42_AM_6d7265db.jpeg"
                  alt="Tha'leem-Ul-Islam Logo"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div>
                <span className="font-serif text-xl font-bold text-white block leading-tight">
                  Tha&apos;leem-Ul-Islam
                </span>
                <span className="text-[11px] font-medium tracking-wider text-[#94A3B8] uppercase block">
                  Online Quran &amp; Arabic Academy · تعليم الإسلام
                </span>
              </div>
            </div>

            <p className="text-sm text-[#94A3B8] leading-relaxed max-w-sm mb-6">
              A dignified online Islamic educational platform connecting Tamil-speaking Muslim families 
              worldwide with patient, structured, and authentic Qur&apos;anic learning.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
              <Globe className="w-4 h-4 text-[#0D7E6C]" />
              <span>Serving students across global time zones</span>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-serif text-base font-bold text-white mb-4">
              Our Programs
            </h4>
            <ul className="space-y-2.5 text-xs text-[#CBD5E1]">
              <li>
                <button
                  onClick={() => onSelectTab('courses')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Noorani Qaida (Beginners)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('courses')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Qur&apos;an Reading with Tajweed
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('courses')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Qur&apos;an Memorisation (Hifz)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('courses')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Spoken &amp; Quranic Arabic
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('courses')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Islamic Studies &amp; Prophetic Akhlaq
                </button>
              </li>
            </ul>
          </div>

          {/* Academy Links */}
          <div>
            <h4 className="font-serif text-base font-bold text-white mb-4">
              Academy
            </h4>
            <ul className="space-y-2.5 text-xs text-[#CBD5E1]">
              <li>
                <button
                  onClick={() => onSelectTab('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Tha&apos;leem-Ul-Islam
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('method')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  The Academy Difference
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('tajweed-tool')}
                  className="hover:text-white transition-colors cursor-pointer text-[#10B981]"
                >
                  ✦ Interactive Tajweed Studio
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenSignUp}
                  className="hover:text-[#10B981] transition-colors cursor-pointer font-medium text-white"
                >
                  → Student Registration (மாணவர் சேர்க்கை)
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAssessment}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Course Finder Quiz
                </button>
              </li>
            </ul>
          </div>

          {/* Global Support & Contact with real WhatsApp and Email */}
          <div>
            <h4 className="font-serif text-base font-bold text-white mb-4">
              Contact &amp; Admissions
            </h4>
            <div className="space-y-3.5 text-xs text-[#CBD5E1]">
              <a
                href="https://wa.me/918124206223"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-[#25D366] transition-colors group"
              >
                <div className="w-7 h-7 rounded-full bg-[#25D366]/20 flex items-center justify-center shrink-0 group-hover:bg-[#25D366]/30">
                  <Phone className="w-3.5 h-3.5 text-[#25D366]" />
                </div>
                <div>
                  <span className="block font-semibold text-white group-hover:text-[#25D366]">+91 81242 06223</span>
                  <span className="text-[11px] text-[#94A3B8]">Direct WhatsApp Chat ↗</span>
                </div>
              </a>

              <a
                href="mailto:mohamedthalha323@gmail.com"
                className="flex items-center gap-2.5 hover:text-[#0D7E6C] transition-colors group"
              >
                <div className="w-7 h-7 rounded-full bg-[#0D7E6C]/20 flex items-center justify-center shrink-0 group-hover:bg-[#0D7E6C]/30">
                  <Mail className="w-3.5 h-3.5 text-[#0D7E6C]" />
                </div>
                <div>
                  <span className="block font-semibold text-white group-hover:text-[#7ad7c2] break-all">mohamedthalha323@gmail.com</span>
                  <span className="text-[11px] text-[#94A3B8]">Send Email Query</span>
                </div>
              </a>

              <div className="pt-2 text-[11px] text-[#94A3B8] border-t border-[#163840]">
                <span>Flexible schedules matching UK, Gulf, Singapore, North America &amp; IST</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-10 mt-10 border-t border-[#163840] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <p>© {new Date().getFullYear()} Tha&apos;leem-Ul-Islam Online Academy. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors">Privacy &amp; Child Safety</span>
            <span className="hover:text-white transition-colors">Academic Terms</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[#E7F3F5] hover:text-[#10B981] transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
