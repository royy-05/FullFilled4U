import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Zap, Target, TrendingUp } from 'lucide-react';
import HeroCanvas from '../../components/HeroCanvas/HeroCanvas';

export default function Hero({ onOpenProposal }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      headlinePrefix: 'Shopify Store Creation & ',
      headlineAccent: 'Global 3PL Shipping.',
      buttonText: 'Start Your Journey',
      buttonAction: onOpenProposal,
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 2,
      headlinePrefix: 'A Decade of ',
      headlineAccent: 'Building Brands.',
      buttonText: 'Start Your Journey',
      buttonAction: onOpenProposal,
      image: '/hero-1.png'
    },
    {
      id: 3,
      headlinePrefix: 'Engineering ',
      headlineAccent: 'Hyper-Growth Engines.',
      buttonText: 'Start Your Journey',
      buttonAction: onOpenProposal,
      image: '/hero-2.png'
    },
    {
      id: 4,
      headlinePrefix: 'Dominating Search & ',
      headlineAccent: 'Social Virality.',
      buttonText: 'Start Your Journey',
      buttonAction: onOpenProposal,
      image: '/hero-3.png'
    }
  ];

  // Auto-play carousel slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <section className="relative pt-32 pb-12 min-h-[80vh] flex flex-col justify-between overflow-hidden bg-white grid-bg-light">
      {/* Background Canvas Effect */}
      <HeroCanvas />

      {/* Main Carousel Stage */}
      <div className="relative z-10 max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        
        {/* Carousel Frame Box */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="relative min-h-[420px] sm:min-h-[460px] rounded-3xl bg-[#F8F9FC] border border-[#E5E7EB] shadow-xl shadow-[#282734]/5 overflow-hidden flex items-center"
        >
          
          {/* Slide Background Image & Overlay */}
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 z-0"
            >
              <img
                src={slide.image}
                alt={`${slide.headlinePrefix} ${slide.headlineAccent}`}
                className="w-full h-full object-cover object-right opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent w-full md:w-3/4" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
            </motion.div>
          </AnimatePresence>

          {/* Slide Text Content Container */}
          <div className="relative z-20 max-w-2xl px-8 sm:px-16 py-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#282734] leading-[1.12] font-sans">
                  <span>{slide.headlinePrefix}</span>
                  <span className="font-serif italic font-normal text-[#EC2D2E] tracking-normal inline-block underline decoration-[#EC2D2E]/30 decoration-wavy underline-offset-4">
                    {slide.headlineAccent}
                  </span>
                </h1>

                <div className="pt-2">
                  <motion.button
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={slide.buttonAction}
                    className="group inline-flex items-center gap-2 font-bold text-sm sm:text-base text-[#282734] hover:text-[#EC2D2E] transition-colors relative pb-1 cursor-pointer"
                  >
                    <span>{slide.buttonText}</span>
                    <ArrowRight className="w-4 h-4 text-[#EC2D2E] group-hover:translate-x-1 transition-transform" />
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#EC2D2E] rounded-full" />
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Left Pagination Bar */}
          <div className="absolute bottom-5 left-8 sm:left-16 z-30 flex items-center gap-2.5">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 cursor-pointer ${
                  currentSlide === idx
                    ? 'w-8 h-2.5 bg-[#EC2D2E] rounded-full shadow-md shadow-[#EC2D2E]/30'
                    : 'w-2.5 h-2.5 rounded-full border-2 border-[#6B7280] bg-transparent hover:border-[#EC2D2E]'
                }`}
              />
            ))}
          </div>

          {/* Bottom Right Arrow Controls Container */}
          <div className="absolute bottom-5 right-6 sm:right-12 z-30 flex items-center gap-3">
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#E5E7EB] bg-white/90 text-[#282734] backdrop-blur-md flex items-center justify-center hover:bg-[#EC2D2E] hover:text-white hover:border-[#EC2D2E] shadow-md transition-all duration-300 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#E5E7EB] bg-white/90 text-[#282734] backdrop-blur-md flex items-center justify-center hover:bg-[#EC2D2E] hover:text-white hover:border-[#EC2D2E] shadow-md transition-all duration-300 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </motion.div>

        {/* Live Performance Benchmarks Row */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { label: 'Client Revenue Scaled', val: '$120M+', sub: 'Verified Across Funnels', icon: TrendingUp },
            { label: 'Brands Scaled Globally', val: '140+', sub: 'E-Commerce & Enterprise', icon: ShieldCheck },
            { label: 'Average Campaign ROAS', val: '5.8X', sub: 'Meta, Google & TikTok', icon: Zap },
            { label: 'Client Retention Rate', val: '99.4%', sub: 'Long-Term Partners', icon: Target }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-4 sm:p-5 rounded-2xl border border-[#E5E7EB] shadow-lg shadow-[#282734]/5 hover:border-[#EC2D2E]/40 transition-all flex items-center justify-between group font-sans"
            >
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-[#282734] font-sans tracking-tight group-hover:text-[#EC2D2E] transition-colors">
                  {item.val}
                </div>
                <div className="text-xs font-bold text-[#282734] font-sans">{item.label}</div>
                <div className="text-[10px] text-[#6B7280] font-medium font-sans">{item.sub}</div>
              </div>
              <div className="p-2 rounded-xl bg-[#F8F9FC] text-[#EC2D2E] group-hover:bg-[#EC2D2E] group-hover:text-white transition-colors">
                <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
