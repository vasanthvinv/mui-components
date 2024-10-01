import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Box, Typography } from "@mui/material";

export default function Years() {
  const [year, setyear] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setyear(event.target.value);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box>
        <Typography sx={{ color: "black", textAlign: "left" }}>
          Area installed
        </Typography>
        <Typography sx={{ textAlign: "left" }}>
          (+43%) than last year
        </Typography>
      </Box>
      <Box sx={{ textAlign: "right" }}>
        <FormControl sx={{ m: 1, minWidth: 90 }}>
          <Select
            value={year}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value={2022}>2022</MenuItem>
            <MenuItem value={2023}>2023</MenuItem>
            <MenuItem value={2024}>2024</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
    
  );
}
