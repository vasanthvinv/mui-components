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
    <Grid container  alignItems="center" >
      <Grid item >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Id</TableCell>
              <TableCell align="center">Items</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="left">Assign</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell >{row.id}</TableCell>
                <TableCell >{row.Items}</TableCell>
                <TableCell >
                  <Button
                    variant="contained"
                    sx={{
                      color: "black",
                      padding: "0.11px",
                      minHeight:30,
                      minWidth:80,
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
