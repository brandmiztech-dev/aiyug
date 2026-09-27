import React, { useState, useEffect } from 'react';
import { COURSES, Course } from './data/coursesData';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CourseSection } from './components/CourseSection';
import { CourseDetailPage } from './components/CourseDetailPage';
import { AllCoursesPage } from './components/AllCoursesPage';
import { MyAccountPage, StudentUser } from './components/MyAccountPage';
import { PaymentModal } from './components/PaymentModal';
import { SyllabusModal } from './components/SyllabusModal';
import { AuthModal } from './components/AuthModal';
import { AdvisoryModal } from './components/AdvisoryModal';
import { HiringPartners } from './components/HiringPartners';
import { WhyAiyug } from './components/WhyAiyug';
import { CourseFinder } from './components/CourseFinder';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { MiddleBanner } from './components/MiddleBanner';
import { TrustBanner } from './components/TrustBanner';

type PageView = 'home' | 'all-courses' | 'course-detail' | 'account';

export default function App() {
  // Navigation / View State - initialized from hash or saved view
  const [currentView, setCurrentView] = useState<PageView>(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#/course/')) return 'course-detail';
    if (hash === '#/courses' || hash === '#courses') return 'all-courses';
    if (hash.includes('account') || hash.includes('portal') || hash.includes('my-account')) return 'account';
    try {
      const savedView = localStorage.getItem('aiyug_last_view');
      if (savedView === 'account' || savedView === 'all-courses') {
        return savedView as PageView;
      }
    } catch {}
    return 'home';
  });

  const [selectedCourse, setSelectedCourse] = useState<Course | null>(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#/course/')) {
      const id = hash.replace('#/course/', '');
      return COURSES.find(c => c.id === id) || null;
    }
    return null;
  });

  // Modals & Flows
  const [checkoutCourse, setCheckoutCourse] = useState<Course | null>(null);
  const [syllabusCourse, setSyllabusCourse] = useState<Course | null>(null);
  const [authOpen, setAuthOpen] = useState(false);
  const [advisoryOpen, setAdvisoryOpen] = useState(false);

  // Authenticated user state - loaded from localStorage if exists
  const [currentUser, setCurrentUser] = useState<StudentUser | null>(() => {
    try {
      const saved = localStorage.getItem('aiyug_student');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Always keep localStorage synchronized with currentUser state
  useEffect(() => {
    try {
      if (currentUser) {
        localStorage.setItem('aiyug_student', JSON.stringify(currentUser));
      } else {
        localStorage.removeItem('aiyug_student');
      }
    } catch {}
  }, [currentUser]);

  // Keep last visited view in sync
  useEffect(() => {
    try {
      localStorage.setItem('aiyug_last_view', currentView);
    } catch {}
  }, [currentView]);

  // Filter courses by 4 main faculties
  const techCourses = COURSES.filter(c => c.category === 'tech');
  const marketingCourses = COURSES.filter(c => c.category === 'marketing');
  const jobPlusCourses = COURSES.filter(c => c.category === 'job_plus');
  const collegeCourses = COURSES.filter(c => c.category === 'college');

  // Sync with browser URL hash for clean back/forward support
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/course/')) {
        const id = hash.replace('#/course/', '');
        const found = COURSES.find(c => c.id === id);
        if (found) {
          setSelectedCourse(found);
          setCurrentView('course-detail');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }
      if (hash === '#/courses' || hash === '#courses') {
        setCurrentView('all-courses');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      if (
        hash === '#/account' || 
        hash === '#account' || 
        hash === '#/portal' || 
        hash === '#portal' || 
        hash === '#/my-account'
      ) {
        setCurrentView('account');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      if (hash === '#/' || hash === '' || hash === '#home') {
        setCurrentView('home');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Navigation Handlers
  const navigateToCourse = (course: Course) => {
    setSelectedCourse(course);
    setCurrentView('course-detail');
    window.location.hash = `#/course/${course.id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToAllCourses = () => {
    setCurrentView('all-courses');
    window.location.hash = '#/courses';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setCurrentView('home');
    window.location.hash = '#/';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToAccount = () => {
    setCurrentView('account');
    window.location.hash = '#/account';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Payment & Enrollment handler
  const handlePaymentSuccess = (courseId: string, customerData: { name: string; email: string; phone: string }) => {
    let updatedUser: StudentUser;
    if (currentUser) {
      const courses = currentUser.enrolledCourses.includes(courseId)
        ? currentUser.enrolledCourses
        : [...currentUser.enrolledCourses, courseId];
      updatedUser = {
        ...currentUser,
        enrolledCourses: courses
      };
    } else {
      updatedUser = {
        name: customerData.name || 'AIYUG Scholar',
        email: customerData.email || 'scholar@aiyug.academy',
        phone: customerData.phone,
        enrolledCourses: [courseId]
      };
    }

    setCurrentUser(updatedUser);
    try {
      localStorage.setItem('aiyug_student', JSON.stringify(updatedUser));
    } catch {}
  };

  return (
    <div className="min-h-screen bg-white text-[#11152B] flex flex-col font-sans selection:bg-[#008CFF] selection:text-white w-full max-w-full overflow-x-hidden">
      
      {/* Mega Header with Navigation, Dropdown, Search & Student Account */}
      <Header
        onSelectCourse={navigateToCourse}
        onOpenSyllabus={(course) => setSyllabusCourse(course)}
        onOpenAuth={() => setAuthOpen(true)}
        currentUser={currentUser}
        onLogout={() => {
          setCurrentUser(null);
          try {
            localStorage.removeItem('aiyug_student');
          } catch {}
        }}
        onOpenStudentPortal={navigateToAccount}
        onOpenAdvisory={() => setAdvisoryOpen(true)}
        onNavigateHome={navigateToHome}
        onNavigateAllCourses={navigateToAllCourses}
        onNavigateToAccount={navigateToAccount}
      />

      <main className="flex-1 w-full max-w-full overflow-x-hidden m-0 p-0">
        
        {/* ===================== VIEW 1: DEDICATED COURSE DETAIL PAGE ===================== */}
        {currentView === 'course-detail' && selectedCourse && (
          <CourseDetailPage
            course={selectedCourse}
            onBack={navigateToAllCourses}
            onEnroll={(course) => setCheckoutCourse(course)}
            onOpenSyllabus={(course) => setSyllabusCourse(course)}
            onOpenAdvisory={() => setAdvisoryOpen(true)}
          />
        )}

        {/* ===================== VIEW 2: ALL COURSES CATALOG PAGE ===================== */}
        {currentView === 'all-courses' && (
          <AllCoursesPage
            onSelectCourse={navigateToCourse}
            onEnrollCourse={(course) => setCheckoutCourse(course)}
            onOpenSyllabus={(course) => setSyllabusCourse(course)}
            onBackToHome={navigateToHome}
          />
        )}

        {/* ===================== VIEW 3: DEDICATED MY ACCOUNT & STUDENT PORTAL PAGE ===================== */}
        {currentView === 'account' && (
          <MyAccountPage
            currentUser={currentUser}
            onLogin={(user) => {
              setCurrentUser(user);
              try {
                localStorage.setItem('aiyug_student', JSON.stringify(user));
              } catch {}
            }}
            onLogout={() => {
              setCurrentUser(null);
              try {
                localStorage.removeItem('aiyug_student');
              } catch {}
            }}
            onUpdateProfile={(updated) => {
              setCurrentUser(updated);
              try {
                localStorage.setItem('aiyug_student', JSON.stringify(updated));
              } catch {}
            }}
            onViewCourse={navigateToCourse}
            onExploreCourses={navigateToAllCourses}
            onOpenAdvisory={() => setAdvisoryOpen(true)}
          />
        )}

        {/* ===================== VIEW 4: HOME LANDING PAGE ===================== */}
        {currentView === 'home' && (
          <>
            {/* Hero Section with Centered Layout, Video Background, Search Bar & Category Pills */}
            <Hero
              onExploreCourses={navigateToAllCourses}
              onOpenAdvisory={() => setAdvisoryOpen(true)}
              onSelectCourse={navigateToCourse}
            />

            {/* SECTION: Great Universities & Top Firms Trust Banner */}
            <TrustBanner />

            {/* SECTION 1: Tech Certification */}
            <CourseSection
              id="tech"
              sectionNumber="01. TECH CERTIFICATION"
              title="Tech Certification Programs"
              subtitle="Master next-gen Full Stack Engineering, Data Science & Machine Learning, Cloud Architecture, Cybersecurity, and Foundation AI Models with Silicon Valley mentors."
              tagline="Dual Accredited Tech Qualifications"
              courses={techCourses}
              badgeText="NASSCOM & Industry Aligned"
              onViewCourse={navigateToCourse}
              onOpenSyllabus={(course) => setSyllabusCourse(course)}
              onOpenAdvisory={() => setAdvisoryOpen(true)}
            />

            {/* SECTION 2: Marketing with AI */}
            <CourseSection
              id="marketing"
              sectionNumber="02. MARKETING WITH AI"
              title="Marketing with AI Programs"
              subtitle="Harness predictive algorithms, automated ad campaigns, generative creative stacks, and conversion science to scale growth."
              tagline="Includes ₹10,000 Real Ad Budget for Practice"
              courses={marketingCourses}
              badgeText="Official Meta & Google Partner Stack"
              onViewCourse={navigateToCourse}
              onOpenSyllabus={(course) => setSyllabusCourse(course)}
              onOpenAdvisory={() => setAdvisoryOpen(true)}
            />

            {/* Middle Promo & National Scholarship Banner */}
            <MiddleBanner
              onOpenAdvisory={() => setAdvisoryOpen(true)}
              onExploreCourses={navigateToAllCourses}
            />

            {/* SECTION 3: Job+ Guarantee */}
            <CourseSection
              id="job_plus"
              sectionNumber="03. JOB+ GUARANTEE"
              title="Job+ Guarantee Programs"
              subtitle="100% Placement Protection: Work on production codebases, undergo 15+ mock interviews with hiring directors, or receive a full tuition refund."
              tagline="350+ Corporate Hiring Partners"
              courses={jobPlusCourses}
              badgeText="100% Placement or Refund Agreement"
              onViewCourse={navigateToCourse}
              onOpenSyllabus={(course) => setSyllabusCourse(course)}
              onOpenAdvisory={() => setAdvisoryOpen(true)}
            />

            {/* SECTION 4: College Degree Certifications */}
            <CourseSection
              id="college"
              sectionNumber="04. UNIVERSITY ACCREDITED"
              title="College Degree Certifications"
              subtitle="Earn co-branded academic credits and recognized postgraduate diplomas from accredited global universities and institutes of national importance."
              tagline="UGC & AICTE Recognized Curriculum"
              courses={collegeCourses}
              badgeText="Accredited University Transcript"
              onViewCourse={navigateToCourse}
              onOpenSyllabus={(course) => setSyllabusCourse(course)}
              onOpenAdvisory={() => setAdvisoryOpen(true)}
            />

            {/* Hiring Partners & Alumni Transformation */}
            <HiringPartners />

            {/* Why Choose AIYUG - Pedagogy & 4 Pillars */}
            <WhyAiyug onOpenAdvisory={() => setAdvisoryOpen(true)} />

            {/* Interactive 30-Second Course Matcher */}
            <CourseFinder
              onSelectCourse={navigateToCourse}
              onOpenSyllabus={(course) => setSyllabusCourse(course)}
            />

            {/* Frequently Asked Questions */}
            <FaqSection onOpenAdvisory={() => setAdvisoryOpen(true)} />
          </>
        )}

      </main>

      {/* Comprehensive Mega Footer */}
      <Footer
        onOpenAdvisory={() => setAdvisoryOpen(true)}
        onOpenAuth={navigateToAccount}
      />

      {/* ===================== PAYMENT GATEWAY CHECKOUT MODAL ===================== */}
      {checkoutCourse && (
        <PaymentModal
          course={checkoutCourse}
          isOpen={!!checkoutCourse}
          onClose={() => setCheckoutCourse(null)}
          onPaymentSuccess={handlePaymentSuccess}
          currentUser={currentUser}
          onGoToAccount={navigateToAccount}
        />
      )}

      {/* Syllabus PDF / Download Modal */}
      <SyllabusModal
        course={syllabusCourse}
        onClose={() => setSyllabusCourse(null)}
        onViewCourse={(course) => {
          setSyllabusCourse(null);
          navigateToCourse(course);
        }}
      />

      {/* Authentication Modal */}
      <AuthModal
        isOpen={authOpen}
        onClose={() => setAuthOpen(false)}
        onLoginSuccess={(user) => {
          setCurrentUser(user);
          navigateToAccount();
        }}
      />

      {/* 1:1 Academic Advisory Modal */}
      <AdvisoryModal
        isOpen={advisoryOpen}
        onClose={() => setAdvisoryOpen(false)}
      />

    </div>
  );
}
