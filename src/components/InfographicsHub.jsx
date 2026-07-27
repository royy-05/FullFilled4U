import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';
import { TrendingUp, X, Sparkles, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import TiltCard from './TiltCard/TiltCard';

export default function InfographicsHub({ onOpenProposal }) {
  const [selectedCase, setSelectedCase] = useState(null);
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);

  const isPageScrolling = useRef(false);
  const scrollTimeout = useRef(null);

  // Track vertical page scroll progress relative to this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 85%', 'end 15%']
  });

  // Track active window scrolling state
  useEffect(() => {
    const handleWindowScroll = () => {
      isPageScrolling.current = true;
      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        isPageScrolling.current = false;
      }, 150);
    };

    window.addEventListener('scroll', handleWindowScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
      clearTimeout(scrollTimeout.current);
    };
  }, []);

  // Sync horizontal container ONLY while the user is actively scrolling the page vertically
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (isPageScrolling.current && scrollRef.current) {
      const container = scrollRef.current;
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (maxScroll > 0) {
        container.scrollLeft = latest * maxScroll;
      }
    }
  });

  const infographicsData = [
    {
      id: 1,
      brandName: 'Aura Luxury Jewellery',
      niche: 'Fashion & Luxury Jewellery',
      roasBadge: '8x ROAS',
      metricTitle: '₹15.96Cr+ Generated',
      metricSub: '12 Months Revenue Scale',
      image: '/work/Jewellery.webp',
      problemStatement: [
        'Low ROAS and inconsistent scaling across ad channels',
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
      brandName: 'Urban Streetwear Label',
      niche: 'Streetwear & Apparel',
      roasBadge: '30-Day Scale',
      metricTitle: '₹1.3Cr+ Revenue',
      metricSub: '12.1K+ Orders Delivered',
      image: '/work/Streeywear.webp',
      problemStatement: [
        'Low conversion rate and high CPMs on Meta ads',
        'Weak AOV affecting profitability',
        'Limited creative testing and repetitive ad creatives',
        'Poor scaling structure in the ad account'
      ],
      growthResults: [
        'Generated ₹1.3Cr+ revenue in just 30 days',
        'Generated 12.1K+ orders in just 30 days',
        'Achieved profitable and scalable campaign performance',
        'Increased conversion rate and CTR through creative testing'
      ]
    },
    {
      id: 3,
      brandName: 'Footwear D2C Brand',
      niche: 'Footwear & Apparel',
      roasBadge: '5.65x ROAS',
      metricTitle: '₹5.22Cr+ Sales',
      metricSub: '87.8K+ Orders in 365 Days',
      image: '/work/Footwear.webp',
      problemStatement: [
        'Scaling aggressively while sustaining profitable ROAS',
        'High competition in the online footwear category',
        'Low customer retention & repeat orders'
      ],
      growthResults: [
        '₹5.22Cr+ revenue & 87.8K+ orders in 365 days',
        'Increased repeat customers with WhatsApp & email',
        'Drove 86.24L+ website sessions via Meta & Google Ads'
      ]
    },
    {
      id: 4,
      brandName: 'Pure Care D2C',
      niche: 'Personal Care & Beauty',
      roasBadge: '4x+ ROAS',
      metricTitle: '₹10.34Cr+ Total Revenue',
      metricSub: '₹10L Launch in 2 Days',
      image: '/work/Personal Care.webp',
      problemStatement: [
        'Aggressive scaling while maintaining sustainable ROAS',
        'Strong positioning needed in personal care market',
        'Consistent creative pipeline needed for engagement'
      ],
      growthResults: [
        'Generated ₹10.34Cr+ revenue since onboarding',
        'New product launch generated ₹10L in just 2 days',
        'Built strong WhatsApp & email retention flows for repeat orders'
      ]
    },
    {
      id: 5,
      brandName: 'Premium Ethnic Wear',
      niche: 'Festive & Bridal Apparel',
      roasBadge: '6.2x ROAS',
      metricTitle: '₹8.4Cr+ Sales',
      metricSub: 'High-Intent Festive Scale',
      image: '/work/Premium Ethenic Wear.webp',
      problemStatement: [
        'High cart abandonment on premium couture collections',
        'Seasonal demand spikes requiring rapid ad iteration',
        'Need for premium brand positioning & high-AOV funnels'
      ],
      growthResults: [
        'Generated ₹8.4Cr+ revenue across festive campaigns',
        'Lowered cart abandonment rate by 28% via retargeting',
        'Drove 45L+ high-intent video views on Meta & Instagram'
      ]
    },
    {
      id: 6,
      brandName: 'Heritage Indian Sarees',
      niche: 'Ethnic Textiles & Handlooms',
      roasBadge: '5.8x ROAS',
      metricTitle: '₹4.6Cr+ Scale',
      metricSub: 'Direct-to-Consumer Growth',
      image: '/work/Indian-Saree.webp',
      problemStatement: [
        'Expanding regional handloom brand to nationwide D2C sales',
        'High customer acquisition cost in competitive ethnic space',
        'Building trust and high return on ad spend'
      ],
      growthResults: [
        'Scaled nationwide D2C sales to ₹4.6Cr+ annual revenue',
        'Achieved 5.8x blended return on ad spend',
        'Increased repeat order rate to 38% with retention flows'
      ]
    },
    {
      id: 7,
      brandName: 'Modern Home Decor',
      niche: 'Interior & Living Accessories',
      roasBadge: '4.5x ROAS',
      metricTitle: '₹6.2Cr+ Sales',
      metricSub: 'Omnichannel Digital Scale',
      image: '/work/Home-Decor.webp',
      problemStatement: [
        'Low average order value on single decor items',
        'Scaling visual ad creative variations across channels',
        'Optimizing Shopify catalog conversion rate'
      ],
      growthResults: [
        'Boosted bundle checkout AOV by 34%',
        'Scaled annual revenue past ₹6.2Cr+',
        'Generated 28K+ orders with Meta & Google Shopping ads'
      ]
    },
    {
      id: 8,
      brandName: 'Kidswear D2C Label',
      niche: 'Children Fashion & Apparel',
      roasBadge: '5.1x ROAS',
      metricTitle: '₹3.8Cr+ Revenue',
      metricSub: '42K+ Orders Delivered',
      image: '/work/Kidswear.webp',
      problemStatement: [
        'High competition in online kids fashion space',
        'Targeting parents with high-converting video creative hooks',
        'Lowering customer acquisition costs'
      ],
      growthResults: [
        'Delivered 42K+ orders in 12 months',
        'Lowered customer acquisition cost (CAC) by 29%',
        'Achieved 5.1x ROAS across paid acquisition channels'
      ]
    },
    {
      id: 9,
      brandName: 'Gourmet FMCG Brand',
      niche: 'Food & Organic Beverages',
      roasBadge: '4.8x ROAS',
      metricTitle: '₹3.9Cr+ Revenue',
      metricSub: '35K+ Subscription Orders',
      image: '/work/FMCG.webp',
      problemStatement: [
        'Building repeat subscription orders for organic products',
        'High acquisition costs in competitive grocery market',
        'Optimizing landing page conversion rates for bundles'
      ],
      growthResults: [
        'Delivered 35K+ recurring subscription orders',
        'Lowered customer acquisition cost (CAC) by 32%',
        'Boosted bundle checkout AOV by 24%'
      ]
    },
    {
      id: 10,
      brandName: 'Wellness & Nutrition',
      niche: 'Health & Supplement D2C',
      roasBadge: '5.2x ROAS',
      metricTitle: '₹12.1Cr+ Sales',
      metricSub: 'Omnichannel Digital Scaling',
      image: '/work/Wellness Brands.webp',
      problemStatement: [
        'High competition in wellness supplement category',
        'Building trust and social proof for new product lines',
        'Maximizing customer lifetime value (LTV)'
      ],
      growthResults: [
        'Scaled total revenue past ₹12.1Cr+',
        'Achieved 5.2x ROAS on Meta & Google Search ads',
        'Increased repeat order rate to 42% via automated retention'
      ]
    },
    {
      id: 11,
      brandName: 'High Fashion Designer Studio',
      niche: 'Luxury & Couture Design',
      roasBadge: '7.4x ROAS',
      metricTitle: '₹9.8Cr+ Revenue',
      metricSub: 'High-AOV Luxury Scale',
      image: '/work/Designer.webp',
      problemStatement: [
        'Targeting ultra-high-net-worth fashion shoppers',
        'Building exclusive luxury brand experience online',
        'Optimizing custom consult booking funnels'
      ],
      growthResults: [
        'Generated ₹9.8Cr+ in high-AOV luxury sales',
        'Achieved 7.4x return on ad spend',
        'Captured 1,800+ VIP private bridal consults'
      ]
    }
  ];

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = 380;
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden font-sans border-b border-[#E5E7EB]">
      {/* Background Subtle Red Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#EC2D2E]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Navigation Arrow Controls */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 font-sans"
        >
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EC2D2E]/10 border border-[#EC2D2E]/20 text-[#EC2D2E] text-xs font-extrabold uppercase tracking-wider font-sans">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OUR WORKS &amp; CASE STUDIES</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#282734] font-sans tracking-tight leading-[1.12]">
              <span>D2C Brand Growth </span>
              <span className="font-serif italic font-normal text-[#EC2D2E]">Showcase.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#4B5563] font-medium leading-relaxed font-sans">
              Click on any case study card below to inspect full problem statements, growth funnels, and verified revenue numbers.
            </p>
          </div>

          {/* Navigation Arrow Controls */}
          <div className="flex items-center gap-3 shrink-0 font-sans">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => handleScroll('left')}
              className="w-12 h-12 rounded-full bg-[#F8F9FC] border border-[#E5E7EB] text-[#282734] hover:bg-[#EC2D2E] hover:text-white hover:border-[#EC2D2E] flex items-center justify-center transition-all shadow-sm cursor-pointer"
              aria-label="Previous Showcase"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.2]" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => handleScroll('right')}
              className="w-12 h-12 rounded-full bg-[#F8F9FC] border border-[#E5E7EB] text-[#282734] hover:bg-[#EC2D2E] hover:text-white hover:border-[#EC2D2E] flex items-center justify-center transition-all shadow-sm cursor-pointer"
              aria-label="Next Showcase"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.2]" />
            </motion.button>
          </div>
        </motion.div>

        {/* Carousel Horizontal Scroll Container */}
        <div 
          ref={scrollRef}
          className="flex items-stretch gap-6 overflow-x-auto pb-6 pt-2 no-scrollbar select-none font-sans"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {infographicsData.map((item) => (
            <div 
              key={item.id}
              className="w-[280px] sm:w-[330px] lg:w-[350px] shrink-0"
            >
              <TiltCard maxTilt={8} className="h-full">
                <div
                  onClick={() => setSelectedCase(item)}
                  className="relative h-[360px] sm:h-[390px] rounded-3xl overflow-hidden shadow-xl border border-[#E5E7EB] hover:border-[#EC2D2E] hover:shadow-2xl hover:shadow-[#EC2D2E]/20 transition-all duration-500 group cursor-pointer select-none"
                >
                  {/* Full Background Image */}
                  <img 
                    src={item.image} 
                    alt={item.brandName} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 pointer-events-none"
                  />

                  {/* Top Badge Overlay - Always Visible */}
                  <div className="relative z-20 p-6 flex items-center justify-between pointer-events-none">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-300 bg-black/60 backdrop-blur-md border border-amber-300/30 px-3 py-1 rounded-full shadow-lg">
                      {item.niche}
                    </span>
                    <div className="px-3.5 py-1 rounded-full bg-[#EC2D2E] text-white text-xs font-extrabold shadow-lg">
                      {item.roasBadge}
                    </div>
                  </div>

                  {/* Bottom Overlaid Text Box - Appears on HOVER ONLY */}
                  <div className="absolute inset-x-4 bottom-4 z-20 p-5 sm:p-6 rounded-2xl bg-black/85 backdrop-blur-xl border border-white/20 shadow-2xl space-y-3 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 ease-out">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight font-sans drop-shadow-md">
                        {item.brandName}
                      </h3>
                      <div className="text-xl sm:text-2xl font-extrabold text-[#EC2D2E] mt-1 tracking-tight">
                        {item.metricTitle}
                      </div>
                      <div className="text-xs text-gray-300 font-bold">
                        {item.metricSub}
                      </div>
                    </div>

                    <div className="pt-2.5 border-t border-white/20 flex items-center justify-between text-xs font-extrabold text-white group-hover:text-[#EC2D2E] transition-colors">
                      <span>View Growth Strategy</span>
                      <ExternalLink className="w-4 h-4 text-[#EC2D2E] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Details Modal Dialog */}
      <AnimatePresence>
        {selectedCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 font-sans">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCase(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl border border-[#E5E7EB] shadow-2xl p-6 sm:p-8 z-10 overflow-hidden space-y-6"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#E5E7EB]">
                <div>
                  <span className="text-xs font-extrabold uppercase text-[#EC2D2E] tracking-wider">
                    {selectedCase.niche}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#282734]">
                    {selectedCase.brandName}
                  </h3>
                  <div className="text-sm font-extrabold text-[#22C55E] mt-1">
                    {selectedCase.metricTitle} ({selectedCase.roasBadge})
                  </div>
                </div>

                <button
                  onClick={() => setSelectedCase(null)}
                  className="w-9 h-9 rounded-full bg-[#F8F9FC] border border-[#E5E7EB] flex items-center justify-center text-[#282734] hover:bg-[#EC2D2E] hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Problem & Results List */}
              <div className="space-y-5 max-h-[60vh] overflow-y-auto pr-2">
                <div>
                  <h4 className="text-sm font-extrabold text-[#282734] uppercase tracking-wider mb-2">
                    Problem Statement:
                  </h4>
                  <ul className="space-y-2 bg-[#F8F9FC] p-4 rounded-2xl border border-[#E5E7EB]">
                    {selectedCase.problemStatement.map((prob, idx) => (
                      <li key={idx} className="text-xs sm:text-sm font-semibold text-[#4B5563] flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#EC2D2E] mt-2 shrink-0" />
                        <span>{prob}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-extrabold text-[#282734] uppercase tracking-wider mb-2">
                    Growth Results:
                  </h4>
                  <ul className="space-y-2 bg-emerald-50/60 p-4 rounded-2xl border border-emerald-200/60">
                    {selectedCase.growthResults.map((res, idx) => (
                      <li key={idx} className="text-xs sm:text-sm font-semibold text-emerald-950 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal Footer CTA */}
              <div className="pt-4 border-t border-[#E5E7EB] flex justify-end">
                <button
                  onClick={() => {
                    setSelectedCase(null);
                    onOpenProposal();
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#EC2D2E] hover:bg-[#D81F20] text-white text-xs sm:text-sm font-extrabold shadow-md transition-all cursor-pointer"
                >
                  Scale Your Brand Like This
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
