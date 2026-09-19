import React from 'react';
import { motion } from 'framer-motion';
import { Truck, CheckCircle2, Clock, Mail, Phone, MapPin } from 'lucide-react';
import { TRADE_NAME, CONTACT_PHONE, CONTACT_EMAIL, HQ_ADDRESS } from '../../utils/constants';

export default function ShippingPolicy() {
  return (
    <div className="pt-28 bg-white text-[#282734] font-sans antialiased">
      {/* Header */}
      <section className="relative py-16 bg-[#F8F9FC] border-b border-[#E5E7EB] overflow-hidden">
        <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EC2D2E]/10 border border-[#EC2D2E]/20 text-[#EC2D2E] text-xs font-extrabold uppercase tracking-wider">
              <Truck className="w-3.5 h-3.5" />
              <span>Logistics &amp; Fulfillment</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#282734]">
              Shipping &amp; Delivery Policy
            </h1>
            <p className="text-sm sm:text-base text-[#4B5563] font-medium">
              Last updated: September 2026 • Pan-India 3PL Operations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-sm sm:text-base text-[#4B5563] leading-relaxed">
          
          <div className="p-6 rounded-2xl bg-[#F8F9FC] border border-[#E5E7EB] space-y-3">
            <h2 className="text-base font-extrabold text-[#282734] flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#EC2D2E]" />
              Shipping Operations &amp; Trade Name
            </h2>
            <p className="text-sm">
              All warehousing, order fulfillment, and multi-courier dispatch operations described herein are managed under the registered trade name{' '}
              <strong className="text-[#282734]">{TRADE_NAME}</strong>, headquartered in Surat, Gujarat.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#282734]">1. Order Processing &amp; Dispatch SLA</h2>
            <p>
              We operate high-throughput fulfillment centers designed for rapid turnaround:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Same-Day Dispatch:</strong> All orders synced to our 3PL warehouse management system before 3:00 PM IST (Monday through Saturday) are picked, barcoded, quality checked, and handed over to courier hubs on the same day.</li>
              <li><strong>Cutoff After 3:00 PM:</strong> Orders processed after 3:00 PM are dispatched on the next business day.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#282734]">2. Delivery Timelines</h2>
            <p>
              Deliveries are executed via top-tier express courier networks across 27,000+ Indian pincodes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Intra-City / Gujarat Metro:</strong> 1 to 2 business days.</li>
              <li><strong>Tier-1 Indian Metros (Mumbai, Delhi NCR, Bangalore, Chennai, Hyderabad):</strong> 2 to 3 business days.</li>
              <li><strong>Rest of India / Regional Zones:</strong> 3 to 5 business days.</li>
              <li><strong>Special / Remote Areas (North-East &amp; Island territories):</strong> 5 to 7 business days.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#282734]">3. Tracking &amp; Delivery Notifications</h2>
            <p>
              Once a package is scanned into the courier manifest, automated tracking links with AWB numbers are pushed via SMS and email to the buyer and accessible in the merchant&apos;s fulfillment dashboard in real-time.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#282734]">4. Delivery Attempts &amp; RTO Management</h2>
            <p>
              Our courier partners attempt delivery up to three (3) times. If the recipient is unavailable or the address is non-serviceable, the consignment enters an RTO (Return to Origin) workflow back to our Surat fulfillment facility.
            </p>
          </div>

          {/* Contact Support */}
          <div className="p-6 rounded-2xl bg-[#F8F9FC] border border-[#E5E7EB] space-y-4">
            <h2 className="text-lg font-bold text-[#282734]">5. Logistics Support Contact</h2>
            <p className="text-sm">
              For queries related to courier partners, SLA tracking, or shipping inquiries, contact us:
            </p>
            <div className="space-y-2 text-sm text-[#282734] font-medium">
              <div className="flex items-center gap-2">
                <strong className="text-[#6B7280]">Trade Name:</strong>
                <span>{TRADE_NAME}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#EC2D2E]" />
                <span>{HQ_ADDRESS}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#EC2D2E]" />
                <a href={`tel:${CONTACT_PHONE}`} className="hover:text-[#EC2D2E]">{CONTACT_PHONE}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#EC2D2E]" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-[#EC2D2E]">{CONTACT_EMAIL}</a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
