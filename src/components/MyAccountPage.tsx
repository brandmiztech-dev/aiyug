import React, { useState, useEffect } from 'react';
import { COURSES, Course } from '../data/coursesData';
import { GoogleSignInModal } from './GoogleSignInModal';
import { 
  User, 
  BookOpen, 
  Award, 
  FileText, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Download, 
  ExternalLink, 
  Play, 
  LogOut, 
  Settings, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  QrCode, 
  Lock,
  ChevronRight,
  Video,
  X,
  Copy,
  Check
} from 'lucide-react';

export interface StudentUser {
  name: string;
  email: string;
  phone?: string;
  city?: string;
  linkedin?: string;
  bio?: string;
  enrolledCourses: string[];
}

interface MyAccountPageProps {
  currentUser: StudentUser | null;
  onLogin: (user: StudentUser) => void;
  onLogout: () => void;
  onUpdateProfile: (updated: StudentUser) => void;
  onViewCourse: (course: Course) => void;
  onExploreCourses: () => void;
  onOpenAdvisory: () => void;
}

type AccountTab = 'courses' | 'certificates' | 'billing' | 'profile' | 'mentorship';

export const MyAccountPage: React.FC<MyAccountPageProps> = ({
  currentUser,
  onLogin,
  onLogout,
  onUpdateProfile,
  onViewCourse,
  onExploreCourses,
  onOpenAdvisory
}) => {
  const [activeTab, setActiveTab] = useState<AccountTab>('courses');

  // In-page Login State (if not logged in)
  const [loginEmail, setLoginEmail] = useState('');
  const [loginName, setLoginName] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [googleModalOpen, setGoogleModalOpen] = useState(false);

  // Profile Edit State
  const [nameInput, setNameInput] = useState(currentUser?.name || '');
  const [emailInput, setEmailInput] = useState(currentUser?.email || '');
  const [phoneInput, setPhoneInput] = useState(currentUser?.phone || '+91 98765 43210');
  const [cityInput, setCityInput] = useState(currentUser?.city || 'Bengaluru, India');
  const [linkedinInput, setLinkedinInput] = useState(currentUser?.linkedin || 'https://linkedin.com/in/scholar');
  const [bioInput, setBioInput] = useState(currentUser?.bio || 'Aspiring AI Architect & Full Stack Engineer');
  const [profileSaveSuccess, setProfileSaveSuccess] = useState(false);

  // Synchronize profile inputs when currentUser changes
  useEffect(() => {
    if (currentUser) {
      setNameInput(currentUser.name || '');
      setEmailInput(currentUser.email || '');
      setPhoneInput(currentUser.phone || '+91 98765 43210');
      setCityInput(currentUser.city || 'Bengaluru, India');
      setLinkedinInput(currentUser.linkedin || 'https://linkedin.com/in/scholar');
      setBioInput(currentUser.bio || 'Aspiring AI Architect & Full Stack Engineer');
    }
  }, [currentUser]);

  // LMS Classroom Modal simulation
  const [activeLmsCourse, setActiveLmsCourse] = useState<Course | null>(null);
  const [copiedCertId, setCopiedCertId] = useState<string | null>(null);

  // Handle in-page login submit
  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginEmail.trim()) return;

    const userToLogin: StudentUser = {
      name: loginName.trim() || loginEmail.split('@')[0],
      email: loginEmail.trim(),
      phone: '+91 98765 43210',
      city: 'Bengaluru, India',
      enrolledCourses: ['full-stack-ai', 'agentic-ai'] // Give default enrolled courses for immediate testing
    };
    onLogin(userToLogin);
  };

  // Handle Google account selection
  const handleGoogleAccountSelected = (account: { name: string; email: string }) => {
    const userToLogin: StudentUser = {
      name: account.name,
      email: account.email,
      phone: '+91 98765 43210',
      city: 'Bengaluru, India',
      enrolledCourses: ['full-stack-ai', 'data-science-ai']
    };
    onLogin(userToLogin);
    setGoogleModalOpen(false);
  };

  // Instant 1-Click Demo Login
  const handleQuickDemoLogin = () => {
    const demoUser: StudentUser = {
      name: 'Aditya Sharma',
      email: 'aditya.sharma@aiyug.academy',
      phone: '+91 98450 12345',
      city: 'Bengaluru, India',
      linkedin: 'https://linkedin.com/in/aditya-sharma-ai',
      bio: 'Full Stack Engineer transitioning into Generative AI & Autonomous Agent Systems.',
      enrolledCourses: ['full-stack-ai', 'data-science-ai']
    };
    onLogin(demoUser);
  };

  // Handle Profile Save
  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser) return;

    const updated: StudentUser = {
      ...currentUser,
      name: nameInput.trim() || currentUser.name,
      email: emailInput.trim() || currentUser.email,
      phone: phoneInput.trim(),
      city: cityInput.trim(),
      linkedin: linkedinInput.trim(),
      bio: bioInput.trim()
    };

    onUpdateProfile(updated);
    setProfileSaveSuccess(true);
    setTimeout(() => setProfileSaveSuccess(false), 3000);
  };

  // Filter enrolled courses
  const enrolledCourseList = currentUser
    ? COURSES.filter(c => currentUser.enrolledCourses.includes(c.id))
    : [];

  // ===================== RENDER: NOT LOGGED IN =====================
  if (!currentUser) {
    return (
      <div className="min-h-screen bg-slate-50/70 pb-20 m-0 p-0">
        
        {/* Dark Top Banner */}
        <section className="bg-[#070B1A] text-white py-12 sm:py-16 relative overflow-hidden border-b border-[#0D1228] m-0">
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
              backgroundSize: '28px 28px'
            }}
          />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#008CFF] bg-[#008CFF]/15 px-3.5 py-1 rounded-full border border-[#008CFF]/30 inline-block">
              AIYUG Scholar Portal
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              My Student Account &amp; LMS
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
              Access your enrolled program masterclasses, weekly live cohort broadcasts, verified digital certifications, and 1:1 mentor code reviews.
            </p>
          </div>
        </section>

        {/* Authentication Card */}
        <div className="max-w-md mx-auto px-4 -mt-6 sm:-mt-8 relative z-20">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
            
            <div className="flex border-b border-slate-200">
              <button
                type="button"
                onClick={() => setIsRegisterMode(false)}
                className={`flex-1 pb-3 text-xs font-bold text-center border-b-2 transition-all cursor-pointer ${
                  !isRegisterMode ? 'border-[#008CFF] text-[#008CFF]' : 'border-transparent text-slate-500 hover:text-slate-900'
                }`}
              >
                Sign In to Account
              </button>
              <button
                type="button"
                onClick={() => setIsRegisterMode(true)}
                className={`flex-1 pb-3 text-xs font-bold text-center border-b-2 transition-all cursor-pointer ${
                  isRegisterMode ? 'border-[#008CFF] text-[#008CFF]' : 'border-transparent text-slate-500 hover:text-slate-900'
                }`}
              >
                New Scholar Registration
              </button>
            </div>

            {/* Google Sign-In Button */}
            <button
              type="button"
              onClick={() => setGoogleModalOpen(true)}
              className="w-full py-2.5 px-4 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-center gap-3 text-xs font-bold text-slate-700 shadow-sm cursor-pointer"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Continue with Google</span>
            </button>

            <div className="relative my-1">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center text-[10px] uppercase">
                <span className="bg-white px-2 text-slate-400 font-semibold tracking-wider">
                  Or with email
                </span>
              </div>
            </div>

            <form onSubmit={handleAuthSubmit} className="space-y-4">
              {isRegisterMode && (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name (As on Certificate)
                  </label>
                  <input
                    type="text"
                    required
                    value={loginName}
                    onChange={(e) => setLoginName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-[#008CFF]"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Registered Email Address
                </label>
                <input
                  type="email"
                  required
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="student@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-[#008CFF]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-[#008CFF]"
                />
              </div>

              <button
                type="submit"
                className="btn-alyug-primary w-full py-3 px-4 rounded-xl text-xs font-bold text-white shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>{isRegisterMode ? 'Create Scholar Account' : 'Access My Student Portal'}</span>
              </button>
            </form>

            {/* Quick Demo Test Access */}
            <div className="pt-4 border-t border-slate-100 text-center space-y-2">
              <span className="text-[11px] text-slate-400 block font-medium">Or test all features instantly:</span>
              <button
                type="button"
                onClick={handleQuickDemoLogin}
                className="w-full py-2.5 px-4 rounded-xl border border-blue-200 bg-blue-50/80 hover:bg-blue-100/80 text-[#008CFF] font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>1-Click Demo Login (Preloaded Enrolled Courses)</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    );
  }

  // ===================== RENDER: LOGGED IN SCHOLAR =====================
  const studentId = 'AIY-2026-' + Math.abs(currentUser.name.length * 4821 + 1092).toString().slice(0, 5);

  return (
    <div className="min-h-screen bg-slate-50/70 pb-20 m-0 p-0">
      
      {/* 1. TOP HEADER BANNER (Directly flush with header, zero gap) */}
      <section className="bg-[#070B1A] text-white pt-8 pb-12 sm:pt-10 sm:pb-16 relative overflow-hidden border-b border-[#0D1228] m-0">
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '28px 28px'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            {/* Student Avatar & Basic Info */}
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#008CFF] text-white flex items-center justify-center text-2xl sm:text-3xl font-black shadow-xl shadow-blue-600/30 border-2 border-white/20 shrink-0">
                {currentUser.name.charAt(0).toUpperCase()}
              </div>

              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-white">
                    {currentUser.name}
                  </h1>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Active Scholar
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300">
                  <span className="flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span>{currentUser.email}</span>
                  </span>
                  <span className="text-white/20">&bull;</span>
                  <span className="text-[#008CFF] font-mono font-bold">
                    ID: {studentId}
                  </span>
                </div>

                <div className="text-xs text-slate-400 flex items-center gap-3 pt-0.5">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{currentUser.city || 'Bengaluru, India'}</span>
                  </span>
                  <span className="text-white/20">&bull;</span>
                  <span>{enrolledCourseList.length} Enrolled Certifications</span>
                </div>
              </div>
            </div>

            {/* Top Action Buttons */}
            <div className="flex items-center gap-2.5 shrink-0">
              <button
                onClick={onExploreCourses}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-colors cursor-pointer border border-white/10 flex items-center gap-1.5"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#008CFF]" />
                <span>Explore Programs</span>
              </button>

              <button
                onClick={onLogout}
                className="px-3.5 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 font-bold text-xs transition-colors cursor-pointer border border-rose-500/20 flex items-center gap-1.5"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Sign Out</span>
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 2. TAB NAVIGATION BAR */}
      <div className="bg-white border-b border-slate-200 sticky top-[52px] sm:top-[60px] z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-1 sm:space-x-8 overflow-x-auto no-scrollbar py-2 text-xs font-bold">
            {[
              { id: 'courses', label: `Enrolled Courses (${enrolledCourseList.length})`, icon: BookOpen },
              { id: 'certificates', label: 'Digital Credentials', icon: Award },
              { id: 'billing', label: 'Invoices & Receipts', icon: FileText },
              { id: 'profile', label: 'Edit Profile & Settings', icon: Settings },
              { id: 'mentorship', label: '1:1 Mentor Support', icon: User }
            ].map((tab) => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as AccountTab)}
                  className={`py-2.5 px-3 border-b-2 whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1.5 ${
                    activeTab === tab.id
                      ? 'border-[#008CFF] text-[#008CFF]'
                      : 'border-transparent text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <TabIcon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* 3. MAIN TAB BODY CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* ===================== TAB 1: ENROLLED COURSES & LMS ===================== */}
        {activeTab === 'courses' && (
          <div className="space-y-6">
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900">My Learning Dashboard</h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Track ongoing cohort milestones, live masterclass schedules, and practical lab assignments.
                </p>
              </div>

              <button
                onClick={onExploreCourses}
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-[#008CFF] hover:underline cursor-pointer"
              >
                <span>Enroll in another certification</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {enrolledCourseList.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 max-w-lg mx-auto space-y-4 my-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#008CFF] flex items-center justify-center mx-auto border border-blue-100">
                  <BookOpen className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">No active course enrollments yet</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  You are not currently enrolled in any programs. Browse our industry-recognized tech, marketing, and college certifications to kickstart your journey.
                </p>
                <button
                  onClick={onExploreCourses}
                  className="btn-alyug-primary px-6 py-2.5 rounded-xl text-xs font-bold text-white cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Browse All Programs</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {enrolledCourseList.map((course, idx) => {
                  const progressPct = idx === 0 ? 42 : 18;
                  const currentModule = idx === 0 ? 'Module 3: LLM Orchestration & LangChain' : 'Module 1: Foundations & Architecture';

                  return (
                    <div 
                      key={course.id}
                      className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between"
                    >
                      <div>
                        {/* Course Card Top Banner */}
                        <div className="relative h-40 w-full overflow-hidden bg-slate-900">
                          <img
                            src={course.image}
                            alt={course.title}
                            className="w-full h-full object-cover opacity-80"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-between p-4">
                            <span className="w-max px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#008CFF] text-white">
                              {course.categoryName}
                            </span>
                            <div>
                              <h4 className="font-bold text-white text-base sm:text-lg leading-snug">
                                {course.title}
                              </h4>
                              <p className="text-xs text-slate-300 line-clamp-1">{course.tagline}</p>
                            </div>
                          </div>
                        </div>

                        {/* Progress Tracker */}
                        <div className="p-5 sm:p-6 space-y-4">
                          <div>
                            <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                              <span className="text-slate-700">Program Progress</span>
                              <span className="text-[#008CFF]">{progressPct}% Completed</span>
                            </div>
                            <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                              <div 
                                className="h-full bg-[#008CFF] rounded-full transition-all duration-500"
                                style={{ width: `${progressPct}%` }}
                              />
                            </div>
                            <span className="text-[11px] text-slate-500 mt-1 block">
                              Current: <strong>{currentModule}</strong>
                            </span>
                          </div>

                          {/* Next Live Class Alert */}
                          <div className="p-3.5 bg-blue-50/70 border border-blue-100 rounded-2xl flex items-center justify-between gap-3 text-xs">
                            <div className="flex items-center gap-2 text-slate-800">
                              <Video className="w-4 h-4 text-[#008CFF] shrink-0" />
                              <div>
                                <span className="font-bold block">Next Live Masterclass</span>
                                <span className="text-[11px] text-slate-500">Saturday &bull; 10:00 AM IST (Zoom Link Active)</span>
                              </div>
                            </div>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 shrink-0">
                              Live Cohort Q4
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="p-5 sm:p-6 pt-0 border-t border-slate-100 mt-2">
                        <div className="grid grid-cols-2 gap-2.5 pt-4">
                          <button
                            onClick={() => setActiveLmsCourse(course)}
                            className="btn-alyug-primary w-full py-2.5 px-3 rounded-xl font-bold text-xs text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                          >
                            <Play className="w-3.5 h-3.5 fill-white" />
                            <span>Launch LMS</span>
                          </button>

                          <button
                            onClick={() => onViewCourse(course)}
                            className="w-full py-2.5 px-3 rounded-xl font-bold text-xs border border-slate-300 text-slate-700 hover:border-[#008CFF] hover:text-[#008CFF] transition-all flex items-center justify-center gap-1.5 cursor-pointer bg-white"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Course Info</span>
                          </button>
                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>
            )}

          </div>
        )}

        {/* ===================== TAB 2: DIGITAL CREDENTIALS & CERTIFICATES ===================== */}
        {activeTab === 'certificates' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Verifiable Digital Credentials</h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Globally accredited certifications co-issued by AIYUG Academy, NASSCOM, and partner universities.
              </p>
            </div>

            {enrolledCourseList.length === 0 ? (
              <div className="bg-white rounded-3xl p-10 text-center border border-slate-200 max-w-md mx-auto space-y-3">
                <Award className="w-10 h-10 text-slate-400 mx-auto" />
                <h4 className="font-bold text-slate-900 text-sm">No Credentials Earned Yet</h4>
                <p className="text-xs text-slate-500">
                  Enroll in a program and complete your capstone evaluation to generate a verified credential.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {enrolledCourseList.map((course) => {
                  const certId = 'AIY-CERT-' + course.id.toUpperCase().replace(/-/g, '').slice(0, 8);
                  const isCopied = copiedCertId === certId;

                  return (
                    <div 
                      key={course.id}
                      className="bg-[#070B1A] text-white rounded-3xl border-2 border-[#D9DFFF]/40 p-6 sm:p-7 shadow-xl space-y-5 relative overflow-hidden"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="text-[10px] font-black uppercase tracking-widest text-[#008CFF]">
                            AIYUG ACADEMY CERTIFICATE OF MASTERY
                          </span>
                          <h4 className="text-lg font-serif font-bold text-white mt-1">
                            {course.title}
                          </h4>
                          <span className="text-xs text-slate-400 block mt-0.5">
                            Awarded to: <strong className="text-white">{currentUser.name}</strong>
                          </span>
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                          <Award className="w-6 h-6 text-amber-400" />
                        </div>
                      </div>

                      <div className="p-3 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between text-xs font-mono">
                        <div>
                          <span className="text-[10px] text-slate-400 block font-sans">Credential ID:</span>
                          <span className="font-bold text-slate-200">{certId}</span>
                        </div>
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(`https://aiyug.academy/verify/${certId}`);
                            setCopiedCertId(certId);
                            setTimeout(() => setCopiedCertId(null), 2000);
                          }}
                          className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-xs text-slate-300 flex items-center gap-1 cursor-pointer"
                        >
                          {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{isCopied ? 'Link Copied' : 'Copy Verification'}</span>
                        </button>
                      </div>

                      <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1.5 text-emerald-400 font-semibold text-[11px]">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                          <span>ISO 9001:2015 Verified</span>
                        </div>

                        <button
                          onClick={() => alert(`Certificate ${certId} downloaded successfully.`)}
                          className="px-3.5 py-1.5 rounded-lg bg-[#008CFF] hover:bg-[#0074d9] text-white font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Download PDF</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* ===================== TAB 3: INVOICES & BILLING ===================== */}
        {activeTab === 'billing' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Fee Invoices &amp; Receipts</h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Official GST-compliant payment vouchers and tuition invoices for your records.
              </p>
            </div>

            {enrolledCourseList.length === 0 ? (
              <div className="bg-white rounded-3xl p-10 text-center border border-slate-200 max-w-md mx-auto space-y-3">
                <FileText className="w-10 h-10 text-slate-400 mx-auto" />
                <h4 className="font-bold text-slate-900 text-sm">No Invoices Available</h4>
                <p className="text-xs text-slate-500">
                  You have not made any tuition payments under this profile yet.
                </p>
              </div>
            ) : (
              <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
                <div className="divide-y divide-slate-100">
                  {enrolledCourseList.map((course, idx) => {
                    const invoiceNumber = `INV-AIYUG-2026-${idx + 1042}`;
                    return (
                      <div key={course.id} className="p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-bold text-slate-900">{invoiceNumber}</span>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                              Paid &bull; Verified
                            </span>
                          </div>
                          <h4 className="font-bold text-slate-900 text-sm">{course.title}</h4>
                          <p className="text-xs text-slate-500">
                            Tuition: <strong>{course.price}</strong> (Inclusive of 18% GST) &bull; Payment Mode: UPI Instant
                          </p>
                        </div>

                        <button
                          onClick={() => alert(`Official Tax Invoice #${invoiceNumber} downloaded.`)}
                          className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 hover:border-[#008CFF] hover:text-[#008CFF] text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Download Tax Invoice</span>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ===================== TAB 4: EDIT PROFILE & SETTINGS ===================== */}
        {activeTab === 'profile' && (
          <div className="max-w-2xl bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Scholar Profile &amp; Preferences</h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Update your contact details, certificate naming, and career transformation preferences.
              </p>
            </div>

            {profileSaveSuccess && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Profile details successfully updated and synchronized!</span>
              </div>
            )}

            <form onSubmit={handleSaveProfile} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name (Printed on Degree) *
                  </label>
                  <input
                    type="text"
                    required
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-[#008CFF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-[#008CFF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Mobile Phone (WhatsApp Notifications)
                  </label>
                  <input
                    type="tel"
                    value={phoneInput}
                    onChange={(e) => setPhoneInput(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-[#008CFF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    City / Country
                  </label>
                  <input
                    type="text"
                    value={cityInput}
                    onChange={(e) => setCityInput(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-[#008CFF]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  LinkedIn Profile URL
                </label>
                <input
                  type="url"
                  value={linkedinInput}
                  onChange={(e) => setLinkedinInput(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-[#008CFF]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Professional Bio / Target Role
                </label>
                <textarea
                  rows={3}
                  value={bioInput}
                  onChange={(e) => setBioInput(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-[#008CFF]"
                />
              </div>

              <button
                type="submit"
                className="btn-alyug-primary px-6 py-2.5 rounded-xl text-xs font-bold text-white shadow-md cursor-pointer"
              >
                Save Profile Changes
              </button>
            </form>
          </div>
        )}

        {/* ===================== TAB 5: 1:1 MENTORSHIP & SUPPORT ===================== */}
        {activeTab === 'mentorship' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Academic &amp; Mentor Support</h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Direct access to your dedicated Silicon Valley Lead Instructor and 24x7 TA community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Mentor Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#008CFF] font-black text-xl flex items-center justify-center border border-blue-100">
                    SV
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#008CFF]">Assigned Faculty Lead</span>
                    <h4 className="font-bold text-slate-900 text-base">Silicon Valley Advisory Lead</h4>
                    <p className="text-xs text-slate-500">Google &bull; Ex-Meta AI Research</p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  You are entitled to bi-weekly 1:1 project milestone evaluation calls and continuous architectural reviews.
                </p>

                <button
                  onClick={onOpenAdvisory}
                  className="btn-alyug-primary w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book 1:1 Mentor Code Review</span>
                </button>
              </div>

              {/* Instant TA Support */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 font-black text-xl flex items-center justify-center border border-emerald-100">
                    TA
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-emerald-600">24x7 Academic Helpline</span>
                    <h4 className="font-bold text-slate-900 text-base">Dedicated Teaching Assistants</h4>
                    <p className="text-xs text-slate-500">Average response time: &lt; 15 mins</p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Stuck with a Docker container, PyTorch GPU tensor error, or ad tracking pixel? Our senior TAs are live on Slack.
                </p>

                <button
                  onClick={() => alert('Redirecting to AIYUG Scholar Discord & Slack Community.')}
                  className="w-full py-2.5 px-4 rounded-xl border border-slate-300 hover:border-[#008CFF] hover:text-[#008CFF] text-xs font-bold text-slate-700 flex items-center justify-center gap-1.5 cursor-pointer bg-white"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Join Private Scholar Discord</span>
                </button>
              </div>

            </div>
          </div>
        )}

      </div>

      {/* ===================== LMS LECTURE VIEWER MODAL SIMULATION ===================== */}
      {activeLmsCourse && (
        <div className="fixed inset-0 z-50 bg-[#070B1A]/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
          <div 
            className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* LMS Header */}
            <div className="bg-[#070B1A] text-white p-5 sm:p-6 flex items-center justify-between shrink-0 border-b border-[#0D1228]">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#008CFF]">
                  AIYUG LMS &bull; Live Classroom
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  {activeLmsCourse.title}
                </h4>
              </div>
              <button
                onClick={() => setActiveLmsCourse(null)}
                className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* LMS Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              {/* Simulated Video Player */}
              <div className="relative aspect-video rounded-2xl bg-slate-900 overflow-hidden flex items-center justify-center shadow-lg border border-slate-800">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 rounded-full bg-[#008CFF] text-white flex items-center justify-center mx-auto shadow-xl cursor-pointer hover:scale-105 transition-transform">
                    <Play className="w-8 h-8 fill-white ml-1" />
                  </div>
                  <p className="text-xs font-bold text-white">Masterclass 03: Architecture of Autonomous AI Agents</p>
                  <p className="text-[11px] text-slate-400">Streamed Live &bull; HD 1080p &bull; Transcripts Available</p>
                </div>
              </div>

              {/* Lecture Notes & Modules */}
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Module Chapters &amp; Downloadable Code
                </h5>
                <div className="space-y-2">
                  {activeLmsCourse.modules.slice(0, 4).map((mod) => (
                    <div key={mod.number} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-lg bg-blue-100 text-[#008CFF] font-bold text-[11px] flex items-center justify-center">
                          0{mod.number}
                        </span>
                        <div>
                          <span className="font-bold text-slate-900">{mod.title}</span>
                          <span className="text-[11px] text-slate-500 block">{mod.duration}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => alert(`Downloading code exercises for ${mod.title}`)}
                        className="px-3 py-1.5 rounded-lg border border-slate-300 hover:border-[#008CFF] text-slate-700 hover:text-[#008CFF] text-[11px] font-bold flex items-center gap-1 cursor-pointer bg-white"
                      >
                        <Download className="w-3 h-3" />
                        <span>Code Lab</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* LMS Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs shrink-0">
              <span className="text-slate-500">Need help with this module? Connect with TA on Discord.</span>
              <button
                onClick={() => setActiveLmsCourse(null)}
                className="px-4 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 cursor-pointer"
              >
                Close Classroom
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Google Account Selector Dialog */}
      <GoogleSignInModal
        isOpen={googleModalOpen}
        onClose={() => setGoogleModalOpen(false)}
        onSelectAccount={handleGoogleAccountSelected}
      />

    </div>
  );
};
