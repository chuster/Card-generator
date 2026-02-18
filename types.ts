
export enum Tier {
  CLASSIC = 'Classic',
  SILVER = 'Silver',
  GOLD = 'Gold',
  PLATINUM = 'Platinum',
  DIAMOND = 'Diamond'
}

export interface Airline {
  id: string;
  name: string;
  logoText: string;
  primaryColor: string;
  accentColor: string;
  partners: string[];
}

export interface CardState {
  airline: string;
  bank: string;
  tier: Tier;
  cardHolder: string;
  cardNumber: string;
}
