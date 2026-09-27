import React, { useState } from 'react';
import { Course } from '../data/coursesData';
import { 
  ArrowLeft, 
  Star, 
  Clock, 
  Calendar, 
  Award, 
  Briefcase, 
  ShieldCheck, 
  CheckCircle2, 
  Download, 
  UserCheck, 
  ChevronDown, 
  ChevronUp, 
  Zap, 
  Sparkles, 
  GraduationCap, 
  BookOpen, 
  Share2, 
  MessageCircleQuestion, 
  FileText,
  Lock,
  Building2,
  Terminal,
  Cpu
} from 'lucide-react';

interface CourseDetailPageProps {
  course: Course;
  onBack: () => void;
  onEnroll: (course: Course) => void;
  onOpenSyllabus: (course: Course) => void;
  onOpenAdvisory: () => void;
}

export const CourseDetailPage: React.FC<CourseDetailPageProps> = ({
  course,
  onBack,
  onEnroll,
  onOpenSyllabus,
  onOpenAdvisory
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'curriculum' | 'projects' | 'mentor' | 'certification' | 'faqs'>('overview');
  const [openModuleIndex, setOpenModuleIndex] = useState<number | null>(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleModule = (index: number) => {
    setOpenModuleIndex(openModuleIndex === index ? null : index);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Program specific FAQs
  const programFaqs = [
    {
      q: 'Who is eligible to enroll in this certification?',
      a: 'This program is tailored for working professionals, developers, marketing analysts, and pre-final/final year university students. Prior coding or business analytics exposure is beneficial, but foundational prep modules are provided before batch kickoff.'
    },
    {
      q: 'What if I miss a live weekend session?',
      a: 'All sessions are broadcasted in ultra-low latency HD and recorded. Recordings with indexed transcripts, code repositories, and lab exercises are uploaded to your AIYUG Student Portal within 4 hours.'
    },
    {
      q: 'How does the 0% No-Cost EMI work?',
      a: 'We have partnered with leading banks (HDFC, ICICI, Axis, Bajaj Finserv) to provide instant 3, 6, and 12-month zero-interest EMI with zero hidden processing charges. You can select this at checkout.'
    },
    {
      q: 'What is the refund and cancellation policy?',
      a: 'We offer a 7-day 100% money-back guarantee from the date of the first live batch orientation. If you feel the program does not meet your expectations, request a full refund with no questions asked.'
    },
    {
      q: 'How will 1:1 mentorship and doubt clearing be conducted?',
      a: 'You will be paired directly with senior engineers and directors from top product companies. In addition to bi-weekly 1:1 sessions, our private Slack and Discord community has dedicated Teaching Assistants available with < 15-minute doubt resolution.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/60 pb-20 m-0 p-0">
      
      {/* 1. Full Course Hero Section (Directly flush with header, zero gap) */}
      <section className="bg-[#070B1A] text-white pt-4 pb-10 sm:pt-6 sm:pb-14 relative overflow-hidden border-b border-[#0D1228] m-0">
        {/* Subtle grid backdrop */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumbs Row directly inside Hero - No separate white gap */}
          <div className="flex items-center justify-between pb-3 sm:pb-4 mb-4 sm:mb-6 border-b border-white/10">
            <div className="flex items-center gap-2 text-xs text-slate-400 overflow-hidden">
              <button
                onClick={onBack}
                className="flex items-center gap-1.5 font-bold text-white hover:text-[#008CFF] transition-colors cursor-pointer shrink-0"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to All Courses</span>
              </button>
              <span className="text-white/20">/</span>
              <span className="hidden sm:inline font-medium text-slate-300 truncate">{course.categoryName}</span>
              <span className="hidden sm:inline text-white/20">/</span>
              <span className="font-bold text-[#008CFF] truncate">{course.title}</span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: course.title,
                      text: course.tagline,
                      url: window.location.href
                    }).catch(() => {});
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Course link copied to clipboard!');
                  }
                }}
                className="p-1.5 sm:p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                title="Share Program"
              >
                <Share2 className="w-4 h-4" />
              </button>

              <button
                onClick={() => onEnroll(course)}
                className="btn-alyug-primary hidden md:flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-bold text-white shadow-sm cursor-pointer"
              >
                <span>Enroll Now &bull; {course.price}</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Hero Copy */}
            <div className="lg:col-span-8 space-y-4">
              
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-[#008CFF] text-white">
                  {course.categoryName}
                </span>

                {course.badge && (
                  <span className="text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-md bg-amber-400 text-slate-950">
                    {course.badge}
                  </span>
                )}

                {course.institute && (
                  <span className="text-xs font-semibold px-3 py-1 rounded-md bg-white/10 text-white border border-white/20">
                    {course.institute}
                  </span>
                )}

                <span className="text-xs font-semibold px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {course.avgHike}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                {course.title}
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                {course.tagline}
              </p>

              {/* Badges / Metrics Row */}
              <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-300">
                <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="font-bold text-white text-sm">{course.rating}</span>
                  <span className="text-slate-400">({course.reviewsCount} verified alumni reviews)</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#008CFF]" />
                  <span>Duration: <strong>{course.duration}</strong></span>
                </div>

                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#008CFF]" />
                  <span>Format: <strong>{course.format}</strong></span>
                </div>

                <div className="flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-[#008CFF]" />
                  <span>Level: <strong>{course.level}</strong></span>
                </div>
              </div>

            </div>

            {/* Right Column: Hero Mini Card / Mobile View */}
            <div className="lg:col-span-4 lg:hidden">
              <div className="bg-white text-slate-900 rounded-2xl p-5 shadow-xl border border-slate-200 space-y-4">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-2xl font-black text-slate-950">{course.price}</span>
                    <span className="ml-2 text-xs text-slate-400 line-through">{course.originalPrice}</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    40% Early Grant
                  </span>
                </div>

                <button
                  onClick={() => onEnroll(course)}
                  className="btn-alyug-primary w-full py-3.5 px-4 rounded-xl font-bold text-xs text-white flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Lock className="w-4 h-4" />
                  <span>Enroll Now &bull; {course.price}</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. In-Page Tab Navigation */}
      <div className="bg-white border-b border-slate-200 sticky top-[52px] sm:top-[60px] z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-1 sm:space-x-8 overflow-x-auto no-scrollbar py-2 text-xs font-bold">
            {[
              { id: 'overview', label: 'Program Overview' },
              { id: 'curriculum', label: `Curriculum (${course.modules.length} Modules)` },
              { id: 'projects', label: 'Capstone Projects' },
              { id: 'mentor', label: 'Faculty & Mentorship' },
              { id: 'certification', label: 'Dual Accreditation' },
              { id: 'faqs', label: 'FAQs' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-2.5 px-3 border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
                  activeTab === tab.id
                    ? 'border-[#008CFF] text-[#008CFF]'
                    : 'border-transparent text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* 4. Main Body: Content (8 Cols) + Sticky Enrollment Sidebar (4 Cols) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Deep Tabs Content */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* TAB: OVERVIEW */}
            {activeTab === 'overview' && (
              <div className="space-y-8 animate-in fade-in duration-200">
                
                {/* About Program */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-[#008CFF]" />
                    <span>About This Comprehensive Certification</span>
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
                    {course.overview}
                  </p>

                  <div className="pt-4 border-t border-slate-100">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                      Core Skills &amp; Competencies Acquired
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {course.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-lg bg-blue-50/80 border border-[#D9DFFF] text-xs font-bold text-[#008CFF]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Key Highlights Grid */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#008CFF]" />
                    <span>Program Highlights &amp; Inclusions</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                    {course.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="font-semibold leading-relaxed">{item}</span>
                      </div>
                    ))}
                    <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-semibold leading-relaxed">Dedicated Career Concierge &amp; 1:1 Resume Polishing</span>
                    </div>
                    <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-semibold leading-relaxed">Dual Accredited Digital Verifiable Credential on LinkedIn</span>
                    </div>
                  </div>
                </div>

                {/* Career Guarantee Strip */}
                <div className="p-6 rounded-3xl bg-[#008CFF] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
                  <div className="space-y-1 text-center sm:text-left">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 text-white text-[11px] font-bold">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>The AIYUG Assurance</span>
                    </div>
                    <h4 className="text-xl font-bold text-white">100% Placement &amp; Job Support</h4>
                    <p className="text-xs text-blue-100 max-w-md">
                      Get hired at top tech firms or retain unlimited career counseling with guaranteed corporate interview loops until placed.
                    </p>
                  </div>
                  <button
                    onClick={() => onEnroll(course)}
                    className="px-6 py-3 rounded-xl bg-white text-[#008CFF] hover:bg-blue-50 font-bold text-xs uppercase tracking-wider transition-all shadow-md shrink-0 cursor-pointer"
                  >
                    Enroll With Guarantee
                  </button>
                </div>

              </div>
            )}

            {/* TAB: CURRICULUM & MODULES */}
            {activeTab === 'curriculum' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Comprehensive Curriculum Roadmap</h3>
                      <p className="text-xs text-slate-500 mt-1">
                        {course.modules.length} Intensive Modules &bull; Live Weekend Lectures + Self-Paced Hands-On Labs
                      </p>
                    </div>

                    <button
                      onClick={() => onOpenSyllabus(course)}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:border-[#008CFF] hover:text-[#008CFF] text-xs font-bold transition-all cursor-pointer shrink-0"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download PDF Syllabus</span>
                    </button>
                  </div>

                  {/* Modules Accordion */}
                  <div className="divide-y divide-slate-100 mt-4">
                    {course.modules.map((mod, index) => {
                      const isOpen = openModuleIndex === index;
                      return (
                        <div key={mod.number} className="py-4">
                          <button
                            onClick={() => toggleModule(index)}
                            className="w-full flex items-center justify-between text-left gap-4 py-2 cursor-pointer group"
                          >
                            <div className="flex items-center gap-3">
                              <span className="w-8 h-8 rounded-xl bg-blue-50 text-[#008CFF] font-black text-xs flex items-center justify-center shrink-0 border border-blue-100">
                                0{mod.number}
                              </span>
                              <div>
                                <h4 className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-[#008CFF] transition-colors">
                                  {mod.title}
                                </h4>
                                <span className="text-xs text-slate-500 font-medium">
                                  {mod.duration} &bull; {mod.topics.length} Key Topics &bull; {mod.projects.length} Real Projects
                                </span>
                              </div>
                            </div>
                            <div className="p-1 rounded-lg text-slate-400 group-hover:text-slate-700">
                              {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                            </div>
                          </button>

                          {isOpen && (
                            <div className="mt-4 pl-11 pr-2 space-y-4 animate-in slide-in-from-top-2 duration-150">
                              
                              <div>
                                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                                  Syllabus Topics Covered:
                                </h5>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                  {mod.topics.map((t, idx) => (
                                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                                      <div className="w-1.5 h-1.5 rounded-full bg-[#008CFF] shrink-0" />
                                      <span>{t}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {mod.projects.length > 0 && (
                                <div className="p-3.5 bg-blue-50/60 rounded-xl border border-blue-100">
                                  <h5 className="text-[11px] font-bold text-[#008CFF] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                                    <Terminal className="w-3.5 h-3.5" />
                                    <span>Practical Deliverable &amp; Code Lab:</span>
                                  </h5>
                                  <ul className="text-xs text-slate-700 space-y-1">
                                    {mod.projects.map((p, idx) => (
                                      <li key={idx} className="font-semibold flex items-center gap-1.5">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                        <span>{p}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                </div>
              </div>
            )}

            {/* TAB: CAPSTONE PROJECTS */}
            {activeTab === 'projects' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Production-Ready Capstone Portfolio</h3>
                    <p className="text-xs text-slate-500 mt-1">
                      You don't just solve toy problems. You build, deploy, and benchmark production architecture reviewed 1:1 by Silicon Valley engineers.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {course.modules.flatMap(m => m.projects).slice(0, 6).map((proj, i) => (
                      <div key={i} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-3">
                        <div>
                          <div className="flex items-center justify-between text-[11px] text-slate-500 font-bold mb-1">
                            <span className="text-[#008CFF]">CAPSTONE #{i + 1}</span>
                            <span className="bg-white px-2 py-0.5 rounded border border-slate-200">Production Tested</span>
                          </div>
                          <h4 className="font-bold text-slate-900 text-sm leading-snug">{proj}</h4>
                        </div>
                        <div className="text-[11px] text-slate-500 flex items-center gap-2 pt-2 border-t border-slate-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>Code reviewed by FAANG Lead</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-3 text-xs text-emerald-800">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <div>
                      <strong className="block font-bold">Host &amp; Showcase on Your GitHub Portfolio</strong>
                      <span>All capstone repositories are dual-licensed for inclusion in your job applications and portfolio showcase.</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB: FACULTY & MENTOR */}
            {activeTab === 'mentor' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
                  
                  <h3 className="text-xl font-bold text-slate-900">Lead Faculty &amp; Industry Mentor</h3>

                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center gap-6">
                    <img
                      src={course.mentor.image}
                      alt={course.mentor.name}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80';
                      }}
                      className="w-28 h-28 rounded-2xl object-cover border-2 border-blue-600/30 shadow-md shrink-0"
                    />

                    <div className="text-center sm:text-left space-y-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#008CFF]">
                        Lead Instructor &amp; Capstone Evaluator
                      </span>
                      <h4 className="text-2xl font-black text-slate-900">{course.mentor.name}</h4>
                      <p className="text-sm font-semibold text-slate-700">{course.mentor.role}</p>
                      <p className="text-xs font-bold text-[#008CFF]">{course.mentor.company}</p>
                      
                      <p className="text-xs text-slate-600 pt-2 leading-relaxed max-w-lg">
                        Personally conducts masterclasses, audits student capstone architectures, and coordinates high-impact referral interviews with top-tier hiring managers.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                    <div className="p-4 rounded-xl border border-slate-200 bg-white">
                      <div className="text-xl font-black text-slate-900">1:1</div>
                      <div className="text-xs text-slate-500 mt-1">Bi-weekly Mentorship Sessions</div>
                    </div>
                    <div className="p-4 rounded-xl border border-slate-200 bg-white">
                      <div className="text-xl font-black text-[#008CFF]">&lt; 15 mins</div>
                      <div className="text-xs text-slate-500 mt-1">Fast Doubt Resolution on Slack</div>
                    </div>
                    <div className="p-4 rounded-xl border border-slate-200 bg-white">
                      <div className="text-xl font-black text-slate-900">100% Live</div>
                      <div className="text-xs text-slate-500 mt-1">Interactive Cohort Masterclasses</div>
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* TAB: ACCREDITATION */}
            {activeTab === 'certification' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Globally Verifiable Credential</h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Co-certified by AIYUG Academy, NASSCOM Futureskills, and partner university councils.
                    </p>
                  </div>

                  {/* Simulated Certificate Preview Card */}
                  <div className="p-6 sm:p-8 rounded-2xl bg-[#070B1A] text-white border-2 border-[#D9DFFF]/40 shadow-xl relative overflow-hidden">
                    <div className="border border-white/20 p-6 rounded-xl text-center space-y-3">
                      <div className="text-[10px] uppercase font-bold tracking-widest text-[#008CFF]">
                        AIYUG ACADEMY OF ADVANCED TECHNOLOGY
                      </div>
                      <h4 className="text-xl sm:text-2xl font-serif font-black tracking-tight text-white">
                        Certificate of Professional Excellence
                      </h4>
                      <p className="text-xs text-slate-300">
                        This certifies that candidate has demonstrated advanced mastery in:
                      </p>
                      <div className="text-base sm:text-lg font-bold text-[#008CFF]">
                        {course.title}
                      </div>
                      <div className="pt-4 flex items-center justify-between text-[11px] text-slate-400 border-t border-white/10 max-w-sm mx-auto">
                        <span>ISO 9001:2015 Accredited</span>
                        <span>Verifiable ID: AIY-CERT-2026</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                    <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Permanent Verifiable QR Code &amp; URL</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>One-Click Add to LinkedIn Profile</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB: FAQS */}
            {activeTab === 'faqs' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <MessageCircleQuestion className="w-5 h-5 text-[#008CFF]" />
                    <span>Frequently Asked Questions</span>
                  </h3>

                  <div className="divide-y divide-slate-100">
                    {programFaqs.map((faq, idx) => {
                      const isOpen = openFaqIndex === idx;
                      return (
                        <div key={idx} className="py-3.5">
                          <button
                            onClick={() => toggleFaq(idx)}
                            className="w-full flex items-center justify-between text-left gap-4 font-bold text-slate-900 text-sm hover:text-[#008CFF] cursor-pointer"
                          >
                            <span>{faq.q}</span>
                            <div className="p-1 text-slate-400">
                              {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                            </div>
                          </button>
                          {isOpen && (
                            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed pr-6">
                              {faq.a}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* RIGHT COLUMN: Sticky Purchase / Enrollment Card */}
          <div className="lg:col-span-4 sticky top-[100px] sm:top-[115px] space-y-5">
            
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xl space-y-6">
              
              {/* Program Thumbnail */}
              <div className="relative h-44 rounded-2xl overflow-hidden bg-slate-900">
                <img
                  src={course.image}
                  alt={course.title}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80';
                  }}
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-[#070B1A]/60 flex items-center justify-center p-4 text-center">
                  <span className="text-white text-xs font-bold bg-[#008CFF] px-3 py-1.5 rounded-lg shadow-md">
                    Live Cohort Batch Q4
                  </span>
                </div>
              </div>

              {/* Pricing Breakdown */}
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                  <span>Special Early Admission Fee:</span>
                  <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    40% Scholarship
                  </span>
                </div>

                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-black text-slate-950">{course.price}</span>
                  <span className="text-sm text-slate-400 line-through font-semibold">
                    {course.originalPrice || '₹89,999'}
                  </span>
                </div>

                <div className="mt-2 p-2.5 rounded-xl bg-blue-50/70 border border-blue-100 flex items-center justify-between text-xs text-[#008CFF] font-bold">
                  <span>No-Cost EMI from:</span>
                  <span>{course.emi} (0% Interest)</span>
                </div>
              </div>

              {/* Batch Urgency Badge */}
              <div className="p-3 bg-amber-50 border border-amber-200/80 rounded-xl text-xs text-amber-900 flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Next Cohort Starts: <strong>October 15, 2026</strong> &bull; 9 seats left</span>
              </div>

              {/* Primary Buy / Checkout CTA */}
              <div className="space-y-2.5">
                <button
                  onClick={() => onEnroll(course)}
                  className="btn-alyug-primary w-full py-4 px-4 rounded-xl font-bold text-xs text-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-600/30 active:scale-[0.99]"
                >
                  <Lock className="w-4 h-4" />
                  <span>Enroll &amp; Proceed to Payment</span>
                </button>

                <button
                  onClick={() => onOpenSyllabus(course)}
                  className="w-full py-2.5 px-4 rounded-xl font-bold text-xs border border-slate-300 text-slate-700 hover:border-[#008CFF] hover:text-[#008CFF] transition-colors flex items-center justify-center gap-1.5 cursor-pointer bg-white"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Curriculum Brochure</span>
                </button>

                <button
                  onClick={onOpenAdvisory}
                  className="w-full py-2 px-4 rounded-xl font-semibold text-xs text-slate-500 hover:text-slate-800 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>Need help? Talk to an Academic Advisor &rarr;</span>
                </button>
              </div>

              {/* Inclusions Checklist */}
              <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                <span className="font-bold text-slate-800 block text-[11px] uppercase tracking-wider">
                  Program Includes:
                </span>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Live Interactive Weekend Masterclasses</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>1:1 Bi-weekly Mentor Review with Silicon Valley Lead</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>₹15,000 NVIDIA GPU Compute Suite</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Dual Accredited ISO &amp; University Certificate</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>7-Day 100% No-Risk Money Back Guarantee</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

    </div>
  );
};
