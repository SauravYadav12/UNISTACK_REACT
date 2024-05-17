import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

const drawerWidth = 240;
function Sidebar() {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <div>
        <Typography variant="h5">Unistack</Typography>
      </div>

      <List>
        <ListItem>
          <ListItemText />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Sidebar;
