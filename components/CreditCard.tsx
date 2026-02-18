
import React, { useMemo } from 'react';
import { Airline, Tier } from '../types';
import { TIER_COLORS } from '../constants';

interface CreditCardProps {
  airline: Airline;
  tier: Tier;
  cardHolder: string;
  cardNumber: string;
  bank: string;
  size?: 'sm' | 'lg';
}

const CreditCard: React.FC<CreditCardProps> = ({ 
  airline, 
  tier, 
  cardHolder, 
  cardNumber, 
  bank,
  size = 'lg' 
}) => {
  const colors = TIER_COLORS[tier];
  
  const scale = size === 'sm' ? 0.6 : 1;
  const width = 500 * scale;
  const height = 315 * scale;

  const formattedNumber = cardNumber.padEnd(16, '0').replace(/\d{4}(?=.)/g, '$& ');

  // Dynamic patterns based on tier and airline
  const decorations = useMemo(() => {
    switch (tier) {
      case Tier.DIAMOND:
        return (
          <g opacity="0.15">
            <path d="M0 0 L500 315 M500 0 L0 315" stroke="white" strokeWidth="0.5" />
            <rect x="0" y="0" width="500" height="315" fill="url(#carbon-pattern)" />
          </g>
        );
      case Tier.PLATINUM:
        return (
          <g opacity="0.2">
            <rect x="0" y="0" width="500" height="315" fill="url(#brushed-metal)" />
            <circle cx="450" cy="50" r="100" fill="white" fillOpacity="0.05" />
          </g>
        );
      case Tier.GOLD:
        return (
          <g opacity="0.25">
             <rect x="0" y="0" width="500" height="315" fill="url(#sun-pattern)" />
          </g>
        );
      default:
        return (
          <g opacity="0.1">
            <rect x="0" y="0" width="500" height="315" fill="url(#grid-pattern)" />
          </g>
        );
    }
  }, [tier]);

  return (
    <div 
      className="relative transition-all duration-700 ease-out transform hover:rotate-y-12" 
      style={{ width, height, perspective: '1000px' }}
    >
      <svg
        viewBox="0 0 500 315"
        className="rounded-[24px] shadow-2xl overflow-hidden ring-1 ring-white/10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`bg-grad-${tier}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: colors.base, stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: colors.secondary, stopOpacity: 1 }} />
          </linearGradient>

          <pattern id="grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="white" opacity="0.3" />
          </pattern>

          <pattern id="sun-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
             <path d="M 0 50 L 100 50 M 50 0 L 50 100" stroke="white" strokeWidth="0.2" />
          </pattern>

          <pattern id="carbon-pattern" width="4" height="4" patternUnits="userSpaceOnUse">
            <path d="M 0 0 L 4 4 M 0 4 L 4 0" stroke="white" strokeWidth="0.5" opacity="0.1" />
          </pattern>

          <linearGradient id="brushed-metal" x1="0%" y1="0%" x2="0%" y2="100%">
             <stop offset="0%" stopColor="white" stopOpacity="0.1" />
             <stop offset="50%" stopColor="white" stopOpacity="0.02" />
             <stop offset="100%" stopColor="white" stopOpacity="0.1" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
            <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Base Card */}
        <rect width="500" height="315" fill={`url(#bg-grad-${tier})`} />
        
        {/* Tier Specific Decorations */}
        {decorations}

        {/* Glass Effect Overlay */}
        <rect width="500" height="315" fill="white" fillOpacity="0.03" />

        {/* Smart Chip */}
        <g transform="translate(45, 75)">
            <rect width="58" height="44" rx="8" fill="#e5e7eb" fillOpacity="0.9" filter="url(#glow)" />
            <rect x="2" y="2" width="54" height="40" rx="6" fill="url(#chip-grad)" fillOpacity="0.2" stroke="#9ca3af" strokeWidth="0.5" />
            <path d="M0 22 H58 M29 0 V44 M15 0 V44 M43 0 V44" stroke="#4b5563" strokeWidth="0.5" opacity="0.4" />
            <linearGradient id="chip-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f3f4f6" />
                <stop offset="100%" stopColor="#9ca3af" />
            </linearGradient>
        </g>

        {/* Wireless Icon */}
        <g transform="translate(120, 85)" opacity="0.6" stroke={colors.text} fill="none" strokeWidth="2">
            <path d="M0 0 Q5 12 0 24" />
            <path d="M6 3 Q11 12 6 21" />
            <path d="M12 6 Q16 12 12 18" />
        </g>

        {/* Top Branding (Bank) */}
        <text 
          x="40" 
          y="45" 
          fill={colors.text} 
          fontSize="14" 
          fontWeight="700" 
          fontFamily="Inter"
          letterSpacing="0.5"
          opacity="0.9"
        >
          {bank.toUpperCase()}
        </text>

        {/* Airline Logo Area - Monochrome & Minimalist */}
        <g transform="translate(320, 35)">
           <text 
             x="140" 
             y="25" 
             textAnchor="end"
             fill={colors.text} 
             fontSize="18" 
             fontWeight="900" 
             letterSpacing="1.2" 
             fontFamily="Inter"
             className="uppercase"
           >
             {airline.logoText}
           </text>
           <path 
             d="M 110 5 L 145 15 L 110 25 Z" 
             fill={colors.text} 
             opacity="0.2"
             transform="translate(10, -5)"
           />
        </g>

        {/* Card Number */}
        <text 
          x="45" 
          y="195" 
          fill={colors.text} 
          fontSize="26" 
          fontFamily="JetBrains Mono" 
          letterSpacing="4"
          className="mono"
          style={{ textShadow: tier === Tier.DIAMOND ? '0 2px 4px rgba(255,255,255,0.2)' : 'none' }}
        >
          {formattedNumber}
        </text>

        {/* Expiry & CCV (Small Details) */}
        <text x="210" y="225" fill={colors.text} fontSize="8" opacity="0.5" fontWeight="600">VALID THRU</text>
        <text x="210" y="242" fill={colors.text} fontSize="14" fontWeight="600">12/29</text>

        {/* Labels & Dynamic Content */}
        <g transform="translate(45, 230)">
            <text y="0" fill={colors.text} fontSize="9" opacity="0.6" fontWeight="700" letterSpacing="1">CARDHOLDER</text>
            <text y="24" fill={colors.text} fontSize="18" fontWeight="600" fontFamily="Inter" className="uppercase">
              {cardHolder || 'PREMIUM MEMBER'}
            </text>
        </g>

        {/* Tier Indicator */}
        <g transform="translate(320, 230)">
            <text x="135" y="0" textAnchor="end" fill={colors.text} fontSize="9" opacity="0.6" fontWeight="700" letterSpacing="1">STATUS</text>
            <text x="135" y="24" textAnchor="end" fill={colors.text} fontSize="18" fontWeight="800" fontFamily="Inter" className="uppercase" fillOpacity="0.9">
              {tier}
            </text>
        </g>

        {/* Hologram Circle */}
        <circle cx="440" cy="120" r="28" fill="url(#hologram)" fillOpacity="0.4" />
        <linearGradient id="hologram" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="50%" stopColor="#f472b6" />
            <stop offset="100%" stopColor="#34d399" />
        </linearGradient>

      </svg>
      
      {/* Glossy Reflection Overlay (HTML) */}
      <div className="absolute inset-0 rounded-[24px] pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-[-50%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45 transform -translate-y-[50%] animate-pulse"></div>
      </div>
    </div>
  );
};

export default CreditCard;
