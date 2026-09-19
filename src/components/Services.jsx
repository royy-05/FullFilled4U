import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Settings, ExternalLink, MessageCircle, Sparkles } from 'lucide-react';
import Button from './Button/Button';
import { CONTACT_PHONE_RAW } from '../utils/constants';

export default function Services({ onOpenProposal }) {
  const [activeTab, setActiveTab] = useState(0);

  const servicesData = [
    {
      id: 0,
      tabTitle: 'Shopify Setup & 3PL Shipping',
      shortCategory: 'E-Commerce Logistics',
      headlinePrefix: 'Shopify Store Creation & ',
      headlineAccent: 'Global 3PL Shipping.',
      description:
        'We build high-converting Shopify stores from scratch and manage 100% of your product warehousing, real-time inventory sync, pick & pack order fulfillment, and fast doorstep global shipping.',
      features: [
        'Turnkey Shopify store setup, payment & catalog migration',
        'Multi-hub 3PL warehousing with same-day pick & pack',
        'Discounted express shipping via DHL, FedEx & UPS',
        'Custom unboxing packaging & automated returns portal'
      ],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 1,
      tabTitle: 'Social Media Marketing',
      shortCategory: 'Creative Solutions',
      headlinePrefix: 'Digitally Fuelling Growth For ',
      headlineAccent: 'Businesses.',
      description:
        'We design digital systems that drive traffic, convert better, and make your brand amplify its presence across platforms, screens, and channels. We create the digital infrastructure behind brand growth—from campaigns and websites to content systems and full-funnel performance.',
      features: [
        'Creating distinctive brand DNA & viral social presence',
        'Clarity, creativity and consistency meet in every campaign',
        'Higher brand recall power across Meta, TikTok & YouTube',
        'Measurable brand impact & exponential audience growth'
      ],
      image: '/hero-1.png'
    },
    {
      id: 2,
      tabTitle: 'Performance Marketing',
      shortCategory: 'Digital Marketing',
      headlinePrefix: 'Engineered Paid Media For ',
      headlineAccent: 'Maximum ROAS.',
      description:
        'End-to-end expertise across Meta Ads, Google Ads (Search & Shopping), TikTok Ads, and programmatic acquisition funnels built for predictable, scalable revenue.',
      features: [
        'End-to-end expertise across web, mobile, social & search',
        'One partner, complete performance marketing solutions!',
        'Seamless cross-channel attribution & pixel integration',
        'Brand consistency speaks volume & drives high ROAS'
      ],
      image: '/hero-2.png'
    },
    {
      id: 3,
      tabTitle: 'Website & Software Building',
      shortCategory: 'Web & App Solutions',
      headlinePrefix: 'Building High-Speed Tech For ',
      headlineAccent: 'Modern Brands.',
      description:
        'We engineer custom full-stack React applications, high-converting landing pages, headless e-commerce portals, and enterprise SaaS platforms built for 100/100 performance.',
      features: [
        'Data-driven, agile full-stack software optimization',
        'Full-funnel visibility with real-time web telemetry',
        'Precision targeting with custom React & Next.js UI/UX',
        'ROI-driven digital software campaigns that scale'
      ],
      image: '/hero-3.png'
    },
    {
      id: 4,
      tabTitle: 'SEO & Organic Dominance',
      shortCategory: 'Search Engine Optimization',
      headlinePrefix: 'Claiming #1 Rankings For ',
      headlineAccent: 'Search Dominance.',
      description:
        'Data-backed Technical SEO, high-intent keyword clustering, and authoritative digital PR link acquisitions that outrank your competitors permanently.',
      features: [
        'Scalable technical SEO architecture & core site speed',
        'Future-ready search algorithms & AI intent mapping',
        'Custom-built backlink & digital PR authority solutions',
        'Brand-aligned aesthetics with top-tier Google rankings'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80'
    }
  ];

  const current = servicesData[activeTab];

  return (
    <section id="services" className="py-20 relative bg-[#F8F9FC] border-y border-[#E5E7EB] overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#EC2D2E]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 3-Column Layout with Scroll Entrance */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center"
        >
          
          {/* COLUMN 1: Left Visual Card (lg:col-span-5) */}
          <div className="lg:col-span-5 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5 }}
                className="relative rounded-3xl bg-white border border-[#E5E7EB] shadow-2xl shadow-[#282734]/10 overflow-hidden h-[380px] sm:h-[480px] group"
              >
                <img
                  src={current.image}
                  alt={current.tabTitle}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle Image Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#282734]/40 via-transparent to-transparent opacity-60" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* COLUMN 2: Middle Content (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Headline matching dual-typography style */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#282734] font-sans leading-[1.15] tracking-tight">
                  <span>{current.headlinePrefix}</span>
                  <span className="font-serif italic font-normal text-[#EC2D2E] block sm:inline">
                    {current.headlineAccent}
                  </span>
                </h2>

                {/* Description Paragraph */}
                <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed font-medium">
                  {current.description}
                </p>

                {/* 4 Feature Bullet Points with Gear Badges matching reference */}
                <div className="space-y-3 pt-1">
                  {current.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="p-1 rounded-full bg-[#EC2D2E]/10 text-[#EC2D2E] shrink-0 border border-[#EC2D2E]/20">
                        <Settings className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-[#282734]">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Single-Line Fixed Premium Action CTA Buttons */}
                <div className="pt-4 flex flex-col xl:flex-row xl:items-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02, x: 2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onOpenProposal}
                    style={{ fontFamily: "'Inter', 'Poppins', sans-serif", letterSpacing: '0.3px' }}
                    className="whitespace-nowrap shrink-0 px-7 py-3 rounded-full bg-[#FD2626] hover:bg-[#D91E1E] text-white font-semibold text-[15px] shadow-none flex items-center justify-center gap-2.5 transition-all duration-300 group cursor-pointer"
                  >
                    <span className="whitespace-nowrap">View All Services</span>
                    <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" />
                  </motion.button>

                  <div className="text-xs text-[#4B5563] font-medium flex items-center gap-1.5 leading-snug">
                    <ExternalLink className="w-3.5 h-3.5 text-[#EC2D2E] shrink-0" />
                    <span>
                      Or you can{' '}
                      <button
                        onClick={onOpenProposal}
                        className="text-[#EC2D2E] font-bold underline hover:text-[#D81F20] transition-colors whitespace-nowrap cursor-pointer"
                      >
                        Book a Free Demo Call
                      </button>{' '}
                      at convenient time
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* COLUMN 3: Right Interactive Tab Card (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <div className="relative bg-white rounded-3xl border border-[#E5E7EB] shadow-xl shadow-[#282734]/5 p-6 sm:p-7 pt-10 text-center">
              
              {/* Floating "Services" Badge Header on Top of Box */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 rounded-full bg-[#FD2626] text-white text-xs font-extrabold uppercase tracking-wider shadow-none flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Services</span>
              </div>

              {/* Sub-header inside */}
              <div className="text-xs font-bold text-[#6B7280] uppercase tracking-wider mb-6">
                Core Capabilities
              </div>

              {/* 5 Vertical Tab Buttons (Arrow icon removed) */}
              <div className="space-y-3">
                {servicesData.map((item, idx) => {
                  const isActive = activeTab === idx;
                  return (
                    <motion.button
                      key={item.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActiveTab(idx)}
                      className={`w-full py-3.5 px-4 rounded-2xl text-xs sm:text-sm font-extrabold transition-all duration-300 flex items-center justify-center text-center cursor-pointer border ${
                        isActive
                          ? 'bg-[#FD2626] text-white border-[#FD2626] shadow-none'
                          : 'bg-[#F8F9FC] text-[#282734] border-[#E5E7EB] hover:border-[#FD2626]/40 hover:bg-white'
                      }`}
                    >
                      <span className="truncate w-full text-center">{item.tabTitle}</span>
                    </motion.button>
                  );
                })}
              </div>

              {/* Bottom WhatsApp Link */}
              <div className="mt-8 pt-4 border-t border-[#E5E7EB] text-center">
                <a
                  href={`https://wa.me/${CONTACT_PHONE_RAW}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-extrabold text-[#282734] hover:text-[#EC2D2E] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-500" />
                  <span>Instant WhatsApp Chat</span>
                </a>
              </div>

            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
