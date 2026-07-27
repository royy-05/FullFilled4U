import React from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Zap,
  Users,
  Sliders,
  ShieldAlert,
  MessageSquareText
} from 'lucide-react';

export default function RoiCalculator({ onOpenProposal }) {
  // Images for Vertical Carousel Column 1 (Scrolls UP) matching reference screenshot
  const verticalImagesCol1 = [
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80'
  ];

  // Images for Vertical Carousel Column 2 (Scrolls DOWN) matching reference screenshot
  const verticalImagesCol2 = [
    'https://images.unsplash.com/photo-1542744846-9d332616f731?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80'
  ];

  // Doubled for infinite vertical seamless loop
  const col1Doubled = [...verticalImagesCol1, ...verticalImagesCol1];
  const col2Doubled = [...verticalImagesCol2, ...verticalImagesCol2];

  const leftCards = [
    {
      num: '01',
      icon: TrendingUp,
      title: 'Results-Driven Approach',
      desc: 'We make your business buzz & boom. Our focus is on outcomes!'
    },
    {
      num: '03',
      icon: Users,
      title: 'Cross-Functional Team',
      desc: 'Different skills, one shared goal: delivering results!'
    },
    {
      num: '05',
      icon: ShieldAlert,
      title: 'Systems Over Surprises',
      desc: 'Processes are tight so nothing falls through the cracks.'
    }
  ];

  const rightCards = [
    {
      num: '02',
      icon: Zap,
      title: 'Fast, Lean Execution',
      desc: 'We move quickly without dropping the ball on quality.'
    },
    {
      num: '04',
      icon: Sliders,
      title: 'Built Around You',
      desc: 'We adapt to your pace, requirements and business goals.'
    },
    {
      num: '06',
      icon: MessageSquareText,
      title: 'Clear Communication, Always',
      desc: 'No guesswork. We keep you looped in without the noise.'
    }
  ];

  return (
    <section id="how-we-deliver" className="py-24 relative bg-[#F8F9FC] border-y border-[#E5E7EB] overflow-hidden">
      {/* Ambient Red Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#EC2D2E]/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading with Dual Typography matching reference */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#282734] font-sans tracking-tight mb-4 leading-tight">
            How We{' '}
            <span className="font-serif italic font-normal text-[#EC2D2E]">
              Deliver
            </span>
          </h2>
          <p className="text-[#4B5563] text-base sm:text-lg font-medium">
            Proven processes, cross-functional agility, and transparent communication designed to scale your business predictably.
          </p>
        </div>

        {/* 3-Column Layout: Left Cards | Middle Vertical Dual Carousel | Right Cards */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT COLUMN: Cards 01, 03, 05 */}
          <div className="lg:col-span-4 space-y-10">
            {leftCards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <motion.div
                  key={card.num}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="relative group cursor-pointer"
                >
                  {/* Number Watermark (Hidden by default, shows in bold primary red #EC2D2E on hover matching reference screenshot) */}
                  <span className="absolute -top-6 -right-2 text-6xl sm:text-7xl font-extrabold font-sans text-[#EC2D2E] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none select-none z-0">
                    {card.num}
                  </span>

                  {/* Main Card Box (gets red border & solid red icon box on hover matching screenshot) */}
                  <div className="relative bg-white rounded-3xl p-7 border-2 border-transparent shadow-xl shadow-[#282734]/5 group-hover:border-[#EC2D2E] group-hover:shadow-2xl group-hover:shadow-[#EC2D2E]/15 transition-all duration-300 z-10">
                    <div className="flex items-start gap-4">
                      <div className="p-3.5 rounded-2xl bg-[#F8F9FC] border border-[#E5E7EB] text-[#282734] group-hover:bg-[#EC2D2E] group-hover:text-white group-hover:border-[#EC2D2E] transition-all duration-300 shrink-0">
                        <IconComp className="w-6 h-6 stroke-[1.8]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-extrabold text-[#282734] font-sans mb-2 leading-snug">
                          {card.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-medium text-[#4B5563] leading-relaxed">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* MIDDLE COLUMN: Dual Vertical Auto-Scrolling Images matching reference screenshot */}
          <div className="lg:col-span-4 h-[580px] overflow-hidden relative px-2">
            
            {/* Top & Bottom Soft Vignette Gradient Fade Masks into section background */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#F8F9FC] via-[#F8F9FC]/80 to-transparent z-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#F8F9FC] via-[#F8F9FC]/80 to-transparent z-20 pointer-events-none" />

            <div className="grid grid-cols-2 gap-3.5 h-full overflow-hidden">
              
              {/* Vertical Carousel Track 1 (Auto-Scroll UP) */}
              <motion.div
                animate={{ y: ['0%', '-50%'] }}
                transition={{
                  repeat: Infinity,
                  ease: 'linear',
                  duration: 22
                }}
                className="space-y-3.5 flex flex-col"
              >
                {col1Doubled.map((img, idx) => (
                  <div key={idx} className="h-56 sm:h-64 w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-md shrink-0 group">
                    <img
                      src={img}
                      alt="Agency Execution"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                ))}
              </motion.div>

              {/* Vertical Carousel Track 2 (Auto-Scroll DOWN) */}
              <motion.div
                animate={{ y: ['-50%', '0%'] }}
                transition={{
                  repeat: Infinity,
                  ease: 'linear',
                  duration: 25
                }}
                className="space-y-3.5 flex flex-col"
              >
                {col2Doubled.map((img, idx) => (
                  <div key={idx} className="h-56 sm:h-64 w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-md shrink-0 group">
                    <img
                      src={img}
                      alt="Team Collaboration"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                ))}
              </motion.div>

            </div>
          </div>

          {/* RIGHT COLUMN: Cards 02, 04, 06 */}
          <div className="lg:col-span-4 space-y-10">
            {rightCards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <motion.div
                  key={card.num}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="relative group cursor-pointer"
                >
                  {/* Number Watermark (Hidden by default, shows in bold primary red #EC2D2E on hover matching reference screenshot) */}
                  <span className="absolute -top-6 -right-2 text-6xl sm:text-7xl font-extrabold font-sans text-[#EC2D2E] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none select-none z-0">
                    {card.num}
                  </span>

                  {/* Main Card Box (gets red border & solid red icon box on hover matching screenshot) */}
                  <div className="relative bg-white rounded-3xl p-7 border-2 border-transparent shadow-xl shadow-[#282734]/5 group-hover:border-[#EC2D2E] group-hover:shadow-2xl group-hover:shadow-[#EC2D2E]/15 transition-all duration-300 z-10">
                    <div className="flex items-start gap-4">
                      <div className="p-3.5 rounded-2xl bg-[#F8F9FC] border border-[#E5E7EB] text-[#282734] group-hover:bg-[#EC2D2E] group-hover:text-white group-hover:border-[#EC2D2E] transition-all duration-300 shrink-0">
                        <IconComp className="w-6 h-6 stroke-[1.8]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-extrabold text-[#282734] font-sans mb-2 leading-snug">
                          {card.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-medium text-[#4B5563] leading-relaxed">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
