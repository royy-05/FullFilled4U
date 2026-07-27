import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Zap, 
  Palette, 
  Layers, 
  Sparkles,
  BarChart3, 
  ArrowRight
} from 'lucide-react';
import Button from '../Button/Button';

export default function HowWeDeliver({ onOpenProposal }) {
  const leftCards = [
    {
      num: '01',
      icon: Target,
      title: 'High-Converting Visual Strategy',
      desc: 'We design ad creatives engineered specifically to convert scroll into sales. Every angle, visual hook, and color contrast is tested for maximum CTR & ROAS.'
    },
    {
      num: '03',
      icon: Palette,
      title: 'In-House Creative & Design Studio',
      desc: 'Graphic designers, motion video editors, and copywriters working together under one roof to deliver high-converting social posts and campaign banners.'
    },
    {
      num: '05',
      icon: Sparkles,
      title: 'Creative Testing Engine',
      desc: 'A structured pipeline for rapid creative testing. We iterate on high-performing hooks, UGC formats, and offer banners to combat ad fatigue.'
    }
  ];

  const rightCards = [
    {
      num: '02',
      icon: Zap,
      title: 'Rapid Turnaround & Execution',
      desc: 'Fast creative production without sacrificing quality. High-volume ad variations, festive banners, and social assets delivered on tight timelines.'
    },
    {
      num: '04',
      icon: Layers,
      title: 'Tailored Brand Aesthetics',
      desc: 'Custom visual branding aligned with your D2C segment—from luxury ethnic apparel to vibrant Gen-Z streetwear and clean wellness product graphics.'
    },
    {
      num: '06',
      icon: BarChart3,
      title: 'Data-Backed Design Iteration',
      desc: 'We analyze real ad performance metrics to refine thumb-stoppers, headline overlays, and CTA placements for continuous conversion scaling.'
    }
  ];

  const col1Items = [
    { src: '/home-gallery/Creative-1.webp', h: 'h-64' },
    { src: '/home-gallery/Creative-2.webp', h: 'h-56' },
    { src: '/home-gallery/Creative-3.webp', h: 'h-60' },
    { src: '/home-gallery/Creative-4.webp', h: 'h-56' }
  ];

  const col2Items = [
    { src: '/home-gallery/Creative-5.webp', h: 'h-56' },
    { src: '/home-gallery/Creative-6.webp', h: 'h-64' },
    { src: '/home-gallery/Creative-7.webp', h: 'h-52' },
    { src: '/home-gallery/Creative-8.webp', h: 'h-60' }
  ];

  return (
    <section className="py-24 bg-[#F8F9FC] border-b border-[#E5E7EB] font-sans relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#EC2D2E]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4 font-sans"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EC2D2E]/10 border border-[#EC2D2E]/20 text-[#EC2D2E] text-xs font-extrabold uppercase tracking-wider font-sans">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CREATIVE STUDIO &amp; DESIGN</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#282734] font-sans tracking-tight leading-[1.12]">
            <span>Our Creatives &amp; </span>
            <span className="font-serif italic font-normal text-[#EC2D2E]">Designs.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#4B5563] font-medium leading-relaxed font-sans">
            Explore high-converting ad creatives, viral social media posts, and premium brand artwork engineered to capture attention and drive massive D2C sales.
          </p>
        </motion.div>

        {/* 3-Column Layout: Left Cards | Center Dual Moving Photo Grid | Right Cards */}
        <div className="grid lg:grid-cols-12 gap-8 items-center font-sans">
          
          {/* LEFT COLUMN: Pillar Cards 01, 03, 05 */}
          <div className="lg:col-span-4 space-y-6">
            {leftCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.num}
                  initial={{ opacity: 0, x: -35 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                  className="bg-white rounded-3xl border border-[#E5E7EB] p-7 shadow-xl shadow-[#282734]/5 hover:border-[#EC2D2E] hover:shadow-2xl hover:shadow-[#EC2D2E]/10 transition-all duration-300 relative overflow-hidden group cursor-pointer"
                >
                  {/* Giant Faint Watermark Number */}
                  <span className="absolute top-2 right-4 text-5xl font-extrabold text-[#282734]/5 group-hover:text-[#EC2D2E]/10 transition-colors select-none pointer-events-none font-sans">
                    {card.num}
                  </span>

                  <div className="space-y-4 relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-[#EC2D2E]/10 border border-[#EC2D2E]/20 text-[#EC2D2E] flex items-center justify-center group-hover:bg-[#EC2D2E] group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-extrabold text-[#282734] font-sans group-hover:text-[#EC2D2E] transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#4B5563] font-medium leading-relaxed font-sans">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CENTER COLUMN: Dual 2-Column Vertical Auto Marquee with Pure Images */}
          <div className="lg:col-span-4 relative h-[600px] sm:h-[650px] overflow-hidden rounded-3xl p-1 font-sans">
            {/* Top & Bottom Gradient Fade Mask */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#F8F9FC] via-[#F8F9FC]/80 to-transparent z-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#F8F9FC] via-[#F8F9FC]/80 to-transparent z-20 pointer-events-none" />

            <div className="grid grid-cols-2 gap-3 sm:gap-4 h-full">
              
              {/* SUB-COLUMN 1 (Scrolling Up) */}
              <div className="overflow-hidden">
                <motion.div
                  animate={{ y: ['0%', '-50%'] }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                  className="space-y-3 sm:space-y-4"
                >
                  {[...col1Items, ...col1Items].map((item, idx) => (
                    <div 
                      key={idx}
                      className={`relative rounded-3xl overflow-hidden shadow-lg border border-[#E5E7EB] bg-white group cursor-pointer ${item.h}`}
                    >
                      <img 
                        src={item.src} 
                        alt="Creative"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* SUB-COLUMN 2 (Scrolling Down) */}
              <div className="overflow-hidden">
                <motion.div
                  animate={{ y: ['-50%', '0%'] }}
                  transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                  className="space-y-3 sm:space-y-4"
                >
                  {[...col2Items, ...col2Items].map((item, idx) => (
                    <div 
                      key={idx}
                      className={`relative rounded-3xl overflow-hidden shadow-lg border border-[#E5E7EB] bg-white group cursor-pointer ${item.h}`}
                    >
                      <img 
                        src={item.src} 
                        alt="Creative"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Pillar Cards 02, 04, 06 */}
          <div className="lg:col-span-4 space-y-6">
            {rightCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.num}
                  initial={{ opacity: 0, x: 35 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                  className="bg-white rounded-3xl border border-[#E5E7EB] p-7 shadow-xl shadow-[#282734]/5 hover:border-[#EC2D2E] hover:shadow-2xl hover:shadow-[#EC2D2E]/10 transition-all duration-300 relative overflow-hidden group cursor-pointer"
                >
                  {/* Giant Faint Watermark Number */}
                  <span className="absolute top-2 right-4 text-5xl font-extrabold text-[#282734]/5 group-hover:text-[#EC2D2E]/10 transition-colors select-none pointer-events-none font-sans">
                    {card.num}
                  </span>

                  <div className="space-y-4 relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-[#EC2D2E]/10 border border-[#EC2D2E]/20 text-[#EC2D2E] flex items-center justify-center group-hover:bg-[#EC2D2E] group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-extrabold text-[#282734] font-sans group-hover:text-[#EC2D2E] transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#4B5563] font-medium leading-relaxed font-sans">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Bottom CTA Bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <Button
            variant="primary"
            size="lg"
            icon={ArrowRight}
            iconPosition="right"
            onClick={onOpenProposal}
          >
            Start Your Growth Journey Now
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
