import { ChartContainer } from "@mui/x-charts/ChartContainer";
import { BarPlot } from "@mui/x-charts/BarChart";

const uData = [1000, 1000, 1500, 3780, 4890, 1090, 2190, 2000];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
  "Page H",
];

export default function TinyBarChart() {
  return (
    <ChartContainer
      width={200}
      height={200}
      series={[{ data: uData, label: "uv", type: "bar" }]}
      xAxis={[{ scaleType: "band", data: xLabels }]}
    >
      <BarPlot borderRadius={10} color="#00A76F" />
    </ChartContainer>
  );
}

const uData1 = [1500, 2500, 3500, 2280, 1500, 1890, 2190, 2000];
const xLabels1 = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
  "Page H",
];

export function TinyBarChart1() {
  return (
    <ChartContainer
      width={200}
      height={200}
      series={[{ data: uData1, label: "uv", type: "bar" }]}
      xAxis={[{ scaleType: "band", data: xLabels1 }]}
    >
      <BarPlot borderRadius={10} color="#00B8D9" />
    </ChartContainer>
  );
}
const uData2 = [1500, 1500, 2500, 880, 1200, 2890, 1190, 2000];
const xLabels2 = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
  "Page H",
];

export function TinyBarChart2() {
  return (
    <ChartContainer
      width={200}
      height={200}
      series={[{ data: uData2, label: "uv", type: "bar" }]}
      xAxis={[{ scaleType: "band", data: xLabels2 }]}
    >
      <BarPlot borderRadius={10} color="#FF5630" />
    </ChartContainer>
  );
}
