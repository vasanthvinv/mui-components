import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import TinyBarChart, {
  TinyBarChart1,
  TinyBarChart2,
} from "../chart/cardBarChart/TinyBarChart";

const data = [
  {
    title: "Total active users",
    value: "18,765",
    percentage: "+2.6%",
    timeFrame: " last 7 days",
    barchart: <TinyBarChart />,
  },
  {
    title: "Total installed",
    value: "4,876",
    percentage: "+0.2%",
    timeFrame: " last 7 days",
    barchart: <TinyBarChart1 />,
  },
  {
    title: "Total downloads",
    value: "678",
    percentage: "-0.1%",
    timeFrame: " last 7 days",
    barchart: <TinyBarChart2 />,
  },
];

const TotalActiveUser = () => {
  return (
    <Grid container spacing={2}>
      {data.map((item, index) => (
        <Grid item xs={12} sm={12} md={4} key={index}>
          <Card>
            <CardContent>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography color="black">{item.title}</Typography>
                  <Typography variant="h4" fontWeight="bold" mt={1}>
                    {item.value}
                  </Typography>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    mt={1}
                  >
                    <Typography fontWeight="bold">{item.percentage}</Typography>
                    <Typography>{item.timeFrame}</Typography>
                  </Box>
                </Box>
                <Box>{item.barchart}</Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default TotalActiveUser;
