// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function ButtonAppBar() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Link to="/">
              <img src="/src/assets/img/logo.jpg" width="50px"  alt="Logo" />
            </Link>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ByteWorks
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button color="inherit" component={NavLink} to="/">Home</Button>
            <Button color="inherit" component={NavLink} to="/register">Register</Button>
            <Button color="inherit" component={NavLink} to="/login">Login</Button>
            <Button color="inherit" component={NavLink} to="/users">Users</Button>
          </Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: {xs:"block", sm:"none"}}}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={toggleDrawer}
      >
        <List>
          <ListItem button component={Link} to="/" onClick={toggleDrawer}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/register" onClick={toggleDrawer}>
            <ListItemText primary="Register" />
          </ListItem>
          <ListItem button component={Link} to="/login" onClick={toggleDrawer}>
            <ListItemText primary="Login" />
          </ListItem>
          <ListItem button component={Link} to="/users" onClick={toggleDrawer}>
            <ListItemText primary="Users" />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
