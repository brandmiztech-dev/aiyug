import React, { useState } from 'react';
import { Course } from '../data/coursesData';
import { 
  X, 
  CheckCircle2, 
  Star, 
  Clock, 
  Calendar, 
  ShieldCheck, 
  Download, 
  FileText, 
  Award, 
  Zap, 
  Users, 
  Briefcase, 
  ArrowRight,
  BookOpen
} from 'lucide-react';

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
  onOpenSyllabus: (course: Course) => void;
  onEnroll: (course: Course) => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({
  course,
  onClose,
  onOpenSyllabus,
  onEnroll
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'curriculum' | 'mentor' | 'outcomes'>('overview');
  const [enrollSuccess, setEnrollSuccess] = useState(false);

  if (!course) return null;

  const handleEnrollClick = () => {
    onEnroll(course);
    setEnrollSuccess(true);
    setTimeout(() => {
      setEnrollSuccess(false);
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#070B1A]/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="relative bg-[#070B1A] text-white p-6 sm:p-8 shrink-0">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-blue-600 text-white">
              {course.categoryName}
            </span>
            {course.institute && (
              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white/20 text-white">
                {course.institute}
              </span>
            )}
            {course.badge && (
              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-amber-500 text-slate-950">
                {course.badge}
              </span>
            )}
          </div>

          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white max-w-2xl">
            {course.title}
          </h2>

          <p className="mt-2 text-sm text-slate-300 max-w-2xl leading-relaxed">
            {course.tagline}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-300">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#00D9E8]" />
              <span>Duration: {course.duration}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#00D9E8]" />
              <span>Format: {course.format}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="font-bold text-white">{course.rating}</span>
              <span>({course.reviewsCount} reviews)</span>
            </div>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center border-b border-slate-200 px-6 bg-slate-50 shrink-0 overflow-x-auto text-xs font-semibold">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-4 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'overview'
                ? 'border-[#008CFF] text-[#008CFF] font-bold'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Program Overview
          </button>
          <button
            onClick={() => setActiveTab('curriculum')}
            className={`py-3 px-4 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'curriculum'
                ? 'border-[#008CFF] text-[#008CFF] font-bold'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Curriculum Breakdown ({course.modules.length} Modules)
          </button>
          <button
            onClick={() => setActiveTab('mentor')}
            className={`py-3 px-4 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'mentor'
                ? 'border-[#008CFF] text-[#008CFF] font-bold'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Faculty & Mentors
          </button>
          <button
            onClick={() => setActiveTab('outcomes')}
            className={`py-3 px-4 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'outcomes'
                ? 'border-[#008CFF] text-[#008CFF] font-bold'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Career Outcomes & Guarantee
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
          
          {enrollSuccess && (
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-3 text-emerald-800 text-xs">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <p className="font-bold text-sm">Congratulations! Enrolled Successfully.</p>
                <p>Access your course materials and batch schedule in your Student Portal.</p>
              </div>
            </div>
          )}

          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-slate-900 text-base mb-2">About This Program</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {course.overview}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-base mb-3">Key Highlights & Inclusions</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {course.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F7F9FF]/50 border border-[#D9DFFF] text-xs">
                      <CheckCircle2 className="w-4 h-4 text-[#008CFF] shrink-0 mt-0.5" />
                      <span className="font-medium text-slate-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-base mb-2">Tools & Technologies Mastered</h4>
                <div className="flex flex-wrap gap-2">
                  {course.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 font-semibold text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'curriculum' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Module-by-Module Progression</h4>
                  <p className="text-xs text-slate-500">Live weekend lectures + practical weekly capstone deliverables.</p>
                </div>
                <button
                  onClick={() => onOpenSyllabus(course)}
                  className="text-xs font-bold text-[#008CFF] hover:text-[#3514D4] flex items-center gap-1"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Open Full Syllabus View</span>
                </button>
              </div>

              <div className="space-y-3">
                {course.modules.map((m) => (
                  <div key={m.number} className="p-4 rounded-2xl border border-slate-200 bg-white hover:border-[#D9DFFF] transition-all">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#EBF3FF] text-[#3514D4] font-bold text-xs flex items-center justify-center shrink-0">
                          {m.number}
                        </span>
                        <h5 className="font-bold text-slate-900 text-sm">
                          {m.title}
                        </h5>
                      </div>
                      <span className="text-xs font-semibold text-slate-500 px-2 py-0.5 rounded bg-slate-100">
                        {m.duration}
                      </span>
                    </div>

                    <div className="mt-2 text-xs text-slate-600">
                      <span className="font-semibold text-slate-700">Topics covered: </span>
                      {m.topics.join(' · ')}
                    </div>

                    {m.projects.length > 0 && (
                      <div className="mt-2 pt-2 border-t border-slate-100 text-xs text-[#3514D4] font-medium flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-[#008CFF]" />
                        <span>Hands-On Project: {m.projects.join(', ')}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'mentor' && (
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center gap-6">
                <img
                  src={course.mentor.image}
                  alt={course.mentor.name}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80';
                  }}
                  className="w-24 h-24 rounded-2xl object-cover border-2 border-blue-600/30 shadow-md"
                />
                <div className="text-center sm:text-left">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#008CFF]">Lead Faculty & Mentor</span>
                  <h4 className="text-xl font-bold text-slate-900 mt-1">{course.mentor.name}</h4>
                  <p className="text-sm font-medium text-slate-600">{course.mentor.role}</p>
                  <p className="text-xs font-semibold text-[#3514D4] mt-1">{course.mentor.company}</p>
                  <p className="text-xs text-slate-500 mt-3 max-w-lg">
                    Personally reviews capstone code, conducts live technical masterclasses, and assists with 1:1 career mapping and portfolio reviews.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <div className="text-lg font-black text-slate-900">1:1</div>
                  <div className="text-xs text-slate-500 mt-0.5">Bi-weekly Mentorship Sessions</div>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <div className="text-lg font-black text-slate-900">&lt; 15 mins</div>
                  <div className="text-xs text-slate-500 mt-0.5">Doubt Resolution on Slack</div>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <div className="text-lg font-black text-slate-900">100% Live</div>
                  <div className="text-xs text-slate-500 mt-0.5">Interactive Weekend Classes</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'outcomes' && (
            <div className="space-y-6">
              <div className="p-5 rounded-2xl bg-[#F7F9FF] border border-[#D9DFFF] flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#008CFF] text-white flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">The AIYUG Career Guarantee</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Every candidate receives dedicated 1:1 resume revamp, mock technical interviews, and guaranteed access to our 350+ corporate hiring partners.
                  </p>
                  <div className="mt-3 flex items-center gap-4 text-xs font-bold text-[#3514D4]">
                    <span>Average Package: ₹9.5 LPA - ₹24 LPA</span>
                    <span>·</span>
                    <span>140% Average Hike</span>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-bold text-slate-900 text-sm mb-3">Top Companies Hiring From This Program</h5>
                <div className="flex flex-wrap gap-3">
                  {['Google', 'Microsoft', 'Amazon', 'Meta', 'Swiggy', 'Razorpay', 'Flipkart', 'CRED'].map((company, idx) => (
                    <div key={idx} className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 shadow-sm">
                      {company}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer with Pricing & Action Buttons */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 shrink-0 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-slate-950 tabular-nums">{course.price}</span>
              <span className="text-sm line-through text-slate-400 tabular-nums">{course.originalPrice}</span>
            </div>
            <p className="text-xs text-emerald-600 font-semibold">
              No-Cost EMI available from {course.emi}
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => onOpenSyllabus(course)}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl font-bold text-xs text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-[#008CFF]" />
              <span>Full Syllabus</span>
            </button>

            <button
              onClick={handleEnrollClick}
              className="btn-alyug-primary flex-1 sm:flex-none px-6 py-2.5 rounded-xl text-xs text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Enroll in Next Cohort</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
