import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Menu,
  X,
  Sparkles,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import BrandLogo from '../BrandLogo/BrandLogo';
import Button from '../Button/Button';
import { NAV_LINKS, TRADE_NAME, CONTACT_PHONE, CONTACT_EMAIL, HQ_ADDRESS } from '../../utils/constants';

export default function Navbar({ onOpenProposal, activePage = 'home', onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, link) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(link.path || link.page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 pt-4 pb-2 transition-all duration-300 font-sans">
      <nav
        style={{ paddingTop: '10px', paddingBottom: '10px' }}
        className={`max-w-7xl mx-auto rounded-full transition-all duration-500 bg-white/95 backdrop-blur-2xl border border-[#E5E7EB] shadow-xl shadow-[#282734]/5 px-8 ${
          scrolled ? 'shadow-2xl' : ''
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            onClick={(e) => handleNavClick(e, { path: '/', page: 'home' })}
            className="group flex items-center cursor-pointer"
          >
            <BrandLogo imgClassName="h-14 sm:h-16" />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-3 font-sans">
            {NAV_LINKS.map((link) => {
              const isActive = activePage === link.page;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`group relative px-4 py-2 text-sm font-extrabold transition-colors duration-300 cursor-pointer flex items-center gap-1.5 font-sans ${
                    isActive 
                      ? 'text-[#EC2D2E]' 
                      : 'text-[#282734] hover:text-[#EC2D2E]'
                  }`}
                >
                  <span>{link.name}</span>

                  {/* Bottom Border Line Only */}
                  <span
                    className={`absolute bottom-0 left-3 right-3 h-[2.5px] bg-[#EC2D2E] rounded-full transition-all duration-300 ${
                      isActive 
                        ? 'opacity-100 scale-x-100' 
                        : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Hamburger Menu Icon Button */}
          <div className="flex items-center gap-3 font-sans">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setMenuOpen(true)}
              className="p-2.5 rounded-full bg-[#F8F9FC] hover:bg-[#EC2D2E] hover:text-white text-[#282734] border border-[#E5E7EB] transition-all flex items-center justify-center shadow-sm cursor-pointer"
              aria-label="Toggle Sidebar Menu"
            >
              <Menu className="w-5 h-5 stroke-[2.2]" />
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Slide-out Sidebar Modal Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Dark Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-50 bg-[#282734]/50 backdrop-blur-sm"
            />

            {/* White Slide-Out Sidebar Panel */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 32, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-white border-l border-[#E5E7EB] shadow-2xl p-6 sm:p-8 flex flex-col justify-between overflow-y-auto overscroll-contain font-sans max-h-screen"
            >
              <div>
                {/* Sidebar Header: Brand Logo & Close Button */}
                <div className="flex items-center justify-between pb-6 border-b border-[#E5E7EB] mb-6">
                  <BrandLogo imgClassName="h-14 sm:h-16" />
                  
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="w-10 h-10 rounded-full bg-[#F8F9FC] border border-[#E5E7EB] text-[#282734] hover:bg-[#EC2D2E] hover:text-white flex items-center justify-center transition-all shadow-sm cursor-pointer"
                    aria-label="Close Sidebar"
                  >
                    <X className="w-5 h-5 stroke-[2.2]" />
                  </button>
                </div>

                {/* Main Navigation Links - HIDDEN ON DESKTOP (lg:hidden) */}
                <div className="mb-8 lg:hidden">
                  <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#EC2D2E] mb-3">
                    Navigation
                  </div>
                  <nav className="flex flex-col gap-2">
                    {NAV_LINKS.map((link) => {
                      const isActive = activePage === link.page;
                      return (
                        <Link
                          key={link.name}
                          to={link.path}
                          onClick={(e) => {
                            setMenuOpen(false);
                            handleNavClick(e, link);
                          }}
                          className={`relative py-3.5 px-4 rounded-2xl text-xl font-extrabold transition-all duration-300 flex items-center justify-between group cursor-pointer border-b-2 ${
                            isActive 
                              ? 'border-[#EC2D2E] text-[#EC2D2E] bg-[#EC2D2E]/5' 
                              : 'border-transparent text-[#282734] hover:border-[#EC2D2E] hover:text-[#EC2D2E] hover:bg-[#EC2D2E]/5'
                          }`}
                        >
                          <span>{link.name}</span>
                          <ChevronRight className={`w-5 h-5 transition-all ${isActive ? 'text-[#EC2D2E] translate-x-1' : 'text-[#E5E7EB] group-hover:text-[#EC2D2E] group-hover:translate-x-1'}`} />
                        </Link>
                      );
                    })}
                  </nav>

                  {/* Global Button for Sidebar CTA */}
                  <div className="mt-5">
                    <Button
                      variant="primary"
                      icon={ArrowRight}
                      iconPosition="right"
                      fullWidth
                      onClick={() => {
                        setMenuOpen(false);
                        onOpenProposal();
                      }}
                    >
                      Schedule Strategy Session
                    </Button>
                  </div>
                </div>

                {/* Contact Us Section - SHOWN ON DESKTOP & MOBILE */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-extrabold text-[#282734] font-sans">
                      Contact Us
                    </h3>
                    <div className="text-xs font-extrabold uppercase tracking-wider text-[#EC2D2E]">
                      Direct Support
                    </div>
                  </div>

                  <div className="space-y-3.5 mb-6 text-sm font-medium text-[#4B5563]">
                    {/* Phone */}
                    <a
                      href={`tel:${CONTACT_PHONE}`}
                      className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#F8F9FC] border border-[#E5E7EB] hover:border-[#EC2D2E]/40 hover:text-[#EC2D2E] transition-all group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#EC2D2E]/10 border border-[#EC2D2E]/20 text-[#EC2D2E] flex items-center justify-center shrink-0">
                        <Phone className="w-4.5 h-4.5" />
                      </div>
                      <span className="font-extrabold text-[#282734] group-hover:text-[#EC2D2E] transition-colors">
                        {CONTACT_PHONE}
                      </span>
                    </a>

                    {/* Email */}
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#F8F9FC] border border-[#E5E7EB] hover:border-[#EC2D2E]/40 hover:text-[#EC2D2E] transition-all group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#EC2D2E]/10 border border-[#EC2D2E]/20 text-[#EC2D2E] flex items-center justify-center shrink-0">
                        <Mail className="w-4.5 h-4.5" />
                      </div>
                      <span className="font-extrabold text-[#282734] group-hover:text-[#EC2D2E] transition-colors break-all">
                        {CONTACT_EMAIL}
                      </span>
                    </a>

                    {/* Address */}
                    <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#F8F9FC] border border-[#E5E7EB]">
                      <div className="w-10 h-10 rounded-xl bg-[#EC2D2E]/10 border border-[#EC2D2E]/20 text-[#EC2D2E] flex items-center justify-center shrink-0 mt-0.5">
                        <MapPin className="w-4.5 h-4.5" />
                      </div>
                      <span className="text-xs font-bold text-[#282734] leading-relaxed">
                        {HQ_ADDRESS}
                      </span>
                    </div>
                  </div>

                  {/* Schedule Strategy Session CTA Button */}
                  <div className="mb-6">
                    <Button
                      variant="primary"
                      icon={ArrowRight}
                      iconPosition="right"
                      fullWidth
                      onClick={() => {
                        setMenuOpen(false);
                        onOpenProposal();
                      }}
                    >
                      Schedule Strategy Session
                    </Button>
                  </div>

                  {/* Google Maps Embed Card - Phenoix Tower Surat Gujarat */}
                  <div className="relative rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-md group">
                    <div className="h-40 w-full relative bg-slate-100">
                      <iframe
                        title="HQ Surat Location Map"
                        src="https://maps.google.com/maps?q=Phenoix%20Tower,%20Opp%20Aagam%20Viviana,%20Vesu,%20Surat,%20Gujarat%20395007&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        className="w-full h-full border-0 filter contrast-125"
                        loading="lazy"
                      />
                    </div>
                    
                    <a
                      href="https://maps.google.com/?q=Phenoix+Tower,+Opp+Aagam+Viviana,+Vesu,+Surat,+Gujarat+395007"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-3 left-3 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#E5E7EB] text-xs font-extrabold text-[#282734] hover:text-[#EC2D2E] shadow-md flex items-center gap-1.5 transition-colors"
                    >
                      <span>Open in Maps</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#EC2D2E]" />
                    </a>
                  </div>

                </div>
              </div>

              {/* Bottom Copyright */}
              <div className="pt-6 mt-6 border-t border-[#E5E7EB] text-center text-xs font-semibold text-[#6B7280]">
                © {new Date().getFullYear()} {TRADE_NAME}. All rights reserved.
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
