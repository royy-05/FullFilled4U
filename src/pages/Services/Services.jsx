import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import ServicesHero from './ServicesHero';
import ServicesList from './ServicesList';

export default function Services({ onOpenProposal }) {
  return (
    <div className="pt-28 bg-white text-[#282734] font-sans antialiased">
      <ServicesHero />
      <ServicesList onOpenProposal={onOpenProposal} />
    </div>
  );
}
