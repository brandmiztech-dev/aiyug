import React, { useState, useMemo } from 'react';
import { Course, COURSES } from '../data/coursesData';
import { CourseCard } from './CourseCard';
import { 
  Search, 
  Filter, 
  Sparkles, 
  GraduationCap, 
  Layers, 
  CheckCircle2, 
  ArrowLeft,
  SlidersHorizontal,
  X
} from 'lucide-react';

interface AllCoursesPageProps {
  onSelectCourse: (course: Course) => void;
  onEnrollCourse: (course: Course) => void;
  onOpenSyllabus: (course: Course) => void;
  onBackToHome: () => void;
}

export const AllCoursesPage: React.FC<AllCoursesPageProps> = ({
  onSelectCourse,
  onEnrollCourse,
  onOpenSyllabus,
  onBackToHome
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'rating' | 'duration'>('featured');

  const categories = [
    { id: 'all', label: 'All Certifications' },
    { id: 'tech', label: 'Tech Certification' },
    { id: 'marketing', label: 'Marketing with AI' },
    { id: 'job_plus', label: 'Job+ Guarantee' },
    { id: 'college', label: 'College Degree Certifications' },
  ];

  // Filter & Sort Logic
  const filteredCourses = useMemo(() => {
    return COURSES.filter((course) => {
      const matchCat = selectedCategory === 'all' || course.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchQuery = 
        !q || 
        course.title.toLowerCase().includes(q) ||
        course.tagline.toLowerCase().includes(q) ||
        course.skills.some(s => s.toLowerCase().includes(q)) ||
        (course.institute && course.institute.toLowerCase().includes(q));

      return matchCat && matchQuery;
    }).sort((a, b) => {
      if (sortBy === 'rating') {
        return b.rating - a.rating;
      }
      return 0; // default featured
    });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-slate-50/70 pb-20 m-0 p-0">
      
      {/* Header Banner - Directly flush with header */}
      <section className="bg-[#070B1A] text-white py-10 sm:py-16 relative overflow-hidden border-b border-[#0D1228] m-0">
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '28px 28px'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-white mb-4 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <span className="text-xs font-bold uppercase tracking-widest text-[#008CFF] bg-[#008CFF]/15 px-3 py-1 rounded-full border border-[#008CFF]/30 block w-max mx-auto mb-3">
            Academic Curriculum &bull; Batch Q4 2026
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Explore All Industry-Recognized Certifications
          </h1>

          <p className="mt-3 text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Gain dual-accredited qualifications in AI Engineering, Machine Learning, Digital Strategy, and Job+ Guarantee placement with Silicon Valley mentors.
          </p>

          {/* Search Input Bar */}
          <div className="mt-8 max-w-2xl mx-auto relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by skill (React, Python, Gemini, SEO, AWS) or course title..."
              className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-white text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm shadow-xl focus:outline-none focus:ring-2 focus:ring-[#008CFF]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-3.5 text-slate-400 hover:text-slate-700 p-0.5 rounded-full cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Filter and Control Bar */}
      <div className="bg-white border-b border-slate-200 sticky top-[52px] sm:top-[60px] z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto no-scrollbar pb-1 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#008CFF] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sort & Count */}
          <div className="flex items-center justify-between w-full md:w-auto gap-4 text-xs shrink-0">
            <span className="text-slate-500 font-semibold">
              Showing <strong>{filteredCourses.length}</strong> programs
            </span>

            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-[#008CFF] cursor-pointer"
              >
                <option value="featured">Sort by: Featured</option>
                <option value="rating">Sort by: Highest Rated</option>
              </select>
            </div>
          </div>

        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
        
        {filteredCourses.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 max-w-lg mx-auto space-y-4 my-8">
            <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">No matching programs found</h3>
            <p className="text-xs text-slate-500">
              We couldn't find any courses matching "{searchQuery}". Try searching for broader terms like "AI", "Python", or "Marketing".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-5 py-2.5 rounded-xl bg-[#008CFF] text-white font-bold text-xs hover:bg-[#0074d9] transition-colors cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onViewDetails={(c) => onSelectCourse(c)}
                onOpenSyllabus={(c) => onOpenSyllabus(c)}
                onEnroll={(c) => onEnrollCourse(c)}
              />
            ))}
          </div>
        )}

      </div>

    </div>
  );
};
