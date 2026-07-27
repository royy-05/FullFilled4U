import React from 'react';
import { motion } from 'framer-motion';
import Mission from './Mission';
import Team from './Team';
import TiltCard from '../../components/TiltCard/TiltCard';
import { 
  Truck, 
  ShieldCheck, 
  Globe, 
  BarChart3, 
  Building2, 
  MapPin 
} from 'lucide-react';

export default function About({ onOpenProposal }) {
  const values = [
    {
      icon: Truck,
      title: 'Fulfillment-First Precision',
      desc: 'We treat logistics as the heartbeat of e-commerce. 99.98% pick accuracy and same-day order dispatch ensure your buyers stay loyal.'
    },
    {
      icon: ShieldCheck,
      title: 'Complete Transparency',
      desc: 'No hidden storage surcharges, unexpected fees, or dark contracts. Real-time inventory dashboards give you 100% control.'
    },
    {
      icon: Globe,
      title: 'Pan-India 3PL Scale',
      desc: 'Strategic fulfillment hubs across Rajasthan connect your Shopify store directly to major Indian metros & 27,000+ pincodes.'
    },
    {
      icon: BarChart3,
      title: 'Growth-Integrated Agency',
      desc: 'Unlike traditional 3PLs, we build your Shopify store, optimize SEO, and run viral social ads to scale order volume.'
    }
  ];

  const warehouses = [
    { 
      location: 'Vesu, Surat, 395007', 
      cap: 'Primary HQ & Fulfillment Hub', 
      speed: 'Same-Day Dispatch & Pan-India Shipping' 
    }
  ];

  return (
    <div className="pt-28 bg-white text-[#282734] font-sans antialiased">
      
      {/* Page Header / Hero Banner */}
      <section className="relative py-16 sm:py-20 bg-[#F8F9FC] border-b border-[#E5E7EB] overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EC2D2E]/5 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="max-w-3xl space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EC2D2E]/10 border border-[#EC2D2E]/20 text-[#EC2D2E] text-xs font-extrabold uppercase tracking-wider font-sans">
              <Building2 className="w-3.5 h-3.5" />
              <span>About Fulfilled4U</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#282734] font-sans leading-[1.12]">
              <span>Pioneering E-Commerce Store Setup &amp; </span>
              <span className="font-serif italic font-normal text-[#EC2D2E] block sm:inline">3PL Logistics in Surat.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed font-medium font-sans">
              We bridge the gap between turnkey Shopify store creation, Surat-based 3PL warehouse shipping, and high-ROI digital marketing. We build the physical and digital infrastructure that transforms growing e-commerce brands into category leaders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <Mission onOpenProposal={onOpenProposal} />

      {/* Core Values Section with Cursor-Following 3D Floating Tilt Cards */}
      <section className="py-20 bg-[#F8F9FC] border-b border-[#E5E7EB]">
        <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="text-center max-w-2xl mx-auto mb-16 space-y-3 font-sans"
          >
            <div className="text-xs font-extrabold uppercase tracking-widest text-[#EC2D2E] font-sans">
              Why Choose Us
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#282734] font-sans tracking-tight">
              <span>Our Core </span>
              <span className="font-serif italic font-normal text-[#EC2D2E]">Principles.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#4B5563] font-medium font-sans">
              Every package we pack in Surat and every Shopify store we build adheres to our strict service level agreements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <TiltCard maxTilt={10} className="h-full">
                    <div className="p-8 rounded-3xl bg-white border border-[#E5E7EB] space-y-4 font-sans shadow-xl shadow-[#282734]/5 hover:border-[#EC2D2E] hover:shadow-2xl hover:shadow-[#EC2D2E]/15 transition-all duration-300 group h-full flex flex-col justify-between cursor-pointer">
                      <div className="space-y-4">
                        <div className="w-12 h-12 rounded-2xl bg-[#EC2D2E]/10 border border-[#EC2D2E]/20 text-[#EC2D2E] flex items-center justify-center shrink-0 group-hover:bg-[#EC2D2E] group-hover:text-white transition-all duration-300 shadow-sm">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-extrabold text-[#282734] font-sans group-hover:text-[#EC2D2E] transition-colors">{v.title}</h3>
                        <p className="text-xs sm:text-sm text-[#4B5563] font-medium leading-relaxed font-sans">{v.desc}</p>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Surat Fulfillment Network / Headquarters */}
      <section className="py-20 border-b border-[#E5E7EB]">
        <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="text-center max-w-2xl mx-auto mb-16 space-y-3 font-sans"
          >
            <div className="text-xs font-extrabold uppercase tracking-widest text-[#EC2D2E] font-sans">
              Headquarters &amp; Fulfillment Network
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#282734] font-sans tracking-tight">
              <span>Strategically Located </span>
              <span className="font-serif italic font-normal text-[#EC2D2E]">Surat Hub.</span>
            </h2>
          </motion.div>

          <div className="max-w-xl mx-auto font-sans">
            {warehouses.map((w, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
              >
                <TiltCard maxTilt={6} className="w-full">
                  <div className="p-8 sm:p-10 rounded-3xl bg-[#F8F9FC] border border-[#E5E7EB] space-y-6 font-sans shadow-lg hover:border-[#EC2D2E] hover:bg-white hover:shadow-2xl hover:shadow-[#EC2D2E]/15 transition-all duration-300 group cursor-pointer text-center">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-14 h-14 rounded-2xl bg-[#EC2D2E]/10 text-[#EC2D2E] flex items-center justify-center shrink-0 group-hover:bg-[#EC2D2E] group-hover:text-white transition-colors shadow-sm">
                        <MapPin className="w-7 h-7" />
                      </div>
                      <h3 className="text-2xl font-extrabold text-[#282734] font-sans group-hover:text-[#EC2D2E] transition-colors">{w.location}</h3>
                    </div>
                    <div className="space-y-3 pt-4 border-t border-[#E5E7EB] text-sm font-bold text-[#4B5563] font-sans">
                      <div className="flex items-center justify-between">
                        <span>Facility Role:</span>
                        <span className="text-[#282734] font-extrabold">{w.cap}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Service Commitment:</span>
                        <span className="text-[#EC2D2E] font-extrabold">{w.speed}</span>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Team Section */}
      <Team />

    </div>
  );
}
