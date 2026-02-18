
import React, { useMemo } from 'react';
import { Airline, StatusTier } from '../types';
import { BANK_LOGOS } from '../constants';

interface CreditCardProps {
  airline: Airline;
  tier: StatusTier;
  cardHolder: string;
  cardNumber: string;
  bank: string;
  size?: 'sm' | 'lg';
  includeBackground?: boolean;
}

const CreditCard: React.FC<CreditCardProps> = ({ 
  airline, 
  tier, 
  cardHolder, 
  cardNumber, 
  bank,
  size = 'lg',
  includeBackground = true
}) => {
  const logoUrl = BANK_LOGOS[bank] || 'https://logo.clearbit.com/google.com';
  
  const scale = size === 'sm' ? 0.6 : 1;
  const width = 500 * scale;
  const height = 315 * scale;

  const formattedNumber = cardNumber.padEnd(16, '0').replace(/\d{4}(?=.)/g, '$& ');

  const decorations = useMemo(() => {
    const tierName = tier.name.toLowerCase();
    const airlineId = airline.id;

    // Pattern logic based on airline identity
    let airlinePatternId = 'grid-pattern';
    if (airlineId === 'ba') airlinePatternId = 'stripes-pattern';
    else if (airlineId === 'lufthansa') airlinePatternId = 'hex-pattern';
    else if (airlineId === 'emirates' || airlineId === 'etihad') airlinePatternId = 'waves-pattern';
    else if (airlineId === 'singapore') airlinePatternId = 'batik-pattern';
    else if (airlineId === 'united' || airlineId === 'delta') airlinePatternId = 'dots-pattern';

    // Tier specific overrides or additions
    const isGold = tierName.includes('gold') || tierName.includes('senator');
    const isSilver = tierName.includes('silver') || tierName.includes('traveller');
    const isPremium = tierName.includes('platinum') || tierName.includes('diamond') || tierName.includes('1k') || tierName.includes('elite plus') || tierName.includes('pps');

    return (
      <g>
        {/* Base airline-specific texture */}
        <rect width="500" height="315" fill={`url(#${airlinePatternId})`} opacity="0.15" rx="24" />
        
        {/* Tier-specific luxury overlays */}
        {isGold && (
          <g opacity="0.3">
            <rect width="500" height="315" fill="url(#star-pattern)" rx="24" />
          </g>
        )}
        
        {isSilver && (
          <g opacity="0.2">
            <rect width="500" height="315" fill="url(#brushed-metal)" rx="24" />
          </g>
        )}
        
        {isPremium && (
          <g opacity="0.1">
            <rect width="500" height="315" fill="url(#carbon-pattern)" rx="24" />
            <path d="M0 0 L500 315 M500 0 L0 315" stroke="white" strokeWidth="0.5" opacity="0.2" />
          </g>
        )}

        {/* Dynamic lighting based on tier */}
        <linearGradient id="light-sweep" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.1" />
          <stop offset="50%" stopColor="white" stopOpacity="0" />
          <stop offset="100%" stopColor="white" stopOpacity="0.1" />
        </linearGradient>
        <rect width="500" height="315" fill="url(#light-sweep)" rx="24" />
      </g>
    );
  }, [tier, airline]);

  return (
    <div 
      className="relative transition-all duration-700 ease-out transform hover:rotate-y-12" 
      style={{ width, height, perspective: '1000px' }}
    >
      <svg
        id="airline-card-svg"
        viewBox="0 0 500 315"
        className="rounded-[24px] shadow-2xl overflow-hidden ring-1 ring-black/5"
        xmlns="http://www.w3.org/2000/svg"
        style={{ background: 'transparent' }}
      >
        <defs>
          <linearGradient id={`bg-grad-${tier.name.replace(/\s+/g, '-')}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: tier.base, stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: tier.secondary, stopOpacity: 1 }} />
          </linearGradient>

          {/* PATTERNS LIBRARY */}
          <pattern id="grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="white" opacity="0.5" />
          </pattern>

          <pattern id="dots-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.5" fill="white" opacity="0.4" />
          </pattern>

          <pattern id="hex-pattern" width="28" height="49" patternUnits="userSpaceOnUse" patternTransform="scale(0.5)">
            <path d="M13.9 49L0 41V25l13.9-8 13.9 8v16zM0 8l13.9-8L27.8 8v16l-13.9 8L0 24z" fill="none" stroke="white" strokeWidth="1" opacity="0.4" />
          </pattern>

          <pattern id="waves-pattern" width="50" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(15)">
            <path d="M0 10 Q12.5 0 25 10 T50 10" fill="none" stroke="white" strokeWidth="1" opacity="0.3" />
          </pattern>

          <pattern id="stripes-pattern" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <rect width="2" height="40" fill="white" opacity="0.2" />
          </pattern>

          <pattern id="star-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M20 5 L22 15 L32 15 L24 21 L27 31 L20 25 L13 31 L16 21 L8 15 L18 15 Z" fill="white" opacity="0.2" transform="scale(0.5)" />
          </pattern>

          <pattern id="batik-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M30 0 Q45 15 30 30 Q15 15 30 0 M0 30 Q15 45 30 30 Q15 15 0 30 M30 60 Q45 45 30 30 Q15 45 30 60 M60 30 Q45 15 30 30 Q45 45 60 30" fill="none" stroke="white" strokeWidth="0.5" opacity="0.2" />
          </pattern>

          <pattern id="carbon-pattern" width="4" height="4" patternUnits="userSpaceOnUse">
            <path d="M 0 0 L 4 4 M 0 4 L 4 0" stroke="white" strokeWidth="0.5" opacity="0.1" />
          </pattern>

          <linearGradient id="brushed-metal" x1="0%" y1="0%" x2="0%" y2="100%">
             <stop offset="0%" stopColor="white" stopOpacity="0.2" />
             <stop offset="50%" stopColor="white" stopOpacity="0.05" />
             <stop offset="100%" stopColor="white" stopOpacity="0.2" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
            <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <filter id={`bank-logo-tint-${tier.text.replace('#', '')}`}>
            <feFlood floodColor={tier.text} result="flood" />
            <feComposite in="flood" in2="SourceGraphic" operator="in" />
          </filter>
        </defs>

        <rect width="500" height="315" fill={`url(#bg-grad-${tier.name.replace(/\s+/g, '-')})`} rx="24" />
        {decorations}
        <rect width="500" height="315" fill="white" fillOpacity="0.03" rx="24" />

        {/* Bank Branding Area */}
        <g transform="translate(40, 25)">
          <image 
            href={logoUrl} 
            width="32" 
            height="32" 
            preserveAspectRatio="xMidYMid meet"
            filter={`url(#bank-logo-tint-${tier.text.replace('#', '')})`}
            opacity="0.9"
            crossOrigin="anonymous"
          />
          <text 
            x="42" 
            y="21" 
            fill={tier.text} 
            fontSize="14" 
            fontWeight="700" 
            fontFamily="Inter"
            letterSpacing="0.5"
            opacity="0.9"
          >
            {bank.toUpperCase()}
          </text>
        </g>

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
        <g transform="translate(120, 85)" opacity="0.6" stroke={tier.text} fill="none" strokeWidth="2">
            <path d="M0 0 Q5 12 0 24" />
            <path d="M6 3 Q11 12 6 21" />
            <path d="M12 6 Q16 12 12 18" />
        </g>

        {/* Airline Logo Area */}
        <g transform="translate(320, 35)">
           <text 
             x="140" 
             y="25" 
             textAnchor="end"
             fill={tier.text} 
             fontSize="18" 
             fontWeight="900" 
             letterSpacing="1.2" 
             fontFamily="Inter"
             className="uppercase"
           >
             {airline.logoText}
           </text>
        </g>

        {/* Card Number */}
        <text 
          x="45" 
          y="185" 
          fill={tier.text} 
          fontSize="26" 
          fontFamily="JetBrains Mono" 
          letterSpacing="4"
          className="mono"
        >
          {formattedNumber}
        </text>

        {/* Expiry Details */}
        <text x="210" y="210" fill={tier.text} fontSize="8" opacity="0.5" fontWeight="600">VALID THRU</text>
        <text x="210" y="227" fill={tier.text} fontSize="14" fontWeight="600">12/29</text>

        {/* Cardholder Information */}
        <g transform="translate(45, 255)">
            <text y="0" fill={tier.text} fontSize="9" opacity="0.6" fontWeight="700" letterSpacing="1">CARDHOLDER</text>
            <text y="24" fill={tier.text} fontSize="18" fontWeight="600" fontFamily="Inter" className="uppercase">
              {cardHolder || 'PREMIUM MEMBER'}
            </text>
        </g>

        {/* Status Indicator */}
        <g transform="translate(320, 255)">
            <text x="135" y="0" textAnchor="end" fill={tier.text} fontSize="9" opacity="0.6" fontWeight="700" letterSpacing="1">STATUS</text>
            <text x="135" y="24" textAnchor="end" fill={tier.text} fontSize="18" fontWeight="800" fontFamily="Inter" className="uppercase" fillOpacity="0.9">
              {tier.name}
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
      
      {includeBackground && (
        <div className="absolute inset-0 rounded-[24px] pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-[-50%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45 transform -translate-y-[50%] animate-pulse"></div>
        </div>
      )}
    </div>
  );
};

export default CreditCard;
