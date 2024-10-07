import * as React from "react";
import Button from "@mui/material/Button";
import { Card, Grid } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { rows } from "./purchasedata";
import TableComponent from "./TableComponent";

export default function PurchaseTable() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [groupBy, setGroupBy] = React.useState<string>("");

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setGroupBy("");
  };

  const handleGroup = (group: string) => {
    setGroupBy(group);
    setAnchorEl(null);
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid
        item
        xs={7}
        md={12}
        sm
        sx={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <Button variant="outlined" onClick={handleClick}>
          Group By
        </Button>
        {groupBy && (
          <Button variant="outlined" onClick={handleClose}>
            close
          </Button>
        )}
        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={() => handleGroup("Assign")}>Assign</MenuItem>
          <MenuItem onClick={() => handleGroup("Status")}>Status</MenuItem>
        </Menu>
      </Grid>
      <Grid item xs={10} md={4}>
        {groupBy === "Status" && (
          <Card>
            {["Initial", "Pending", "Completed"].map((status) => (
               <Grid item xs={12} md={12}>
              <Accordion  >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  id={`${status}-header`}
                >
                  {status}
                </AccordionSummary>
                <AccordionDetails >
                  <TableComponent
                    data={rows.filter((item) => item.Status === status)}
                  />
                </AccordionDetails>
              </Accordion>
              </Grid>
            ))}
          </Card>
        )}
        {groupBy === "Assign" && (
          <Card>
            {["Tamil Selvi", "Gopika", "Rani"].map((name) => (
              <Accordion key={name}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`${name}-content`}
                  id={`${name}-header`}
                >
                  {name}
                </AccordionSummary>
                <AccordionDetails>
                  <TableComponent
                    data={rows.filter((item) => item.name === name)}
                  />
                </AccordionDetails>
              </Accordion>
            ))}
          </Card>
        )}
    
      {groupBy === "Assign" || groupBy === "Status" || (
        <TableComponent data={rows} />
      )}
        </Grid>
    </Grid>
  );
}
