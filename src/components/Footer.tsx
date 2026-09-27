import React, { useState } from 'react';
import { 
  ArrowRight, 
  Mail, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  Award, 
  CheckCircle2 
} from 'lucide-react';
import { CATEGORIES } from '../data/coursesData';

interface FooterProps {
  onOpenAdvisory: () => void;
  onOpenAuth: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdvisory, onOpenAuth }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-[#070B1A] text-white pt-16 pb-12 border-t border-[#070B1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter / Value Row */}
        <div className="pb-12 border-b border-[#0D1228] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-8 h-8 rounded-xl bg-[#008CFF] flex items-center justify-center font-extrabold text-white text-base shadow-sm shadow-blue-600/30">
                A
              </span>
              <span className="text-2xl font-black tracking-tight text-white flex items-center">
                AIYUG
              </span>
            </div>
            <p className="text-xs text-[#8D96B8] max-w-md">
              The premier institution for AI-native Engineering, Marketing, Job+ Placement guarantees, and Accredited University Certifications.
            </p>
          </div>

          {/* Newsletter Box */}
          <div className="w-full lg:w-auto">
            <p className="text-xs font-bold text-slate-200 mb-2">
              Subscribe to "The AI Practitioner" Weekly Dispatch
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-4 py-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4" />
                <span>Thank you for subscribing! Check your inbox for the AI primer.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your work email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="px-4 py-2.5 rounded-xl bg-[#0D1228] border border-[#008CFF]/30 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#008CFF] focus:ring-1 focus:ring-[#008CFF] w-full sm:w-72"
                />
                <button
                  type="submit"
                  className="btn-alyug-primary px-4 py-2.5 rounded-xl text-white font-bold text-xs shrink-0 cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 4 Category Columns & Links */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 border-b border-[#0D1228] text-xs">
          
          {/* Col 1: Tech Certification */}
          <div>
            <h4 className="font-bold text-[#008CFF] uppercase tracking-wider text-[11px] mb-3">
              1. Tech Certification
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#tech" className="hover:text-white transition-colors">Full Stack with AI</a></li>
              <li><a href="#tech" className="hover:text-white transition-colors">Data Science & Machine Learning</a></li>
              <li><a href="#tech" className="hover:text-white transition-colors">Cloud & DevOps</a></li>
              <li><a href="#tech" className="hover:text-white transition-colors">Cybersecurity Professional</a></li>
              <li><a href="#tech" className="hover:text-white transition-colors">AI & Generative AI</a></li>
            </ul>
          </div>

          {/* Col 2: Marketing with AI */}
          <div>
            <h4 className="font-bold text-[#008CFF] uppercase tracking-wider text-[11px] mb-3">
              2. Marketing with AI
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#marketing" className="hover:text-white transition-colors">Digital Marketing with AI</a></li>
              <li><a href="#marketing" className="hover:text-white transition-colors">Integrated Marketing Comm</a></li>
              <li><a href="#marketing" className="hover:text-white transition-colors">Performance Marketing</a></li>
              <li><a href="#marketing" className="hover:text-white transition-colors">Social Media & Virality</a></li>
              <li><a href="#marketing" className="hover:text-white transition-colors">AdCreative & AI Stack</a></li>
            </ul>
          </div>

          {/* Col 3: Job+ Certification */}
          <div>
            <h4 className="font-bold text-[#008CFF] uppercase tracking-wider text-[11px] mb-3">
              3. Job+ Guarantee
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#job_plus" className="hover:text-white transition-colors">Job+ Full Stack Developer</a></li>
              <li><a href="#job_plus" className="hover:text-white transition-colors">Job+ Data Analyst</a></li>
              <li><a href="#job_plus" className="hover:text-white transition-colors">Job+ Digital Marketer</a></li>
              <li><a href="#job_plus" className="hover:text-white transition-colors">Job+ Business Analyst</a></li>
              <li><a href="#job_plus" className="hover:text-white transition-colors">Job+ UI/UX Designer</a></li>
            </ul>
          </div>

          {/* Col 4: College Certification */}
          <div>
            <h4 className="font-bold text-[#008CFF] uppercase tracking-wider text-[11px] mb-3">
              4. College Certification
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#college" className="hover:text-white transition-colors">IIT Delhi - AI & ML</a></li>
              <li><a href="#college" className="hover:text-white transition-colors">IIM Calcutta - Data Analytics</a></li>
              <li><a href="#college" className="hover:text-white transition-colors">XLRI - Business Management</a></li>
              <li><a href="#college" className="hover:text-white transition-colors">IMT Ghaziabad - Marketing</a></li>
              <li><a href="#college" className="hover:text-white transition-colors">Campus Immersion Schedules</a></li>
            </ul>
          </div>

          {/* Col 5: Company & Admissions */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">
              Academy & Support
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={onOpenAuth} className="hover:text-white transition-colors text-left cursor-pointer">
                  Student Portal Login
                </button>
              </li>
              <li>
                <button onClick={onOpenAdvisory} className="hover:text-white transition-colors text-left cursor-pointer">
                  Book 1:1 Counseling
                </button>
              </li>
              <li><a href="#placements" className="hover:text-white transition-colors">Alumni Placements</a></li>
              <li><a href="#tech" className="hover:text-white transition-colors">Enterprise AI Training</a></li>
              <li className="pt-2 text-[11px] text-slate-400">
                <p className="flex items-center gap-1.5 text-white font-medium">
                  <Phone className="w-3.5 h-3.5 text-[#008CFF]" />
                  1800-891-AIYUG
                </p>
                <p className="text-slate-500 mt-1">admissions@aiyug.academy</p>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} AIYUG Academy Inc. All rights reserved. Registered under AI & Tech EdTech Consortium.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Admission</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Job+ Refund Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Notice</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Honor Code</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
