import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, CheckCircle2, ArrowRight } from 'lucide-react';
import Button from '../../components/Button/Button';

export default function ServicesList({ onOpenProposal }) {
  const [openItems, setOpenItems] = useState({});

  const toggleAccordion = (blockId, itemId) => {
    const key = `${blockId}-${itemId}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const blocks = [
    {
      id: 'logistics',
      tag: 'FIRST — FULFILL & SHIP',
      titlePrefix: 'Shopify Store Setup & ',
      titleAccent: '3PL Global Shipping.',
      description:
        'We build high-converting Shopify stores from scratch and manage 100% of your product warehousing, real-time inventory sync, pick & pack order fulfillment, and fast doorstep global shipping.',
      image: '/services/service-1.png',
      fallbackImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
      floatingBadge: { title: '99.98% Accuracy', sub: 'Same-Day Dispatch SLA' },
      alignLeft: true,
      subCapabilities: [
        {
          id: 1,
          title: 'Turnkey Shopify Store Setup & Catalog Migration',
          detail: 'Complete Shopify store creation, payment gateway setup, domain linkage, catalog upload, and 24/7 automated order API hooks.'
        },
        {
          id: 2,
          title: 'Multi-Hub 3PL Warehousing (US, UK, EU, UAE & Asia)',
          detail: 'Climate-controlled warehouse space with barcoded bin storage, real-time stock counts, and reorder alerts.'
        },
        {
          id: 3,
          title: 'Discounted Express Courier Shipping (DHL, FedEx & UPS)',
          detail: 'Leverage our high-volume shipping contracts for 1-2 day domestic and 2-4 day global express delivery.'
        },
        {
          id: 4,
          title: 'Custom Branded Unboxing & Automated Returns Portal',
          detail: 'Custom printed mailer boxes, inserts, tissue paper wrapping, bubble protection, and 24-hour return restocking.'
        }
      ]
    },
    {
      id: 'brand',
      tag: 'THEN — ENGAGE & VIRAL',
      titlePrefix: 'Brand, Social Media & ',
      titleAccent: 'UGC Content.',
      description:
        'Brands are built through every customer interaction. We create distinctive brand DNA, viral TikTok/Instagram UGC ad videos, and content systems that convert scrollers into repeat buyers.',
      image: '/services/service-2.png',
      fallbackImage: 'https://images.unsplash.com/photo-1542744094-3a31b272c490?auto=format&fit=crop&w=1200&q=80',
      floatingBadge: { title: 'Viral UGC Video Ads', sub: 'TikTok & Meta Campaigns' },
      alignLeft: false,
      subCapabilities: [
        {
          id: 1,
          title: 'E-Commerce Brand Identity & Packaging Design',
          detail: 'Distinctive visual DNA, color systems, packaging layouts, and unboxing card design tailored for high brand recall.'
        },
        {
          id: 2,
          title: 'Viral UGC Video Ad Production (TikTok & Instagram Reels)',
          detail: 'Scripted, filmed, and edited UGC creator videos engineered specifically for high thumb-stop rates and conversions.'
        },
        {
          id: 3,
          title: 'Influencer Product Seeding & Box Integrations',
          detail: 'Strategic influencer outreach, product sample box packaging, and promotional code tracking.'
        },
        {
          id: 4,
          title: 'Social Media Content & Community Management',
          detail: 'Full-funnel organic content calendars, engagement management, and brand storytelling.'
        }
      ]
    },
    {
      id: 'growth',
      tag: 'THEN — SCALE REVENUE',
      titlePrefix: 'Performance Ads & ',
      titleAccent: 'Search Dominance.',
      description:
        'Growth isn\'t driven by media spend alone. We connect paid strategy, high-ROI ad creative, and technical SEO to deliver predictable, high-ROAS revenue scaling.',
      image: '/services/service-3.png',
      fallbackImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      floatingBadge: { title: '4.8X Average ROAS', sub: 'Meta & Google Paid Ads' },
      alignLeft: true,
      subCapabilities: [
        {
          id: 1,
          title: 'Meta & Google Performance Max Paid Campaigns',
          detail: 'End-to-end management of Facebook, Instagram, and Google Search/Shopping ad budgets focused strictly on ROAS.'
        },
        {
          id: 2,
          title: 'TikTok & Pinterest Ad Funnel Optimization',
          detail: 'High-converting social ad funnels targeting impulse shoppers and visual searchers.'
        },
        {
          id: 3,
          title: 'Technical E-Commerce SEO & Core Web Vitals',
          detail: 'Collection page optimization, schema structured data, speed tuning, and mobile UX rank boosting.'
        },
        {
          id: 4,
          title: 'High-Intent Keyword Rankings & Google Shopping Feeds',
          detail: 'Competitor keyword hijacking, authority backlink building, and automated Google Merchant center feeds.'
        }
      ]
    },
    {
      id: 'tech',
      tag: 'ALWAYS — BUILD & MEASURE',
      titlePrefix: 'Technology & Custom ',
      titleAccent: 'Software Engineering.',
      description:
        'Technology should simplify complexity, not create it. We engineer custom full-stack React applications, private Shopify apps, real-time inventory portals, and enterprise ERP API integrations.',
      image: '/services/service-4.png',
      fallbackImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
      floatingBadge: { title: '100/100 Core Web Speed', sub: 'React & Liquid Architecture' },
      alignLeft: false,
      subCapabilities: [
        {
          id: 1,
          title: 'Custom Shopify App & Liquid Theme Development',
          detail: 'Tailor-made Shopify extensions, private apps, custom product builders, and headless Liquid storefronts.'
        },
        {
          id: 2,
          title: 'Real-Time Inventory & Multi-Warehouse Dashboards',
          detail: 'Custom web telemetry portals providing live stock tracking, warehouse picking status, and automated reorder alerts.'
        },
        {
          id: 3,
          title: 'B2B Wholesale Order Portals & Quick Checkout',
          detail: 'Private B2B customer portals with tiered volume pricing, quick order entry, and custom invoice management.'
        },
        {
          id: 4,
          title: 'Enterprise API Integrations (ERP, CRM & Carriers)',
          detail: 'Seamless API connectors linking Shopify to SAP, Netsuite, QuickBooks, DHL, FedEx, and UPS APIs.'
        }
      ]
    }
  ];

  return (
    <div className="divide-y divide-[#E5E7EB]">
      {blocks.map((block) => (
        <section key={block.id} className="py-20 sm:py-28 bg-white overflow-hidden font-sans">
          <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className={`grid lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
              block.alignLeft ? '' : 'lg:grid-flow-dense'
            }`}>
              
              {/* VISUAL IMAGE COLUMN */}
              <motion.div 
                initial={{ opacity: 0, x: block.alignLeft ? -50 : 50, scale: 0.96 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1.0] }}
                className={`lg:col-span-6 relative ${
                  block.alignLeft ? '' : 'lg:col-start-7'
                }`}
              >
                <div className="relative flex items-center justify-center w-full group">
                  <img 
                    src={block.image} 
                    alt={block.titlePrefix} 
                    onError={(e) => {
                      if (block.fallbackImage) {
                        e.target.onerror = null;
                        e.target.src = block.fallbackImage;
                      }
                    }}
                    className="w-full h-auto max-h-[520px] object-contain group-hover:scale-103 transition-transform duration-500"
                  />
                </div>
              </motion.div>

              {/* TEXT COLUMN */}
              <motion.div 
                initial={{ opacity: 0, x: block.alignLeft ? 50 : -50, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.75, delay: 0.15, ease: [0.25, 0.1, 0.25, 1.0] }}
                className={`lg:col-span-6 space-y-6 ${
                  block.alignLeft ? '' : 'lg:col-start-1'
                }`}
              >
                <div className="text-xs font-extrabold uppercase tracking-widest text-[#EC2D2E] font-sans flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EC2D2E]" />
                  <span>{block.tag}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#282734] font-sans leading-[1.12] tracking-tight">
                  <span>{block.titlePrefix}</span>
                  <span className="font-serif italic font-normal text-[#EC2D2E] block sm:inline">
                    {block.titleAccent}
                  </span>
                </h2>

                <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed font-medium font-sans">
                  {block.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-[#E5E7EB] font-sans">
                  {block.subCapabilities.map((sub, idx) => {
                    const key = `${block.id}-${sub.id}`;
                    const isOpen = !!openItems[key];
                    return (
                      <motion.div 
                        key={sub.id}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 + (idx * 0.08) }}
                        className="border-b border-[#E5E7EB] pb-3 transition-all"
                      >
                        <button
                          onClick={() => toggleAccordion(block.id, sub.id)}
                          className="w-full py-2 flex items-center justify-between text-left font-extrabold text-sm sm:text-base text-[#282734] hover:text-[#EC2D2E] transition-colors group cursor-pointer"
                        >
                          <span className="pr-4">{sub.title}</span>
                          <div className="w-6 h-6 rounded-full bg-[#EC2D2E]/10 text-[#EC2D2E] flex items-center justify-center shrink-0 group-hover:bg-[#EC2D2E] group-hover:text-white transition-all">
                            {isOpen ? <Minus className="w-3.5 h-3.5 stroke-[2.5]" /> : <Plus className="w-3.5 h-3.5 stroke-[2.5]" />}
                          </div>
                        </button>

                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pt-2 pb-1 text-xs sm:text-sm text-[#4B5563] font-medium leading-relaxed"
                          >
                            {sub.detail}
                          </motion.div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                <div className="pt-4">
                  <Button
                    variant="primary"
                    size="sm"
                    icon={ArrowRight}
                    iconPosition="right"
                    onClick={onOpenProposal}
                  >
                    Explore Capability &amp; Pricing
                  </Button>
                </div>

              </motion.div>

            </div>

          </div>
        </section>
      ))}
    </div>
  );
}
