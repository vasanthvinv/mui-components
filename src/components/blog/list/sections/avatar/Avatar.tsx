import * as React from "react";
import Avatar from "@mui/material/Avatar";
import {
  Dialog,
  DialogContent,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { initialUsers } from "./avatardata";

export default function GroupAvatars() {
  const [open, setOpen] = React.useState(false);
  const [details, setDetails] = React.useState<string[]>([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickDetail = (i: number) => {
    const selectedUser = initialUsers[i];
    setDetails((prevDetails) => {
      const selectedName = prevDetails.includes(selectedUser.name)
        ? prevDetails.filter((name) => name !== selectedUser.name)
        : [...prevDetails, selectedUser.name];
      console.log(selectedName);
      return selectedName;
    });
  };

  const handleChange = (name: string) => {
    setDetails((prev) => {
      return prev.includes(name)
        ? prev.filter((userId) => userId !== name)
        : [...prev, name];
    });
    console.log(details);
  };

  return (
    <Grid>
      <Grid container>
        {initialUsers.slice(0, 3).map((item, i) => (
          <Avatar
            key={i}
            src={item.avatar}
            onClick={() => handleClickDetail(i)}
          />
        ))}
        <Avatar
          onClick={handleClickOpen}
        >{`+${initialUsers.length - 3}`}</Avatar>
      </Grid>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          {initialUsers.slice(2).map((user) => (
            <List key={user.id}>
              <ListItem>
                <ListItemIcon>
                  <Checkbox
                    checked={details.includes(user.name)}
                    onChange={() => handleChange(user.name)}
                  />
                </ListItemIcon>
                <Avatar src={user.avatar} />
                <ListItemText primary={user.name} />
              </ListItem>
            </List>
          ))}
        </DialogContent>
      </Dialog>
    </Grid>
  );
}
