import React from 'react';

export const TrustBanner: React.FC = () => {
  return (
    <section className="relative bg-white py-10 sm:py-14 border-b border-slate-100 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Main Section Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-extrabold text-slate-900 tracking-tight leading-snug">
          <span className="text-[#008CFF]">Master tomorrow's skills</span> with India’s top upskilling platform.
        </h2>

        {/* Subtitle */}
        <p className="mt-2 sm:mt-2.5 text-xs sm:text-sm md:text-base font-semibold text-slate-500 tracking-wide">
          Great universities, top firms
        </p>

      </div>

      {/* Marquee Logo Container with Smooth Fade Edges */}
      <div className="relative mt-8 sm:mt-10 w-full overflow-hidden">
        
        {/* Left and Right Subtle Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Ticker Animation Track */}
        <div className="flex w-max items-center animate-marquee gap-8 sm:gap-14 py-2 hover:[animation-play-state:paused]">
          
          {/* Repeat Twice for Seamless Infinite Loop */}
          {[0, 1].map((copyIndex) => (
            <div key={copyIndex} className="flex items-center gap-8 sm:gap-14 shrink-0">
              
              {/* 1. Cisco */}
              <div className="flex items-center gap-2 px-2 shrink-0 opacity-90 hover:opacity-100 transition-opacity">
                <svg className="h-6 sm:h-7 w-auto" viewBox="0 0 76 42" fill="none">
                  {/* Cisco Bridge Graphic */}
                  <rect x="2" y="22" width="4" height="14" rx="2" fill="#049FD9" />
                  <rect x="11" y="14" width="4" height="22" rx="2" fill="#049FD9" />
                  <rect x="20" y="24" width="4" height="12" rx="2" fill="#049FD9" />
                  <rect x="29" y="8" width="4" height="28" rx="2" fill="#049FD9" />
                  <rect x="38" y="2" width="4" height="34" rx="2" fill="#049FD9" />
                  <rect x="47" y="8" width="4" height="28" rx="2" fill="#049FD9" />
                  <rect x="56" y="24" width="4" height="12" rx="2" fill="#049FD9" />
                  <rect x="65" y="14" width="4" height="22" rx="2" fill="#049FD9" />
                  <rect x="74" y="22" width="4" height="14" rx="2" fill="#049FD9" />
                </svg>
                <span className="font-bold text-slate-800 tracking-wider text-base sm:text-lg">
                  cisco
                </span>
              </div>

              {/* 2. OLA */}
              <div className="flex items-center gap-2 px-2 shrink-0 opacity-90 hover:opacity-100 transition-opacity">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black flex items-center justify-center relative">
                  <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#CDDC39] border border-black" />
                </div>
                <span className="font-black text-slate-950 tracking-wider text-lg sm:text-xl">
                  OLA
                </span>
              </div>

              {/* 3. Drexel University */}
              <div className="flex items-center gap-2 px-2 shrink-0 opacity-90 hover:opacity-100 transition-opacity">
                {/* Drexel Dragon / Flame Mark */}
                <svg className="h-7 sm:h-8 w-auto text-[#07294D]" viewBox="0 0 32 32" fill="currentColor">
                  <path d="M16 2C8.268 2 2 8.268 2 16c0 5.42 3.064 10.124 7.553 12.455.513-.787 1.054-1.688 1.572-2.731C8.22 23.774 6 19.82 6 15.342c0-5.523 4.477-10 10-10 4.148 0 7.72 2.527 9.243 6.126.793-.564 1.637-1.07 2.518-1.503C25.76 5.86 21.26 2 16 2z" />
                  <path d="M16 10c-3.314 0-6 2.686-6 6 0 2.21 1.2 4.14 2.97 5.18.57-1.14 1.25-2.28 2.03-3.38-.63-.5-1-1.2-1-2 0-1.657 1.343-3 3-3 1.14 0 2.13.64 2.63 1.58.91-.48 1.87-.9 2.86-1.25C19.49 11.23 17.86 10 16 10z" />
                </svg>
                <div className="flex flex-col text-left">
                  <span className="font-serif font-black text-[#07294D] text-sm sm:text-base leading-tight tracking-tight">
                    Drexel
                  </span>
                  <span className="text-[9px] uppercase tracking-widest font-bold text-[#07294D] -mt-0.5">
                    UNIVERSITY
                  </span>
                </div>
              </div>

              {/* 4. IMT Ghaziabad */}
              <div className="flex items-center gap-2 px-2 shrink-0 opacity-90 hover:opacity-100 transition-opacity">
                {/* IMT Crest */}
                <div className="flex flex-col items-center justify-center">
                  <svg className="w-5 h-6 text-[#C98A2C]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L15 8H9L12 2Z" />
                    <rect x="10" y="9" width="4" height="9" />
                    <path d="M7 19H17V21H7V19Z" />
                  </svg>
                  <div className="flex gap-0.5 mt-0.5">
                    <div className="w-1 h-1 rounded-full bg-[#002D62]" />
                    <div className="w-1 h-1 rounded-full bg-[#002D62]" />
                    <div className="w-1 h-1 rounded-full bg-[#002D62]" />
                    <div className="w-1 h-1 rounded-full bg-[#002D62]" />
                  </div>
                </div>
                <div className="flex flex-col text-left leading-none">
                  <span className="text-[9px] sm:text-[10px] font-serif font-bold text-slate-800">
                    Institute of
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-serif font-extrabold text-slate-900">
                    Management Technology
                  </span>
                  <span className="text-[8px] text-slate-500 font-sans mt-0.5">
                    Ghaziabad, Delhi NCR
                  </span>
                </div>
              </div>

              {/* 5. PMI (Project Management Institute) */}
              <div className="flex items-center gap-1.5 px-2 shrink-0 opacity-90 hover:opacity-100 transition-opacity">
                <div className="flex items-center font-black text-sm sm:text-base">
                  <span className="text-[#008CFF] font-black">P</span>
                  <span className="text-[#008CFF] font-black">M</span>
                  <span className="text-[#008CFF] font-black">I</span>
                </div>
                <div className="flex flex-col text-left leading-none ml-1">
                  <span className="text-[8px] sm:text-[9px] font-bold text-slate-800">
                    Project
                  </span>
                  <span className="text-[8px] sm:text-[9px] font-bold text-slate-800">
                    Management
                  </span>
                  <span className="text-[8px] sm:text-[9px] font-bold text-slate-500">
                    Institute®
                  </span>
                </div>
              </div>

              {/* 6. Northeastern University */}
              <div className="flex items-center gap-2 px-2 shrink-0 opacity-90 hover:opacity-100 transition-opacity">
                <span className="font-serif font-black text-2xl sm:text-3xl text-slate-900 leading-none">
                  N
                </span>
                <div className="flex flex-col text-left leading-tight">
                  <span className="font-serif font-bold text-xs sm:text-sm text-slate-900 tracking-tight">
                    Northeastern
                  </span>
                  <span className="font-serif text-[10px] sm:text-xs text-slate-700 tracking-tight">
                    University
                  </span>
                </div>
              </div>

              {/* 7. The American Business School Paris */}
              <div className="flex items-center gap-2 px-2 shrink-0 opacity-90 hover:opacity-100 transition-opacity">
                <div className="border border-[#0B1E48] rounded bg-[#0B1E48] text-white px-2 py-1 text-center shadow-xs">
                  <span className="block text-[8px] sm:text-[9px] font-serif tracking-widest font-black text-amber-300">
                    THE AMERICAN
                  </span>
                  <span className="block text-[7px] sm:text-[8px] tracking-wider font-sans font-bold text-white border-t border-white/30 pt-0.5">
                    BUSINESS SCHOOL PARIS
                  </span>
                </div>
              </div>

              {/* 8. VISA */}
              <div className="flex items-center px-2 shrink-0 opacity-90 hover:opacity-100 transition-opacity">
                <span className="font-black text-xl sm:text-2xl text-[#1434CB] tracking-wider italic font-sans">
                  VISA
                </span>
              </div>

              {/* 9. AWS */}
              <div className="flex flex-col items-center px-2 shrink-0 opacity-90 hover:opacity-100 transition-opacity">
                <div className="relative flex flex-col items-center">
                  <span className="font-black text-slate-900 tracking-tight text-lg sm:text-xl leading-none font-sans">
                    aws
                  </span>
                  {/* AWS Smile Curve */}
                  <svg className="w-8 sm:w-9 h-2 sm:h-2.5 -mt-0.5" viewBox="0 0 45 14" fill="none">
                    <path
                      d="M2 3C14 11 31 11 43 3"
                      stroke="#FF9900"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M39 1.5L43 3.5L42 7"
                      fill="#FF9900"
                    />
                  </svg>
                </div>
              </div>

              {/* 10. IIT Roorkee */}
              <div className="flex items-center gap-2 px-2 shrink-0 opacity-90 hover:opacity-100 transition-opacity">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-slate-300 bg-white flex items-center justify-center shadow-xs font-serif font-bold text-xs text-blue-900">
                  IIT
                </div>
                <div className="flex flex-col text-left leading-none">
                  <span className="font-bold text-xs text-slate-900">IIT Roorkee</span>
                  <span className="text-[9px] text-slate-500 font-medium">E&amp;ICT Academy</span>
                </div>
              </div>

              {/* 11. IIM Kozhikode */}
              <div className="flex items-center gap-2 px-2 shrink-0 opacity-90 hover:opacity-100 transition-opacity">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-amber-600 bg-amber-50 flex items-center justify-center shadow-xs font-serif font-black text-xs text-amber-800">
                  IIM
                </div>
                <div className="flex flex-col text-left leading-none">
                  <span className="font-bold text-xs text-slate-900">IIM Kozhikode</span>
                  <span className="text-[9px] text-slate-500 font-medium">Executive Education</span>
                </div>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};
