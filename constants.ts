
import { Airline } from './types';

export const AIRLINES: Airline[] = [
  { 
    id: 'ba', 
    name: 'British Airways', 
    logoText: 'BRITISH AIRWAYS', 
    primaryColor: '#075aaa', 
    accentColor: '#eb2227', 
    partners: ['American Express', 'Barclays', 'HSBC'],
    tiers: [
      { name: 'Blue', base: '#003399', secondary: '#001a4d', text: '#ffffff' },
      { name: 'Bronze', base: '#804a00', secondary: '#4d2c00', text: '#ffffff' },
      { name: 'Silver', base: '#94a3b8', secondary: '#475569', text: '#0f172a' },
      { name: 'Gold', base: '#c5a059', secondary: '#8a6d3b', text: '#ffffff' }
    ]
  },
  { 
    id: 'lufthansa', 
    name: 'Lufthansa', 
    logoText: 'Lufthansa', 
    primaryColor: '#002147', 
    accentColor: '#ffcc00', 
    partners: ['Barclays', 'Deutsche Bank', 'Diners Club'],
    tiers: [
      { name: 'Member', base: '#002147', secondary: '#00152e', text: '#ffffff' },
      { name: 'Frequent Traveller', base: '#94a3b8', secondary: '#64748b', text: '#0f172a' },
      { name: 'Senator', base: '#b45309', secondary: '#78350f', text: '#ffffff' },
      { name: 'HON Circle', base: '#000000', secondary: '#1e293b', text: '#ffffff' }
    ]
  },
  { 
    id: 'united', 
    name: 'United Airlines', 
    logoText: 'UNITED', 
    primaryColor: '#005da4', 
    accentColor: '#ffffff', 
    partners: ['Chase', 'Visa Infinite'],
    tiers: [
      { name: 'Premier Silver', base: '#94a3b8', secondary: '#64748b', text: '#0f172a' },
      { name: 'Premier Gold', base: '#d4af37', secondary: '#8a6d3b', text: '#ffffff' },
      { name: 'Premier Platinum', base: '#1e293b', secondary: '#0f172a', text: '#f1f5f9' },
      { name: 'Premier 1K', base: '#000000', secondary: '#1e293b', text: '#ffffff' }
    ]
  },
  { 
    id: 'singapore', 
    name: 'Singapore Airlines', 
    logoText: 'SINGAPORE AIRLINES', 
    primaryColor: '#002a4e', 
    accentColor: '#ffcc00', 
    partners: ['American Express', 'HSBC'],
    tiers: [
      { name: 'KrisFlyer', base: '#002a4e', secondary: '#001a33', text: '#ffffff' },
      { name: 'KrisFlyer Silver', base: '#94a3b8', secondary: '#64748b', text: '#0f172a' },
      { name: 'KrisFlyer Gold', base: '#b45309', secondary: '#78350f', text: '#ffffff' },
      { name: 'PPS Club', base: '#000000', secondary: '#1e293b', text: '#ffffff' }
    ]
  },
  { 
    id: 'aircanada', 
    name: 'Air Canada', 
    logoText: 'AIR CANADA', 
    primaryColor: '#e31937', 
    accentColor: '#000000', 
    partners: ['American Express', 'Chase'],
    tiers: [
      { name: 'Aeroplan 25K', base: '#334155', secondary: '#1e293b', text: '#ffffff' },
      { name: 'Aeroplan 50K', base: '#854d0e', secondary: '#78350f', text: '#ffffff' },
      { name: 'Aeroplan 75K', base: '#1e293b', secondary: '#0f172a', text: '#f1f5f9' },
      { name: 'Super Elite', base: '#000000', secondary: '#e31937', text: '#ffffff' }
    ]
  },
  { 
    id: 'ana', 
    name: 'ANA', 
    logoText: 'ANA', 
    primaryColor: '#004aa0', 
    accentColor: '#ffffff', 
    partners: ['American Express', 'Visa Infinite'],
    tiers: [
      { name: 'Bronze', base: '#804a00', secondary: '#4d2c00', text: '#ffffff' },
      { name: 'Platinum', base: '#1e293b', secondary: '#0f172a', text: '#f1f5f9' },
      { name: 'Diamond', base: '#000000', secondary: '#1e293b', text: '#ffffff' }
    ]
  },
  { 
    id: 'turkish', 
    name: 'Turkish Airlines', 
    logoText: 'TURKISH AIRLINES', 
    primaryColor: '#c8102e', 
    accentColor: '#ffffff', 
    partners: ['Garanti BBVA', 'Mastercard World Elite'],
    tiers: [
      { name: 'Classic', base: '#c8102e', secondary: '#990d23', text: '#ffffff' },
      { name: 'Classic Plus', base: '#94a3b8', secondary: '#64748b', text: '#0f172a' },
      { name: 'Elite', base: '#854d0e', secondary: '#78350f', text: '#ffffff' },
      { name: 'Elite Plus', base: '#000000', secondary: '#1e293b', text: '#ffffff' }
    ]
  },
  { 
    id: 'delta', 
    name: 'Delta Air Lines', 
    logoText: 'DELTA', 
    primaryColor: '#003262', 
    accentColor: '#e01933', 
    partners: ['American Express'],
    tiers: [
      { name: 'Silver Medallion', base: '#94a3b8', secondary: '#64748b', text: '#0f172a' },
      { name: 'Gold Medallion', base: '#854d0e', secondary: '#78350f', text: '#ffffff' },
      { name: 'Platinum Medallion', base: '#1e293b', secondary: '#0f172a', text: '#f1f5f9' },
      { name: 'Diamond Medallion', base: '#000000', secondary: '#1e293b', text: '#ffffff' }
    ]
  },
  { 
    id: 'airfranceklm', 
    name: 'Air France KLM', 
    logoText: 'AIRFRANCE KLM', 
    primaryColor: '#002664', 
    accentColor: '#e1000f', 
    partners: ['American Express', 'Barclays'],
    tiers: [
      { name: 'Explorer', base: '#002664', secondary: '#001a4d', text: '#ffffff' },
      { name: 'Silver', base: '#94a3b8', secondary: '#64748b', text: '#0f172a' },
      { name: 'Gold', base: '#854d0e', secondary: '#78350f', text: '#ffffff' },
      { name: 'Platinum', base: '#1e293b', secondary: '#0f172a', text: '#f1f5f9' }
    ]
  },
  { 
    id: 'emirates', 
    name: 'Emirates', 
    logoText: 'Emirates', 
    primaryColor: '#d71921', 
    accentColor: '#ffffff', 
    partners: ['Barclays', 'HSBC', 'Citibank'],
    tiers: [
      { name: 'Blue', base: '#003399', secondary: '#001a4d', text: '#ffffff' },
      { name: 'Silver', base: '#94a3b8', secondary: '#64748b', text: '#0f172a' },
      { name: 'Gold', base: '#854d0e', secondary: '#78350f', text: '#ffffff' },
      { name: 'Platinum', base: '#1e293b', secondary: '#0f172a', text: '#f1f5f9' }
    ]
  },
  { 
    id: 'etihad', 
    name: 'Etihad Airways', 
    logoText: 'ETIHAD', 
    primaryColor: '#cfa935', 
    accentColor: '#000000', 
    partners: ['American Express', 'HSBC'],
    tiers: [
      { name: 'Bronze', base: '#804a00', secondary: '#4d2c00', text: '#ffffff' },
      { name: 'Silver', base: '#94a3b8', secondary: '#64748b', text: '#0f172a' },
      { name: 'Gold', base: '#854d0e', secondary: '#78350f', text: '#ffffff' },
      { name: 'Platinum', base: '#1e293b', secondary: '#0f172a', text: '#f1f5f9' }
    ]
  },
];

export const BANKS = [
  'American Express', 
  'Barclays', 
  'HSBC', 
  'Chase', 
  'Garanti BBVA', 
  'Deutsche Bank', 
  'Mastercard World Elite', 
  'Visa Infinite'
];

export const BANK_LOGOS: Record<string, string> = {
  'American Express': 'https://logo.clearbit.com/americanexpress.com',
  'Barclays': 'https://logo.clearbit.com/barclays.com',
  'HSBC': 'https://logo.clearbit.com/hsbc.com',
  'Chase': 'https://logo.clearbit.com/chase.com',
  'Garanti BBVA': 'https://logo.clearbit.com/garantibbva.com.tr',
  'Deutsche Bank': 'https://logo.clearbit.com/db.com',
  'Mastercard World Elite': 'https://logo.clearbit.com/mastercard.com',
  'Visa Infinite': 'https://logo.clearbit.com/visa.com'
};
