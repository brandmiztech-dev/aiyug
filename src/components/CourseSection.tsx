import React, { useState, useRef, useEffect } from 'react';
import { Course } from '../data/coursesData';
import { CourseCard } from './CourseCard';
import { 
  Sparkles, 
  ArrowRight, 
  Download, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';

interface CourseSectionProps {
  id: string;
  sectionNumber: string;
  title: string;
  subtitle: string;
  tagline: string;
  courses: Course[];
  badgeText?: string;
  onViewCourse: (course: Course) => void;
  onOpenSyllabus: (course: Course) => void;
  onOpenAdvisory: () => void;
}

export const CourseSection: React.FC<CourseSectionProps> = ({
  id,
  sectionNumber,
  title,
  subtitle,
  tagline,
  courses,
  badgeText,
  onViewCourse,
  onOpenSyllabus,
  onOpenAdvisory
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 20);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);

      // Estimate active slide index based on card width
      const cardWidth = scrollContainerRef.current.firstElementChild?.clientWidth || 360;
      const index = Math.round(scrollLeft / (cardWidth + 24));
      setActiveIndex(Math.min(courses.length - 1, Math.max(0, index)));
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      checkScroll();
      el.addEventListener('scroll', checkScroll, { passive: true });
      window.addEventListener('resize', checkScroll);
      return () => {
        el.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, [courses]);

  const scrollByDirection = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const card = scrollContainerRef.current.firstElementChild as HTMLElement;
      const scrollAmount = card ? (card.offsetWidth + 28) : 380;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const card = scrollContainerRef.current.firstElementChild as HTMLElement;
      const cardWidth = card ? (card.offsetWidth + 28) : 380;
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id={id} className="py-14 sm:py-20 border-b border-slate-100 scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Carousel Navigation Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-black uppercase tracking-wider text-[#008CFF] bg-[#F7F9FF] px-2.5 py-1 rounded-md border border-[#D9DFFF]">
                {sectionNumber}
              </span>
              {badgeText && (
                <span className="text-xs font-semibold text-slate-600 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#008CFF]" />
                  {badgeText}
                </span>
              )}
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight">
              {title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
              {subtitle}
            </p>
          </div>

          {/* Carousel Action & Arrow Controls */}
          <div className="shrink-0 flex items-center gap-3">
            <button
              onClick={onOpenAdvisory}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-[#3514D4] bg-[#F7F9FF] hover:bg-[#EBF3FF] transition-colors cursor-pointer mr-2"
            >
              <span>Faculty Guide</span>
              <Download className="w-3.5 h-3.5" />
            </button>

            {/* Left & Right Carousel Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollByDirection('left')}
                disabled={!canScrollLeft}
                className="w-10 h-10 rounded-xl bg-white border border-slate-200 hover:border-[#008CFF] hover:bg-[#F7F9FF] text-slate-700 hover:text-[#008CFF] flex items-center justify-center transition-all disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:bg-white disabled:hover:text-slate-700 disabled:cursor-not-allowed shadow-sm cursor-pointer"
                aria-label="Previous courses slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollByDirection('right')}
                disabled={!canScrollRight}
                className="w-10 h-10 rounded-xl bg-white border border-slate-200 hover:border-[#008CFF] hover:bg-[#F7F9FF] text-slate-700 hover:text-[#008CFF] flex items-center justify-center transition-all disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:bg-white disabled:hover:text-slate-700 disabled:cursor-not-allowed shadow-sm cursor-pointer"
                aria-label="Next courses slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Container - Exactly 3 cards visible on desktop, swipeable with snap */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 sm:gap-7 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 pt-2 no-scrollbar"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {courses.map((course) => (
              <div 
                key={course.id} 
                className="snap-start shrink-0 w-[88vw] sm:w-[calc(50%-14px)] lg:w-[calc(33.333%-19px)]"
              >
                <CourseCard
                  course={course}
                  onViewCourse={onViewCourse}
                  onOpenSyllabus={onOpenSyllabus}
                />
              </div>
            ))}
          </div>

          {/* Carousel Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {courses.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToIndex(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  activeIndex === idx
                    ? 'w-7 bg-blue-600 shadow-sm'
                    : 'w-2 bg-slate-200 hover:bg-slate-300'
                }`}
                aria-label={`Go to course slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Section Bottom Assurance Banner */}
        <div className="mt-8 p-4 bg-slate-50 border border-slate-200/80 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#EBF3FF] text-[#008CFF] flex items-center justify-center shrink-0 font-bold">
              ✓
            </div>
            <div>
              <p className="font-bold text-slate-900">{tagline}</p>
              <p className="text-slate-500">Includes live mentor office hours, industry capstones & AI credentials.</p>
            </div>
          </div>

          <button
            onClick={onOpenAdvisory}
            className="text-[#008CFF] font-bold hover:text-[#3514D4] hover:underline flex items-center gap-1 shrink-0 cursor-pointer"
          >
            <span>Compare with our counselors</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
