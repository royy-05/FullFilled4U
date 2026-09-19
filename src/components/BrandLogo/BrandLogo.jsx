import React, { useState } from 'react';

export default function BrandLogo({ className = "", imgClassName = "h-14 sm:h-16" }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {!imgError ? (
        <img
          src="/Logo.png"
          alt="FULLFILLED4U E-COMMERCE AND SHIPPING PLATFORM Logo"
          onError={() => setImgError(true)}
          className={`${imgClassName} w-auto object-contain hover:scale-105 transition-all duration-300`}
        />
      ) : (
        /* Fallback displayed until Logo.jpg is loaded */
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#EC2D2E] flex items-center justify-center text-white font-extrabold text-lg sm:text-xl shadow-md shadow-[#EC2D2E]/30">
            F4Y
          </div>
          <div className="flex flex-col tracking-tight leading-none">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-2xl sm:text-3xl tracking-wider text-[#282734] font-display">
                FULLFILLED
              </span>
              <span className="font-light text-2xl sm:text-3xl tracking-wider text-[#EC2D2E] font-display">
                4 YOU
              </span>
            </div>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#6B7280] font-bold mt-1">
              LOGISTICS & DIGITAL
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
