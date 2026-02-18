
export interface StatusTier {
  name: string;
  base: string;
  secondary: string;
  text: string;
}

export interface Airline {
  id: string;
  name: string;
  logoText: string;
  primaryColor: string;
  accentColor: string;
  partners: string[];
  tiers: StatusTier[];
}

export interface CardState {
  airlineId: string;
  bank: string;
  tierIndex: number;
  cardHolder: string;
  cardNumber: string;
}
