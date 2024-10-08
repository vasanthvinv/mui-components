import { Box, Button, Card, Grid, TextField, Popover } from "@mui/material";
import React from "react";
import Avatar from "@mui/material/Avatar";

interface UserType {
  id: number;
  code: string;
  label: string;
  email: string;
  suggested?: boolean;
  access: string;
}

export const initialUsers: UserType[] = [
  {
    id: 1,
    code: "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-1.webp",
    label: "Tamil Selvan",
    email: "tamilselvan962913@gmail.com",
    access: "true",
  },
  {
    id: 2,
    code: "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-2.webp",
    label: "Vasanth",
    email: "vasanthvinv@gmail.com",
    access: "true",
  },
  {
    id: 3,
    code: "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-3.webp",
    label: "Gopi",
    email: "gopi63669@gmail.com",
    access: "true",
  },
];

const AvatarForm = () => {
  const [selectedUser, setSelectedUser] = React.useState<UserType | null>(null);
  const [users, setUsers] = React.useState<UserType[]>(initialUsers);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleOpen = (user: UserType, event: React.MouseEvent<HTMLElement>) => {
    setSelectedUser(user);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setSelectedUser(null);
    setAnchorEl(null);
  };

  const handleChange = (e: any, item: any) => {
    setSelectedUser((prevUser) =>
      prevUser ? { ...prevUser, [item]: e.target.value } : prevUser
    );
  };

  const handleSave = () => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === selectedUser?.id ? selectedUser : user
      )
    );
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Grid container spacing={2}>
      {users.map((item) => (
        <Grid item key={item.email}>
          <Avatar
            alt={item.label}
            src={item.code}
            onClick={(e) => handleOpen(item, e)}
          />
        </Grid>
      ))}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        PaperProps={{
          style: {
            maxHeight: "500px",
            maxWidth: "300px",
          },
        }}
      >
        {selectedUser && (
          <Card sx={{ padding: 2 }}>
            <Box mt={2} sx={{ ml: 20 }}>
              <Button onClick={handleClose} variant="outlined" color="error">
                X
              </Button>
            </Box>
            <TextField
              id="label"
              label="Label"
              variant="outlined"
              value={selectedUser.label}
              margin="normal"
              onChange={(e) => handleChange(e, "label")}
            />
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              value={selectedUser.email}
              margin="normal"
              onChange={(e) => handleChange(e, "email")}
            />
            <TextField
              id="access"
              label="Access"
              variant="outlined"
              value={selectedUser.access}
              margin="normal"
              onChange={(e) => handleChange(e, "access")}
            />
            <Button onClick={handleSave} variant="contained">
              Save
            </Button>
          </Card>
        )}
      </Popover>
    </Grid>
  );
};

export default AvatarForm;
