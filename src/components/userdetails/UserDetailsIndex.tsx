import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TotalActiveUser from "./sections/TotalActiveUser";
import CurrentDownload from "./sections/CurrentDownload";
import BasicBars, { BarDetails } from "./chart/barchart/BasicBars";
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
    <Box  sx={{borderRadius:"50"}} >
      <Grid container spacing={2} >
        <Grid item xs={12} sm={12} md={12}>
          <TotalActiveUser />
        </Grid>
        </Grid>
      <Grid container spacing={2} >
        <Grid  item xs={12} sm={12} md={6} sx={{marginTop:"30px",borderRadius:"50"}}>
          <Item>
            <CurrentDownload />
          </Item>
        </Grid>
        <Grid  item xs={12} sm={12} md={6} sx={{marginTop:"30px"}}>
          <Item>
            <Years />
            <BarDetails/>
            <BasicBars />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
