
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import ListAltIcon from '@mui/icons-material/ListAlt';
import GroupIcon from '@mui/icons-material/Group';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';


import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer
} from "@mui/material";
import React from "react";
const drawerWidth = 240;







function AdminSidebar() {

  let sidebarNav = [

    { id: 'dashboard', state: true },
    { id: 'menu', state: false },
    { id: 'toppings', state: false },
    { id: 'orders', state: false },
    { id: 'users', state: false }
  ];
  // console.log(sidebarNav);

  var colorchange = '#f30c1c';
  console.log(colorchange)

  const sidebarHandler = (navLabel) => {

    //change true value to false first
    const checkTrue = sidebarNav.find(nav => nav.state === true);
    checkTrue.state = false;

    //changes the selected nav item to true
    sidebarNav[navLabel].state = true;
    const check = sidebarNav.find(nav => nav.state === true);


    for (let i = 0; i < sidebarNav.length; i++) {
      if (sidebarNav[i].state == true)
      colorchange = '#db0b19';
      
    }
    

    // console.log(check)
    // console.log(sidebarNav);
  }

  return (

    <Drawer
      sx={{

        width: drawerWidth,
        flexShrink: 0,

        '& .MuiDrawer-paper': {
          marginTop: '86px',
          zIndex: '0',
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#f30c1c',
        },
      }}
      variant="permanent"
      anchor="left"
    >

      <List>


        <ListItem sx={{ color: '#fff' }}>
          <ListItemButton onClick={() => sidebarHandler(0)} sx={{ backgroundColor: colorchange }} >
            <ListItemIcon sx={{ color: '#fff' }}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>



        <ListItem sx={{ color: '#fff' }}>
          <ListItemButton onClick={() => sidebarHandler(1)} sx={{ backgroundColor: colorchange }} >
            <ListItemIcon sx={{ color: '#fff' }}>
              <RestaurantMenuIcon />
            </ListItemIcon>
            <ListItemText primary="Menu" />
          </ListItemButton>
        </ListItem>

        <ListItem sx={{ color: '#fff' }}>
          <ListItemButton onClick={() => sidebarHandler(2)} sx={{ backgroundColor: colorchange }} >
            <ListItemIcon sx={{ color: '#fff' }}>
              <RestaurantMenuIcon />
            </ListItemIcon>
            <ListItemText primary="Toppings" />
          </ListItemButton>
        </ListItem>

        <ListItem sx={{ color: '#fff' }}>
          <ListItemButton onClick={() => sidebarHandler(3)} sx={{ backgroundColor: colorchange }} >
            <ListItemIcon sx={{ color: '#fff' }}>
              <ListAltIcon />
            </ListItemIcon>
            <ListItemText primary="Orders" />
          </ListItemButton>
        </ListItem>

        <ListItem sx={{ color: '#fff' }}>
          <ListItemButton onClick={() => sidebarHandler(4)} sx={{ backgroundColor: colorchange }} >
            <ListItemIcon sx={{ color: '#fff' }}>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItemButton>
        </ListItem>




      </List>
    </Drawer>

  );
};

export default AdminSidebar;