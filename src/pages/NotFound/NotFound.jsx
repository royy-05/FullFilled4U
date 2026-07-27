import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function NotFound({ onNavigate }) {
  return (
    <div className="min-h-screen pt-36 pb-20 bg-[#F8F9FC] text-[#282734] font-sans flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center space-y-6">
        <div className="text-8xl font-extrabold text-[#EC2D2E] font-display">404</div>
        <h1 className="text-3xl font-extrabold text-[#282734]">Page Not Found</h1>
        <p className="text-sm text-[#4B5563] font-medium">
          The page you are looking for does not exist or has been moved.
        </p>
        <button
          onClick={() => {
            if (onNavigate) onNavigate('home');
            window.location.hash = 'home';
          }}
          style={{ fontFamily: "'Inter', 'Poppins', sans-serif", letterSpacing: '0.3px' }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FD2626] hover:bg-[#D91E1E] text-white font-semibold text-[15px] shadow-none hover:scale-102 transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Homepage
        </button>
      </div>
    </div>
  );
}
