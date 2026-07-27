import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Button from '../../components/Button/Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    servicesNeeded: [],
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const availableServices = [
    'Shopify Store Creation',
    '3PL Warehouse Shipping',
    'Performance Meta/Google Ads',
    'UGC Video Ad Production',
    'Custom Softwares & Website Development',
    'Technical SEO & Google Shopping'
  ];

  const handleServiceToggle = (service) => {
    setFormData(prev => {
      const exists = prev.servicesNeeded.includes(service);
      if (exists) {
        return { ...prev, servicesNeeded: prev.servicesNeeded.filter(s => s !== service) };
      } else {
        return { ...prev, servicesNeeded: [...prev.servicesNeeded, service] };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: formData.fullName,
      from_email: formData.email,
      phone: formData.phone,
      company: formData.company || 'N/A',
      services: formData.servicesNeeded.join(', ') || 'None selected',
      message: formData.message || 'No additional message',
      to_email: 'info@fullfilled4u.in'
    };

    try {
      if (serviceId && serviceId !== 'YOUR_SERVICE_ID' && publicKey && publicKey !== 'YOUR_PUBLIC_KEY') {
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
      } else {
        // Fallback simulation if keys are not configured yet
        await new Promise((resolve) => setTimeout(resolve, 1200));
      }
      setLoading(false);
      setSubmitted(true);
    } catch (err) {
      console.error('EmailJS Error:', err);
      setLoading(false);
      setErrorMessage(err?.text || 'Failed to send message via EmailJS. Please check your credentials.');
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E5E7EB] shadow-2xl text-center space-y-6 font-sans"
      >
        <div className="w-20 h-20 rounded-3xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto text-3xl font-extrabold shadow-lg">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#282734]">Request Received!</h3>
          <p className="text-sm text-[#4B5563] font-medium max-w-md mx-auto leading-relaxed">
            Thank you, <span className="font-bold text-[#282734]">{formData.fullName}</span>. Our Rajasthan logistics &amp; growth architecture team will review your requirements and reach out within 2 business hours.
          </p>
        </div>

        <Button
          variant="outline"
          size="md"
          onClick={() => {
            setSubmitted(false);
            setFormData({
              fullName: '',
              email: '',
              phone: '',
              company: '',
              servicesNeeded: [],
              message: ''
            });
          }}
        >
          Submit Another Request
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.form 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit} 
      className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E5E7EB] shadow-2xl space-y-6 font-sans"
    >
      
      {/* Header */}
      <div className="space-y-2 pb-4 border-b border-[#E5E7EB]">
        <div className="text-xs font-extrabold uppercase tracking-widest text-[#EC2D2E] flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>BUILD YOUR PLAN</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#282734] tracking-tight">
          Request Shipping &amp; Growth Audit
        </h3>
        <p className="text-xs sm:text-sm text-[#6B7280] font-medium">
          Fill out your brand details to receive custom 3PL shipping rates and store setup timeline.
        </p>
      </div>

      {errorMessage && (
        <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center gap-2.5">
          <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Row 1: Full Name & Email */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label className="text-xs font-extrabold text-[#282734] uppercase tracking-wider">Full Name *</label>
          <input
            type="text"
            required
            placeholder="John Doe"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="w-full px-4 py-3 rounded-2xl bg-[#F8F9FC] border border-[#E5E7EB] text-sm text-[#282734] font-medium focus:outline-none focus:border-[#EC2D2E] focus:bg-white transition-all"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-extrabold text-[#282734] uppercase tracking-wider">Work Email *</label>
          <input
            type="email"
            required
            placeholder="john@yourbrand.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-2xl bg-[#F8F9FC] border border-[#E5E7EB] text-sm text-[#282734] font-medium focus:outline-none focus:border-[#EC2D2E] focus:bg-white transition-all"
          />
        </div>
      </div>

      {/* Row 2: Phone & Company */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label className="text-xs font-extrabold text-[#282734] uppercase tracking-wider">Phone / WhatsApp *</label>
          <input
            type="tel"
            required
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-2xl bg-[#F8F9FC] border border-[#E5E7EB] text-sm text-[#282734] font-medium focus:outline-none focus:border-[#EC2D2E] focus:bg-white transition-all"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-extrabold text-[#282734] uppercase tracking-wider">Company / Brand Name</label>
          <input
            type="text"
            placeholder="Your Brand Name"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full px-4 py-3 rounded-2xl bg-[#F8F9FC] border border-[#E5E7EB] text-sm text-[#282734] font-medium focus:outline-none focus:border-[#EC2D2E] focus:bg-white transition-all"
          />
        </div>
      </div>

      {/* Services Checkboxes */}
      <div className="space-y-2 pt-2">
        <label className="text-xs font-extrabold text-[#282734] uppercase tracking-wider block">
          Select Required Services:
        </label>
        <div className="grid sm:grid-cols-2 gap-2.5">
          {availableServices.map((service) => {
            const isChecked = formData.servicesNeeded.includes(service);
            return (
              <button
                type="button"
                key={service}
                onClick={() => handleServiceToggle(service)}
                className={`p-3 rounded-xl text-xs font-extrabold text-left transition-all flex items-center justify-between border cursor-pointer ${
                  isChecked
                    ? 'bg-[#EC2D2E] text-white border-[#EC2D2E] shadow-md shadow-[#EC2D2E]/25'
                    : 'bg-[#F8F9FC] text-[#282734] border-[#E5E7EB] hover:border-[#EC2D2E]/40'
                }`}
              >
                <span>{service}</span>
                {isChecked && <CheckCircle2 className="w-4 h-4 text-white shrink-0" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label className="text-xs font-extrabold text-[#282734] uppercase tracking-wider">Project Scope &amp; Special Requirements</label>
        <textarea
          rows={3}
          placeholder="Tell us about your SKUs, shipping destinations, or current Shopify setup..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-2xl bg-[#F8F9FC] border border-[#E5E7EB] text-sm text-[#282734] font-medium focus:outline-none focus:border-[#EC2D2E] focus:bg-white transition-all resize-none"
        />
      </div>

      {/* Global Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        fullWidth
        icon={Send}
        disabled={loading}
      >
        {loading ? 'Submitting Request...' : 'Submit Proposal & Rate Request'}
      </Button>

    </motion.form>
  );
}
