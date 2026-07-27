import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TiltCard from '../../components/TiltCard/TiltCard';

export default function Team() {
  const [imgErrors, setImgErrors] = useState({});

  const handleImageError = (id) => {
    setImgErrors(prev => ({ ...prev, [id]: true }));
  };

  const team = [
    { 
      id: 'subham',
      name: 'Subham Bhandari', 
      role: 'Co-Founder & CEO', 
      exp: 'E-Commerce Scaling, 3PL Logistics & Growth Strategy',
      image: '/subham-bhandari.jpg',
      initials: 'SB'
    },
    { 
      id: 'labdhi',
      name: 'Labdhi Jain', 
      role: 'Co-Founder & Director', 
      exp: 'Brand Architecture, Creative Direction & Marketing Operations',
      image: '/labdhi-jain.jpg',
      initials: 'LJ'
    }
  ];

  return (
    <section className="pt-20 pb-4 bg-white font-sans">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-3 font-sans"
        >
          <div className="text-xs font-extrabold uppercase tracking-widest text-[#EC2D2E] font-sans flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EC2D2E]" />
            <span>LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#282734] font-sans tracking-tight">
            <span>Meet Our E-Commerce &amp; </span>
            <span className="font-serif italic font-normal text-[#EC2D2E]">Logistics Leaders.</span>
          </h2>
        </motion.div>

        {/* 2-Person Centered Grid with 3D Tilt & Cursor Float */}
        <div className="grid sm:grid-cols-2 max-w-3xl mx-auto gap-8 font-sans">
          {team.map((t, idx) => {
            const hasError = imgErrors[t.id];

            return (
              <motion.div 
                key={t.id}
                initial={{ opacity: 0, y: 35, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.25, 0.1, 0.25, 1.0] }}
              >
                <TiltCard maxTilt={12} className="h-full">
                  <div className="p-8 rounded-3xl bg-[#F8F9FC] border border-[#E5E7EB] text-center space-y-5 shadow-xl shadow-[#282734]/5 hover:border-[#EC2D2E] hover:bg-white hover:shadow-2xl hover:shadow-[#EC2D2E]/15 transition-all duration-300 font-sans group cursor-pointer h-full flex flex-col justify-between">
                    <div className="space-y-5">
                      {/* Photo Image Frame Container / Placeholder */}
                      <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-3xl overflow-hidden border-2 border-[#E5E7EB] group-hover:border-[#EC2D2E] transition-colors mx-auto bg-white shadow-md flex items-center justify-center">
                        {!hasError ? (
                          <img 
                            src={t.image} 
                            alt={t.name}
                            onError={() => handleImageError(t.id)}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          /* Fallback Avatar Placeholder when image is not yet uploaded */
                          <div className="w-full h-full bg-[#EC2D2E]/10 text-[#EC2D2E] flex flex-col items-center justify-center p-4">
                            <div className="text-3xl font-extrabold font-sans mb-1">{t.initials}</div>
                            <div className="text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Add Photo</div>
                          </div>
                        )}
                      </div>
                      
                      <div className="space-y-1">
                        <h3 className="text-xl sm:text-2xl font-extrabold text-[#282734] font-sans group-hover:text-[#EC2D2E] transition-colors">{t.name}</h3>
                        <div className="text-xs sm:text-sm font-extrabold text-[#EC2D2E] uppercase tracking-wider font-sans">{t.role}</div>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#4B5563] font-medium leading-relaxed pt-3 border-t border-[#E5E7EB] font-sans">
                      {t.exp}
                    </p>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
