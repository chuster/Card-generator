
import { Airline, Tier } from './types';

export const AIRLINES: Airline[] = [
  { id: 'lufthansa', name: 'Lufthansa', logoText: 'Lufthansa', primaryColor: '#002147', accentColor: '#ffcc00', partners: ['Miles & More / Barclays', 'Deutsche Bank', 'Diners Club'] },
  { id: 'united', name: 'United Airlines', logoText: 'UNITED', primaryColor: '#005da4', accentColor: '#ffffff', partners: ['Chase', 'Visa Signature'] },
  { id: 'singapore', name: 'Singapore Airlines', logoText: 'SINGAPORE AIRLINES', primaryColor: '#002a4e', accentColor: '#ffcc00', partners: ['American Express', 'HSBC Star Alliance'] },
  { id: 'aircanada', name: 'Air Canada', logoText: 'AIR CANADA', primaryColor: '#e31937', accentColor: '#000000', partners: ['American Express Aeroplan', 'TD Bank', 'CIBC'] },
  { id: 'ana', name: 'ANA', logoText: 'ANA', primaryColor: '#004aa0', accentColor: '#ffffff', partners: ['American Express', 'ANA Card / Visa'] },
  { id: 'turkish', name: 'Turkish Airlines', logoText: 'TURKISH AIRLINES', primaryColor: '#c8102e', accentColor: '#ffffff', partners: ['Garanti BBVA Miles&Smiles', 'QNB Finansbank'] },
  { id: 'delta', name: 'Delta Air Lines', logoText: 'DELTA', primaryColor: '#003262', accentColor: '#e01933', partners: ['American Express SkyMiles'] },
  { id: 'airfranceklm', name: 'Air France KLM', logoText: 'AIRFRANCE KLM', primaryColor: '#002664', accentColor: '#e1000f', partners: ['American Express Flying Blue', 'Barclays'] },
  { id: 'koreanair', name: 'Korean Air', logoText: 'KOREAN AIR', primaryColor: '#003399', accentColor: '#a9c4f5', partners: ['American Express SKYPASS', 'U.S. Bank'] },
  { id: 'emirates', name: 'Emirates', logoText: 'Emirates', primaryColor: '#d71921', accentColor: '#ffffff', partners: ['Barclays Skywards', 'HSBC', 'Citibank'] },
  { id: 'etihad', name: 'Etihad Airways', logoText: 'ETIHAD', primaryColor: '#cfa935', accentColor: '#000000', partners: ['American Express Guest', 'ADCB'] },
];

export const TIER_COLORS: Record<Tier, { base: string; secondary: string; text: string; accent: string }> = {
  [Tier.CLASSIC]: { base: '#1e293b', secondary: '#334155', text: '#f1f5f9', accent: '#38bdf8' },
  [Tier.SILVER]: { base: '#94a3b8', secondary: '#cbd5e1', text: '#0f172a', accent: '#475569' },
  [Tier.GOLD]: { base: '#854d0e', secondary: '#eab308', text: '#ffffff', accent: '#fef08a' },
  [Tier.PLATINUM]: { base: '#2d3748', secondary: '#1a202c', text: '#e2e8f0', accent: '#cbd5e1' },
  [Tier.DIAMOND]: { base: '#000000', secondary: '#171717', text: '#ffffff', accent: '#ffffff' },
};

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
