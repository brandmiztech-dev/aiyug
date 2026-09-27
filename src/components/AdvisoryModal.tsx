import React, { useState } from 'react';
import { X, Phone, Mail, User, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { CATEGORIES } from '../data/coursesData';

interface AdvisoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdvisoryModal: React.FC<AdvisoryModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('tech');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto close after 3 seconds
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#070B1A]/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-[#D9DFFF] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-2 w-full bg-[#008CFF]" />

        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close advisory"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#F7F9FF] text-[#008CFF] mb-2">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-black text-slate-950 tracking-tight">
              Request Free Career Counseling
            </h3>
            <p className="mt-1 text-xs text-slate-500">
              Speak with an AIYUG Senior Program Advisor to find the right certification for your background.
            </p>
          </div>

          {submitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Request Received!</h4>
              <p className="text-xs text-slate-600 max-w-xs mx-auto">
                Our senior academic advisor will call you within 15 minutes at <span className="font-semibold text-slate-900">{phone || 'your phone number'}</span>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priyanshu Roy"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-[#008CFF] focus:ring-1 focus:ring-[#008CFF]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Phone Number (for SMS & Callback)
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-[#008CFF] focus:ring-1 focus:ring-[#008CFF]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-[#008CFF] focus:ring-1 focus:ring-[#008CFF]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Faculty of Interest
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-[#008CFF] focus:ring-1 focus:ring-[#008CFF] bg-white"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name} ({c.highlight})
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="btn-alyug-primary w-full py-3 px-4 rounded-xl text-xs text-white transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <span>Book Free 1:1 Counseling Call</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-100 text-center text-[11px] text-slate-500">
          No spam promise. 100% confidential career advisory.
        </div>
      </div>
    </div>
  );
};
