import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Plus, Minus } from 'lucide-react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

export default function Contact({ onOpenProposal }) {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: 'How fast can you set up my Shopify store and sync with 3PL warehousing?',
      a: 'We launch turnkey Shopify stores within 24–48 hours. Inventory integration and 3PL barcoding sync take less than 3 business days.'
    },
    {
      q: 'Do you offer same-day pick & pack SLA guarantees?',
      a: 'Yes. Every order received before 3:00 PM is picked, quality inspected, custom packed, and dispatched on the exact same business day.'
    },
    {
      q: 'What shipping carriers do you use for express delivery?',
      a: 'We leverage enterprise rate accounts with DHL Express, FedEx, UPS, and national postal services for 1-2 day domestic and 2-4 day international shipping.'
    },
    {
      q: 'Can you handle both 3PL logistics and digital marketing ads?',
      a: 'Absolutely! Fulfilled4U is an all-in-one growth partner. We run your Meta/TikTok ads, produce UGC videos, optimize SEO, build software, and handle 100% of product shipping.'
    }
  ];

  return (
    <div className="pt-28 bg-white text-[#282734] font-sans antialiased">
      
      {/* Hero Banner with Entrance Animation */}
      <section className="relative py-16 sm:py-20 bg-[#F8F9FC] border-b border-[#E5E7EB] overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#EC2D2E]/5 rounded-full blur-[160px] pointer-events-none" />
        
        <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="max-w-3xl space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EC2D2E]/10 border border-[#EC2D2E]/20 text-[#EC2D2E] text-xs font-extrabold uppercase tracking-wider font-sans">
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Us</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#282734] font-sans leading-[1.12]">
              <span>Let's Build Your </span>
              <span className="font-serif italic font-normal text-[#EC2D2E] block sm:inline">Store &amp; 3PL Shipping Package.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed font-medium font-sans">
              Have questions about Shopify store migration, warehouse locations, courier rates, or performance marketing? Send us a message or call our direct line below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main 2-Column Contact Section */}
      <section className="py-20 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Contact Info & Maps */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1.0] }}
              className="lg:col-span-5"
            >
              <ContactInfo />
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: 0.15, ease: [0.25, 0.1, 0.25, 1.0] }}
              className="lg:col-span-7"
            >
              <ContactForm />
            </motion.div>

          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="pt-20 pb-4 bg-[#F8F9FC]">
        <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="text-center max-w-2xl mx-auto mb-16 space-y-3 font-sans"
          >
            <div className="text-xs font-extrabold uppercase tracking-widest text-[#EC2D2E] font-sans">
              Got Questions?
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#282734] font-sans tracking-tight">
              <span>Frequently Asked </span>
              <span className="font-serif italic font-normal text-[#EC2D2E]">Questions.</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4 font-sans">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-2xl border border-[#E5E7EB] p-6 shadow-sm font-sans transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left font-extrabold text-base sm:text-lg text-[#282734] hover:text-[#EC2D2E] transition-colors cursor-pointer"
                  >
                    <span className="pr-4">{faq.q}</span>
                    <div className="w-8 h-8 rounded-full bg-[#F8F9FC] text-[#EC2D2E] flex items-center justify-center shrink-0">
                      {isOpen ? <Minus className="w-4 h-4 stroke-[2.5]" /> : <Plus className="w-4 h-4 stroke-[2.5]" />}
                    </div>
                  </button>

                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pt-4 text-xs sm:text-sm text-[#4B5563] font-medium leading-relaxed border-t border-[#E5E7EB] mt-4"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
