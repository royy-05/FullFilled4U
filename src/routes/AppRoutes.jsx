import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Services from '../pages/Services/Services';
import Contact from '../pages/Contact/Contact';
import OurWorks from '../pages/OurWorks/OurWorks';
import NotFound from '../pages/NotFound/NotFound';

import TermsConditions from '../pages/Legal/TermsConditions';
import PrivacyPolicy from '../pages/Legal/PrivacyPolicy';
import RefundPolicy from '../pages/Legal/RefundPolicy';
import ShippingPolicy from '../pages/Legal/ShippingPolicy';

export default function AppRoutes({ onOpenProposal }) {
  return (
    <Routes>
      <Route path="/" element={<Home onOpenProposal={onOpenProposal} />} />
      <Route path="/our-works" element={<OurWorks onOpenProposal={onOpenProposal} />} />
      <Route path="/works" element={<OurWorks onOpenProposal={onOpenProposal} />} />
      <Route path="/about" element={<About onOpenProposal={onOpenProposal} />} />
      <Route path="/services" element={<Services onOpenProposal={onOpenProposal} />} />
      <Route path="/contact" element={<Contact onOpenProposal={onOpenProposal} />} />
      <Route path="/terms-and-conditions" element={<TermsConditions />} />
      <Route path="/terms" element={<TermsConditions />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/refund-policy" element={<RefundPolicy />} />
      <Route path="/shipping-policy" element={<ShippingPolicy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
