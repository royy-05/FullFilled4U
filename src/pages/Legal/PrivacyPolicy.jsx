import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Mail, Phone, MapPin } from 'lucide-react';
import { TRADE_NAME, CONTACT_PHONE, CONTACT_EMAIL, HQ_ADDRESS } from '../../utils/constants';

export default function PrivacyPolicy() {
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
              <Lock className="w-3.5 h-3.5" />
              <span>Privacy &amp; Data Security</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#282734]">
              Privacy Policy
            </h1>
            <p className="text-sm sm:text-base text-[#4B5563] font-medium">
              Last updated: September 2026 • Compliant with Indian IT Act 2000 &amp; Digital Personal Data Protection
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-sm sm:text-base text-[#4B5563] leading-relaxed">
          
          <div className="p-6 rounded-2xl bg-[#F8F9FC] border border-[#E5E7EB] space-y-3">
            <h2 className="text-base font-extrabold text-[#282734] flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#EC2D2E]" />
              Data Controller Information
            </h2>
            <p className="text-sm">
              This Privacy Policy applies to the services and digital properties operated by{' '}
              <strong className="text-[#282734]">{TRADE_NAME}</strong>{' '}
              (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). We are committed to protecting the privacy of our merchants, clients, and website visitors.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#282734]">1. Information We Collect</h2>
            <p>We may collect information directly from you or automatically during your website visit, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact Information:</strong> Name, business email address, phone/WhatsApp number, company name.</li>
              <li><strong>E-Commerce &amp; Shipping Data:</strong> Monthly package volumes, product SKUs, shipping manifests, store URLs for 3PL integration.</li>
              <li><strong>Technical Data:</strong> IP address, device type, browser specifications, and analytics cookies.</li>
              <li><strong>Billing Information:</strong> GST identification number, billing address, and transaction logs (payment card credentials are processed directly by certified RBI-regulated payment gateways and never stored on our servers).</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#282734]">2. How We Use Your Information</h2>
            <p>Your data is processed strictly for legitimate commercial and fulfillment objectives:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Providing customized quotes, scheduling growth audits, and preparing service proposals.</li>
              <li>Executing 3PL warehouse operations, generating shipping labels, and syncing inventory with courier networks.</li>
              <li>Managing customer support inquiries and delivering service notifications.</li>
              <li>Complying with statutory obligations and financial recordkeeping requirements.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#282734]">3. Data Sharing and Third-Party Disclosures</h2>
            <p>
              We do not sell, rent, or trade your personal or business data. We only share necessary operational details with trusted partners:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Logistics &amp; Courier Partners:</strong> Delivery details provided to national surface and express air carriers for package delivery.</li>
              <li><strong>Payment Processors:</strong> Transaction records exchanged with licensed payment gateways for payment collection and verification.</li>
              <li><strong>Legal Authorities:</strong> When required by lawful court orders, GST audits, or Indian regulatory bodies.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#282734]">4. Data Protection and Retention</h2>
            <p>
              {TRADE_NAME} implements multi-layer technical safeguards, SSL encryption, and restricted database access to safeguard information against unauthorized disclosure. Data is retained only for as long as required to fulfill service contracts and regulatory obligations.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#282734]">5. Your Rights</h2>
            <p>
              You have the right to request access to your personal data, request corrections, or request deletion of data subject to statutory recordkeeping requirements.
            </p>
          </div>

          {/* Privacy Officer Contact */}
          <div className="p-6 rounded-2xl bg-[#F8F9FC] border border-[#E5E7EB] space-y-4">
            <h2 className="text-lg font-bold text-[#282734]">6. Contact Our Privacy Officer</h2>
            <p className="text-sm">
              For any privacy-related questions or data deletion requests, contact us at:
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
