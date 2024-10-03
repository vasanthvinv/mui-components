// import * as React from "react";
// import Avatar from "@mui/material/Avatar";
// import {
//   Dialog,
//   DialogContent,
//   Grid,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
// } from "@mui/material";

// import Checkbox from "@mui/material/Checkbox";
// import { initialUsers } from "./avatardata";

// export default function GroupAvatars() {
//   const [open, setOpen] = React.useState(false);
//   const [checkedUsers, setCheckedUsers] = React.useState<{
//     [key: number]: boolean;
//   }>({});

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };
//   const handleClickdetail = (i: number) => {
//     const selectedUsers = initialUsers.find((item) => item.id === i + 1);
//     console.log(selectedUsers);
//   };

//   const handleChange = (id: number) => {
//     setCheckedUsers((prev) => {
//       const updated = { ...prev, [id]: !prev[id] };
//       const selectedUsers = initialUsers.filter((user) => updated[user.id]);
//       console.log(selectedUsers);
//       return updated;
//     });
//   };

//   return (
//     <Grid>
//       <Grid container>
//         {initialUsers.slice(0, 3).map((item, i) => (
//           <Avatar
//             key={i}
//             src={item.avatar}
//             onClick={() => handleClickdetail(i)}
//           />
//         ))}
//         <Avatar
//           onClick={handleClickOpen}
//         >{`+${initialUsers.length - 3}`}</Avatar>
//       </Grid>
//       <Dialog open={open} onClose={handleClose}>
//         <DialogContent>
//           {initialUsers.slice(2).map((user, i) => (
//             <List key={user.id}>
//               <ListItem>
//                 <ListItemIcon>
//                   <Checkbox
//                     checked={checkedUsers[user.id]}
//                     onChange={() => handleChange(user.id)}
//                   />
//                 </ListItemIcon>
//                 <Avatar src={user.avatar} />
//                 <ListItemText primary={user.name} />
//               </ListItem>
//             </List>
//           ))}
//         </DialogContent>
//       </Dialog>
//     </Grid>
//   );
// }

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
  const [checkedUsers, setCheckedUsers] = React.useState<number[]>([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickDetail = (i: number) => {
    const selectedUser = initialUsers.find((item) => item.id === i + 1);
    console.log(selectedUser);
  };

  const handleChange = (id: number) => {
    setCheckedUsers((prev) => {
      const newCheckedUsers = prev.includes(id)
        ? prev.filter((userId) => userId !== id)
        : [...prev, id];
      const selectedUsersDetails = initialUsers.filter((user) =>
        newCheckedUsers.includes(user.id)
      );
      console.log(selectedUsersDetails);
      return newCheckedUsers;
    });
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
                    checked={checkedUsers.includes(user.id)}
                    onChange={() => handleChange(user.id)}
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
