import React, { useState, useEffect } from 'react';
import { Page } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ConsultationModal } from './components/ConsultationModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { KnowledgeCentrePage } from './pages/KnowledgeCentrePage';
import { ContactPage } from './pages/ContactPage';

import { LoginPage } from './modules/auth/LoginPage';
import { AdminPanel } from './modules/admin';
import { MemberPanel } from './modules/member';

// CLIENT LOGIN - Temporarily removed. Re-enable when Client Portal is ready.
// import { ClientLoginPage } from './pages/ClientLoginPage';

type AppView = { type: 'public'; page: Page } | { type: 'admin' } | { type: 'member' };

export default function App() {
  const [view, setView] = useState<AppView>({ type: 'public', page: 'home' });
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  const navigateToPage = (page: Page) => {
    setView({ type: 'public', page });
  };

  const handleAdminLogin = () => setView({ type: 'admin' });
  const handleMemberLogin = () => setView({ type: 'member' });

  const renderPage = () => {
    switch (view.type) {
      case 'admin':
        return <AdminPanel onLogout={() => setView({ type: 'public', page: 'home' })} />;
      case 'member':
        return <MemberPanel onLogout={() => setView({ type: 'public', page: 'home' })} />;
      case 'public':
        switch (view.page) {
          case 'home':
            return (
              <HomePage
                onNavigate={navigateToPage}
                onRequestConsultation={() => setConsultationModalOpen(true)}
              />
            );
          case 'about':
            return <AboutPage onRequestConsultation={() => setConsultationModalOpen(true)} />;
          case 'services':
            return <ServicesPage onRequestConsultation={() => setConsultationModalOpen(true)} />;
          case 'login':
            return <LoginPage onAdminLogin={handleAdminLogin} onMemberLogin={handleMemberLogin} />;
          case 'knowledge-centre':
            return <KnowledgeCentrePage />;
          case 'contact':
            return <ContactPage />;
          default:
            return (
              <HomePage
                onNavigate={navigateToPage}
                onRequestConsultation={() => setConsultationModalOpen(true)}
              />
            );
        }
    }
  };

  if (view.type === 'admin' || view.type === 'member') {
    return renderPage();
  }

  return (
    <div className="min-h-screen flex flex-col bg-surface font-sans antialiased text-text selection:bg-primary selection:text-white">
      {/* Top Navbar */}
      <Navbar
        currentPage={view.page}
        onNavigate={navigateToPage}
        onRequestConsultation={() => setConsultationModalOpen(true)}
      />

      {/* Main Content Body */}
      <main className="flex-grow">{renderPage()}</main>

      {/* Corporate Footer */}
      <Footer
        onNavigate={navigateToPage}
        onRequestConsultation={() => setConsultationModalOpen(true)}
      />

      {/* Floating Interactive WhatsApp Widget */}
      <WhatsAppButton />

      {/* Global Free Consultation Request Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
      />
    </div>
  );
}