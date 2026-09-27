import React from 'react';
import { Course } from '../data/coursesData';
import { Star, Clock, Calendar, CheckCircle2, FileText, ExternalLink, ArrowRight, ShieldCheck } from 'lucide-react';

interface CourseCardProps {
  course: Course;
  onViewCourse?: (course: Course) => void;
  onViewDetails?: (course: Course) => void;
  onOpenSyllabus: (course: Course) => void;
  onEnroll?: (course: Course) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  course,
  onViewCourse,
  onViewDetails,
  onOpenSyllabus,
  onEnroll
}) => {
  const handleView = () => {
    if (onViewCourse) onViewCourse(course);
    else if (onViewDetails) onViewDetails(course);
  };

  return (
    <div className="group relative bg-white rounded-2xl border border-slate-200/80 hover:border-[#008CFF] hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
      
      {/* Top Banner / Image Slot */}
      <div onClick={handleView} className="cursor-pointer">
        <div className="relative h-52 w-full overflow-hidden bg-slate-900">
          <img
            src={course.image}
            alt={course.title}
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.src.includes('unsplash')) {
                target.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80';
              }
            }}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
          />
          <div className="absolute inset-0 bg-[#070B1A]/70" />

          {/* Floating Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
            {course.badge && (
              <span className="text-[11px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-md bg-[#008CFF] text-white shadow-md">
                {course.badge}
              </span>
            )}
            {course.instituteBadge && (
              <span className="text-[11px] font-bold tracking-wide px-2.5 py-1 rounded-md bg-white text-[#11152B] shadow-md border border-[#D9DFFF]">
                {course.instituteBadge}
              </span>
            )}
          </div>

          {/* Rating Pill overlay */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs z-10">
            <div className="flex items-center gap-1.5 bg-[#070B1A]/80 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-bold text-white">{course.rating}</span>
              <span className="text-[#8D96B8] text-[10px]">({course.reviewsCount})</span>
            </div>

            <span className="bg-[#3514D4]/80 border border-[#00D9E8]/30 backdrop-blur-sm px-2 py-0.5 rounded text-[11px] font-semibold text-[#00D9E8]">
              {course.avgHike}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6">
          
          {/* Metadata Row */}
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
            <div className="flex items-center gap-1 font-medium">
              <Clock className="w-3.5 h-3.5 text-[#008CFF]" />
              <span>{course.duration}</span>
            </div>
            <span aria-hidden="true">·</span>
            <span>{course.level}</span>
          </div>

          {/* Course Title */}
          <h3 className="text-lg font-bold text-slate-950 leading-snug group-hover:text-[#008CFF] transition-colors">
            {course.title}
          </h3>

          {/* Tagline / Subtitle */}
          <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {course.tagline}
          </p>

          {/* Key Skills Pills */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {course.skills.slice(0, 3).map((skill, i) => (
              <span 
                key={i}
                className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700"
              >
                {skill}
              </span>
            ))}
            {course.skills.length > 3 && (
              <span className="text-[11px] text-slate-400 font-medium px-1.5 py-0.5">
                +{course.skills.length - 3} more
              </span>
            )}
          </div>

          {/* Format indicator */}
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-600">
            <Calendar className="w-3.5 h-3.5 text-[#008CFF]" />
            <span className="truncate">{course.format}</span>
          </div>

          {/* Pricing Row */}
          <div className="mt-4 flex items-baseline justify-between">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-black text-slate-950 tabular-nums">{course.price}</span>
                <span className="text-xs line-through text-slate-400 tabular-nums">{course.originalPrice}</span>
              </div>
              <p className="text-[11px] text-emerald-600 font-semibold">
                EMI starts {course.emi}
              </p>
            </div>
            {course.category === 'job_plus' && (
              <div className="flex items-center gap-1 text-[11px] text-[#008CFF] font-bold bg-[#F7F9FF] px-2 py-1 rounded">
                <ShieldCheck className="w-3 h-3" />
                <span>100% Refundable</span>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Mandatory Dual Action Buttons (View Course & Syllabus) */}
      <div className="p-5 sm:p-6 pt-0 mt-2">
        <div className="grid grid-cols-2 gap-2.5 pt-4 border-t border-slate-100">
          
          {/* Button 1: View Course */}
          <button
            onClick={handleView}
            className="btn-alyug-primary w-full py-2.5 px-3 rounded-xl font-bold text-xs text-white transition-all flex items-center justify-center gap-1.5 active:scale-[0.98] cursor-pointer"
          >
            <span>View Course</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Button 2: Syllabus */}
          <button
            onClick={() => onOpenSyllabus(course)}
            className="btn-alyug-secondary w-full py-2.5 px-3 rounded-xl font-bold text-xs border border-[#D9DFFF] transition-all flex items-center justify-center gap-1.5 active:scale-[0.98] cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-[#008CFF]" />
            <span>Syllabus</span>
          </button>

        </div>
      </div>

    </div>
  );
};
