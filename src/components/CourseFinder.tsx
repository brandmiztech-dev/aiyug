import React, { useState } from 'react';
import { COURSES, Course } from '../data/coursesData';
import { Sparkles, ArrowRight, CheckCircle2, RotateCcw } from 'lucide-react';

interface CourseFinderProps {
  onSelectCourse: (course: Course) => void;
  onOpenSyllabus: (course: Course) => void;
}

export const CourseFinder: React.FC<CourseFinderProps> = ({
  onSelectCourse,
  onOpenSyllabus
}) => {
  const [step, setStep] = useState<number>(1);
  const [selectedField, setSelectedField] = useState<string>('tech');
  const [selectedGoal, setSelectedGoal] = useState<string>('career_switch');
  const [matchedCourse, setMatchedCourse] = useState<Course | null>(null);

  const handleFind = () => {
    // Recommendation logic
    let targetId = 'full-stack-ai';
    if (selectedField === 'tech') {
      if (selectedGoal === 'placement') targetId = 'job-plus-fullstack';
      else if (selectedGoal === 'executive') targetId = 'iit-delhi-ai-ml';
      else targetId = 'full-stack-ai';
    } else if (selectedField === 'marketing') {
      if (selectedGoal === 'placement') targetId = 'job-plus-digital-marketer';
      else if (selectedGoal === 'executive') targetId = 'imt-ghaziabad-digital-marketing';
      else targetId = 'digital-marketing-ai';
    } else if (selectedField === 'analytics') {
      if (selectedGoal === 'placement') targetId = 'job-plus-data-analyst';
      else if (selectedGoal === 'executive') targetId = 'iim-calcutta-data-analytics';
      else targetId = 'performance-marketing-analytics';
    } else if (selectedField === 'leadership') {
      targetId = 'xlri-business-management';
    }

    const found = COURSES.find(c => c.id === targetId) || COURSES[0];
    setMatchedCourse(found);
    setStep(3);
  };

  const resetQuiz = () => {
    setStep(1);
    setMatchedCourse(null);
  };

  return (
    <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF3FF] text-[#3514D4] text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#008CFF]" />
            <span>Interactive Program Matcher</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
            Find Your Ideal Certification in 30 Seconds
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Tell us your domain interest and ambition — our algorithmic matcher suggests the optimal cohort.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl relative overflow-hidden">
          
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-400">
                <span>STEP 1 OF 2</span>
                <span className="text-[#008CFF]">Domain Interest</span>
              </div>

              <h3 className="text-lg font-bold text-slate-900">
                Which industry domain are you looking to master?
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: 'tech', label: 'Software Engineering & AI Systems', desc: 'Full Stack, Cloud, DevOps, LLMs & Agents' },
                  { id: 'marketing', label: 'Marketing with AI & Growth', desc: 'Performance ads, SEO, virality, IMC' },
                  { id: 'analytics', label: 'Data Analytics & Business Intelligence', desc: 'SQL, Python, Power BI & predictive models' },
                  { id: 'leadership', label: 'Executive Management & Leadership', desc: 'XLRI, IIM, IMT campus programs' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedField(item.id)}
                    className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                      selectedField === item.id
                        ? 'border-blue-600 bg-[#F7F9FF]/50 shadow-sm ring-1 ring-[#008CFF]'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="font-bold text-slate-900 text-sm flex items-center justify-between">
                      <span>{item.label}</span>
                      {selectedField === item.id && <CheckCircle2 className="w-4 h-4 text-[#008CFF]" />}
                    </div>
                    <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                  </button>
                ))}
              </div>

              <div className="flex justify-end pt-4 border-t border-slate-100">
                <button
                  onClick={() => setStep(2)}
                  className="px-6 py-2.5 rounded-xl font-bold text-xs text-white bg-blue-600 hover:bg-blue-700 transition-colors flex items-center gap-1.5 cursor-pointer shadow"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-400">
                <span>STEP 2 OF 2</span>
                <span className="text-[#008CFF]">Career Ambition</span>
              </div>

              <h3 className="text-lg font-bold text-slate-900">
                What is your primary objective right now?
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'placement', label: 'Job Placement Guarantee', desc: 'I want guaranteed interviews & money-back promise.' },
                  { id: 'career_switch', label: 'Upskilling & Modern Skills', desc: 'I want to master AI tooling and earn dual credentials.' },
                  { id: 'executive', label: 'Prestigious College Seal', desc: 'I want an IIT / IIM / XLRI alumni certification.' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedGoal(item.id)}
                    className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                      selectedGoal === item.id
                        ? 'border-blue-600 bg-[#F7F9FF]/50 shadow-sm ring-1 ring-[#008CFF]'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="font-bold text-slate-900 text-sm flex items-center justify-between">
                      <span>{item.label}</span>
                      {selectedGoal === item.id && <CheckCircle2 className="w-4 h-4 text-[#008CFF]" />}
                    </div>
                    <p className="text-xs text-slate-500 mt-2">{item.desc}</p>
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <button
                  onClick={() => setStep(1)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  Back
                </button>
                <button
                  onClick={handleFind}
                  className="px-6 py-2.5 rounded-xl font-bold text-xs text-white bg-[#008CFF] hover:bg-[#0074d9] transition-all flex items-center gap-1.5 cursor-pointer shadow-md shadow-blue-600/20"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Reveal My Recommended Program</span>
                </button>
              </div>
            </div>
          )}

          {step === 3 && matchedCourse && (
            <div className="space-y-6 animate-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="font-bold text-[#008CFF] flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> 98% MATCH FOR YOUR PROFILE
                </span>
                <button
                  onClick={resetQuiz}
                  className="flex items-center gap-1 text-slate-500 hover:text-slate-800 font-semibold cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Retake Quiz</span>
                </button>
              </div>

              <div className="p-5 rounded-2xl bg-[#F7F9FF] border border-[#D9DFFF] flex flex-col sm:flex-row items-center gap-6">
                <img
                  src={matchedCourse.image}
                  alt={matchedCourse.title}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80';
                  }}
                  className="w-24 h-24 rounded-2xl object-cover border border-slate-200 shadow-md shrink-0"
                />
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-600 text-white">
                      {matchedCourse.categoryName}
                    </span>
                    {matchedCourse.badge && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-amber-500 text-slate-950">
                        {matchedCourse.badge}
                      </span>
                    )}
                  </div>
                  <h4 className="text-xl font-bold text-slate-950">{matchedCourse.title}</h4>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2">{matchedCourse.tagline}</p>
                  <div className="mt-3 flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs text-slate-500 font-medium">
                    <span>{matchedCourse.duration}</span>
                    <span>·</span>
                    <span>{matchedCourse.format}</span>
                    <span>·</span>
                    <span className="text-[#008CFF] font-bold">{matchedCourse.price}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => onSelectCourse(matchedCourse)}
                  className="py-3 px-4 rounded-xl font-bold text-xs text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>View Course Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenSyllabus(matchedCourse)}
                  className="py-3 px-4 rounded-xl font-bold text-xs text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>View Syllabus</span>
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
