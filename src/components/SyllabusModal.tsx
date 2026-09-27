import React, { useState } from 'react';
import { Course } from '../data/coursesData';
import { 
  X, 
  Download, 
  CheckCircle2, 
  FileText, 
  Calendar, 
  Clock, 
  Award, 
  FolderGit2, 
  Layers, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface SyllabusModalProps {
  course: Course | null;
  onClose: () => void;
  onViewCourse: (course: Course) => void;
}

export const SyllabusModal: React.FC<SyllabusModalProps> = ({
  course,
  onClose,
  onViewCourse
}) => {
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [openModuleIndex, setOpenModuleIndex] = useState<number | null>(0);

  if (!course) return null;

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloadSuccess(true);
      // Create a printable text blob or simulate instant PDF download
      const syllabusContent = `
AIYUG ACADEMY - OFFICIAL SYLLABUS
Course: ${course.title}
Faculty: ${course.categoryName}
Duration: ${course.duration}
Format: ${course.format}
Accreditation: ${course.institute || 'AIYUG Certified Industry Program'}

COURSE HIGHLIGHTS:
${course.highlights.map(h => `• ${h}`).join('\n')}

MODULE BREAKDOWN:
${course.modules.map(m => `
Module ${m.number}: ${m.title} (${m.duration})
Topics: ${m.topics.join(', ')}
Hands-On Projects: ${m.projects.join(', ')}
`).join('\n')}

For questions or enrollment assistance, contact admissions@aiyug.academy or call 1800-891-AIYUG.
      `;
      const blob = new Blob([syllabusContent], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `AIYUG_${course.id}_Syllabus.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
        setDownloadSuccess(false);
      }, 5000);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#070B1A]/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="p-6 sm:p-8 bg-slate-900 text-white shrink-0 relative border-b border-[#0D1228]">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close syllabus"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-600 text-white">
              Official Syllabus
            </span>
            <span className="text-xs text-slate-400">· {course.duration}</span>
          </div>

          <h3 className="text-2xl font-black text-white">{course.title}</h3>
          <p className="mt-1 text-xs text-slate-300">
            Comprehensive curriculum, live projects, lab exercises, and grading rubrics.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors flex items-center gap-2 shadow cursor-pointer disabled:opacity-50"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{downloading ? 'Preparing Syllabus...' : 'Download Full PDF Syllabus'}</span>
            </button>
            <span className="text-xs text-slate-400">Updated for Q4 2026 Edition</span>
          </div>

          {downloadSuccess && (
            <div className="mt-3 p-2 bg-emerald-900/60 border border-emerald-500/40 rounded-lg text-emerald-200 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Syllabus file downloaded! Our admissions office will also email you the complete brochure.</span>
            </div>
          )}
        </div>

        {/* Scrollable Curriculum Accordion */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-100">
            <span className="font-semibold text-slate-700">Course Roadmap ({course.modules.length} Modules)</span>
            <span>Click any module to expand detailed topics</span>
          </div>

          {course.modules.map((module, idx) => {
            const isOpen = openModuleIndex === idx;
            return (
              <div 
                key={module.number}
                className="rounded-2xl border border-slate-200 overflow-hidden transition-all bg-white"
              >
                <button
                  onClick={() => setOpenModuleIndex(isOpen ? null : idx)}
                  className={`w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 transition-colors cursor-pointer ${
                    isOpen ? 'bg-[#F7F9FF]/60' : 'hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                      isOpen ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'
                    }`}>
                      0{module.number}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{module.title}</h4>
                      <p className="text-xs text-slate-500">{module.duration}</p>
                    </div>
                  </div>

                  <span className="text-xs font-semibold text-[#008CFF] shrink-0">
                    {isOpen ? 'Collapse' : 'Expand'}
                  </span>
                </button>

                {isOpen && (
                  <div className="p-5 border-t border-slate-100 bg-white space-y-4 text-xs animate-in slide-in-from-top-1 duration-150">
                    <div>
                      <h5 className="font-bold text-slate-800 mb-2 uppercase tracking-wider text-[11px] text-[#008CFF]">
                        Core Concepts & Frameworks:
                      </h5>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {module.topics.map((t, i) => (
                          <li key={i} className="flex items-center gap-2 text-slate-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#008CFF] shrink-0" />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {module.projects.length > 0 && (
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                        <span className="font-bold text-slate-900 flex items-center gap-1.5">
                          <FolderGit2 className="w-3.5 h-3.5 text-[#008CFF]" />
                          <span>Industry Capstone Project in this Module:</span>
                        </span>
                        <p className="mt-1 text-slate-600">
                          {module.projects.join(' · ')}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}

          {/* Pedagogy Note */}
          <div className="mt-6 p-4 rounded-2xl bg-[#F7F9FF]/70 border border-[#D9DFFF] text-xs">
            <h5 className="font-bold text-blue-900 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#008CFF]" />
              Continuous Practical Assessment
            </h5>
            <p className="mt-1 text-slate-600">
              Each module includes live coding sandbox tests, peer review sessions, and personal feedback from Silicon Valley & Indian tech leaders.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 shrink-0 flex items-center justify-between">
          <button
            onClick={onClose}
            className="text-xs font-semibold text-slate-500 hover:text-slate-800 cursor-pointer"
          >
            Close
          </button>

          <button
            onClick={() => {
              onClose();
              onViewCourse(course);
            }}
            className="btn-alyug-primary px-5 py-2.5 rounded-xl text-xs text-white transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <span>View Complete Course Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
