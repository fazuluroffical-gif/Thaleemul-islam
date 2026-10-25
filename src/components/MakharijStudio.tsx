import React, { useState } from 'react';
import { MAKHAARIJ_LETTERS } from '../data/academyData';
import { MakharijLetter } from '../types';
import { Volume2, ArrowLeft, Info, ArrowRight } from 'lucide-react';

interface MakharijStudioProps {
  onBackToHome: () => void;
  onExploreCourses: () => void;
}

export const MakharijStudio: React.FC<MakharijStudioProps> = ({
  onBackToHome,
  onExploreCourses
}) => {
  const [selectedLetter, setSelectedLetter] = useState<MakharijLetter>(MAKHAARIJ_LETTERS[0]);
  const [isPlayingSound, setIsPlayingSound] = useState<boolean>(false);

  // Play synthesized audio tone or gentle pronunciation preview
  const handlePlayLetter = (letter: MakharijLetter) => {
    setIsPlayingSound(true);

    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        const ctx = new AudioContextClass();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        let freq = 440;
        if (letter.articulationPoint.includes('Throat')) freq = 280;
        else if (letter.articulationPoint.includes('Tongue')) freq = 520;
        else if (letter.articulationPoint.includes('Lips')) freq = 360;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        
        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.45);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 0.5);
      }
    } catch {
      // Fallback
    }

    try {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance(letter.letter);
        utter.lang = 'ar-SA';
        utter.rate = 0.8;
        window.speechSynthesis.speak(utter);
      }
    } catch {
      // Fallback
    }

    setTimeout(() => {
      setIsPlayingSound(false);
    }, 600);
  };

  return (
    <div className="py-12 lg:py-16 bg-[#FBF9F4] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D7E6C] hover:text-[#072026] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Academy Overview</span>
          </button>

          <span className="text-xs uppercase tracking-wider font-bold text-[#C29B38] bg-[#F4EFE6] px-3 py-1 rounded-full border border-[#E8E2D5]">
            Interactive Student Tool
          </span>
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-[2px] bg-[#C29B38]" />
            <span className="text-xs font-bold tracking-[0.14em] uppercase text-[#0D7E6C]">
              MAKHARIJ &amp; PHONETICS STUDIO
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#072026] tracking-tight mb-4">
            Master the Points of{' '}
            <span className="text-[#C29B38] font-serif italic">Articulation</span>
          </h1>

          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
            In our 1-on-1 classes, students learn exactly where each Arabic letter originates 
            in the vocal tract, paired with intuitive Tamil phonetics to eliminate pronunciation hurdles.
          </p>
        </div>

        {/* Letter Selector Grid */}
        <div className="mb-10">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#6B7280] mb-3">
            Select a letter to explore its Makhraj (Origin) &amp; Sound:
          </h2>
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-3 sm:gap-4">
            {MAKHAARIJ_LETTERS.map((item) => {
              const isSelected = selectedLetter.letter === item.letter;
              return (
                <button
                  key={item.letter}
                  onClick={() => {
                    setSelectedLetter(item);
                    handlePlayLetter(item);
                  }}
                  className={`p-3 sm:p-4 rounded-xl border flex flex-col items-center justify-center transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#0D7E6C] text-white border-[#0A6456] shadow-md scale-105'
                      : 'bg-white text-[#072026] border-[#E8E2D5] hover:border-[#0D7E6C]/50 hover:bg-[#F4EFE6]'
                  }`}
                >
                  <span className="font-arabic text-3xl sm:text-4xl font-bold mb-1 leading-none">
                    {item.letter}
                  </span>
                  <span className={`text-[11px] font-medium truncate max-w-full ${
                    isSelected ? 'text-[#D4F3EB]' : 'text-[#6B7280]'
                  }`}>
                    {item.name.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Letter Detail Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Main Visual Display */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-8 border border-[#E8E2D5] shadow-academic flex flex-col items-center justify-between text-center relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="text-xs font-semibold px-2.5 py-1 bg-[#EBF5F0] text-[#0D7E6C] rounded-md">
                {selectedLetter.articulationPoint}
              </span>
            </div>

            <div className="my-6">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-[#F4EFE6] border-2 border-[#E8E2D5] flex items-center justify-center mx-auto mb-4 shadow-inner">
                <span className="font-arabic text-6xl sm:text-7xl font-bold text-[#0D7E6C] leading-none">
                  {selectedLetter.letter}
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#072026] mb-1">
                {selectedLetter.name}
              </h2>
              <p className="font-arabic text-xl text-[#C29B38] font-bold">
                {selectedLetter.arabicName}
              </p>
            </div>

            {/* Pronunciation Trigger */}
            <div className="w-full">
              <button
                onClick={() => handlePlayLetter(selectedLetter)}
                disabled={isPlayingSound}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-[#0D7E6C] hover:bg-[#0A6456] text-white font-semibold rounded-md shadow-sm transition-all cursor-pointer active:scale-[0.98]"
              >
                <Volume2 className={`w-5 h-5 ${isPlayingSound ? 'animate-bounce' : ''}`} />
                <span>{isPlayingSound ? 'Playing Sound...' : 'Listen & Pronounce'}</span>
              </button>
              <p className="text-[11px] text-[#6B7280] mt-2">
                Click to hear native pronunciation &amp; pitch
              </p>
            </div>
          </div>

          {/* Articulation & Tamil Guide */}
          <div className="lg:col-span-7 bg-[#F4EFE6] rounded-2xl p-8 border border-[#E8E2D5] shadow-academic flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-[#0D7E6C]">
                <Info className="w-4 h-4" />
                <span>Point of Articulation (Makhraj)</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#072026] mb-2">
                {selectedLetter.articulationPoint}
              </h3>

              {/* Tamil Explanation box */}
              <div className="p-4 rounded-xl bg-white border border-[#E8E2D5] mb-6">
                <span className="text-xs font-semibold text-[#0D7E6C] block mb-1">
                  தமிழ் வழிகாட்டல் (Tamil Articulation Point):
                </span>
                <p className="text-sm font-medium text-[#072026] leading-relaxed">
                  {selectedLetter.tamilPoint}
                </p>
                <p className="text-xs text-[#6B7280] mt-1">
                  ஒலிப்பு: <span className="font-semibold text-[#0D7E6C]">{selectedLetter.tamilPhonetic}</span>
                </p>
              </div>

              {/* Scholarly Description */}
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#4B5563] mb-2">
                Scholarly Method:
              </h4>
              <p className="text-base text-[#374151] leading-relaxed mb-6">
                {selectedLetter.description}
              </p>

              {/* Word Example */}
              <div className="p-4 rounded-xl bg-white/70 border border-[#E8E2D5] flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#6B7280] block">Quranic Vocabulary Example:</span>
                  <span className="font-arabic text-2xl font-bold text-[#072026]">
                    {selectedLetter.audioExampleWord}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-medium text-[#0D7E6C] block">
                    {selectedLetter.transliteration}
                  </span>
                  <span className="text-xs text-[#4B5563] font-serif italic">
                    Meaning: &ldquo;{selectedLetter.meaning}&rdquo;
                  </span>
                </div>
              </div>
            </div>

            {/* Courses CTA */}
            <div className="mt-8 pt-6 border-t border-[#E8E2D5] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#4B5563]">
                Ready to begin structured recitation with our qualified instructors?
              </span>
              <button
                onClick={onExploreCourses}
                className="shrink-0 inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#0D7E6C] hover:bg-[#0A6456] text-white text-xs font-semibold rounded-md transition-colors cursor-pointer"
              >
                <span>Explore Qur&apos;an &amp; Tajweed Courses</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
