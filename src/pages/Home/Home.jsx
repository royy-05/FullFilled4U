import React from 'react';
import Hero from './Hero';
import Services from '../../components/Services';
import ClientLogos from '../../components/ClientLogos';
import InfographicsHub from '../../components/InfographicsHub';
import HowWeDeliver from '../../components/HowWeDeliver/HowWeDeliver';
import Testimonials from '../../components/Testimonials';
import CaseStudies from '../../components/CaseStudies';

export default function Home({ onOpenProposal }) {
  return (
    <>
      <Hero onOpenProposal={onOpenProposal} />
      <Services onOpenProposal={onOpenProposal} />
      <ClientLogos />
      <InfographicsHub onOpenProposal={onOpenProposal} />
      <HowWeDeliver onOpenProposal={onOpenProposal} />
      {/* <CaseStudies onOpenProposal={onOpenProposal} /> - Hidden on frontend, reserved for Blogs setup */}
      <Testimonials />
    </>
  );
}
