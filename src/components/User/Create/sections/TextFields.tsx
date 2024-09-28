import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Country from "./Country";
import Card from "@mui/material/Card";
import { Button, Switch } from "@mui/material";
import CardContent from "@mui/material/CardContent";

export default function TextFields() {
  const label = { inputProps: { "aria-label": "Color switch demo" } };

  return (
    <Grid container spacing={2} xs={12}>
      <Grid item xs={6}>
        <Card>
          <CardContent>
            <Switch {...label} defaultChecked color="warning" />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  id="full-name"
                  label="Full Name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="email"
                  label="Email address"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="phone-number"
                  label="Phone number"
                  variant="outlined"
                  onChange={(e) => {
                    e.target.value = e.target.value.replace(/[^\d]/g, "");
                  }}
                  fullWidth
                  slotProps={{
                    inputLabel: {
                      shrink: true,
                    },
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <Country />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="state-region"
                  label="State/Region"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="city"
                  label="City"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="address"
                  label="Address"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="zip-code"
                  label="Zip/Code"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="company"
                  label="Company"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="role"
                  label="Role"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  paddingTop: "2%",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Button variant="contained" sx={{ backgroundColor: "black" }}>
                  Create user
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
