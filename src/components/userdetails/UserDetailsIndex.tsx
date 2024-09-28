import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TotalActiveUser from "./sections/TotalActiveUser";
import CurrentDownload from "./sections/CurrentDownload";
import BasicBars from "./chart/barchart/BasicBars";
import Years from "./sections/Years";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function UserCardDetails() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={10} direction="column">
          <TotalActiveUser />
        </Grid>
        <Grid item xs={4}>
          <Item>
            <CurrentDownload />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Years />
            <BasicBars />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
