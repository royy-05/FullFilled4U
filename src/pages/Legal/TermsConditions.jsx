import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import { TRADE_NAME, CONTACT_PHONE, CONTACT_EMAIL, HQ_ADDRESS } from '../../utils/constants';

export default function TermsConditions() {
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
              <FileText className="w-3.5 h-3.5" />
              <span>Legal &amp; Compliance</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#282734]">
              Terms and Conditions
            </h1>
            <p className="text-sm sm:text-base text-[#4B5563] font-medium">
              Last updated: September 2026 • Effective immediately
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-sm sm:text-base text-[#4B5563] leading-relaxed">
          
          {/* Important Box: Trade Name & Entity Disclosure */}
          <div className="p-6 rounded-2xl bg-[#F8F9FC] border border-[#E5E7EB] space-y-3">
            <h2 className="text-base font-extrabold text-[#282734] flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#EC2D2E]" />
              Entity &amp; Trade Name Disclosure
            </h2>
            <p className="text-sm">
              This website and all related commercial services are operated under the registered trade name 
              {' '}<strong className="text-[#282734]">{TRADE_NAME}</strong>{' '}
              (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;, or &quot;Company&quot;). 
              By visiting our website or procuring services from us, you agree to be bound by these Terms and Conditions.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#282734]">1. Services Provided</h2>
            <p>
              {TRADE_NAME} provides end-to-end e-commerce solutions including, but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Turnkey Shopify &amp; custom e-commerce store architecture and development.</li>
              <li>Third-Party Logistics (3PL) warehousing, inventory storage, pick, pack, and barcoding services.</li>
              <li>Domestic courier dispatch and multi-carrier pan-India express fulfillment.</li>
              <li>Performance ad management (Meta, Google), conversion rate optimization, and growth consulting.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#282734]">2. User Eligibility and Account Usage</h2>
            <p>
              By engaging our services or filling out inquiry forms, you confirm that you are at least 18 years of age and possess the legal authority to enter into commercial contracts. You agree to provide accurate, true, and complete information regarding your business, consignments, and identity.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#282734]">3. Commercial Terms &amp; Invoicing</h2>
            <p>
              All service fees, storage charges, handling costs, and performance marketing retainers are specified in individual service level agreements or formal quotes. Payments must be remitted via authorized payment channels (including bank transfers, authorized payment gateways, UPI, or corporate credit cards). Taxes including GST will be levied as per statutory norms.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#282734]">4. 3PL Fulfillment and Logistics Liabilities</h2>
            <p>
              {TRADE_NAME} operates dedicated logistics workflows with barcoded verification. Consignors must ensure that goods tendered for storage and carriage do not violate Indian customs, postal, or cargo regulations (including banned or hazardous substances). Our liability for lost, damaged, or mishandled inventory during transit is strictly governed by the selected courier partner&apos;s cargo insurance policies.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#282734]">5. Intellectual Property</h2>
            <p>
              All branding elements, trade name &quot;{TRADE_NAME}&quot;, logos, software code, graphic materials, and content displayed on this website are protected under Indian intellectual property laws. Unauthorized reproduction or reverse engineering is strictly prohibited.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#282734]">6. Governing Law &amp; Jurisdiction</h2>
            <p>
              These Terms and any disputes arising out of the performance of services under {TRADE_NAME} shall be governed by and construed in accordance with the laws of India. Courts in Surat, Gujarat shall have exclusive jurisdiction over any legal proceedings.
            </p>
          </div>

          {/* Grievance Officer and Contact */}
          <div className="p-6 rounded-2xl bg-[#F8F9FC] border border-[#E5E7EB] space-y-4">
            <h2 className="text-lg font-bold text-[#282734]">7. Contact &amp; Grievance Officer</h2>
            <p className="text-sm">
              If you have any questions regarding these Terms or wish to lodge a grievance, please reach out to our compliance officer:
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
