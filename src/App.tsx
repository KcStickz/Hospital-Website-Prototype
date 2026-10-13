import React, { useState, useEffect } from 'react';
import { Navbar, PageId } from './components/Navbar';
import { ConceptNotice } from './components/ConceptNotice';
import { Footer } from './components/Footer';
import { ReviewNotesModal } from './components/ReviewNotesModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isReviewNotesOpen, setIsReviewNotesOpen] = useState(false);

  // Sync document title cleanly according to current page
  useEffect(() => {
    const titles: Record<PageId, string> = {
      home: 'Premium Life Specialist Hospital, Enugu | Healthcare With Care and Compassion',
      about: 'About Us | Premium Life Specialist Hospital, Enugu',
      services: 'Our Medical Services | Premium Life Specialist Hospital, Enugu',
      contact: 'Contact Us & Location | Premium Life Specialist Hospital, Enugu'
    };
    document.title = titles[currentPage];
  }, [currentPage]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-teal-100 selection:text-teal-900">
      {/* Discreet Concept Notification Bar */}
      <ConceptNotice onOpenReviewNotes={() => setIsReviewNotesOpen(true)} />

      {/* Main Top Navigation Header */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Page Body View */}
      <main className="grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenReviewNotes={() => setIsReviewNotesOpen(true)}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenReviewNotes={() => setIsReviewNotesOpen(true)}
          />
        )}
        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenReviewNotes={() => setIsReviewNotesOpen(true)}
          />
        )}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenReviewNotes={() => setIsReviewNotesOpen(true)}
      />

      {/* Hospital Management Review Notes Modal */}
      <ReviewNotesModal
        isOpen={isReviewNotesOpen}
        onClose={() => setIsReviewNotesOpen(false)}
      />
    </div>
  );
}
