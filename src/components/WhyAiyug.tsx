import React from 'react';
import { Cpu, Users, ShieldCheck, GraduationCap, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface WhyAiyugProps {
  onOpenAdvisory: () => void;
}

export const WhyAiyug: React.FC<WhyAiyugProps> = ({ onOpenAdvisory }) => {
  const pillars = [
    {
      icon: <Cpu className="w-6 h-6 text-[#008CFF]" />,
      title: 'AI-Native Curriculum',
      description: 'Unlike legacy courses teaching 5-year-old syntaxes, every AIYUG course incorporates agentic frameworks, LLM integrations, and modern AI automation from day one.',
      points: ['A100 GPU compute access', 'RAG & Autonomous agent projects', 'Weekly curriculum updates']
    },
    {
      icon: <Users className="w-6 h-6 text-[#008CFF]" />,
      title: '1:1 Silicon Valley Mentors',
      description: 'Learn directly from practicing Principal Architects, Growth Leads, and Directors at Microsoft, Google, AWS, and unicorn startups.',
      points: ['Weekly 1:1 private code & strategy reviews', 'Live interactive weekend cohorts', 'Direct personal job referrals']
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#008CFF]" />,
      title: 'Job+ Placement Agreement',
      description: 'Our Job+ programs come with a legal refund guarantee: minimum 15+ interviews with leading tech companies or 100% tuition refund.',
      points: ['Minimum package guarantee', 'FAANG style mock technical rounds', 'Dedicated placement officer']
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-[#008CFF]" />,
      title: 'Accredited University Seals',
      description: 'Earn prestigious credentials from top institutions like IIT Delhi, IIM Calcutta, XLRI, and IMT Ghaziabad with lifelong executive alumni status.',
      points: ['In-person campus immersion modules', 'Direct faculty guidance', 'Prestigious institution seal']
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7F9FF] border border-[#D9DFFF] text-xs font-bold text-[#3514D4] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The AIYUG Pedagogical Standard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Why Professionals Choose AIYUG Over Traditional Bootcamps
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Engineered for real industry impact. We replace generic recorded videos with intense live execution, personalized mentorship, and institutional credibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#008CFF] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#F7F9FF] text-[#008CFF] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-950 group-hover:text-[#008CFF] transition-colors">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
                {pillar.points.map((pt, i) => (
                  <div key={i} className="flex items-center gap-2 text-[11px] text-slate-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#008CFF] shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Counseling CTA Strip */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#008CFF] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-600/20">
          <div>
            <h4 className="text-xl sm:text-2xl font-black text-white">
              Not sure which certification aligns with your career goals?
            </h4>
            <p className="mt-1 text-xs sm:text-sm text-blue-100">
              Schedule a free 20-minute profile evaluation with our Senior Program Directors.
            </p>
          </div>
          <button
            onClick={onOpenAdvisory}
            className="px-6 py-3 rounded-xl bg-white text-[#008CFF] hover:bg-[#F7F9FF] font-bold text-xs uppercase tracking-wider transition-all shadow-md shrink-0 cursor-pointer"
          >
            Get Free Career Roadmap
          </button>
        </div>

      </div>
    </section>
  );
};
