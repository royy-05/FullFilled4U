import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Clock,
  Sparkles
} from 'lucide-react';

export default function ProcessSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '$10k - $50k/mo',
    message: '',
    service: 'Full-Funnel Growth'
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const budgets = ['<$10k/mo', '$10k - $50k/mo', '$50k - $200k/mo', '$200k+/mo'];
  const services = ['Full-Funnel Growth', 'Paid Media Scaling', 'Web Engineering', 'SEO & Content'];

  return (
    <section id="contact" className="py-24 relative bg-[#F8F9FC] border-t border-[#E5E7EB]">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#EC2D2E]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EC2D2E]/30 text-xs font-bold tracking-widest text-[#EC2D2E] uppercase mb-4 shadow-sm font-sans">
            <Sparkles className="w-3.5 h-3.5" />
            GET IN TOUCH
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#282734] font-sans tracking-tight mb-4 leading-tight">
            Let's Build Something{' '}
            <span className="font-serif italic font-normal text-[#EC2D2E]">
              Extraordinary Together.
            </span>
          </h2>
          <p className="text-[#4B5563] text-base sm:text-lg font-sans font-medium">
            Ready to scale your brand to 8-figures? Reach out to our growth strategists for a free audit &amp; roadmap.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards & Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Response Banner */}
            <div className="bg-white p-6 rounded-3xl border border-[#E5E7EB] shadow-xl shadow-[#282734]/5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EC2D2E]/10 border border-[#EC2D2E]/20 text-[#EC2D2E] flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#EC2D2E] font-sans">Response Guarantee</div>
                <div className="text-lg font-extrabold text-[#282734] font-sans">Replies within &lt; 2 Hours</div>
                <div className="text-xs text-[#6B7280] font-sans font-medium mt-0.5">Monday – Saturday, 9 AM – 9 PM IST</div>
              </div>
            </div>

            {/* Direct Channel Cards */}
            <div className="bg-white p-8 rounded-3xl border border-[#E5E7EB] shadow-xl shadow-[#282734]/5 space-y-6">
              <h3 className="text-xl font-extrabold text-[#282734] font-sans pb-4 border-b border-[#E5E7EB]">
                Direct Lines &amp; Offices
              </h3>

              {/* Email */}
              <a href="mailto:hello@fulfilled4you.com" className="flex items-start gap-4 group cursor-pointer">
                <div className="w-11 h-11 rounded-2xl bg-[#F8F9FC] border border-[#E5E7EB] text-[#282734] group-hover:bg-[#EC2D2E] group-hover:text-white transition-all flex items-center justify-center shrink-0 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#6B7280] font-bold uppercase font-sans">Email Us Directly</div>
                  <div className="text-base font-extrabold text-[#282734] group-hover:text-[#EC2D2E] transition-colors font-sans">hello@fulfilled4you.com</div>
                </div>
              </a>

              {/* Phone / WhatsApp */}
              <a href="tel:+919876543210" className="flex items-start gap-4 group cursor-pointer">
                <div className="w-11 h-11 rounded-2xl bg-[#F8F9FC] border border-[#E5E7EB] text-[#282734] group-hover:bg-[#EC2D2E] group-hover:text-white transition-all flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#6B7280] font-bold uppercase font-sans">Call / WhatsApp</div>
                  <div className="text-base font-extrabold text-[#282734] group-hover:text-[#EC2D2E] transition-colors font-sans">+91 98765 43210</div>
                </div>
              </a>

              {/* HQ Address */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#F8F9FC] border border-[#E5E7EB] text-[#282734] flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#6B7280] font-bold uppercase font-sans">Headquarters</div>
                  <div className="text-base font-extrabold text-[#282734] font-sans">Kolkata | Mumbai | San Francisco</div>
                  <div className="text-xs text-[#4B5563] font-sans font-medium mt-0.5">Park Street Business Hub, Sector V</div>
                </div>
              </div>
            </div>

            {/* Scale Trust Card */}
            <div className="bg-gradient-to-br from-[#282734] to-[#1E1B4B] p-8 rounded-3xl text-white shadow-xl">
              <div className="text-xs font-mono uppercase tracking-widest text-[#EC2D2E] font-bold mb-2">Why Brands Choose Us</div>
              <h4 className="text-2xl font-extrabold font-sans mb-3">Zero Risk Growth Partnership</h4>
              <p className="text-sm text-[#9CA3AF] font-sans leading-relaxed">
                We deliver performance marketing backed by clear SLAs, dedicated Slack channels, and live weekly ROAS dashboards.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#E5E7EB] shadow-2xl shadow-[#282734]/5 relative overflow-hidden">
              
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-[#282734] font-sans">Message Sent Successfully!</h3>
                  <p className="text-[#4B5563] max-w-md mx-auto font-sans font-medium text-sm">
                    Thank you for reaching out. Our growth lead will review your brand details and reply within 2 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-[#EC2D2E] text-white font-bold text-xs uppercase tracking-wider cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-[#282734] font-sans mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl bg-[#F8F9FC] border border-[#E5E7EB] text-[#282734] placeholder-[#9CA3AF] text-sm font-sans font-medium focus:outline-none focus:border-[#EC2D2E] focus:bg-white transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-[#282734] font-sans mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@yourbrand.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl bg-[#F8F9FC] border border-[#E5E7EB] text-[#282734] placeholder-[#9CA3AF] text-sm font-sans font-medium focus:outline-none focus:border-[#EC2D2E] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-[#282734] font-sans mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl bg-[#F8F9FC] border border-[#E5E7EB] text-[#282734] placeholder-[#9CA3AF] text-sm font-sans font-medium focus:outline-none focus:border-[#EC2D2E] focus:bg-white transition-all"
                      />
                    </div>

                    {/* Primary Service Interested */}
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-[#282734] font-sans mb-2">
                        Service Area
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl bg-[#F8F9FC] border border-[#E5E7EB] text-[#282734] text-sm font-sans font-medium focus:outline-none focus:border-[#EC2D2E] focus:bg-white transition-all cursor-pointer"
                      >
                        {services.map((srv, idx) => (
                          <option key={idx} value={srv}>{srv}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Monthly Ad Spend Budget Selector Pills */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-[#282734] font-sans mb-2.5">
                      Monthly Growth Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {budgets.map((b, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={`py-3 px-3 rounded-xl text-xs font-extrabold font-sans transition-all cursor-pointer border ${
                            formData.budget === b
                              ? 'bg-[#EC2D2E] text-white border-[#EC2D2E] shadow-md shadow-[#EC2D2E]/20'
                              : 'bg-[#F8F9FC] text-[#4B5563] border-[#E5E7EB] hover:border-[#EC2D2E]/40'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message / Details */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-[#282734] font-sans mb-2">
                      Tell Us About Your Brand Goals
                    </label>
                    <textarea
                      rows="4"
                      placeholder="Describe your current store/service, target metrics, or marketing challenges..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#F8F9FC] border border-[#E5E7EB] text-[#282734] placeholder-[#9CA3AF] text-sm font-sans font-medium focus:outline-none focus:border-[#EC2D2E] focus:bg-white transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={loading}
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-[#EC2D2E] hover:bg-[#D81F20] text-white font-extrabold text-base shadow-xl shadow-[#EC2D2E]/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    {loading ? (
                      <span>Sending Request...</span>
                    ) : (
                      <>
                        <span>Submit Growth Consultation Request</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
