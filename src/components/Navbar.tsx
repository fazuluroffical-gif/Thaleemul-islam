import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  onOpenAssessment: () => void;
  onExploreCourses: () => void;
  onOpenSignUp: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  onOpenAssessment,
  onExploreCourses,
  onOpenSignUp
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'courses', label: 'Our Courses' },
    { id: 'about', label: 'About Us' },
    { id: 'method', label: 'Our Method' },
    { id: 'tajweed-tool', label: 'Tajweed Studio' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F4]/95 backdrop-blur-md border-b border-[#E8E2D5] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Official Logo Crest and Brand Wordmark */}
          <button
            onClick={() => {
              onSelectTab('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 text-left group cursor-pointer whitespace-nowrap shrink-0 focus:outline-none"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#0D7E6C] shadow-sm bg-black shrink-0 flex items-center justify-center group-hover:border-[#0F937E] transition-colors">
              <img
                src="./assets/aistudio/WhatsApp_Image_2026-10-18_at_7.29.42_AM_6d7265db.jpeg"
                alt="Tha'leem-Ul-Islam Official Logo"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#072026] group-hover:text-[#0D7E6C] transition-colors block leading-tight">
                Tha&apos;leem-Ul-Islam
              </span>
              <span className="text-[11px] font-medium tracking-wider text-[#6B7280] uppercase block">
                Online Academy · تعليم الإسلام
              </span>
            </div>
          </button>

          {/* Zone 2: Concise single-line text links */}
          <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-[#374151]">
            {navLinks.map((link) => {
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => {
                    onSelectTab(link.id);
                    if (link.id === 'home') {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className={`relative py-2 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    isActive
                      ? 'text-[#0D7E6C] font-semibold'
                      : 'hover:text-[#072026]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0D7E6C] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Actions with WhatsApp and Sign Up */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <a
              href="https://wa.me/918124206223"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#075E54] bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 rounded-md transition-colors whitespace-nowrap shrink-0"
              title="Chat on WhatsApp"
            >
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenAssessment}
              className="text-xs font-semibold text-[#0D7E6C] hover:text-[#072026] py-2 px-2.5 rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              Course Finder
            </button>

            <button
              onClick={onOpenSignUp}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#0D7E6C] hover:bg-[#0A6456] rounded-md shadow-sm transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 active:scale-[0.98]"
            >
              <span>Registration</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="https://wa.me/918124206223"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1.5 text-xs font-semibold text-white bg-[#25D366] rounded-md whitespace-nowrap"
            >
              WhatsApp
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#072026] hover:bg-[#F4EFE6] rounded-md transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#FBF9F4] border-b border-[#E8E2D5] px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onSelectTab(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                  currentTab === link.id
                    ? 'bg-[#EBF5F0] text-[#0D7E6C] font-semibold'
                    : 'text-[#374151] hover:bg-[#F4EFE6]'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 border-t border-[#E8E2D5] flex flex-col gap-2">
              <a
                href="https://wa.me/918124206223"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 px-4 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-md shadow-sm transition-colors"
              >
                Chat on WhatsApp (+91 81242 06223)
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAssessment();
                }}
                className="w-full text-center py-2.5 px-4 text-sm font-semibold text-[#0D7E6C] border border-[#0D7E6C]/30 rounded-md"
              >
                Course Finder Quiz
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSignUp();
                }}
                className="w-full text-center py-2.5 px-4 text-sm font-semibold text-white bg-[#0D7E6C] rounded-md shadow-sm"
              >
                Student Registration Form ↗
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onExploreCourses();
                }}
                className="w-full text-center py-2.5 px-4 text-sm font-semibold text-[#072026] bg-[#F4EFE6] border border-[#E8E2D5] rounded-md"
              >
                Explore Courses
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
