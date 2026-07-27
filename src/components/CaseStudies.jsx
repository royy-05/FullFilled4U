import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp, Sparkles, Target, Zap, DollarSign } from 'lucide-react';
import Button from './Button/Button';

export default function CaseStudies({ onOpenProposal }) {
  const caseStudies = [
    {
      id: 1,
      client: 'Aura Luxury Apparel',
      category: 'E-Commerce & Social Ads',
      headline: 'Scaled Monthly Revenue by 340% in 90 Days',
      metric: '6.4X ROAS',
      metricSub: 'Blended Paid Return',
      description: 'By restructuring their Meta ad account, introducing high-converting UGC video hooks, and tuning Shopify checkout speed, we transformed scaling efficiency.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
      tags: ['Shopify Plus', 'Meta Ads', 'UGC Video', 'Klaviyo Email']
    },
    {
      id: 2,
      client: 'Apex Cloud Fintech',
      category: 'Website Engineering & SEO',
      headline: 'Secured #1 Ranking for 45+ Enterprise Terms',
      metric: '14,000 Organic Demos',
      metricSub: 'Annual Inbound Pipeline',
      description: 'Engineered a headless React web portal with 100/100 Core Web Vitals speed. Implemented intent-based technical SEO and automated lead routing.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      tags: ['React & Next.js', 'Technical SEO', 'Lead Scoring']
    },
    {
      id: 3,
      client: 'Veloce Electric Vehicles',
      category: 'Performance Ads & Software',
      headline: 'Generated 3,200 Paid Pre-Orders Before Launch',
      metric: '$12.4M Pipeline Value',
      metricSub: 'Pre-Order Revenue',
      description: 'Built a custom high-converting interactive ROI calculator web tool and ran geo-targeted Google & Meta campaigns to capture high-intent buyers.',
      image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=800&q=80',
      tags: ['Google Search', 'Custom Web Tool', 'Meta Retargeting']
    }
  ];

  return (
    <section id="work" className="py-24 relative bg-[#F8F9FC] border-t border-[#E5E7EB] overflow-hidden font-sans">
      
      {/* Background Subtle Red Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#EC2D2E]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6"
        >
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EC2D2E]/30 text-xs font-bold tracking-widest text-[#EC2D2E] uppercase shadow-sm font-sans">
              <Trophy className="w-3.5 h-3.5" />
              VERIFIED SUCCESS STORIES
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#282734] font-sans tracking-tight leading-tight">
              Real Brands.{' '}
              <span className="font-serif italic font-normal text-[#EC2D2E]">
                Unstoppable Scaled Growth.
              </span>
            </h2>
          </div>
          
          <p className="text-[#4B5563] text-base sm:text-lg font-sans font-medium max-w-md">
            Explore how FULLFILLED 4 YOU transformed marketing channels into high-yield revenue machines.
          </p>
        </motion.div>

        {/* Case Studies Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white rounded-3xl border border-[#E5E7EB] shadow-xl shadow-[#282734]/5 overflow-hidden flex flex-col justify-between hover:border-[#EC2D2E]/40 hover:shadow-2xl transition-all duration-300 group"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-60 overflow-hidden bg-slate-100">
                  <img 
                    src={study.image} 
                    alt={study.client} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#282734]/80 via-transparent to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-[#E5E7EB] text-xs font-bold text-[#282734] font-sans">
                    {study.category}
                  </div>

                  {/* Metric Floating Badge */}
                  <div className="absolute bottom-4 right-4 px-3.5 py-1.5 rounded-xl bg-[#EC2D2E] text-white text-xs font-extrabold shadow-md font-sans">
                    {study.metric}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 space-y-4">
                  <h3 className="text-xl font-extrabold text-[#282734] font-sans group-hover:text-[#EC2D2E] transition-colors">
                    {study.client}
                  </h3>

                  <p className="text-[#4B5563] text-sm leading-relaxed font-sans font-medium">
                    {study.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {study.tags.map((tag, i) => (
                      <span key={i} className="text-[11px] font-semibold text-[#6B7280] bg-[#F8F9FC] border border-[#E5E7EB] px-2.5 py-1 rounded-lg font-sans">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="p-6 sm:p-8 pt-0">
                <button
                  onClick={onOpenProposal}
                  className="w-full py-3 rounded-2xl bg-[#F8F9FC] border border-[#E5E7EB] text-xs font-extrabold text-[#282734] hover:bg-[#EC2D2E] hover:text-white hover:border-[#EC2D2E] transition-all flex items-center justify-center gap-2 cursor-pointer font-sans"
                >
                  <span>Scale Similar Brand</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

function Trophy(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}
