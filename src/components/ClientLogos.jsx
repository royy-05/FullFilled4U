import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Settings } from 'lucide-react';

export default function ClientLogos() {
  const containerRef = useRef(null);

  // Scroll Progress for Gear Rotation Animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // Fast gear motion while scrolling
  const largeGearRotate = useTransform(scrollYProgress, [0, 1], [0, 5400]);
  const smallGearRotate = useTransform(scrollYProgress, [0, 1], [5400, 0]);

  // Client Logo Images from public/logos/ (1.png to 30.png)
  const clientLogosRow1 = [
    { id: 1, logoImg: '/logos/1.png' },
    { id: 2, logoImg: '/logos/2.png' },
    { id: 3, logoImg: '/logos/3.png' },
    { id: 4, logoImg: '/logos/4.png' },
    { id: 5, logoImg: '/logos/5.png' },
    { id: 6, logoImg: '/logos/6.png' },
    { id: 7, logoImg: '/logos/7.png' },
    { id: 8, logoImg: '/logos/8.png' },
    { id: 9, logoImg: '/logos/9.png' },
    { id: 10, logoImg: '/logos/10.png' },
    { id: 11, logoImg: '/logos/11.png' },
    { id: 12, logoImg: '/logos/12.png' },
    { id: 13, logoImg: '/logos/13.png' },
    { id: 14, logoImg: '/logos/14.png' },
    { id: 15, logoImg: '/logos/15.png' }
  ];

  const clientLogosRow2 = [
    { id: 16, logoImg: '/logos/16.png' },
    { id: 17, logoImg: '/logos/17.png' },
    { id: 18, logoImg: '/logos/18.png' },
    { id: 19, logoImg: '/logos/19.png' },
    { id: 20, logoImg: '/logos/20.png' },
    { id: 21, logoImg: '/logos/21.png' },
    { id: 22, logoImg: '/logos/22.png' },
    { id: 23, logoImg: '/logos/23.png' },
    { id: 24, logoImg: '/logos/24.png' },
    { id: 25, logoImg: '/logos/25.png' },
    { id: 26, logoImg: '/logos/26.png' },
    { id: 27, logoImg: '/logos/27.png' },
    { id: 28, logoImg: '/logos/28.png' },
    { id: 29, logoImg: '/logos/29.png' },
    { id: 30, logoImg: '/logos/30.png' }
  ];

  // Tripled for infinite seamless marquee loop
  const row1Tripled = [...clientLogosRow1, ...clientLogosRow1, ...clientLogosRow1];
  const row2Tripled = [...clientLogosRow2, ...clientLogosRow2, ...clientLogosRow2];

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-24 bg-[#F8F9FC] text-[#282734] relative overflow-hidden border-y border-[#E5E7EB]"
    >
      {/* Background Subtle Red Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#EC2D2E]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Scroll Entrance Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="flex items-center justify-between mb-14 pb-6 border-b border-[#E5E7EB]"
        >
          <div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-sans text-[#282734] tracking-tight leading-tight">
              Clients{' '}
              <span className="font-serif italic font-normal text-[#EC2D2E]">
                We've Built
              </span>{' '}
              With
            </h2>
            <p className="text-[#4B5563] text-sm sm:text-base font-medium mt-2 max-w-xl">
              Trusted by industry leaders, fast-growing D2C brands, and national enterprises for digital scale.
            </p>
          </div>

          {/* Interactive Fast Rotating Gear Animation on Scroll */}
          <div className="relative flex items-center shrink-0 pr-4">
            <motion.div
              style={{ rotate: largeGearRotate }}
              className="text-[#EC2D2E] drop-shadow-md"
            >
              <Settings className="w-12 h-12 sm:w-16 sm:h-16 stroke-[1.8]" />
            </motion.div>

            <motion.div
              style={{ rotate: smallGearRotate }}
              className="text-[#EC2D2E]/80 absolute -bottom-2 -right-6 drop-shadow-sm"
            >
              <Settings className="w-7 h-7 sm:w-9 sm:h-9 stroke-[2]" />
            </motion.div>
          </div>
        </motion.div>

        {/* Marquee Row 1 (Moving Left, Pauses on Hover) with Scroll Entrance */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative w-full overflow-hidden py-4 group"
        >
          <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#F8F9FC] to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#F8F9FC] to-transparent z-20 pointer-events-none" />

          <div className="flex items-center gap-10 sm:gap-14 w-max animate-marquee-left group-hover:[animation-play-state:paused]">
            {row1Tripled.map((item, idx) => (
              <div
                key={idx}
                className="px-4 py-2 flex items-center justify-center shrink-0 cursor-pointer select-none"
              >
                <img
                  src={item.logoImg}
                  alt="Client Logo"
                  className="h-14 sm:h-20 w-auto max-w-[180px] sm:max-w-[220px] object-contain hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Marquee Row 2 (Moving Right, Pauses on Hover) with Scroll Entrance */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative w-full overflow-hidden py-4 group mt-4"
        >
          <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#F8F9FC] to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#F8F9FC] to-transparent z-20 pointer-events-none" />

          <div className="flex items-center gap-10 sm:gap-14 w-max animate-marquee-right group-hover:[animation-play-state:paused]">
            {row2Tripled.map((item, idx) => (
              <div
                key={idx}
                className="px-4 py-2 flex items-center justify-center shrink-0 cursor-pointer select-none"
              >
                <img
                  src={item.logoImg}
                  alt="Client Logo"
                  className="h-14 sm:h-20 w-auto max-w-[180px] sm:max-w-[220px] object-contain hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
