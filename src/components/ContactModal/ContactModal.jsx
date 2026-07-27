import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Send, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Button from '../Button/Button';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    monthlyOrders: '100-500 orders/mo',
    primaryGoal: 'Shopify Setup & 3PL Shipping'
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      company: 'Modal Lead',
      services: formData.primaryGoal,
      message: `Request Shipping Plan Modal Submitted (Monthly Volume: ${formData.monthlyOrders})`,
      to_email: 'info@fullfilled4u.in'
    };

    try {
      if (serviceId && serviceId !== 'YOUR_SERVICE_ID' && publicKey && publicKey !== 'YOUR_PUBLIC_KEY') {
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
      setLoading(false);
      setSubmitted(true);
    } catch (err) {
      console.error('EmailJS Modal Error:', err);
      setLoading(false);
      setErrorMessage(err?.text || 'Failed to send inquiry via EmailJS. Please try again.');
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setErrorMessage(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      monthlyOrders: '100-500 orders/mo',
      primaryGoal: 'Shopify Setup & 3PL Shipping'
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 font-sans">
        
        {/* Dark Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#282734]/60 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', damping: 28, stiffness: 300 }}
          className="relative w-full max-w-xl bg-white rounded-3xl border border-[#E5E7EB] shadow-2xl overflow-hidden z-10 font-sans"
        >
          {/* Header Bar */}
          <div className="bg-[#F8F9FC] border-b border-[#E5E7EB] p-6 sm:p-7 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FD2626] text-white flex items-center justify-center font-bold shadow-none">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-[#282734] font-sans">Request Proposal &amp; Audit</h3>
                <p className="text-xs text-[#6B7280] font-medium font-sans">2-Hour Quote Guarantee • Growth &amp; Tech Architecture</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white border border-[#E5E7EB] text-[#282734] hover:bg-[#FD2626] hover:text-white flex items-center justify-center transition-colors shadow-none cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 font-sans">
            {submitted ? (
              <div className="text-center py-6 space-y-5">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto text-2xl font-bold">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-2xl font-extrabold text-[#282734]">Proposal Requested!</h4>
                  <p className="text-sm text-[#4B5563] font-medium max-w-md mx-auto leading-relaxed">
                    We will review your requirements for <span className="font-bold text-[#EC2D2E]">{formData.primaryGoal}</span> and send custom rate sheets &amp; project timelines to <span className="font-bold text-[#282734]">{formData.email}</span>.
                  </p>
                </div>
                <div className="pt-2">
                  <Button variant="primary" size="md" onClick={handleReset}>
                    Close Window
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="space-y-1">
                  <label className="text-xs font-extrabold text-[#282734] uppercase tracking-wider">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Subham Bhandari"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#F8F9FC] border border-[#E5E7EB] text-sm text-[#282734] font-medium focus:outline-none focus:border-[#EC2D2E] focus:bg-white transition-all"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-extrabold text-[#282734] uppercase tracking-wider">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="subham@brand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#F8F9FC] border border-[#E5E7EB] text-sm text-[#282734] font-medium focus:outline-none focus:border-[#EC2D2E] focus:bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-extrabold text-[#282734] uppercase tracking-wider">WhatsApp Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#F8F9FC] border border-[#E5E7EB] text-sm text-[#282734] font-medium focus:outline-none focus:border-[#EC2D2E] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-extrabold text-[#282734] uppercase tracking-wider">Primary Need</label>
                  <select
                    value={formData.primaryGoal}
                    onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#F8F9FC] border border-[#E5E7EB] text-sm text-[#282734] font-medium focus:outline-none focus:border-[#EC2D2E] focus:bg-white transition-all cursor-pointer"
                  >
                    <option value="Shopify Setup & 3PL Shipping">Shopify Setup &amp; 3PL Shipping</option>
                    <option value="3PL Warehousing Only">3PL Warehousing Only</option>
                    <option value="Performance Ads & UGC">Performance Ads &amp; UGC</option>
                    <option value="Custom Softwares & Website Development">Custom Softwares &amp; Website Development</option>
                  </select>
                </div>

                <div className="pt-3">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    fullWidth
                    icon={Send}
                    disabled={loading}
                  >
                    {loading ? 'Submitting...' : 'Start Your Journey'}
                  </Button>
                </div>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#6B7280] font-medium pt-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#EC2D2E]" />
                  <span>100% Confidential • No Sales Spam Guarantee</span>
                </div>
              </form>
            )}
          </div>
        </motion.div>

      </div>
    </AnimatePresence>
  );
}
