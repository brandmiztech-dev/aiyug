import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  Award, 
  Zap, 
  Gift, 
  CheckCircle2, 
  Users 
} from 'lucide-react';

interface MiddleBannerProps {
  onOpenAdvisory: () => void;
  onExploreCourses: () => void;
}

export const MiddleBanner: React.FC<MiddleBannerProps> = ({
  onOpenAdvisory,
  onExploreCourses
}) => {
  // Live dynamic countdown timer for limited scholarship grant
  const [timeLeft, setTimeLeft] = useState({
    hours: 14,
    minutes: 48,
    seconds: 32
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 sm:py-16 bg-slate-50/80 overflow-hidden relative border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Banner Card - Premium Solid Theme Aesthetic */}
        <div className="relative rounded-3xl overflow-hidden bg-white text-slate-900 shadow-xl border border-[#D9DFFF]">
          
          {/* Subtle Decorative Ambient Lighting & Dot Pattern */}
          <div className="absolute inset-0 pointer-events-none">
            <div 
              className="absolute inset-0 opacity-[0.35]"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #D9DFFF 1px, transparent 0)`,
                backgroundSize: '24px 24px'
              }}
            />
            <div className="absolute -right-16 -top-16 w-80 h-80 bg-[#00D9E8]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -left-16 -bottom-16 w-80 h-80 bg-[#B51FE8]/15 rounded-full blur-3xl pointer-events-none" />
          </div>

          <div className="relative z-10 p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Content (7 Cols) */}
              <div className="lg:col-span-7 space-y-4">
                
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF3FF]/80 border border-[#008CFF]/50 text-[#3514D4] text-xs font-bold shadow-xs">
                  <Gift className="w-3.5 h-3.5 text-[#008CFF] animate-bounce" />
                  <span>NATIONAL AI LEADERSHIP SCHOLARSHIP 2026</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-tight">
                  Get Up To <span className="text-[#008CFF]">40% Early Admission Sponsorship</span> Across All Faculties
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                  AIYUG’s Industry Endowment Fund has released 50 sponsored merit seats for the upcoming Q4 batch. Qualify for tuition fee subsidies, 0% interest EMI, and free access to NVIDIA A100 GPU computing credits.
                </p>

                {/* 3 Value Pillars */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-700 font-semibold">
                  <div className="flex items-center gap-2 bg-white border border-slate-200/90 shadow-xs px-3 py-2.5 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>0% Interest No-Cost EMI</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white border border-slate-200/90 shadow-xs px-3 py-2.5 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>₹15,000 Tool Suite Included</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white border border-slate-200/90 shadow-xs px-3 py-2.5 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>1:1 Mock Interview Drill</span>
                  </div>
                </div>

              </div>

              {/* Right Action & Countdown Zone (5 Cols) */}
              <div className="lg:col-span-5 bg-white border border-[#D9DFFF]/90 rounded-2xl p-6 shadow-md flex flex-col justify-between space-y-5">
                
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-600 mb-2">
                    <span className="font-bold flex items-center gap-1.5 text-[#008CFF]">
                      <Clock className="w-3.5 h-3.5" />
                      Scholarship Window Closes In:
                    </span>
                    <span className="bg-[#EBF3FF] text-[#3514D4] px-2 py-0.5 rounded text-[11px] font-bold border border-[#D9DFFF]">
                      BATCH Q4
                    </span>
                  </div>

                  {/* Countdown Digital Timer */}
                  <div className="grid grid-cols-3 gap-2.5 text-center my-3">
                    <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl shadow-xs">
                      <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">
                        {String(timeLeft.hours).padStart(2, '0')}
                      </div>
                      <div className="text-[10px] uppercase font-bold text-slate-500 mt-1">Hours</div>
                    </div>
                    <div className="bg-[#F7F9FF]/70 border border-[#D9DFFF] p-3 rounded-xl shadow-xs">
                      <div className="text-2xl sm:text-3xl font-black text-[#008CFF] font-mono">
                        {String(timeLeft.minutes).padStart(2, '0')}
                      </div>
                      <div className="text-[10px] uppercase font-bold text-[#008CFF] mt-1">Minutes</div>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl shadow-xs">
                      <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">
                        {String(timeLeft.seconds).padStart(2, '0')}
                      </div>
                      <div className="text-[10px] uppercase font-bold text-slate-500 mt-1">Seconds</div>
                    </div>
                  </div>

                  {/* Live Seats Progress Bar */}
                  <div className="mt-3">
                    <div className="flex items-center justify-between text-[11px] text-slate-600 mb-1 font-medium">
                      <span>Sponsored Seats Claimed:</span>
                      <span className="font-bold text-emerald-700">41 / 50 Claimed (82%)</span>
                    </div>
                    <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
                      <div className="h-full bg-[#008CFF] rounded-full w-[82%] transition-all duration-500" />
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2.5 pt-2">
                  <button
                    onClick={onOpenAdvisory}
                    className="btn-alyug-primary w-full py-3.5 px-4 rounded-xl text-xs text-white transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                  >
                    <Zap className="w-4 h-4 fill-white" />
                    <span>Apply for 40% Scholarship Grant</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={onExploreCourses}
                    className="btn-alyug-secondary w-full py-2.5 px-4 rounded-xl font-bold text-xs border border-[#D9DFFF] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Browse All Qualified Certifications</span>
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
