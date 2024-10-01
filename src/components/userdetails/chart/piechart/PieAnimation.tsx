import { useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import { Typography, Box } from "@mui/material";
import { List, ListItem, ListItemText } from "@mui/material";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";

const data = [
  {
    label: "Windows",
    value: 53345,
    color: "#5BE49B",
  },
  {
    label: "Mac",
    value: 12244,
    color: "#C8FAD6",
  },
  {
    label: "Android",
    value: 78343,
    color: "#004B50",
  },

  {
    label: "iOS",
    value: 44313,
    color: "#007867",
  },
];

const CustomPieChart = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const totalValue = data.reduce((acc, entry) => acc + entry.value, 0);
  const activeData = activeIndex !== null ? data[activeIndex] : null;

  const onPieEnter = (item: any, index: number): void => {
    setActiveIndex(index);
  };

  const onPieLeave = (): void => {
    setActiveIndex(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "260px",
      }}
    >
      <Box sx={{ position: "relative", display: "inline-block" }}>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={120}
            dataKey="value"
            onMouseEnter={onPieEnter}
            onMouseLeave={onPieLeave}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
        <Box
          sx={{
            position: "absolute",
            top: "40%",
            left: "40%",
            textAlign: "center",
          }}
          
        >
          {activeData ? (
            <>
              <Typography variant="h6" sx={{ color: activeData.color }}>
                {activeData.label}
              </Typography>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", color: "black" }}
              >
                {activeData.value}
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="h6">Total</Typography>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", color: "black" }}
              >
                {totalValue}
              </Typography>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default CustomPieChart;

export const WindowsData = () => {
  return (
    <List sx={{ display: "flex", justifyContent: "space-between" }}>
      {data.map((item, index) => (
        <ListItem key={index}>
          <FiberManualRecordRoundedIcon style={{ color: item.color }} />
          <ListItemText primary={item.label} />
        </ListItem>
      ))}
    </List>
  );
};
