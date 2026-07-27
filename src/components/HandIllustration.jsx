import React from 'react';

export default function HandIllustration({ className = "w-24 h-56" }) {
  return (
    <svg
      viewBox="0 0 140 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none ${className}`}
    >
      {/* Hand Fill Body */}
      <path
        d="M 25 300 
           L 25 250 
           C 20 220 12 180 8 150 
           C 4 120 12 95 35 85 
           C 25 70 30 50 48 45 
           C 40 30 55 15 70 20 
           C 65 8 82 2 95 15 
           C 105 25 102 50 102 100 
           C 102 120 125 150 130 180 
           C 136 210 120 260 115 300 
           Z"
        fill="#FFFFFF"
        stroke="#282734"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Main Upright Thumb / Index Column */}
      <path
        d="M 62 250 
           C 62 180 60 110 60 45 
           C 60 25 72 15 85 18 
           C 96 22 98 40 98 60 
           L 98 120"
        fill="#FFFFFF"
        stroke="#282734"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Thumbnail */}
      <path
        d="M 68 28 
           C 68 22 75 18 84 20 
           C 90 22 92 32 90 42 
           C 82 44 70 40 68 28 Z"
        fill="#FFFFFF"
        stroke="#282734"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Thumb Joint Line */}
      <path
        d="M 65 72 Q 78 78 92 72"
        stroke="#282734"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Folded Fingers on Left */}
      <path
        d="M 12 145 C 32 135 55 145 60 160"
        stroke="#282734"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M 16 185 C 36 175 58 185 62 200"
        stroke="#282734"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M 22 225 C 40 215 58 225 62 240"
        stroke="#282734"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Palm Creases */}
      <path
        d="M 62 125 C 80 135 105 130 120 120"
        stroke="#282734"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M 62 165 C 82 180 110 175 125 160"
        stroke="#282734"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Black Wrist Band matching reference screenshot */}
      <path
        d="M 20 292 C 40 312 100 312 120 292 L 122 306 C 100 324 40 324 18 306 Z"
        fill="#282734"
        stroke="#282734"
        strokeWidth="2"
      />
    </svg>
  );
}
