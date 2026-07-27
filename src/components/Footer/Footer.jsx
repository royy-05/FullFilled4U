import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Linkedin,
  Instagram,
  Facebook,
  Mail,
  Phone,
  MapPin,
  Sparkles
} from 'lucide-react';
import BrandLogo from '../BrandLogo/BrandLogo';
import Button from '../Button/Button';
import { CONTACT_PHONE, CONTACT_EMAIL, HQ_ADDRESS, SOCIAL_LINKS } from '../../utils/constants';

export default function Footer({ onOpenProposal, onNavigate }) {
  const handleNav = (e, path) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const socialIcons = [
    { icon: Instagram, href: 'https://www.instagram.com/fullfilled4u/', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-white text-[#282734] border-t border-[#E5E7EB] relative overflow-hidden font-sans">
      {/* Top CTA Banner */}
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 relative z-10">
        <div className="bg-[#F8F9FC] border border-[#E5E7EB] rounded-3xl p-8 sm:p-12 lg:p-14 relative overflow-hidden shadow-xl shadow-[#282734]/5 flex flex-col lg:flex-row lg:items-center justify-between gap-8 group">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#EC2D2E]/5 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EC2D2E]/30 text-xs font-bold tracking-widest text-[#EC2D2E] uppercase mb-4 shadow-sm font-sans">
              <Sparkles className="w-3.5 h-3.5" />
              EIGHT-FIGURE SCALING PARTNER
            </div>
            <h3 className="text-3xl sm:text-5xl font-extrabold text-[#282734] font-sans tracking-tight leading-tight">
              Ready to Turn Your Brand Into an{' '}
              <span className="font-serif italic font-normal text-[#EC2D2E]">
                Unstoppable Market Leader?
              </span>
            </h3>
            <p className="text-[#4B5563] text-sm sm:text-base font-medium mt-3 max-w-xl font-sans">
              Schedule your free 30-minute growth audit. We'll analyze your ad funnels, codebase, and SEO positioning.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <Button
              variant="primary"
              size="md"
              icon={ArrowUpRight}
              onClick={onOpenProposal}
            >
              Start Your Journey
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-[#E5E7EB]">
          
          {/* Col 1: Brand Logo & Mission */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <BrandLogo imgClassName="h-16 sm:h-20" />
            </div>

            <p className="text-sm text-[#4B5563] font-medium leading-relaxed max-w-sm font-sans">
              FULLFILLED 4 YOU is an elite digital marketing engine, 3PL logistics provider, and full-stack software powerhouse in Rajasthan, India. We build Shopify stores, fulfill global shipping, and scale revenues.
            </p>

            {/* Social Pill Buttons */}
            <div className="flex items-center gap-3 pt-1">
              {socialIcons.map((s, idx) => {
                const IconComponent = s.icon;
                return (
                  <a
                    key={idx}
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-xl bg-[#F8F9FC] border border-[#E5E7EB] flex items-center justify-center text-[#282734] hover:text-white hover:bg-[#EC2D2E] hover:border-[#EC2D2E] transition-all shadow-sm"
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Core Capabilities */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-sans font-extrabold uppercase tracking-widest text-[#282734] mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#EC2D2E]" />
              Core Capabilities
            </h4>
            <ul className="space-y-3 text-sm font-medium font-sans">
              <li>
                <a href="#services" onClick={(e) => handleNav(e, 'services')} className="text-[#4B5563] hover:text-[#EC2D2E] transition-colors flex items-center gap-2 group cursor-pointer">
                  <span className="text-[#EC2D2E] group-hover:translate-x-1 transition-transform">›</span>
                  Shopify Store Setup &amp; 3PL Shipping
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNav(e, 'services')} className="text-[#4B5563] hover:text-[#EC2D2E] transition-colors flex items-center gap-2 group cursor-pointer">
                  <span className="text-[#EC2D2E] group-hover:translate-x-1 transition-transform">›</span>
                  Social Media &amp; UGC Video Ads
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNav(e, 'services')} className="text-[#4B5563] hover:text-[#EC2D2E] transition-colors flex items-center gap-2 group cursor-pointer">
                  <span className="text-[#EC2D2E] group-hover:translate-x-1 transition-transform">›</span>
                  Performance Paid Media (Meta/Google)
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNav(e, 'services')} className="text-[#4B5563] hover:text-[#EC2D2E] transition-colors flex items-center gap-2 group cursor-pointer">
                  <span className="text-[#EC2D2E] group-hover:translate-x-1 transition-transform">›</span>
                  Full-Stack Software Building
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-sans font-extrabold uppercase tracking-widest text-[#282734] mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#EC2D2E]" />
              Navigation
            </h4>
            <ul className="space-y-3 text-sm font-medium text-[#4B5563] font-sans">
              <li><Link to="/" onClick={(e) => handleNav(e, '/')} className="hover:text-[#EC2D2E] transition-colors cursor-pointer">Home</Link></li>
              <li><Link to="/about" onClick={(e) => handleNav(e, '/about')} className="hover:text-[#EC2D2E] transition-colors cursor-pointer">About Us</Link></li>
              <li><Link to="/services" onClick={(e) => handleNav(e, '/services')} className="hover:text-[#EC2D2E] transition-colors cursor-pointer">Services</Link></li>
              <li><Link to="/contact" onClick={(e) => handleNav(e, '/contact')} className="hover:text-[#EC2D2E] transition-colors cursor-pointer">Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 4: Direct Contacts */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-xs font-sans font-extrabold uppercase tracking-widest text-[#282734] mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#EC2D2E]" />
              Direct Contacts
            </h4>

            <div className="space-y-3.5 text-sm font-medium text-[#4B5563] font-sans">
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 hover:text-[#EC2D2E] transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-[#F8F9FC] border border-[#E5E7EB] flex items-center justify-center text-[#EC2D2E] group-hover:bg-[#EC2D2E] group-hover:text-white transition-all shadow-sm">
                  <Mail className="w-4 h-4" />
                </div>
                <span>{CONTACT_EMAIL}</span>
              </a>

              <a href={`tel:${CONTACT_PHONE}`} className="flex items-center gap-3 hover:text-[#EC2D2E] transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-[#F8F9FC] border border-[#E5E7EB] flex items-center justify-center text-[#EC2D2E] group-hover:bg-[#EC2D2E] group-hover:text-white transition-all shadow-sm">
                  <Phone className="w-4 h-4" />
                </div>
                <span>{CONTACT_PHONE}</span>
              </a>

              <div className="flex items-start gap-3 pt-1">
                <div className="w-8 h-8 rounded-lg bg-[#F8F9FC] border border-[#E5E7EB] flex items-center justify-center text-[#EC2D2E] shrink-0 mt-0.5 shadow-sm">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold leading-relaxed text-[#282734]">
                  {HQ_ADDRESS}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-[#6B7280]">
          <div>
            © {new Date().getFullYear()} FULLFILLED 4 YOU. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#EC2D2E] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#EC2D2E] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#EC2D2E] transition-colors">SLA Guarantee</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
