/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { COURSES_DATA } from './data/academyData';
import { Course } from './types';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CourseCatalog } from './components/CourseCatalog';
import { AboutSection } from './components/AboutSection';
import { TutorConfidenceBand } from './components/TutorConfidenceBand';
import { AcademyDifference } from './components/AcademyDifference';
import { BalancedLearningSection } from './components/BalancedLearningSection';
import { MakharijStudio } from './components/MakharijStudio';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { CourseDetailModal } from './components/CourseDetailModal';
import { CourseAssessmentModal } from './components/CourseAssessmentModal';
import { CourseEnquiryModal } from './components/CourseEnquiryModal';
import { SignUpModal } from './components/SignUpModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [enquiryCourse, setEnquiryCourse] = useState<Course | null>(null);
  const [signUpCourse, setSignUpCourse] = useState<Course | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState<boolean>(false);
  const [isAssessmentModalOpen, setIsAssessmentModalOpen] = useState<boolean>(false);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState<boolean>(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState<boolean>(false);

  const handleOpenSignUp = (course?: Course) => {
    setSignUpCourse(course || null);
    setIsSignUpModalOpen(true);
  };

  const handleOpenCourseDetail = (course: Course) => {
    setSelectedCourse(course);
    setIsDetailModalOpen(true);
  };

  const handleEnquireCourse = (course: Course) => {
    setEnquiryCourse(course);
    setIsEnquiryModalOpen(true);
  };

  const handleScrollToCourses = () => {
    if (currentTab !== 'home') {
      setCurrentTab('home');
      setTimeout(() => {
        const el = document.getElementById('courses-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('courses-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRecommendedFromQuiz = (course: Course) => {
    setSelectedCourse(course);
    setIsDetailModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FBF9F4] text-[#374151] flex flex-col font-sans selection:bg-[#0D7E6C]/20 selection:text-[#072026]">
      {/* Top Announcement Strip */}
      <AnnouncementBar
        onExploreCourses={handleScrollToCourses}
        onOpenSignUp={() => handleOpenSignUp()}
      />

      {/* Main Navigation with User's Official Logo */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenAssessment={() => setIsAssessmentModalOpen(true)}
        onExploreCourses={handleScrollToCourses}
        onOpenSignUp={() => handleOpenSignUp()}
      />

      {/* Tab Screen Views */}
      <main className="flex-1">
        {currentTab === 'tajweed-tool' ? (
          <MakharijStudio
            onBackToHome={() => {
              setCurrentTab('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onExploreCourses={handleScrollToCourses}
          />
        ) : currentTab === 'courses' ? (
          <div>
            <div className="bg-[#F4EFE6] py-12 px-4 sm:px-6 lg:px-8 border-b border-[#E8E2D5] text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D7E6C] block mb-2">
                ACADEMIC CURRICULUM
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#072026] mb-3">
                Our Structured Course Pathways
              </h1>
              <p className="text-base text-[#4B5563] max-w-2xl mx-auto">
                Explore our full syllabus from foundational letter recognition to classical Tajweed, Hifz, and Quranic Arabic.
              </p>
            </div>
            <CourseCatalog
              courses={COURSES_DATA}
              onSelectCourse={handleOpenCourseDetail}
              onEnquireCourse={handleEnquireCourse}
              onOpenAssessment={() => setIsAssessmentModalOpen(true)}
              onSignUpCourse={(course) => handleOpenSignUp(course)}
            />
            <FAQSection />
          </div>
        ) : currentTab === 'about' ? (
          <div>
            <AboutSection onStartJourney={handleScrollToCourses} />
            <TutorConfidenceBand onExploreCourses={handleScrollToCourses} />
            <FAQSection />
          </div>
        ) : currentTab === 'method' ? (
          <div>
            <AcademyDifference />
            <TutorConfidenceBand onExploreCourses={handleScrollToCourses} />
            <BalancedLearningSection
              onOpenTajweedStudio={() => setCurrentTab('tajweed-tool')}
              onExploreCourses={handleScrollToCourses}
            />
            <FAQSection />
          </div>
        ) : (
          /* Home View */
          <>
            <HeroSection
              onExploreCourses={handleScrollToCourses}
              onOpenAssessment={() => setIsAssessmentModalOpen(true)}
              onOpenSignUp={() => handleOpenSignUp()}
            />

            <CourseCatalog
              courses={COURSES_DATA}
              onSelectCourse={handleOpenCourseDetail}
              onEnquireCourse={handleEnquireCourse}
              onOpenAssessment={() => setIsAssessmentModalOpen(true)}
              onSignUpCourse={(course) => handleOpenSignUp(course)}
            />

            <AboutSection onStartJourney={handleScrollToCourses} />

            <TutorConfidenceBand onExploreCourses={handleScrollToCourses} />

            <AcademyDifference />

            <BalancedLearningSection
              onOpenTajweedStudio={() => setCurrentTab('tajweed-tool')}
              onExploreCourses={handleScrollToCourses}
            />

            <FAQSection />
          </>
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onSelectTab={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenAssessment={() => setIsAssessmentModalOpen(true)}
        onExploreCourses={handleScrollToCourses}
        onOpenSignUp={() => handleOpenSignUp()}
      />

      {/* Student Admission / Registration Modal */}
      <SignUpModal
        isOpen={isSignUpModalOpen}
        onClose={() => {
          setIsSignUpModalOpen(false);
          setSignUpCourse(null);
        }}
        initialCourse={signUpCourse}
      />

      {/* Course Detail / Syllabus Modal */}
      <CourseDetailModal
        course={selectedCourse}
        onClose={() => {
          setIsDetailModalOpen(false);
          setSelectedCourse(null);
        }}
        onEnquire={handleEnquireCourse}
      />

      {/* Course Finder Assessment Modal */}
      <CourseAssessmentModal
        isOpen={isAssessmentModalOpen}
        onClose={() => setIsAssessmentModalOpen(false)}
        onSelectRecommendedCourse={handleRecommendedFromQuiz}
      />

      {/* Course Enquiry Modal */}
      <CourseEnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        initialCourse={enquiryCourse}
      />

      {/* Floating WhatsApp Action */}
      <FloatingWhatsApp />
    </div>
  );
}
