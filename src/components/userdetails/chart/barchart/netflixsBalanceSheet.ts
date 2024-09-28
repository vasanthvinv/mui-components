const translations = {
  Asia: "Asia",
  Europe: "Europe",
  Americas: "Americas",
} as const;

export function addLabels<T extends { dataKey: keyof typeof translations }>(
  series: T[]
) {
  return series.map((item) => ({
    ...item,
    label: translations[item.dataKey],
    valueFormatter: (v: number | null) =>
      v ? `$ ${v.toLocaleString()}k` : "-",
  }));
}

export const balanceSheet = [
  { year: "Jan", Asia: 6, Europe: 6, Americas: 6 },
  { year: "Feb", Asia: 18, Europe: 18, Americas: 18 },
  { year: "Mar", Asia: 14, Europe: 14, Americas: 14 },
  { year: "Apr", Asia: 9, Europe: 9, Americas: 9 },
  { year: "May", Asia: 10, Europe: 10, Americas: 10 },
  { year: "Jun", Asia: 15, Europe: 15, Americas: 15 },
  { year: "Jul", Asia: 20, Europe: 20, Americas: 20 },
  { year: "Aug", Asia: 25, Europe: 25, Americas: 25 },
  { year: "Sep", Asia: 30, Europe: 30, Americas: 30 },
  { year: "Oct", Asia: 22, Europe: 22, Americas: 22 },
  { year: "Nov", Asia: 19, Europe: 19, Americas: 19 },
  { year: "Dec", Asia: 23, Europe: 23, Americas: 23 },
];
