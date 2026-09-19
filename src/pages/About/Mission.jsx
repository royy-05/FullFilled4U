import React from 'react';
import { motion } from 'framer-motion';
import { Package, ArrowRight } from 'lucide-react';
import Button from '../../components/Button/Button';

export default function Mission({ onOpenProposal }) {
  return (
    <section className="py-20 border-b border-[#E5E7EB]">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Box */}
          <motion.div 
            initial={{ opacity: 0, x: -50, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-[#E5E7EB] shadow-2xl shadow-[#282734]/10 h-[420px] sm:h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80" 
                alt="Fulfilled4U Warehouse Logistics" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#282734]/80 via-[#282734]/20 to-transparent" />
              
              {/* Floating Metric Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/95 backdrop-blur-xl border border-[#E5E7EB] shadow-xl flex items-center justify-between font-sans">
                <div>
                  <div className="text-2xl font-extrabold text-[#282734]">500,000+</div>
                  <div className="text-xs font-bold text-[#6B7280]">Packages Shipped Worldwide</div>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-[#EC2D2E] text-white flex items-center justify-center font-bold">
                  <Package className="w-6 h-6" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Story Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="lg:col-span-6 space-y-6 font-sans"
          >
            <div className="text-xs font-extrabold uppercase tracking-widest text-[#EC2D2E] font-sans">
              Our Story &amp; Vision
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#282734] font-sans leading-[1.15] tracking-tight">
              <span>Built to Solve E-Commerce Fulfillment &amp; </span>
              <span className="font-serif italic font-normal text-[#EC2D2E] block sm:inline">Growth Bottlenecks.</span>
            </h2>

            <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed font-medium font-sans">
              FULLFILLED4U E-COMMERCE AND SHIPPING PARTNER was founded on a simple realization: e-commerce founders were forced to split their attention between expensive software agencies and sluggish 3PL providers.
            </p>

            <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed font-medium font-sans">
              We consolidated everything into one seamless operation. Today, we handle turnkey Shopify store creation, climate-controlled warehousing in Surat, Gujarat, barcoded pick &amp; pack, express doorstep shipping, along with SEO, social ads, and custom web software.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4 font-sans">
              <div className="p-4 rounded-2xl bg-[#F8F9FC] border border-[#E5E7EB] space-y-1">
                <div className="text-2xl font-extrabold text-[#EC2D2E] font-sans">99.98%</div>
                <div className="text-xs font-bold text-[#282734] font-sans">Pick &amp; Pack Accuracy</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#F8F9FC] border border-[#E5E7EB] space-y-1">
                <div className="text-2xl font-extrabold text-[#282734] font-sans">24 Hours</div>
                <div className="text-xs font-bold text-[#282734] font-sans">Shopify Store Setup</div>
              </div>
            </div>

            <div className="pt-4">
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                onClick={onOpenProposal}
              >
                Request Custom Shipping Plan
              </Button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
