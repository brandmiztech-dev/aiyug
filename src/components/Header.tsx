import React, { useState, useEffect, useRef } from 'react';
import { COURSES, CATEGORIES, Course } from '../data/coursesData';
import { 
  BookOpen, 
  ChevronDown, 
  Search, 
  User, 
  PhoneCall, 
  Menu, 
  X, 
  GraduationCap, 
  Cpu, 
  TrendingUp, 
  Briefcase, 
  Sparkles, 
  ArrowRight,
  LogOut,
  CheckCircle2
} from 'lucide-react';

interface HeaderProps {
  onSelectCourse: (course: Course) => void;
  onOpenSyllabus: (course: Course) => void;
  onOpenAuth: () => void;
  currentUser: { name: string; email: string; enrolledCourses: string[] } | null;
  onLogout: () => void;
  onOpenStudentPortal: () => void;
  onOpenAdvisory: () => void;
  onNavigateHome?: () => void;
  onNavigateAllCourses?: () => void;
  onNavigateToAccount?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onSelectCourse,
  onOpenSyllabus,
  onOpenAuth,
  currentUser,
  onLogout,
  onOpenStudentPortal,
  onOpenAdvisory,
  onNavigateHome,
  onNavigateAllCourses,
  onNavigateToAccount
}) => {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [activeCategoryTab, setActiveCategoryTab] = useState<'tech' | 'marketing' | 'job_plus' | 'college'>('tech');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const megaMenuRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setMegaMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredCourses = searchQuery.trim()
    ? COURSES.filter(c => 
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        c.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
        c.categoryName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const activeCategoryCourses = COURSES.filter(c => c.category === activeCategoryTab);

  const categoryIcons = {
    tech: <Cpu className="w-4 h-4" />,
    marketing: <TrendingUp className="w-4 h-4" />,
    job_plus: <Briefcase className="w-4 h-4" />,
    college: <GraduationCap className="w-4 h-4" />
  };

  return (
    <>
      {/* Top Advisory Bar */}
      <div className="bg-[#070B1A] text-white text-xs py-2 px-3 sm:px-4 border-b border-[#0D1228] w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2 truncate min-w-0">
            <span className="font-medium text-[#008CFF] text-[11px] sm:text-xs truncate">Admissions Open (Q4 2026):</span>
            <span className="hidden md:inline text-slate-300 text-[11px] sm:text-xs truncate">Limited scholarship seats with up to 40% sponsorship.</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 text-slate-300 shrink-0 text-[11px] sm:text-xs">
            <button 
              onClick={onOpenAdvisory}
              className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
            >
              <PhoneCall className="w-3 h-3 text-[#008CFF]" />
              <span>Request Callback</span>
            </button>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <span className="hidden lg:inline font-mono text-[11px] text-[#008CFF]">1800-891-AIYUG</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 w-full max-w-full ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-2.5 sm:py-3' 
            : 'bg-white border-b border-slate-100 py-3 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4 lg:gap-6">
            
            {/* Brand Zone + Explore Courses */}
            <div className="flex items-center gap-2.5 sm:gap-4 lg:gap-6 shrink-0 min-w-0">
              <button 
                type="button"
                onClick={() => {
                  if (onNavigateHome) onNavigateHome();
                  else window.location.hash = '#/';
                }}
                className="flex items-center gap-2 sm:gap-2.5 group shrink-0 text-left cursor-pointer"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#008CFF] flex items-center justify-center shadow-md text-white font-black text-base sm:text-xl tracking-wider">
                  A
                </div>
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-950 flex items-center leading-none">
                    AIYUG
                  </span>
                  <span className="hidden sm:block text-[10px] uppercase tracking-widest font-bold text-[#008CFF] mt-1">
                    Academy of AI & Tech
                  </span>
                </div>
              </button>

              {/* Mega Dropdown Trigger */}
              <div ref={megaMenuRef} className="shrink-0">
                <button
                  onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                  onMouseEnter={() => setMegaMenuOpen(true)}
                  className={`hidden md:flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                    megaMenuOpen 
                      ? 'bg-[#F7F9FF] text-[#3514D4] border-[#008CFF]/50 shadow-sm' 
                      : 'bg-slate-50 hover:bg-[#F7F9FF] text-slate-800 hover:text-[#008CFF] border-slate-200/80 hover:border-[#D9DFFF]'
                  }`}
                  aria-expanded={megaMenuOpen}
                >
                  <BookOpen className="w-4 h-4 text-[#008CFF]" />
                  <span className="whitespace-nowrap">Explore Courses</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${megaMenuOpen ? 'rotate-180 text-[#008CFF]' : 'text-slate-400'}`} />
                </button>

                {/* 100% Full Width Mega Menu Bar Attached Below Header */}
                {megaMenuOpen && (
                  <div 
                    onMouseLeave={() => setMegaMenuOpen(false)}
                    className="absolute left-0 right-0 top-full w-full bg-white shadow-2xl border-b border-slate-200 z-50 animate-in fade-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto"
                  >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
                      
                      {/* Top Bar inside 100% Mega Menu */}
                      <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-black uppercase tracking-wider text-[#008CFF] bg-[#F7F9FF] border border-[#D9DFFF] px-3 py-1 rounded-full">
                            Curated Faculties & Certifications
                          </span>
                          <span className="text-xs text-slate-500 hidden sm:inline">
                            Explore 17+ industry and university certified programs
                          </span>
                        </div>

                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => {
                              setMegaMenuOpen(false);
                              onOpenAdvisory();
                            }}
                            className="text-xs font-bold text-[#008CFF] hover:text-[#3514D4] flex items-center gap-1 hover:underline cursor-pointer"
                          >
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Talk to Admissions Advisor</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>

                          <button
                            onClick={() => setMegaMenuOpen(false)}
                            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                            aria-label="Close menu"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Main 100% Grid Layout */}
                      <div className="grid grid-cols-12 gap-8">
                        
                        {/* Category Selector Tabs (Left Col: 3 cols) */}
                        <div className="col-span-12 md:col-span-3 border-r border-slate-100 pr-5 space-y-2">
                          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 py-0.5">
                            SELECT FACULTY
                          </div>
                          {CATEGORIES.map((cat) => (
                            <button
                              key={cat.id}
                              onClick={() => setActiveCategoryTab(cat.id as any)}
                              onMouseEnter={() => setActiveCategoryTab(cat.id as any)}
                              className={`w-full text-left px-4 py-3 rounded-2xl text-sm font-semibold transition-all flex items-center justify-between cursor-pointer ${
                                activeCategoryTab === cat.id
                                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20 translate-x-1'
                                  : 'text-slate-700 hover:bg-[#F7F9FF] hover:text-[#3514D4]'
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <span className={activeCategoryTab === cat.id ? 'text-white' : 'text-[#008CFF]'}>
                                  {categoryIcons[cat.id as keyof typeof categoryIcons]}
                                </span>
                                <div className="flex flex-col">
                                  <span>{cat.name}</span>
                                  <span className={`text-[11px] font-normal ${activeCategoryTab === cat.id ? 'text-blue-100' : 'text-slate-400'}`}>
                                    {cat.highlight}
                                  </span>
                                </div>
                              </div>
                              <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                                activeCategoryTab === cat.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                              }`}>
                                {cat.count}
                              </span>
                            </button>
                          ))}

                          <div className="pt-4 mt-2">
                            <div className="p-4 bg-[#F7F9FF] rounded-2xl border border-[#D9DFFF] text-xs">
                              <p className="font-bold text-blue-950 flex items-center gap-1.5">
                                <Sparkles className="w-3.5 h-3.5 text-[#008CFF]" />
                                100% Placement Agreement
                              </p>
                              <p className="text-slate-600 mt-1 leading-relaxed">
                                Get hired at top product companies or receive a 100% tuition refund.
                              </p>
                              <a
                                href="#job_plus"
                                onClick={() => setMegaMenuOpen(false)}
                                className="mt-2.5 text-[#3514D4] font-bold text-xs inline-flex items-center gap-1 hover:underline"
                              >
                                View Job+ Guarantee <ArrowRight className="w-3 h-3" />
                              </a>
                            </div>
                          </div>
                        </div>

                        {/* Course Cards Grid (Right Col: 9 cols with 4 cards across full width) */}
                        <div className="col-span-12 md:col-span-9">
                          <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
                            <div>
                              <h4 className="font-bold text-slate-950 text-lg flex items-center gap-2">
                                <span>{CATEGORIES.find(c => c.id === activeCategoryTab)?.name}</span>
                                <span className="text-xs font-normal text-slate-500">
                                  ({activeCategoryCourses.length} Programs)
                                </span>
                              </h4>
                              <p className="text-xs text-slate-500 mt-0.5">
                                {CATEGORIES.find(c => c.id === activeCategoryTab)?.description}
                              </p>
                            </div>
                            <a 
                              href={`#${activeCategoryTab}`} 
                              onClick={() => setMegaMenuOpen(false)}
                              className="text-xs font-bold text-[#008CFF] hover:text-[#3514D4] hover:underline flex items-center gap-1 shrink-0"
                            >
                              <span>View All {CATEGORIES.find(c => c.id === activeCategoryTab)?.name}</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </a>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                            {activeCategoryCourses.map((course) => (
                              <div
                                key={course.id}
                                onClick={() => {
                                  setMegaMenuOpen(false);
                                  onSelectCourse(course);
                                }}
                                className="group p-2.5 rounded-2xl border border-slate-200/90 hover:border-[#008CFF] hover:shadow-md bg-white hover:bg-slate-50/50 transition-all cursor-pointer flex items-center gap-3"
                              >
                                {/* Left: Square Product/Course Image without badge overlay */}
                                <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-xl overflow-hidden shrink-0 bg-slate-100 border border-slate-200/80">
                                  <img 
                                    src={course.image} 
                                    alt={course.title}
                                    referrerPolicy="no-referrer"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                  />
                                </div>

                                {/* Right: Heading and details */}
                                <div className="min-w-0 flex-1">
                                  <h5 className="font-bold text-slate-900 text-xs leading-snug line-clamp-2 group-hover:text-[#008CFF] transition-colors">
                                    {course.title}
                                  </h5>
                                  <div className="flex items-center gap-2 mt-1.5 text-[11px] text-slate-500">
                                    <span className="truncate">{course.duration}</span>
                                    <span>·</span>
                                    <span className="text-amber-500 font-semibold shrink-0">★ {course.rating}</span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Links Nav - Visible on xl+ screens */}
            <nav className="hidden xl:flex items-center gap-4 text-xs font-bold text-slate-700 whitespace-nowrap">
              <button 
                type="button"
                onClick={() => {
                  if (onNavigateAllCourses) onNavigateAllCourses();
                  else window.location.hash = '#/courses';
                }} 
                className="py-1 px-2.5 rounded-lg bg-[#EBF3FF] text-[#008CFF] hover:bg-[#D9E9FF] transition-colors cursor-pointer flex items-center gap-1.5 font-extrabold"
              >
                <GraduationCap className="w-3.5 h-3.5 text-[#008CFF]" />
                <span>All Courses</span>
              </button>
              <a 
                href="#tech" 
                className="py-1 px-1.5 rounded-lg hover:text-[#008CFF] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#008CFF]"
              >
                Tech Certs
              </a>
              <a 
                href="#marketing" 
                className="py-1 px-1.5 rounded-lg hover:text-[#008CFF] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#008CFF]"
              >
                Marketing with AI
              </a>
              <a 
                href="#job_plus" 
                className="py-1 px-1.5 rounded-lg hover:text-[#008CFF] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#008CFF]"
              >
                Job+ Guarantee
              </a>
              <a 
                href="#college" 
                className="py-1 px-1.5 rounded-lg hover:text-[#008CFF] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#008CFF]"
              >
                College Certs
              </a>
              <a 
                href="#placements" 
                className="py-1 px-1.5 rounded-lg hover:text-[#008CFF] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#008CFF]"
              >
                Alumni & Hires
              </a>
            </nav>

            {/* Right Actions Zone */}
            <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
              
              {/* Interactive Search Bar Trigger */}
              <div className="relative">
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="p-1.5 sm:p-2 rounded-xl text-slate-600 hover:text-[#008CFF] hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#008CFF] cursor-pointer"
                  title="Search Courses"
                  aria-label="Search Courses"
                >
                  <Search className="w-4 h-4" />
                </button>

                {searchOpen && (
                  <div className="absolute right-0 mt-2 w-72 sm:w-96 bg-white rounded-2xl shadow-xl border border-slate-200 p-3 z-50">
                    <div className="relative">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        ref={searchRef}
                        type="text"
                        autoFocus
                        placeholder="Search AI, Full Stack, IIT, Cloud..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-8 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-[#008CFF] focus:ring-1 focus:ring-[#008CFF]"
                      />
                      {searchQuery && (
                        <button 
                          onClick={() => setSearchQuery('')}
                          className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>

                    {searchQuery.trim() && (
                      <div className="mt-2 max-h-60 overflow-y-auto space-y-1 pt-1 border-t border-slate-100">
                        {filteredCourses.length > 0 ? (
                          filteredCourses.map(course => (
                            <div
                              key={course.id}
                              onClick={() => {
                                onSelectCourse(course);
                                setSearchOpen(false);
                                setSearchQuery('');
                              }}
                              className="p-2 hover:bg-[#F7F9FF] rounded-lg cursor-pointer flex items-center justify-between text-xs"
                            >
                              <div>
                                <p className="font-semibold text-slate-900">{course.title}</p>
                                <span className="text-[10px] text-slate-500">{course.categoryName} · {course.duration}</span>
                              </div>
                              <span className="text-[#008CFF] font-bold">{course.price}</span>
                            </div>
                          ))
                        ) : (
                          <div className="p-3 text-center text-xs text-slate-500">
                            No courses found matching "{searchQuery}"
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* User Account / Login State */}
              {currentUser ? (
                <div className="relative">
                  <button
                    onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                    className="flex items-center gap-1.5 sm:gap-2 pl-2 pr-2.5 sm:pr-3 py-1.5 rounded-full border border-[#D9DFFF] bg-[#F7F9FF] hover:bg-[#EBF3FF] text-blue-900 transition-all text-xs font-semibold"
                  >
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[10px] sm:text-xs">
                      {currentUser.name.charAt(0).toUpperCase()}
                    </div>
                    <span className="hidden sm:inline max-w-[100px] truncate">{currentUser.name}</span>
                    <ChevronDown className="w-3 h-3 text-[#008CFF]" />
                  </button>

                  {userDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-200 py-2 z-50">
                      <div className="px-4 py-2 border-b border-slate-100">
                        <p className="font-bold text-slate-900 text-xs truncate">{currentUser.name}</p>
                        <p className="text-[11px] text-slate-500 truncate">{currentUser.email}</p>
                        <div className="mt-1 flex items-center gap-1 text-[10px] text-emerald-600 font-semibold">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Student Portal Active</span>
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          setUserDropdownOpen(false);
                          if (onNavigateToAccount) onNavigateToAccount();
                          else onOpenStudentPortal();
                        }}
                        className="w-full text-left px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-[#008CFF] flex items-center justify-between cursor-pointer"
                      >
                        <span>My Enrolled Courses &amp; LMS</span>
                        <span className="px-1.5 py-0.5 rounded bg-[#EBF3FF] text-[#008CFF] font-bold text-[10px]">
                          {currentUser.enrolledCourses.length}
                        </span>
                      </button>

                      <button
                        onClick={() => {
                          setUserDropdownOpen(false);
                          if (onNavigateToAccount) onNavigateToAccount();
                        }}
                        className="w-full text-left px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-[#008CFF] flex items-center gap-2 cursor-pointer"
                      >
                        <User className="w-3.5 h-3.5 text-[#008CFF]" />
                        <span>My Account Settings</span>
                      </button>

                      <button
                        onClick={() => {
                          setUserDropdownOpen(false);
                          onLogout();
                        }}
                        className="w-full text-left px-4 py-2 text-xs font-medium text-red-600 hover:bg-red-50 flex items-center gap-2 border-t border-slate-100 mt-1 cursor-pointer"
                      >
                        <LogOut className="w-3.5 h-3.5" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={onOpenAuth}
                  className="flex items-center gap-1 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs font-bold text-slate-800 hover:text-[#008CFF] hover:bg-[#F7F9FF]/50 rounded-2xl transition-all border border-slate-200 shadow-sm cursor-pointer whitespace-nowrap"
                >
                  <User className="w-3.5 h-3.5 text-[#008CFF]" />
                  <span className="hidden sm:inline">Student </span>
                  <span>Login</span>
                </button>
              )}

              {/* Primary Call to Action */}
              <button
                onClick={onOpenAdvisory}
                className="hidden 2xl:inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-[#008CFF] hover:bg-[#0074d9] rounded-2xl shadow-md transition-all whitespace-nowrap cursor-pointer"
              >
                <span>Free Career Counseling</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* Mobile / Tablet Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="2xl:hidden p-1.5 sm:p-2 rounded-xl text-slate-700 hover:bg-slate-100 cursor-pointer"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="2xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2">Course Faculties</span>
              <a 
                href="#tech" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-800 hover:bg-[#F7F9FF] hover:text-[#008CFF]"
              >
                1. Tech Certification
              </a>
              <a 
                href="#marketing" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-800 hover:bg-[#F7F9FF] hover:text-[#008CFF]"
              >
                2. Marketing with AI
              </a>
              <a 
                href="#job_plus" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-800 hover:bg-[#F7F9FF] hover:text-[#008CFF]"
              >
                3. Job+ Certification (100% Guaranteed)
              </a>
              <a 
                href="#college" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-800 hover:bg-[#F7F9FF] hover:text-[#008CFF]"
              >
                4. College Certification (IIT, IIM, XLRI)
              </a>
              <a 
                href="#placements" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-800 hover:bg-[#F7F9FF] hover:text-[#008CFF]"
              >
                Alumni Placements & Outcomes
              </a>
            </div>

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              {!currentUser ? (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onNavigateToAccount) onNavigateToAccount();
                    else onOpenAuth();
                  }}
                  className="w-full py-2.5 text-center text-xs font-bold text-[#008CFF] border border-[#D9DFFF] bg-[#F7F9FF] rounded-xl cursor-pointer"
                >
                  Student Portal &amp; Login
                </button>
              ) : (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onNavigateToAccount) onNavigateToAccount();
                    else onOpenStudentPortal();
                  }}
                  className="w-full py-2.5 text-center text-xs font-bold text-[#008CFF] border border-[#D9DFFF] bg-[#F7F9FF] rounded-xl cursor-pointer"
                >
                  My Account &amp; Enrolled Courses ({currentUser.enrolledCourses.length})
                </button>
              )}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdvisory();
                }}
                className="w-full py-2.5 text-center text-xs font-bold text-white bg-blue-600 rounded-xl shadow"
              >
                Book Free Career Call
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
