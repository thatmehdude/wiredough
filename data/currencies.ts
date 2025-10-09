export type  Currency = {
  code: string;
  name: string;
  flag: string;
}

export const currencies: Currency[] = [
  { code: 'USD', name: 'US Dollar', flag: '🇺🇸' },
  { code: 'EUR', name: 'Euro', flag: '🇪🇺' },
  { code: 'GBP', name: 'British Pound', flag: '🇬🇧' },
  { code: 'JPY', name: 'Japanese Yen', flag: '🇯🇵' },
  { code: 'NGN', name: 'Naira', flag: '🇳🇬' },
  { code: 'CAD', name: 'Canadian Dollar', flag: '🇨🇦' },
];
