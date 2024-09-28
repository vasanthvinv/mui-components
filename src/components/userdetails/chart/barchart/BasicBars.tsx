import { BarChart } from "@mui/x-charts/BarChart";
import { addLabels, balanceSheet } from "./netflixsBalanceSheet";

const colors = {
  Asia: "#007867",
  Europe: "#FFAB00",
  Americas: "#00B8D9",
};

export default function BasicBars() {
  return (
    <BarChart
      dataset={balanceSheet}
      borderRadius={7}
      series={addLabels([
        { dataKey: "Asia", stack: "equity", color: colors.Asia },
        { dataKey: "Europe", stack: "equity", color: colors.Europe },
        { dataKey: "Americas", stack: "equity", color: colors.Americas },
      ])}
      xAxis={[{ scaleType: "band", dataKey: "year" }]}
      height={300}
      slotProps={{
        legend: {
          direction: "row",
          position: { vertical: "top", horizontal: "left" },
          padding: 0,
        },
      }}
    />
  );
}
