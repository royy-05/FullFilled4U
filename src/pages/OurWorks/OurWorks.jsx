import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight, Sparkles } from 'lucide-react';
import Button from '../../components/Button/Button';

export default function OurWorksPage({ onOpenProposal }) {
  const [activeTab, setActiveTab] = useState('All');
  
  // Track open accordion section for each card: { [studyId]: 'problems' | 'growth' | null }
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (studyId, sectionName) => {
    setOpenSections((prev) => {
      const current = prev[studyId] !== undefined ? prev[studyId] : 'growth';
      return {
        ...prev,
        [studyId]: current === sectionName ? null : sectionName,
      };
    });
  };

  const caseStudies = [
    {
      id: 1,
      title: 'Jewellery Brand',
      category: 'Fashion & Apparel',
      highlight: '₹15.96Cr+ Revenue at 8x ROAS in Just 12 Months',
      aov: 'AOV ₹1,598',
      revenue: '₹15.96Cr+',
      roas: '8x ROAS',
      image: '/work/Jewellery.webp',
      desc: 'Great work begins with clear strategy. We scaled this luxury jewellery brand from inconsistent sales to 1.4L+ profitable orders with Meta retargeting and high AOV offers.',
      problemStatement: [
        'Low ROAS and inconsistent scaling',
        'High CPA affecting profitability and customer acquisition',
        'Weak creative strategy with limited testing and ad angles',
        'Poor retention, repeat purchases, and retargeting systems'
      ],
      growthResults: [
        'Generated ₹15.96Cr+ revenue in just 12 months at 8x ROAS',
        'Scaled the brand to 1.4L+ profitable orders',
        'Drove 91L+ website sessions through Meta Ads',
        'Increased AOV & repeat purchases via retargeting'
      ]
    },
    {
      id: 2,
      title: 'Streetwear Brand',
      category: 'Fashion & Apparel',
      highlight: '₹1.3Cr+ Revenue Generated in 30 Days',
      aov: 'AOV ₹1,238.13',
      revenue: '₹1.3Cr+',
      roas: '30 Days Scale',
      image: '/work/Streeywear.webp',
      desc: 'Transformed streetwear ad account performance by testing high-converting ad angles and building a scalable campaign structure.',
      problemStatement: [
        'Low conversion rate and high CPMs',
        'Weak AOV affecting profitability',
        'Limited creative testing and repetitive ad creatives',
        'Poor scaling structure in the ad account'
      ],
      growthResults: [
        'Generated ₹1.3Cr+ revenue in just 30 days',
        'Generated 12.1K+ orders in just 30 days',
        'Achieved profitable and scalable campaign performance',
        'Increased conversion rate and CTR through creative testing',
        'Reduced CPMs while maintaining stable CPA and margins'
      ]
    },
    {
      id: 3,
      title: 'Footwear D2C Brand',
      category: 'Fashion & Apparel',
      highlight: '₹5.22Cr+ Generated | 5.65x ROAS',
      aov: 'AOV ₹1,219',
      revenue: '₹5.22Cr+',
      roas: '5.65x ROAS',
      image: '/work/Footwear.webp',
      desc: 'Combined Meta & Google paid campaigns with SEO, WhatsApp automations, and full-funnel optimization to dominate online footwear.',
      problemStatement: [
        'Scaling aggressively while sustaining profitable ROAS',
        'High competition in the online footwear category',
        'Low customer retention & repeat orders',
        'Inconsistent ad performance and creative fatigue'
      ],
      growthResults: [
        '₹5.22Cr+ revenue & 87.8K+ orders in 365 days',
        'Increased repeat customers with WhatsApp & email',
        'Drove 86.24L+ website sessions via Meta & Google Ads',
        'Combined paid ads + SEO for long-term growth',
        'Improved website UX and optimized the entire sales funnel'
      ]
    },
    {
      id: 4,
      title: 'Personal Care D2C Brand',
      category: 'Beauty & Care',
      highlight: '₹10.34Cr+ Generated at 4x+ ROAS',
      aov: 'AOV ₹1,900+',
      revenue: '₹10.34Cr+',
      roas: '4x+ ROAS',
      image: '/work/Personal Care.webp',
      desc: 'Built a consistent creative pipeline and automated retention flows that generated ₹10L in just 2 days during product launch.',
      problemStatement: [
        'Aggressive scaling while maintaining sustainable ROAS',
        'Strong positioning in the personal care market',
        'Consistent creative pipeline needed for better engagement'
      ],
      growthResults: [
        'Generated ₹10.34Cr+ revenue since onboarding',
        'New product launch generated ₹10L in just 2 days',
        'Built strong WhatsApp & email retention flows for repeat orders',
        'Scaled the brand profitably while maintaining 4x+ ROAS'
      ]
    },
    {
      id: 5,
      title: 'Kidswear D2C Brand',
      category: 'Fashion & Apparel',
      highlight: '₹3.82Cr+ Generated in Just 2 Months at 5.7x+ ROAS',
      aov: 'AOV ₹2,436',
      revenue: '₹3.82Cr+',
      roas: '5.7x+ ROAS',
      image: '/work/Kidswear.webp',
      desc: 'Eliminated heavy reliance on discount campaigns by building a full-funnel strategy to acquire high-LTV customers at scale.',
      problemStatement: [
        'Acquiring new customers at scale',
        'Heavy reliance on discounted campaigns',
        'Scaling revenue sustainably while maintaining profitability'
      ],
      growthResults: [
        'Generated ₹3.82Cr+ revenue in just 2 months',
        'Maintained a strong 5.7x+ ROAS while scaling',
        'Built a full-funnel strategy to improve conversions',
        'Expanded customer acquisition while maintaining profitability'
      ]
    },
    {
      id: 6,
      title: 'Designer D2C Brand',
      category: 'Fashion & Apparel',
      highlight: '₹1.93Cr+ Revenue Generated with 4.5x+ ROAS',
      aov: 'Luxury Segment',
      revenue: '₹1.93Cr+',
      roas: '4.5x+ ROAS',
      image: '/work/Designer.webp',
      desc: 'Scaled luxury apparel revenue while safeguarding brand equity and elevating customer retention.',
      problemStatement: [
        'Aggressive scaling while maintaining premium brand positioning',
        'High customer acquisition costs in the luxury segment',
        'Low customer retention & repeat orders'
      ],
      growthResults: [
        'Generated ₹1.93Cr+ revenue with 4.5x+ ROAS',
        'Profitably scaled the brand while maintaining premium positioning',
        'Built a strong retention strategy to increase repeat purchases',
        'Implemented a full-funnel growth strategy across ads & retention'
      ]
    },
    {
      id: 7,
      title: 'Premium Ethnic Wear Brand',
      category: 'Fashion & Apparel',
      highlight: '₹8.52Cr+ Revenue from Jan–May 2026 at 7.8x+ ROAS',
      aov: 'High LTV',
      revenue: '₹8.52Cr+',
      roas: '7.8x+ ROAS',
      image: '/work/Premium Ethenic Wear.webp',
      desc: 'Executed festive offer strategies, landing page optimization, and UGC creator testing across Meta & Google Ads.',
      problemStatement: [
        'Low AOV & limited first-time customer acquisition',
        'High CAC with low conversion rates',
        'Weak festive performance & limited organic retention',
        'No clear structure for content testing & offer strategy'
      ],
      growthResults: [
        'Generated ₹8.52Cr+ revenue at 7.8x+ ROAS',
        'Built festive funnels across Meta & Google',
        'Implemented UGC testing & AOV-driven offers',
        'Boosted conversions through landing page optimization',
        'Strengthened retention marketing for higher repeat purchases & LTV'
      ]
    },
    {
      id: 8,
      title: 'Home Decor D2C Brand',
      category: 'Home & Lifestyle',
      highlight: '₹77.87 Lakhs+ Revenue from 22 Mar – 30 Apr 2026',
      aov: '40 Days Scale',
      revenue: '₹77.87L+',
      roas: 'Rapid Scale',
      image: '/work/Home-Decor.webp',
      desc: 'Built a full-funnel paid ads architecture from scratch and optimized landing page UX for rapid 40-day revenue expansion.',
      problemStatement: [
        'Low website conversion rates & weak user experience',
        'No existing ad data or proven funnel structure',
        'Heavy dependence on paid ads for growth',
        'No structured creative testing or offer strategy'
      ],
      growthResults: [
        'Optimized landing pages for higher conversion rates',
        'Built a full-funnel paid ads strategy from scratch',
        'Reduced dependency on paid ads through SEO & retention',
        'Implemented structured creative testing & offer strategies',
        'Improved user experience with better navigation & funnel flow'
      ]
    },
    {
      id: 9,
      title: 'Indian Saree D2C Brand',
      category: 'Fashion & Apparel',
      highlight: '₹2.62Cr+ Revenue Generated with 6x+ ROAS',
      aov: 'Scratch to Scale',
      revenue: '₹2.62Cr+',
      roas: '6x+ ROAS',
      image: '/work/Indian-Saree.webp',
      desc: 'Engineered complete 360° digital strategy from zero ad history to ₹2.62Cr+ sales with automated cart recovery.',
      problemStatement: [
        'Started from scratch with no prior ad history',
        'Low brand awareness & no proven funnel structure',
        'Difficulty scaling profitably while maintaining ROAS',
        'Weak conversion flow & checkout experience',
        'No structured retention or organic growth strategy'
      ],
      growthResults: [
        'Built a complete 360° performance marketing strategy',
        'Generated ₹2.62Cr+ revenue with 6x+ ROAS',
        'Built AOV-driven offers & festive funnels',
        'Implemented cart recovery calling to recover lost sales',
        'Profitably scaled customer acquisition across Meta & Google Ads'
      ]
    },
    {
      id: 10,
      title: 'Wellness D2C Brand',
      category: 'FMCG & Wellness',
      highlight: '₹4.44Cr+ Revenue Generated in the Last 12 Months',
      aov: 'High Repeat Rate',
      revenue: '₹4.44Cr+',
      roas: '12 Months Scale',
      image: '/work/Wellness Brands.webp',
      desc: 'Optimized conversion funnels, implemented high-AOV product bundles, and scaled performance campaigns consistently.',
      problemStatement: [
        'Low conversion rate & high CPMs',
        'Weak AOV & low ad profitability',
        'Limited creative testing & content diversity',
        'Difficulty scaling revenue profitably'
      ],
      growthResults: [
        'Optimized funnels to improve conversion rates and lower CPMs',
        'Implemented AOV-driven offers to increase profitability',
        'Built a structured creative testing system for better content performance',
        'Scaled revenue profitably through performance marketing'
      ]
    },
    {
      id: 11,
      title: 'FMCG / CPG D2C Brand',
      category: 'FMCG & Wellness',
      highlight: '₹62.69 Lakhs+ Revenue Generated in 30 Days',
      aov: '1.7x → 4.1x ROAS',
      revenue: '₹62.69L+',
      roas: '4.1x ROAS',
      image: '/work/FMCG.webp',
      desc: 'Broke through a stuck revenue plateau of ₹20L/mo by elevating blended ROAS from 1.7x to 4.1x across paid channels.',
      problemStatement: [
        'Stuck between ₹20–22L monthly revenue',
        'Low 1.7x blended ROAS across Meta & Google',
        'Heavy dependence on repeat & organic sales',
        'Difficulty scaling profitably through paid ads'
      ],
      growthResults: [
        'Generated ₹62.69 Lakhs+ revenue in 30 days',
        'Scaled monthly revenue beyond previous growth plateau',
        'Improved blended ROAS from 1.7x → 4.1x',
        'Built a scalable performance marketing system across Meta & Google Ads'
      ]
    }
  ];

  const categories = ['All', 'Fashion & Apparel', 'Beauty & Care', 'Home & Lifestyle', 'FMCG & Wellness'];

  const filteredStudies = activeTab === 'All'
    ? caseStudies
    : caseStudies.filter(item => item.category === activeTab);

  return (
    <div className="pt-28 bg-white text-[#282734] font-sans antialiased">
      
      {/* Standard Hero Banner matching About & Services */}
      <section className="relative py-14 sm:py-20 bg-[#F8F9FC] border-b border-[#E5E7EB] overflow-hidden font-sans">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EC2D2E]/5 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="max-w-4xl space-y-5"
          >
            <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#EC2D2E] font-sans flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#EC2D2E]" />
              <span>PORTFOLIO &amp; CASE STUDIES</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#282734] font-sans leading-[1.08]">
              <span>Real Brands. </span>
              <span className="font-serif italic font-normal text-[#EC2D2E] block sm:inline">
                Real Growth. Real Numbers.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-[#4B5563] leading-relaxed font-medium font-sans max-w-3xl">
              A look at how we've helped D2C brands scale profitably across industries with 360° performance marketing, high-converting offer funnels, and retention automation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-14 sm:py-20 bg-white font-sans relative">
        <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Tabs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center justify-start sm:justify-center gap-2.5 mb-16"
          >
            {categories.map((cat) => {
              const isActive = activeTab === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs font-extrabold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#EC2D2E] text-white shadow-md shadow-[#EC2D2E]/20 scale-105'
                      : 'bg-[#F8F9FC] border border-[#E5E7EB] text-[#282734] hover:border-[#EC2D2E]/50 hover:text-[#EC2D2E]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </motion.div>

          {/* Alternating Zig-Zag Case Studies Layout with Smooth Entrance Animations */}
          <div className="flex flex-col gap-20 sm:gap-24">
            <AnimatePresence>
              {filteredStudies.map((study, index) => {
                const isEven = index % 2 === 1;
                const currentOpen = openSections[study.id] !== undefined ? openSections[study.id] : 'growth';

                return (
                  <motion.div
                    key={study.id}
                    layout
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
                    className={`flex flex-col ${
                      isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'
                    } items-center gap-10 lg:gap-14 border-b border-[#E5E7EB] pb-20 sm:pb-24 last:border-b-0`}
                  >
                    
                    {/* Feature Image Container with Directional Entrance Animation */}
                    <motion.div 
                      initial={{ opacity: 0, x: isEven ? 60 : -60 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1.0] }}
                      className="w-full lg:w-5/12 shrink-0 group"
                    >
                      <div className="relative rounded-3xl overflow-hidden border border-[#E5E7EB] shadow-xl shadow-[#282734]/5 bg-[#F8F9FC] h-[340px] sm:h-[420px]">
                        <img 
                          src={study.image} 
                          alt={study.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-[#282734]/80 via-[#282734]/20 to-transparent" />

                        {/* Top Badges */}
                        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                          <span className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#E5E7EB] text-xs font-extrabold text-[#282734] shadow-md">
                            {study.category}
                          </span>
                          <span className="px-3.5 py-1.5 rounded-full bg-[#EC2D2E] text-white text-xs font-extrabold shadow-md">
                            {study.roas}
                          </span>
                        </div>

                        {/* Bottom Overlay Info */}
                        <div className="absolute bottom-5 left-6 right-6 z-10 text-white space-y-1">
                          <div className="text-xs font-extrabold text-amber-300 uppercase tracking-widest">
                            {study.aov}
                          </div>
                          <div className="text-2xl font-extrabold tracking-tight">
                            {study.revenue} Total Sales
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Content Container with Opposing Entrance Animation */}
                    <motion.div 
                      initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1.0] }}
                      className="w-full lg:w-7/12 space-y-6 font-sans"
                    >
                      
                      {/* Top Category / Tag Line */}
                      <div className="text-xs font-extrabold uppercase tracking-widest text-[#EC2D2E] flex items-center gap-2">
                        <span>CASE STUDY</span>
                        <span>—</span>
                        <span>{study.category}</span>
                      </div>

                      {/* Main Title */}
                      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#282734] font-sans tracking-tight leading-tight">
                        {study.title}
                      </h2>

                      {/* Subtitle Highlight */}
                      <div className="text-lg font-bold text-[#EC2D2E]">
                        {study.highlight}
                      </div>

                      {/* Description Summary */}
                      <p className="text-base text-[#4B5563] font-medium leading-relaxed">
                        {study.desc}
                      </p>

                      {/* Accordion List Rows with Red (+) / (-) Toggle Icons */}
                      <div className="pt-2 border-t border-[#E5E7EB]">
                        
                        {/* Row 1: Problem Statement */}
                        <div className="border-b border-[#E5E7EB]">
                          <button
                            onClick={() => toggleSection(study.id, 'problems')}
                            className="w-full py-4 flex items-center justify-between text-left group cursor-pointer"
                          >
                            <span className="text-base sm:text-lg font-extrabold text-[#282734] group-hover:text-[#EC2D2E] transition-colors">
                              Problem Statement
                            </span>
                            <span className="w-8 h-8 rounded-full bg-[#F8F9FC] border border-[#E5E7EB] text-[#EC2D2E] group-hover:bg-[#EC2D2E] group-hover:text-white flex items-center justify-center transition-all">
                              {currentOpen === 'problems' ? (
                                <Minus className="w-4 h-4 stroke-[2.5]" />
                              ) : (
                                <Plus className="w-4 h-4 stroke-[2.5]" />
                              )}
                            </span>
                          </button>

                          <AnimatePresence>
                            {currentOpen === 'problems' && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden pb-4"
                              >
                                <ul className="space-y-2 bg-[#F8F9FC] p-4 rounded-2xl border border-[#E5E7EB]">
                                  {study.problemStatement.map((prob, i) => (
                                    <li key={i} className="text-sm font-semibold text-[#4B5563] flex items-start gap-2.5">
                                      <span className="w-1.5 h-1.5 rounded-full bg-[#EC2D2E] mt-2 shrink-0" />
                                      <span>{prob}</span>
                                    </li>
                                  ))}
                                </ul>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        {/* Row 2: Growth with Roasify Media */}
                        <div className="border-b border-[#E5E7EB]">
                          <button
                            onClick={() => toggleSection(study.id, 'growth')}
                            className="w-full py-4 flex items-center justify-between text-left group cursor-pointer"
                          >
                            <span className="text-base sm:text-lg font-extrabold text-[#282734] group-hover:text-[#EC2D2E] transition-colors">
                              Growth with Roasify Media
                            </span>
                            <span className="w-8 h-8 rounded-full bg-[#F8F9FC] border border-[#E5E7EB] text-[#EC2D2E] group-hover:bg-[#EC2D2E] group-hover:text-white flex items-center justify-center transition-all">
                              {currentOpen === 'growth' ? (
                                <Minus className="w-4 h-4 stroke-[2.5]" />
                              ) : (
                                <Plus className="w-4 h-4 stroke-[2.5]" />
                              )}
                            </span>
                          </button>

                          <AnimatePresence>
                            {currentOpen === 'growth' && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden pb-4"
                              >
                                <ul className="space-y-2 bg-emerald-50/60 p-4 rounded-2xl border border-emerald-200/60">
                                  {study.growthResults.map((res, i) => (
                                    <li key={i} className="text-sm font-semibold text-emerald-950 flex items-start gap-2.5">
                                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                                      <span>{res}</span>
                                    </li>
                                  ))}
                                </ul>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                      </div>

                      {/* Bottom Link: Read More / Scale Brand */}
                      <div className="pt-2">
                        <button
                          onClick={onOpenProposal}
                          className="inline-flex items-center gap-2 text-base font-extrabold text-[#282734] hover:text-[#EC2D2E] transition-colors cursor-pointer border-b-2 border-transparent hover:border-[#EC2D2E] pb-0.5 group"
                        >
                          <span>Scale Similar D2C Brand</span>
                          <ArrowRight className="w-4 h-4 text-[#EC2D2E] group-hover:translate-x-1.5 transition-transform" />
                        </button>
                      </div>

                    </motion.div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>
      </section>

    </div>
  );
}
