import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';
import { TRADE_NAME, CONTACT_PHONE, CONTACT_EMAIL, HQ_ADDRESS } from '../../utils/constants';

export default function RefundPolicy() {
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
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Cancellations &amp; Refunds</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#282734]">
              Cancellation and Refund Policy
            </h1>
            <p className="text-sm sm:text-base text-[#4B5563] font-medium">
              Last updated: September 2026 • Commercial Terms for Merchants &amp; Clients
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-sm sm:text-base text-[#4B5563] leading-relaxed">
          
          <div className="p-6 rounded-2xl bg-[#F8F9FC] border border-[#E5E7EB] space-y-3">
            <h2 className="text-base font-extrabold text-[#282734] flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#EC2D2E]" />
              Trade Name Disclosure
            </h2>
            <p className="text-sm">
              This Cancellation and Refund Policy applies to commercial contracts, software development, 3PL logistics, and warehousing subscriptions provided under the trade name{' '}
              <strong className="text-[#282734]">{TRADE_NAME}</strong>.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#282734]">1. 3PL Warehousing &amp; Fulfillment Subscriptions</h2>
            <p>
              Merchants subscribing to our monthly 3PL storage and warehousing solutions may cancel their storage plans with a 30-day written notice. Any prepaid unused storage fees for subsequent calendar months will be refunded to the original payment source after reconciling outstanding shipping invoices and completing inventory de-stocking.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#282734]">2. Shopify &amp; Custom Software Engineering Services</h2>
            <p>
              For custom software, website development, or Shopify store launch packages:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Cancellation Prior to Project Kickoff:</strong> If a cancellation request is received within 24 hours of payment and before development commences, a 100% full refund will be granted.</li>
              <li><strong>Milestone-Based Refunds:</strong> Once engineering work has commenced, refunds are prorated based on completed milestones, wireframes, and hours logged by our tech architecture team.</li>
              <li><strong>Post-Delivery:</strong> Once store credentials, source code, or turnkey assets are delivered and accepted, payments become non-refundable.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#282734]">3. Courier &amp; Shipping Charges</h2>
            <p>
              Courier charges billed for packages that have already been dispatched through partner courier networks (e.g. Bluedart, Delhivery, FedEx) are non-refundable. For shipments returned to origin (RTO) or undelivered consignments, applicable reverse logistics fees apply as per standard carrier schedules.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#282734]">4. Refund Processing Timeline</h2>
            <p>
              Approved refunds are initiated within <strong>5 to 7 business days</strong> from the date of approval. Refunds will be credited back to the original method of payment (bank account, card, or UPI) in accordance with the standard processing guidelines of our banking and payment gateway partners.
            </p>
          </div>

          {/* Contact Support */}
          <div className="p-6 rounded-2xl bg-[#F8F9FC] border border-[#E5E7EB] space-y-4">
            <h2 className="text-lg font-bold text-[#282734]">5. Refund Inquiries &amp; Support</h2>
            <p className="text-sm">
              To request a cancellation or inquire about a refund, please contact our accounts team:
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
