export type TopupOption = {
  amount: number;
  point: number;
  bonus: number;
};

export const TOPUP_OPTIONS: TopupOption[] = [
  { amount: 20, point: 100, bonus: 5 },
  { amount: 50, point: 250, bonus: 10 },
  { amount: 100, point: 550, bonus: 20 },
  { amount: 300, point: 1800, bonus: 60 },
  { amount: 500, point: 3200, bonus: 120 },
  { amount: 1000, point: 7000, bonus: 300 },
];

export function calculatePoint(amount: number) {
  const option = TOPUP_OPTIONS.find(o => o.amount === amount);
  if (option) return option;
  return { amount, point: amount * 5, bonus: 0 };
}