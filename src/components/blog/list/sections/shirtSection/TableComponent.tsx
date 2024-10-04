import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import React from "react";
import { Button, Grid } from "@mui/material";

interface TableComponentProps {
  data: {
    id: number;
    Items: string;
    Status: string;
    Assign: string;
    name: string;
  }[];
}

const TableComponent = ({ data }: TableComponentProps) => {
  return (
    <Grid container spacing={2} alignItems="center" >
      <Grid item xs={8} md={4} lg={5}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Id</TableCell>
              <TableCell align="center">Items</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Assign</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="center">{row.id}</TableCell>
                <TableCell align="center">{row.Items}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    sx={{
                      color: "black",
                      minWidth: "100px",
                      minHeight: "40px",
                      padding: "8px",
                      borderRadius: "4px",
                    }}
                  >
                    {row.Status}
                  </Button>
                </TableCell>
                <TableCell>
                  <Tooltip title={row.name}>
                    <Avatar  src={row.Assign} />
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  );
};

export default TableComponent;
