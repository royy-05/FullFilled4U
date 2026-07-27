import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import TiltCard from './TiltCard/TiltCard';

export default function Testimonials() {
  const scrollRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);

  const reviews = [
    {
      id: 1,
      name: 'Marcus Vance',
      role: 'CMO, Horizon Apparel',
      comment: 'FULLFILLED 4 YOU transformed our ad campaigns. Our ROAS surged from 1.8x to 5.2x in under 90 days. Their short-form video team is unmatched.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      metrics: '+$1.8M Revenue Scaled'
    },
    {
      id: 2,
      name: 'Elena Rostova',
      role: 'Founder, CloudPulse SaaS',
      comment: 'They built our full-stack React app and executed our technical SEO. We now hold the #1 Google ranking for 80+ enterprise software keywords.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
      metrics: '#1 Organic Rank Achieved'
    },
    {
      id: 3,
      name: 'David Chen',
      role: 'Head of Growth, Nexa EV',
      comment: 'The ROI calculator on their site was spot on. They delivered 3,200 qualified pre-orders for our product launch with flawless precision.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      metrics: '3,200 Pre-Orders Secured'
    },
    {
      id: 4,
      name: 'Priya Sharma',
      role: 'Founder, Aura Jewellery D2C',
      comment: 'Scaling our luxury jewellery brand to ₹15.96Cr+ revenue at 8x ROAS was seamless. Their Meta retargeting funnels delivered 1.4L+ profitable orders.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      metrics: '₹15.96Cr+ Revenue @ 8x ROAS'
    },
    {
      id: 5,
      name: 'Rohan Kapoor',
      role: 'Director, Urban Streetwear',
      comment: 'Generated ₹1.3Cr+ revenue and 12.1K+ orders in just 30 days. Their creative ad testing strategy reduced our CPMs while scaling orders.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      metrics: '12.1K+ Orders in 30 Days'
    },
    {
      id: 6,
      name: 'Ananya Gupta',
      role: 'Growth Lead, Pure Care D2C',
      comment: 'Our new personal care product launch hit ₹10L in just 2 days. Their WhatsApp and email retention funnels doubled our customer LTV.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      metrics: '₹10L Launch in 2 Days'
    }
  ];

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = 380;
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleScrollSync = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll > 0) {
        const index = Math.round((scrollLeft / maxScroll) * (reviews.length - 1));
        setActiveDot(Math.min(reviews.length - 1, Math.max(0, index)));
      }
    }
  };

  const scrollToSlide = (index) => {
    if (scrollRef.current) {
      const cardWidth = 380;
      scrollRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
      setActiveDot(index);
    }
  };

  return (
    <section className="py-24 relative bg-white border-t border-[#E5E7EB] overflow-hidden font-sans">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#EC2D2E]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Navigation Arrow Controls */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8F9FC] border border-[#EC2D2E]/30 text-xs font-bold tracking-widest text-[#EC2D2E] uppercase shadow-sm font-sans">
              <Quote className="w-3.5 h-3.5" />
              <span>CLIENT TESTIMONIALS</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#282734] font-sans tracking-tight leading-tight">
              <span>Loved By </span>
              <span className="font-serif italic font-normal text-[#EC2D2E]">
                Founders &amp; CMOs.
              </span>
            </h2>

            <p className="text-[#4B5563] text-base sm:text-lg font-sans font-medium max-w-xl">
              See what leadership teams say about our hyper-growth digital marketing &amp; software execution.
            </p>
          </div>

          {/* Navigation Arrow Controls */}
          <div className="flex items-center gap-3 shrink-0 font-sans">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => handleScroll('left')}
              className="w-12 h-12 rounded-full bg-[#F8F9FC] border border-[#E5E7EB] text-[#282734] hover:bg-[#EC2D2E] hover:text-white hover:border-[#EC2D2E] flex items-center justify-center transition-all shadow-sm cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.2]" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => handleScroll('right')}
              className="w-12 h-12 rounded-full bg-[#F8F9FC] border border-[#E5E7EB] text-[#282734] hover:bg-[#EC2D2E] hover:text-white hover:border-[#EC2D2E] flex items-center justify-center transition-all shadow-sm cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.2]" />
            </motion.button>
          </div>
        </motion.div>

        {/* Carousel Horizontal Scroll Container */}
        <div 
          ref={scrollRef}
          onScroll={handleScrollSync}
          className="flex items-stretch gap-6 overflow-x-auto pb-6 pt-2 no-scrollbar select-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reviews.map((rev) => (
            <div 
              key={rev.id}
              className="w-[300px] sm:w-[360px] lg:w-[400px] shrink-0"
            >
              <TiltCard maxTilt={6} className="h-full">
                <div className="bg-white p-7 sm:p-8 rounded-3xl border border-[#E5E7EB] shadow-xl shadow-[#282734]/5 flex flex-col justify-between h-full hover:border-[#EC2D2E]/50 hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                  
                  <div>
                    {/* Rating stars & Quote Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1 text-[#EC2D2E]">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#EC2D2E]" />
                        ))}
                      </div>
                      <Quote className="w-6 h-6 text-[#EC2D2E]/20 group-hover:text-[#EC2D2E]/40 transition-colors" />
                    </div>

                    <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed mb-6 italic font-sans font-medium">
                      "{rev.comment}"
                    </p>
                  </div>

                  {/* Reviewer Profile */}
                  <div className="pt-4 border-t border-[#E5E7EB] flex items-center gap-3.5">
                    <img
                      src={rev.avatar}
                      alt={rev.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#EC2D2E] shrink-0 shadow-sm"
                    />
                    <div className="space-y-0.5">
                      <h3 className="text-sm font-extrabold text-[#282734] font-sans group-hover:text-[#EC2D2E] transition-colors">
                        {rev.name}
                      </h3>
                      <p className="text-xs text-[#6B7280] font-sans font-medium">
                        {rev.role}
                      </p>
                      <div className="text-[11px] font-extrabold text-[#22C55E] font-sans">
                        {rev.metrics}
                      </div>
                    </div>
                  </div>

                </div>
              </TiltCard>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToSlide(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeDot === idx 
                  ? 'w-8 bg-[#EC2D2E]' 
                  : 'w-2.5 bg-[#E5E7EB] hover:bg-[#EC2D2E]/50'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
