import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Search, 
  ArrowRight,
  Bot, 
  Brain, 
  Code2, 
  GraduationCap, 
  Briefcase, 
  Megaphone, 
  Cloud, 
  Award,
  CheckCircle2,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { COURSES, Course } from '../data/coursesData';

interface HeroProps {
  onExploreCourses: () => void;
  onOpenAdvisory: () => void;
  onSelectCourse?: (course: Course) => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onExploreCourses, 
  onOpenAdvisory, 
  onSelectCourse 
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchResults, setSearchResults] = useState<Course[]>([]);
  const [dynamicIndex, setDynamicIndex] = useState(0);

  // Scroll state for category pills on smaller screens
  const pillsScrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const bgVideoRef = useRef<HTMLVideoElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Dynamic rotating targets
  const dynamicWords = [
    'AI Transformation',
    'Career Promotion',
    'IIT & IIM Credential',
    '100% Guaranteed Role',
    'Executive Leadership'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setDynamicIndex((prev) => (prev + 1) % dynamicWords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Filter courses based on search query
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }
    const q = searchQuery.toLowerCase();
    const filtered = COURSES.filter(course => 
      course.title.toLowerCase().includes(q) ||
      course.tagline.toLowerCase().includes(q) ||
      course.categoryName.toLowerCase().includes(q) ||
      course.skills.some(skill => skill.toLowerCase().includes(q))
    ).slice(0, 5);
    setSearchResults(filtered);
  }, [searchQuery]);

  // Handle outside click to close search suggestions
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Check category pills scroll limits
  const checkPillsScroll = () => {
    if (pillsScrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = pillsScrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkPillsScroll();
    const el = pillsScrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkPillsScroll, { passive: true });
      window.addEventListener('resize', checkPillsScroll);
      return () => {
        el.removeEventListener('scroll', checkPillsScroll);
        window.removeEventListener('resize', checkPillsScroll);
      };
    }
  }, []);

  // Auto-scroll category pills exclusively on mobile devices (< 768px)
  useEffect(() => {
    const el = pillsScrollRef.current;
    if (!el) return;

    let animId: number;
    let isInteracting = false;
    let pauseTimer: ReturnType<typeof setTimeout>;

    const onTouchStart = () => {
      isInteracting = true;
      clearTimeout(pauseTimer);
    };

    const onTouchEnd = () => {
      clearTimeout(pauseTimer);
      pauseTimer = setTimeout(() => {
        isInteracting = false;
      }, 1200);
    };

    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchend', onTouchEnd, { passive: true });
    el.addEventListener('mouseenter', onTouchStart);
    el.addEventListener('mouseleave', onTouchEnd);

    const autoScrollLoop = () => {
      // ONLY on mobile screens (< 768px)
      if (window.innerWidth < 768 && el && !isInteracting) {
        const halfWidth = el.scrollWidth / 2;
        if (halfWidth > 0) {
          if (el.scrollLeft >= halfWidth) {
            // Seamless infinite loop without any visual jump
            el.scrollLeft -= halfWidth;
          } else {
            el.scrollLeft += 0.85; // Smooth readable speed
          }
        }
      }
      animId = requestAnimationFrame(autoScrollLoop);
    };

    animId = requestAnimationFrame(autoScrollLoop);

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(pauseTimer);
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchend', onTouchEnd);
      el.removeEventListener('mouseenter', onTouchStart);
      el.removeEventListener('mouseleave', onTouchEnd);
    };
  }, []);

  const scrollPills = (direction: 'left' | 'right') => {
    if (pillsScrollRef.current) {
      const scrollAmount = direction === 'left' ? -220 : 220;
      pillsScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const togglePlay = () => {
    if (bgVideoRef.current) {
      if (isPlaying) {
        bgVideoRef.current.pause();
      } else {
        bgVideoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (bgVideoRef.current) {
      bgVideoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (searchResults.length > 0 && onSelectCourse) {
      onSelectCourse(searchResults[0]);
      setIsSearchFocused(false);
    } else {
      onExploreCourses();
    }
  };

  const handleCategoryClick = (categoryKey: string) => {
    const el = document.getElementById(categoryKey);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onExploreCourses();
    }
  };

  // Category pill items matching the layout
  const categoryPills = [
    { label: 'Agentic AI', icon: Bot, target: 'tech' },
    { label: 'Artificial Intelligence', icon: Brain, target: 'tech' },
    { label: 'Full Stack with AI', icon: Code2, target: 'tech' },
    { label: 'IIT / IIM Courses', icon: GraduationCap, target: 'college' },
    { label: 'Job+ Guarantee', icon: Briefcase, target: 'job_plus' },
    { label: 'AI Marketing', icon: Megaphone, target: 'marketing' },
    { label: 'Cloud & DevOps', icon: Cloud, target: 'tech' },
    { label: 'Leadership MBA', icon: Award, target: 'college' },
  ];

  const videoSource = '/video/student_journey.mp4';
  const campusPoster = '/images/hero_campus_student_1790421344248.jpg';

  return (
    <section className="relative overflow-hidden bg-[#070B1A] text-white min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex flex-col justify-between border-b border-[#0D1228]/60">
      
      {/* 1. CINEMATIC FULL-BLEED BACKGROUND VIDEO */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <video
          ref={bgVideoRef}
          src={videoSource}
          poster={campusPoster}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover filter brightness-[0.48] contrast-105 transition-all duration-700"
        />

        {/* AIYUG Theme Solid Tint Overlay */}
        <div className="absolute inset-0 bg-[#070B1A]/80" />
      </div>

      {/* Floating Video Audio/Play Controls (Responsive & Compact) */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 flex items-center gap-1.5 sm:gap-2 bg-[#070B1A]/85 backdrop-blur-md p-1 px-2.5 sm:p-1.5 sm:px-3 rounded-full border border-white/10 text-xs shadow-xl">
        <span className="text-[11px] font-semibold text-[#008CFF] hidden sm:inline">
          Campus Video
        </span>
        <div className="w-px h-3.5 bg-white/20 hidden sm:block" />
        <button
          onClick={togglePlay}
          className="p-1 rounded-full text-slate-300 hover:text-white transition-colors cursor-pointer"
          title={isPlaying ? 'Pause Background Video' : 'Play Background Video'}
          aria-label={isPlaying ? 'Pause Background Video' : 'Play Background Video'}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        </button>
        <button
          onClick={toggleMute}
          className="p-1 rounded-full text-slate-300 hover:text-white transition-colors cursor-pointer"
          title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
          aria-label={isMuted ? 'Unmute Audio' : 'Mute Audio'}
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* 2. CENTERED HERO CONTENT AREA */}
      <div className="relative z-10 max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 w-full max-w-full min-w-0 flex-1 flex flex-col justify-center items-center text-center overflow-hidden">
        
        {/* Top Serif Subheading (Single solid theme color) */}
        <div className="mb-2 sm:mb-3 max-w-full">
          <span className="font-serif italic text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-[#008CFF] font-normal tracking-wide drop-shadow-md inline-block max-w-full truncate">
            For Your Every Next
          </span>
        </div>

        {/* Dynamic Target Headline (Solid white single color, responsive font scaling) */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4 sm:mb-6 min-h-[1.25em] flex items-center justify-center max-w-full">
          <span 
            key={dynamicIndex}
            className="text-white inline-block animate-fadeIn drop-shadow-md text-center max-w-full px-1 break-words"
          >
            {dynamicWords[dynamicIndex]}
          </span>
        </h1>

        {/* Supporting Brand Subtitle */}
        <p className="max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-[#8D96B8] leading-relaxed mb-6 sm:mb-8 text-balance px-2">
          India's premier Academy for AI-native Engineering, Certified University Programs from IIT & IIM, and 100% Guaranteed Job+ Placements.
        </p>

        {/* 3. PROMINENT SEARCH BAR (Fully Responsive) */}
        <div ref={searchContainerRef} className="relative w-full max-w-2xl mx-auto mb-6 px-1 sm:px-0 min-w-0">
          <form 
            onSubmit={handleSearchSubmit}
            className="relative bg-white rounded-full p-1.5 sm:p-2 pl-3.5 sm:pl-6 shadow-2xl shadow-blue-950/40 border border-[#D9DFFF] flex items-center justify-between gap-1.5 sm:gap-3 focus-within:ring-2 focus-within:ring-[#008CFF] focus-within:border-transparent transition-all max-w-full"
          >
            <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
              <Search className="w-4 h-4 sm:w-5 sm:h-5 text-[#008CFF] shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearchFocused(true);
                }}
                onFocus={() => setIsSearchFocused(true)}
                placeholder="Tell us what you're looking to learn..."
                className="w-full bg-transparent text-xs sm:text-sm md:text-base text-slate-800 placeholder-slate-400 focus:outline-none font-medium truncate"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="p-1 text-slate-400 hover:text-slate-600 cursor-pointer shrink-0"
                >
                  <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
              )}
            </div>

            {/* Circular Solid Theme Action Button (Never squished) */}
            <button
              type="submit"
              className="bg-[#008CFF] hover:bg-[#0074d9] w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center shrink-0 cursor-pointer shadow-md transition-transform active:scale-95 group"
              aria-label="Search courses"
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:translate-x-0.5 transition-transform" />
            </button>
          </form>

          {/* Autocomplete Search Dropdown */}
          {isSearchFocused && searchResults.length > 0 && (
            <div className="absolute left-1 right-1 sm:left-0 sm:right-0 top-full mt-2 bg-white rounded-2xl shadow-2xl border border-[#D9DFFF] overflow-hidden z-30 text-left py-2 divide-y divide-slate-100 max-h-72 overflow-y-auto animate-in fade-in zoom-in-95">
              <div className="px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Matching Programs
              </div>
              {searchResults.map((course) => (
                <div
                  key={course.id}
                  onClick={() => {
                    if (onSelectCourse) onSelectCourse(course);
                    setIsSearchFocused(false);
                    setSearchQuery('');
                  }}
                  className="px-4 py-2.5 sm:py-3 hover:bg-[#F7F9FF] cursor-pointer flex items-center justify-between group transition-colors"
                >
                  <div className="min-w-0 pr-2">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#008CFF] transition-colors truncate">
                      {course.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 truncate">
                      {course.categoryName} · {course.duration} · {course.price}
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-[#008CFF] flex items-center gap-1 group-hover:translate-x-1 transition-transform shrink-0">
                    <span className="hidden sm:inline">View Course</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick Highlights / Trust Row (Neat compact badges on mobile and desktop) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-6 text-[11px] sm:text-xs text-slate-300 font-medium px-2">
          <div className="flex items-center gap-1.5 bg-slate-900/60 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Dual Accredited Degrees</span>
          </div>
          <div className="flex items-center gap-1.5 bg-slate-900/60 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>100% Placement Agreement</span>
          </div>
          <div className="flex items-center gap-1.5 bg-slate-900/60 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>1:1 Live Silicon Valley Mentors</span>
          </div>
        </div>

      </div>

      {/* 4. BOTTOM CATEGORY PILLS BAR (Guaranteed zero-overflow container) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pb-4 sm:pb-6 overflow-hidden">
        <div className="relative flex items-center w-full max-w-full min-w-0 overflow-hidden">
          
          {/* Left and Right Subtle Fade Masks for mobile */}
          <div className="md:hidden pointer-events-none absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#070B1A] to-transparent z-10" />
          <div className="md:hidden pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#070B1A] to-transparent z-10" />

          {/* Left Arrow for mobile/narrow viewports when scrolled */}
          {canScrollLeft && (
            <button
              onClick={() => scrollPills('left')}
              className="md:hidden absolute left-1 z-20 w-7 h-7 rounded-full bg-slate-900/90 text-white shadow-lg border border-white/20 flex items-center justify-center cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
          )}

          {/* Pills Container */}
          <div 
            ref={pillsScrollRef}
            className="w-full max-w-full min-w-0 overflow-x-auto md:overflow-x-visible scrollbar-none py-1.5 scroll-smooth overscroll-x-contain"
          >
            <div className="flex items-center md:flex-wrap md:justify-center gap-2 sm:gap-2.5 w-max md:w-full px-2 md:px-0">
              {[...categoryPills, ...categoryPills].map((pill, idx) => {
                const IconComponent = pill.icon;
                const isDuplicateOnMobile = idx >= categoryPills.length;
                return (
                  <button
                    key={idx}
                    onClick={() => handleCategoryClick(pill.target)}
                    className={`bg-white/95 hover:bg-white text-slate-800 hover:text-[#008CFF] border border-[#D9DFFF] hover:border-[#008CFF] shadow-md hover:shadow-lg shadow-black/5 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full text-xs sm:text-[13px] font-bold items-center gap-1.5 sm:gap-2 transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shrink-0 ${
                      isDuplicateOnMobile ? 'flex md:hidden' : 'flex'
                    }`}
                  >
                    <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#008CFF] shrink-0" />
                    <span>{pill.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Arrow for mobile/narrow viewports when scrollable */}
          {canScrollRight && (
            <button
              onClick={() => scrollPills('right')}
              className="md:hidden absolute right-1 z-20 w-7 h-7 rounded-full bg-slate-900/90 text-white shadow-lg border border-white/20 flex items-center justify-center cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          )}

        </div>
      </div>

    </section>
  );
};
