import { BarChart } from "@mui/x-charts/BarChart";
import { addLabels, balanceSheet } from "./netflixsBalanceSheet";
import { Box, Typography } from "@mui/material";

const colors = {
  Asia: "#007867",
  Europe: "#FFAB00",
  Americas: "#00B8D9",
};

export const BarDetails= ()=> {
  return (
  <Box sx={{ display: "flex", justifyContent: "left" }}>
        <Typography sx={{ color: "black", textAlign: "left" }}>
          1.23k
        </Typography>
        <Typography sx={{ color: "black",textAlign: "left", ml: 3 }}>6.79k </Typography>
        <Typography sx={{ color: "black", textAlign: "left", ml: 3 }}>
          1.01k
        </Typography>
      </Box>
  )
}

export default function BasicBars() {
  return (
    <Box>
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
    </Box>
  );
}
