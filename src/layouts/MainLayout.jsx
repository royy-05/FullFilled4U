import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ContactModal from '../components/ContactModal/ContactModal';
import FloatingActions from '../components/FloatingActions/FloatingActions';
import Chatbot from '../components/Chatbot/Chatbot';

export default function MainLayout({ children, activePage, onNavigate }) {
  const [proposalOpen, setProposalOpen] = useState(false);

  const handleOpenProposal = () => setProposalOpen(true);
  const handleCloseProposal = () => setProposalOpen(false);

  return (
    <div className="min-h-screen bg-white text-[#282734] selection:bg-[#EC2D2E] selection:text-white relative">
      {/* Top Navigation Bar */}
      <Navbar 
        activePage={activePage} 
        onNavigate={onNavigate} 
        onOpenProposal={handleOpenProposal} 
      />

      {/* Main Page Area */}
      <main>
        {typeof children === 'function' ? children({ onOpenProposal: handleOpenProposal }) : children}
      </main>

      {/* Footer */}
      <Footer 
        onOpenProposal={handleOpenProposal} 
        onNavigate={onNavigate}
      />

      {/* Interactive Proposal Modal */}
      <ContactModal
        isOpen={proposalOpen}
        onClose={handleCloseProposal}
      />

      {/* Floating WhatsApp & Scroll To Top Buttons (Bottom Right) */}
      <FloatingActions />

      {/* AI Growth Chatbot with Popup Greeting (Bottom Left) */}
      <Chatbot onOpenProposal={handleOpenProposal} />
    </div>
  );
}
