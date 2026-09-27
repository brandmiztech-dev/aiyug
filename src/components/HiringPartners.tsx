import React from 'react';
import { HIRING_PARTNERS, ALUMNI_STORIES } from '../data/coursesData';
import { Briefcase, TrendingUp, Sparkles, Building2, CheckCircle2 } from 'lucide-react';

// Authentic SVG Company Logos with exact brand marks
export const CompanyLogo: React.FC<{ type: string; className?: string }> = ({ type, className = 'w-6 h-6' }) => {
  switch (type) {
    case 'google':
      return (
        <svg className={className} viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.27-2.09 3.66-5.17 3.66-9.12z"
          />
          <path
            fill="#34A853"
            d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.13C3.27 21.39 7.33 24 12 24z"
          />
          <path
            fill="#FBBC05"
            d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.58H1.26C.46 8.18 0 9.99 0 12s.46 3.82 1.26 5.42l4.02-3.13z"
          />
          <path
            fill="#EA4335"
            d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.27 2.61 1.26 6.58l4.02 3.13c.95-2.83 3.6-4.96 6.72-4.96z"
          />
        </svg>
      );
    case 'microsoft':
      return (
        <svg className={className} viewBox="0 0 24 24">
          <path fill="#F25022" d="M1 1h10v10H1z" />
          <path fill="#7FBA00" d="M13 1h10v10H13z" />
          <path fill="#00A4EF" d="M1 13h10v10H1z" />
          <path fill="#FFB900" d="M13 13h10v10H13z" />
        </svg>
      );
    case 'amazon':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#FF9900">
          <path d="M13.88 12.18c0-1.74-.29-3.08-1.55-3.08-.73 0-1.25.43-1.55 1.05-.07.16-.07.31-.07.47 0 .15.01.27.05.39.29.98.78 1.49 1.49 1.49.88 0 1.63-.44 1.63-.32zm-6.17 7.74c4.61 2.37 9.87 2.1 14.54-.78.36-.23.65-.05.28.3-1.63 1.54-3.79 2.59-6.07 2.96-3.23.51-6.52-.3-9.35-1.99-.44-.26-.14-.73.6-.49zm14.88-.13c.52.26 1.08.43 1.66.5.34.04.45-.25.19-.44-1.33-.97-2.88-1.61-4.52-1.89-.35-.06-.59.22-.38.5.85 1.13 2.1 1.05 3.05 1.33zM15.42 8.74c-.26-.34-.73-.59-1.22-.72 1.05-1.63 2.76-2.02 4.67-2.02.66 0 1.31.06 1.95.2.36.08.48.33.48.71v6.98c0 1.25.04 2.65.62 3.73.18.34-.05.58-.39.58-.69 0-1.44-.06-2.12-.06-.3 0-.49-.15-.55-.45-.1-.47-.13-1.02-.13-1.54-1.25 1.63-2.73 2.23-4.7 2.23-2.67 0-4.66-1.73-4.66-4.63 0-3.32 2.62-4.72 5.68-4.72.13 0 .25 0 .37.01v-.29zm-7.61 3.51c0-3.15 2.18-5.3 5.48-5.3.73 0 1.43.1 2.13.31v9.64c-.75.31-1.53.48-2.34.48-3.08 0-5.27-2.08-5.27-5.13z" />
        </svg>
      );
    case 'meta':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#0668E1">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      );
    case 'swiggy':
      return (
        <div className={`${className} rounded-full bg-[#FC8019] flex items-center justify-center text-white font-black text-[11px]`}>
          S
        </div>
      );
    case 'zomato':
      return (
        <div className={`${className} rounded-lg bg-[#E23744] flex items-center justify-center text-white font-extrabold italic text-[11px]`}>
          Z
        </div>
      );
    case 'razorpay':
      return (
        <div className={`${className} rounded-md bg-[#0C2340] text-[#0C83FF] flex items-center justify-center font-black text-xs`}>
          R
        </div>
      );
    case 'cred':
      return (
        <div className={`${className} rounded-md bg-black text-white flex items-center justify-center font-black text-[10px] tracking-widest border border-white/20`}>
          CRED
        </div>
      );
    case 'adobe':
      return (
        <div className={`${className} rounded bg-[#FF0000] text-white flex items-center justify-center font-bold text-xs`}>
          A
        </div>
      );
    case 'goldman':
      return (
        <div className={`${className} rounded bg-[#7399C6] text-white flex items-center justify-center font-bold text-[9px]`}>
          GS
        </div>
      );
    case 'flipkart':
      return (
        <div className={`${className} rounded bg-[#2874F0] text-[#FFE500] flex items-center justify-center font-black text-xs`}>
          fk
        </div>
      );
    case 'deloitte':
      return (
        <div className={`${className} rounded bg-slate-900 text-white flex items-center justify-center font-extrabold text-[10px]`}>
          D<span className="text-[#86BC25]">.</span>
        </div>
      );
    default:
      return <Building2 className={`${className} text-[#008CFF]`} />;
  }
};

export const HiringPartners: React.FC = () => {
  return (
    <section id="placements" className="py-20 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 relative overflow-hidden border-t border-b border-slate-200">
      
      {/* Subtle Dot Grid & Warm Aura Lighting */}
      <div 
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #cbd5e1 1px, transparent 0)`,
          backgroundSize: '28px 28px'
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-gradient-to-b from-blue-100/60 via-blue-50/20 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-100/30 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D9DFFF] text-[#3514D4] text-xs font-bold mb-4 shadow-sm">
            <Briefcase className="w-3.5 h-3.5 text-[#008CFF]" />
            <span>Proven Alumni Career Outcomes</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
            Where AIYUG Graduates Work
          </h2>
          
          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Over <span className="text-slate-950 font-bold">18,500+ professionals</span> have accelerated into top product companies, venture-backed unicorns, and global Fortune 500 tech teams.
          </p>
        </div>

        {/* Partners Grid with Authentic Logos & Clean Crisp Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4 mb-16">
          {HIRING_PARTNERS.map((partner, idx) => (
            <div
              key={idx}
              className="group p-3.5 sm:p-4 rounded-2xl bg-white hover:bg-[#F7F9FF]/30 border border-slate-200/90 hover:border-[#008CFF]/80 transition-all duration-300 flex items-center gap-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 p-2 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 group-hover:bg-white transition-all">
                <CompanyLogo type={partner.logoType || 'google'} className="w-6 h-6" />
              </div>
              <div className="overflow-hidden">
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm truncate group-hover:text-[#008CFF] transition-colors">
                  {partner.name}
                </h4>
                <p className="text-[10px] text-slate-500 font-medium truncate">
                  {partner.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Real Alumni Transformation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ALUMNI_STORIES.map((alumnus, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-slate-200/90 hover:border-[#008CFF]/50 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl relative group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <img
                      src={alumnus.avatar}
                      alt={alumnus.name}
                      className="w-12 h-12 rounded-full object-cover shadow-sm ring-2 ring-blue-100"
                    />
                    <div>
                      <h4 className="font-black text-slate-950 text-sm tracking-tight">{alumnus.name}</h4>
                      <p className="text-xs text-[#008CFF] font-semibold">{alumnus.role}</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-black text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-xl shadow-xs">
                    {alumnus.hike}
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed italic">
                  "{alumnus.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
                <span>Former: <span className="text-slate-800 font-semibold">{alumnus.formerRole}</span></span>
                <span className="text-[#3514D4] font-bold bg-[#F7F9FF] border border-[#D9DFFF]/80 px-2.5 py-1 rounded-lg">{alumnus.program}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Placement Metrics Banner */}
        <div className="mt-14 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md flex flex-col md:flex-row items-center justify-around gap-5 text-center">
          <div>
            <div className="text-2xl sm:text-[28px] font-bold text-slate-900 tabular-nums tracking-tight">4.2 Weeks</div>
            <div className="text-[11px] sm:text-xs text-slate-500 mt-1 font-medium">Average time to offer letter</div>
          </div>
          <div className="hidden md:block w-px h-10 bg-slate-200" />
          <div>
            <div className="text-2xl sm:text-[28px] font-bold text-[#008CFF] tabular-nums tracking-tight">₹14.8 LPA</div>
            <div className="text-[11px] sm:text-xs text-slate-500 mt-1 font-medium">Average alumni package</div>
          </div>
          <div className="hidden md:block w-px h-10 bg-slate-200" />
          <div>
            <div className="text-2xl sm:text-[28px] font-bold text-slate-900 tabular-nums tracking-tight">350+</div>
            <div className="text-[11px] sm:text-xs text-slate-500 mt-1 font-medium">Active recruitment partners</div>
          </div>
          <div className="hidden md:block w-px h-10 bg-slate-200" />
          <div>
            <div className="text-2xl sm:text-[28px] font-bold text-emerald-600 tabular-nums tracking-tight">100%</div>
            <div className="text-[11px] sm:text-xs text-slate-500 mt-1 font-medium">Tuition refund guarantee on Job+</div>
          </div>
        </div>

      </div>
    </section>
  );
};
