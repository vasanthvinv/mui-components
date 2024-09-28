import { Box, Card, CardContent, Typography } from "@mui/material";
import PieAnimation, { WindowsData } from "../chart/piechart/PieAnimation";

const CurrentDownload = () => {
  return (
    <Box sx={{ textAlign: "left" }}>
      <Typography sx={{ textAlign: "left", color: "black" }}>
        Current download
      </Typography>
      <Typography>Downloaded by operating system</Typography>
      <PieAnimation />
      <Card>
        <CardContent>
          <WindowsData />
        </CardContent>
      </Card>
    </Box>
  );
};

export default CurrentDownload;
