import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Sparkles, ShieldCheck } from 'lucide-react';

export default function ServicesHero() {
  return (
    <section className="relative py-16 sm:py-24 bg-white border-b border-[#E5E7EB] overflow-hidden font-sans">
      {/* Subtle Ambient Red Glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#EC2D2E]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Text Area */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="max-w-4xl space-y-6 mb-16"
        >
          <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#EC2D2E] font-sans flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#EC2D2E]" />
            <span>ALL UNDER ONE ROOF</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#282734] font-sans leading-[1.08]">
            <span>The Core </span>
            <span className="font-serif italic font-normal text-[#EC2D2E]">Logistics &amp; Growth.</span>
          </h1>

          <p className="text-base sm:text-xl text-[#4B5563] leading-relaxed font-medium font-sans max-w-3xl">
            Shopify Store Creation. 3PL Express Shipping. Paid Performance Ads. Custom Web Software. Four disciplines under one roof. Zero silos. Every brand gets exactly what it demands.
          </p>
        </motion.div>

        {/* Hero Visual Container: Hero Image with Overlapping Floating Image Cards */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="relative rounded-3xl overflow-hidden border border-[#E5E7EB] shadow-2xl shadow-[#282734]/10 bg-[#F8F9FC] h-[380px] sm:h-[520px] lg:h-[580px] group"
        >
          
          {/* Background Base Hero Image */}
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80" 
            alt="Fulfilled4U Logistics & Store Growth" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />

          {/* Gradient Overlay Fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#282734]/70 via-[#282734]/20 to-transparent" />

          {/* OVERLAPPING FLOATING IMAGE CARDS & BADGES ON TOP OF HERO IMAGE */}
          
          {/* Overlapping Card 1 (Top Right): Live Express Shipping Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute top-6 right-6 sm:top-10 sm:right-10 p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-[#E5E7EB] shadow-2xl flex items-center gap-4 max-w-xs sm:max-w-sm"
          >
            <div className="w-12 h-12 rounded-xl bg-[#EC2D2E] text-white flex items-center justify-center shrink-0 shadow-lg shadow-[#EC2D2E]/30">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-extrabold text-[#282734]">2-Day Express Shipping</div>
              <div className="text-[11px] sm:text-xs text-[#6B7280] font-medium">DHL &amp; FedEx Multi-Hub Sync</div>
            </div>
          </motion.div>

          {/* Overlapping Card 2 (Bottom Left): Overlapping Image Card with Shopify Store Sync */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 p-4 sm:p-6 rounded-3xl bg-white/95 backdrop-blur-xl border border-[#E5E7EB] shadow-2xl flex items-center gap-5 max-w-sm sm:max-w-md"
          >
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-[#E5E7EB] shrink-0 shadow-md bg-[#F8F9FC]">
              <img 
                src="/services/shopify-sync-icon.jpg" 
                alt="Shopify Store Creation"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-extrabold uppercase text-[#EC2D2E]">
                <Sparkles className="w-3 h-3" />
                <span>Turnkey Shopify Store</span>
              </div>
              <div className="text-sm sm:text-base font-extrabold text-[#282734] leading-snug">
                Store Setup + Automated Warehouse Sync
              </div>
              <div className="text-[11px] sm:text-xs text-[#6B7280] font-medium mt-0.5">
                100% Hands-Free Order Fulfillment
              </div>
            </div>
          </motion.div>

          {/* Overlapping Card 3 (Bottom Right): SLA Performance Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 hidden sm:flex items-center gap-3 p-4 rounded-2xl bg-[#282734] text-white border border-white/20 shadow-2xl"
          >
            <div className="w-10 h-10 rounded-xl bg-[#EC2D2E] text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-extrabold text-white">99.98% Pick Accuracy</div>
              <div className="text-[10px] text-gray-300">Same-Day Dispatch Commitment</div>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
