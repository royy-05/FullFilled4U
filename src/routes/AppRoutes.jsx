import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Services from '../pages/Services/Services';
import Contact from '../pages/Contact/Contact';
import OurWorks from '../pages/OurWorks/OurWorks';
import NotFound from '../pages/NotFound/NotFound';

export default function AppRoutes({ onOpenProposal }) {
  return (
    <Routes>
      <Route path="/" element={<Home onOpenProposal={onOpenProposal} />} />
      <Route path="/our-works" element={<OurWorks onOpenProposal={onOpenProposal} />} />
      <Route path="/works" element={<OurWorks onOpenProposal={onOpenProposal} />} />
      <Route path="/about" element={<About onOpenProposal={onOpenProposal} />} />
      <Route path="/services" element={<Services onOpenProposal={onOpenProposal} />} />
      <Route path="/contact" element={<Contact onOpenProposal={onOpenProposal} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
