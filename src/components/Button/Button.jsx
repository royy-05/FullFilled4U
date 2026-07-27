import React from 'react';
import { motion } from 'framer-motion';

export default function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'ghost'
  size = 'md', // 'sm' | 'md' | 'lg'
  icon: Icon = null,
  iconPosition = 'right',
  fullWidth = false,
  className = '',
  disabled = false,
  ...props
}) {
  const sizeClasses = {
    sm: 'px-5 py-2.5 text-[14px]',
    md: 'px-6 py-3 text-[15px]',
    lg: 'px-8 py-3.5 text-[16px]',
  };

  // Color #FD2626 for CTA, NO box-shadow, Inter font, 500-600 semibold weight, 0.3px tracking, rounded-full pill shape
  const variantClasses = {
    primary:
      'bg-[#FD2626] hover:bg-[#D91E1E] text-white border border-white/20 hover:border-white/40 shadow-none',
    secondary:
      'bg-[#FD2626] hover:bg-[#D91E1E] text-white border border-white/20 hover:border-white/40 shadow-none',
    outline:
      'bg-[#FD2626] hover:bg-[#D91E1E] text-white border border-white/20 hover:border-white/40 shadow-none',
    ghost:
      'bg-[#FD2626] hover:bg-[#D91E1E] text-white border border-white/20 hover:border-white/40 shadow-none',
  };

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02, y: disabled ? 0 : -1 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        fontFamily: "'Inter', 'Poppins', sans-serif",
        letterSpacing: '0.3px',
      }}
      className={`group relative inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 overflow-hidden cursor-pointer select-none gap-2.5 ${
        fullWidth ? 'w-full' : ''
      } ${sizeClasses[size] || sizeClasses.md} ${
        variantClasses[variant] || variantClasses.primary
      } ${disabled ? 'opacity-60 cursor-not-allowed' : ''} ${className}`}
      {...props}
    >
      {/* Subtle Shimmer Light Flare Animation */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

      {Icon && iconPosition === 'left' && (
        <Icon className="w-4 h-4 shrink-0 stroke-[2] group-hover:-translate-x-0.5 transition-transform" />
      )}
      <span className="relative z-10">{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon className="w-4 h-4 shrink-0 stroke-[2] group-hover:translate-x-0.5 transition-transform" />
      )}
    </motion.button>
  );
}
