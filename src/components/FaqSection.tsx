import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';

interface FaqSectionProps {
  onOpenAdvisory: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenAdvisory }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How does the Job+ 100% Money-Back Guarantee work?',
      a: 'If you complete the curriculum, capstone projects, and maintain 85%+ attendance but do not receive at least 15 qualifying job interviews within 6 months of graduation, AIYUG will refund 100% of your tuition fee without deduction.'
    },
    {
      q: 'Are the College Certifications from IIT Delhi, IIM Calcutta, and XLRI official?',
      a: 'Yes, absolutely. The College Certification programs are executed in direct partnership with each respective premier institution. Successful graduates receive official executive certificates bearing the institutional seals and are granted executive alumni networking privileges.'
    },
    {
      q: 'What are the class timings? Can I pursue this while working full-time?',
      a: 'All AIYUG programs are specifically structured for working professionals and university students. Masterclasses occur on Saturdays and Sundays (either morning 10am-1pm or evening 6pm-9pm IST). All sessions are recorded and archived in your Student Portal with 24/7 access.'
    },
    {
      q: 'Do I get access to real AI GPUs and real ad budgets?',
      a: 'Yes! For Tech and AI programs, students receive dedicated access to our high-performance cloud clusters (NVIDIA A100 / H100 instances). For Marketing with AI cohorts, AIYUG provisions actual advertising budget (up to ₹10,000 per student) to execute live ad campaigns on Meta and Google.'
    },
    {
      q: 'What payment and No-Cost EMI options are supported?',
      a: 'We partner with leading financial providers (Bajaj Finserv, Propelld, LiquiLoans, ZestMoney) to offer 0% interest EMI options spanning 6, 9, 12, or 18 months. Major credit cards, debit cards, UPI, and corporate sponsorships are also accepted.'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F9FF] border border-[#D9DFFF] text-[#3514D4] text-xs font-bold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#008CFF]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl font-black text-slate-950 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Everything you need to know about the AIYUG admission process, pedagogy, and guarantees.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 overflow-hidden bg-white transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className={`w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer transition-colors ${
                    isOpen ? 'bg-[#F7F9FF]/50' : 'hover:bg-slate-50'
                  }`}
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#008CFF]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-5 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-slate-900 text-sm">Still have questions?</h4>
            <p className="text-xs text-slate-500">Our admissions advisors are here to answer your queries.</p>
          </div>
          <button
            onClick={onOpenAdvisory}
            className="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-blue-600 hover:bg-blue-700 transition-colors flex items-center gap-1.5 shadow cursor-pointer shrink-0"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Speak with an Advisor</span>
          </button>
        </div>

      </div>
    </section>
  );
};
