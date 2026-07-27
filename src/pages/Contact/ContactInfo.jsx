import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ExternalLink, Clock } from 'lucide-react';
import { CONTACT_PHONE, CONTACT_EMAIL, HQ_ADDRESS } from '../../utils/constants';

export default function ContactInfo() {
  return (
    <div className="space-y-6 font-sans">
      
      {/* Response Guarantee Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-3xl border border-[#E5E7EB] shadow-xl shadow-[#282734]/5 flex items-center gap-4"
      >
        <div className="w-12 h-12 rounded-2xl bg-[#EC2D2E]/10 border border-[#EC2D2E]/20 text-[#EC2D2E] flex items-center justify-center shrink-0">
          <Clock className="w-6 h-6" />
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-[#EC2D2E] font-sans">Response Guarantee</div>
          <div className="text-lg font-extrabold text-[#282734] font-sans">Replies within &lt; 2 Hours</div>
          <div className="text-xs text-[#6B7280] font-sans font-medium mt-0.5">Monday – Saturday, 9 AM – 9 PM IST</div>
        </div>
      </motion.div>

      {/* Direct Line Cards */}
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="bg-white p-8 rounded-3xl border border-[#E5E7EB] shadow-xl shadow-[#282734]/5 space-y-6"
      >
        <h3 className="text-xl font-extrabold text-[#282734] font-sans pb-4 border-b border-[#E5E7EB]">
          Direct Lines &amp; Offices
        </h3>

        {/* Email */}
        <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-start gap-4 group cursor-pointer font-sans">
          <div className="w-11 h-11 rounded-2xl bg-[#F8F9FC] border border-[#E5E7EB] text-[#282734] group-hover:bg-[#EC2D2E] group-hover:text-white transition-all flex items-center justify-center shrink-0 shadow-sm">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-[#6B7280] font-bold uppercase font-sans">Email Us Directly</div>
            <div className="text-base font-extrabold text-[#282734] group-hover:text-[#EC2D2E] transition-colors font-sans break-all">{CONTACT_EMAIL}</div>
          </div>
        </a>

        {/* Phone */}
        <a href={`tel:${CONTACT_PHONE}`} className="flex items-start gap-4 group cursor-pointer font-sans">
          <div className="w-11 h-11 rounded-2xl bg-[#F8F9FC] border border-[#E5E7EB] text-[#282734] group-hover:bg-[#EC2D2E] group-hover:text-white transition-all flex items-center justify-center shrink-0 shadow-sm">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-[#6B7280] font-bold uppercase font-sans">Call / WhatsApp</div>
            <div className="text-base font-extrabold text-[#282734] group-hover:text-[#EC2D2E] transition-colors font-sans">{CONTACT_PHONE}</div>
          </div>
        </a>

        {/* HQ Address */}
        <div className="flex items-start gap-4 font-sans">
          <div className="w-11 h-11 rounded-2xl bg-[#F8F9FC] border border-[#E5E7EB] text-[#282734] flex items-center justify-center shrink-0 shadow-sm">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-[#6B7280] font-bold uppercase font-sans">Headquarters</div>
            <div className="text-sm font-extrabold text-[#282734] font-sans leading-relaxed">{HQ_ADDRESS}</div>
          </div>
        </div>
      </motion.div>

      {/* Google Maps Card - Vesu Surat Gujarat India */}
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="relative rounded-3xl overflow-hidden border border-[#E5E7EB] shadow-xl group bg-white font-sans"
      >
        <div className="h-48 w-full relative bg-slate-100">
          <iframe
            title="HQ Surat Location Map"
            src="https://maps.google.com/maps?q=Vesu,%20Surat,%20Gujarat%20395007&t=&z=14&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0 filter contrast-125"
            loading="lazy"
          />
        </div>
        
        <a
          href="https://maps.google.com/?q=Vesu,+Surat,+Gujarat+395007"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 left-4 px-4 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-[#E5E7EB] text-xs font-extrabold text-[#282734] hover:text-[#EC2D2E] shadow-md flex items-center gap-2 transition-colors font-sans"
        >
          <span>Open Surat HQ in Maps</span>
          <ExternalLink className="w-4 h-4 text-[#EC2D2E]" />
        </a>
      </motion.div>

    </div>
  );
}
