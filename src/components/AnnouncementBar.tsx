import React from 'react';
import { Globe, Clock, Mail, MessageCircle } from 'lucide-react';

interface AnnouncementBarProps {
  onExploreCourses: () => void;
  onOpenSignUp: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onExploreCourses, onOpenSignUp }) => {
  return (
    <div className="bg-[#EBF5F0] border-b border-[#D5E8DF] text-[#134E48] text-xs font-medium py-2 px-4 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-center sm:text-left flex-wrap">
          <span className="text-[#0D7E6C] font-serif font-bold text-sm leading-none">✦</span>
          <span>
            Online Qur&apos;an &amp; Arabic learning for Tamil-speaking Muslims worldwide
          </span>
          <span className="hidden md:inline-block text-[#0D7E6C]/50 font-normal">|</span>
          <span className="hidden md:inline-flex items-center gap-1.5 text-[#006354]">
            <Globe className="w-3.5 h-3.5" />
            UK · Singapore · UAE · USA · India · Sri Lanka
          </span>
        </div>

        <div className="flex items-center gap-3.5 text-xs flex-wrap justify-center">
          <a
            href="https://wa.me/918124206223"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-[#075E54] hover:text-[#0D7E6C] transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]" />
            <span>WhatsApp: +91 81242 06223</span>
          </a>

          <span className="text-[#0D7E6C]/30 hidden sm:inline">|</span>

          <a
            href="mailto:mohamedthalha323@gmail.com"
            className="hidden lg:inline-flex items-center gap-1 text-[#3E4946] hover:text-[#072026] transition-colors"
          >
            <Mail className="w-3 h-3 text-[#0D7E6C]" />
            <span>mohamedthalha323@gmail.com</span>
          </a>

          <span className="text-[#0D7E6C]/30 hidden sm:inline">|</span>

          <button
            onClick={onOpenSignUp}
            className="text-[#0D7E6C] font-bold hover:text-[#0A5D50] hover:underline transition-colors cursor-pointer"
          >
            Registration Form ↗
          </button>
        </div>
      </div>
    </div>
  );
};
