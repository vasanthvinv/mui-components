import Avatar from "@mui/joy/Avatar";
import AvatarGroup from "@mui/joy/AvatarGroup";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardActions from "@mui/joy/CardActions";
import Typography from "@mui/joy/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import {
  Button,
  Rating,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  InputBase,
  Paper,
  Menu,
  MenuList,
  MenuItem,
  IconButton,
  Grid,
} from "@mui/material";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import * as React from "react";
import { List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";

const initialUsers = [
  {
    name: "Jayvion Simon",
    email: "nannie.abernathy70@yahoo.com",
    avatar:
      "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-1.webp",
    access: "Can edit",
  },
  {
    name: "Lucian Obrien",
    email: "ashlynn.ohara62@gmail.com",
    avatar:
      "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-2.webp",
    access: "Can view",
  },
  {
    name: "Deja Brady",
    email: "milo.farrell@hotmail.com",
    avatar:
      "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-3.webp",
    access: "Can edit",
  },
  {
    name: "Harrison Stein",
    email: "violet.ratke86@yahoo.com",
    avatar:
      "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-4.webp",
    access: "Can view",
  },
  {
    name: "Reece Chung",
    email: "letha.lubowitz24@yahoo.com",
    avatar:
      "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-5.webp",
    access: "Can edit",
  },
];

export const UserList = () => {
  const [users, setUsers] = React.useState(initialUsers);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedUser, setSelectedUser] = React.useState<number | null>(null);
  const [arrow, setarrow] = React.useState<HTMLElement[]>([]);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
    const newarrow = [...arrow];
    newarrow[index] = event.currentTarget;
    setarrow(newarrow);
    setSelectedUser(index);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setarrow([]);
    setAnchorEl(null);
    setSelectedUser(null);
  };

  const handleChange = (items: string) => {
    if (selectedUser !== null) {
      const updatedUsers = [...users];
      updatedUsers[selectedUser].access = items;
      setUsers(updatedUsers);
    }
    handleClose();
  };

  return (
    <Box>
      {users.map((user, index) => (
        <Grid>
          <Grid item xs={12} sx={{ display: "flex" }}>
            <Grid container spacing={2}>
              <Grid xs={8}>
                <List>
                  <ListItem key={index}>
                    <ListItemAvatar>
                      <Avatar alt={user.name} src={user.avatar} />
                    </ListItemAvatar>
                    <ListItemText primary={user.name} secondary={user.email} />
                  </ListItem>
                </List>
              </Grid>
              <Button
                onClick={(e) => handleClick(e, index)}
                sx={{ textTransform: "none", color: "black",justifyContent:"space-between",backgroundColor:"red" }}
              >
                {user.access}
                {arrow[index] ? <ExpandMoreIcon /> : <ExpandLessIcon />}
              </Button>
            </Grid>
            <Menu
              id="demo-positioned-menu"
              anchorEl={arrow[index]}
              open={Boolean(arrow[index])}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: -24,
                horizontal: 65,
              }}
            >
              <MenuList>
                <MenuItem>
                  <Button
                    sx={{ gap: 1, textTransform: "none", color: "black" }}
                    onClick={() => handleChange("Can View")}
                  >
                    <RemoveRedEyeIcon /> Can View
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button
                    sx={{ gap: 1, textTransform: "none", color: "black" }}
                    onClick={() => handleChange("Can Edit")}
                  >
                    <EditIcon /> Can Edit
                  </Button>
                </MenuItem>
                <MenuItem sx={{ mt: "dotted" }}>
                  <Button
                    sx={{ gap: 1, color: "#FF3650", textTransform: "none" }}
                  >
                    <DeleteIcon /> Remove
                  </Button>
                </MenuItem>
              </MenuList>
            </Menu>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [values, setValues] = React.useState<string>("");

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };
  const handleClickOpen = () => {
    setDialogOpen(true);
  };

  return (
    <Box>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {},
        }}
      >
        <MenuList>
          <MenuItem>
            <Button sx={{ gap: 2, textTransform: "none", color: "black" }}>
              <InsertLinkIcon /> Copy Link
            </Button>
          </MenuItem>
          <MenuItem>
            <Button
              onClick={handleClickOpen}
              sx={{ gap: 2, textTransform: "none", color: "black" }}
            >
              <ShareIcon /> Share
            </Button>
          </MenuItem>
          <MenuItem>
            <Button sx={{ gap: 2, textTransform: "none", color: "black" }}>
              <EditIcon /> Edit
            </Button>
          </MenuItem>
          <MenuItem sx={{ borderTop: "dotted" }}>
            <Button sx={{ color: "#FF3650", gap: 2 }}>
              <DeleteIcon /> Delete
            </Button>
          </MenuItem>
        </MenuList>
      </Menu>
      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Invite</DialogTitle>
        <DialogContent>
          <Paper
            sx={{
              "&:hover": {
                border: 1,
              },
              p: "10px",
              display: "flex",
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Email"
              onChange={(e) => setValues(e.target.value)}
            />
            {values ? (
              <Button
                variant="contained"
                sx={{ p: "10px", backgroundColor: "black" }}
              >
                Send Invite
              </Button>
            ) : (
              <Button variant="contained" disabled sx={{ p: "10px" }}>
                Send Invite
              </Button>
            )}
          </Paper>
          <UserList />
        </DialogContent>
        <DialogActions sx={{ justifyContent: "space-around" }}>
          <Button onClick={handleDialogClose} sx={{ alignItems: "left" }}>
            <InsertLinkIcon />
            Copy link
          </Button>
          <Button onClick={handleDialogClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default function Docs() {
  return (
    <>
      <Card
        sx={{
          width: { xs: "36%", sm: "26%", md: 400 },
          resize: "horizontal",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <FolderIcon sx={{ color: "#FFCF5C" }} />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: { xs: 1, sm: 0 },
            }}
          >
            <Rating defaultValue={1} max={1} />
            <LongMenu />
          </Box>
        </Box>
        <CardContent>
          <Typography
            level="title-lg"
            sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
          >
            Docs
          </Typography>
          <Typography level="body-sm">2.24 Gb - 100 files</Typography>
        </CardContent>
        <CardActions>
          <AvatarGroup size="sm" sx={{ "--Avatar-size": "28px" }}>
            <Avatar src="https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-1.webp" />
            <Avatar src="https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-2.webp" />
            <Avatar>+3</Avatar>
          </AvatarGroup>
        </CardActions>
      </Card>
    </>
  );
}
