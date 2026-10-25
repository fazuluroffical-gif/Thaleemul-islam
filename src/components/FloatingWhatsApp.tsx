import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState<boolean>(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Friendly Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-[#072026] text-xs font-semibold px-3 py-2 rounded-xl shadow-lg border border-[#E8E2D5] animate-in fade-in slide-in-from-right-4 duration-300">
          <span>Need help? Chat with us on WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#9CA3AF] hover:text-[#4B5563] ml-1 p-0.5 rounded-full"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href="https://wa.me/918124206223"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Tha'leem-Ul-Islam on WhatsApp"
        className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 group relative"
      >
        <MessageCircle className="w-7 h-7 fill-white stroke-none" />
        
        {/* Subtle pulsing beacon */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-300 rounded-full animate-ping opacity-75 pointer-events-none" />
        <span className="absolute top-0.5 right-0.5 w-2.5 h-2.5 bg-white rounded-full border border-[#25D366] pointer-events-none" />
      </a>
    </div>
  );
};
