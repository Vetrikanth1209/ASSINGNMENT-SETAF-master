import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo1 from "./main-logo.png";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleListItemClick = (text) => {
    setSelectedItem(text);
    if (text === "SetAF") {
      navigate("/cardview");
    }
    else if (text== "Home"){
      navigate("/home")
    }
  
    else {
      navigate("/");
    }
    setDrawerOpen(false); // Close the drawer when navigating
  };

  return (
    <div>
      <AppBar position="fixed" sx={{ background: "white" }}>
        <Toolbar>
          <Box flexGrow={1} paddingLeft={2} paddingRight={2} paddingTop={2} paddingBottom={2}>
            <img src={logo1} alt="Logo" width="450" height="75" className="col-md-5 col-12" style={{ marginRight: "10px" }} />
          </Box>
          <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer} sx={{ color: "#32348c" }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250 }} role="presentation">
          <List>
            {["Home","ECR", "SetAF", "SeSTa", "Log Out"].map((text) => (
              <React.Fragment key={text}>
                <ListItem button selected={selectedItem === text} onClick={() => handleListItemClick(text)}>
                  <ListItemText primary={text} />
                </ListItem>
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
}


