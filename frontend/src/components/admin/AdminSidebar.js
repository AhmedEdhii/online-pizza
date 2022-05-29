
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React, { useState } from 'react'

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

const drawerWidth = 240;


function AdminSidebar() {

  const [colorchange, setColorChange] = useState('#f30c1c')
  const [nav, setNav] = useState('')
  
  let sidebarNav = [
    { id: 'dashboard', state: true, color: '#f30c1c' },
    { id: 'menu', state: false, color: '#f30c1c' },
    { id: 'toppings', state: false, color: '#f30c1c' },
    { id: 'orders', state: false, color: '#f30c1c' },
    { id: 'users', state: false, color: '#f30c1c' }
  ];

  // console.log(sidebarNav);

  // var colorchange = '#f30c1c';
  // console.log(colorchange)

  const sidebarHandler = (navLabel) => {

    //change true value to false first
    const checkTrue = sidebarNav.find(nav => nav.state === true);
    checkTrue.state = false;

    //changes the selected nav item to true
    sidebarNav[navLabel].state = true;

    const check = sidebarNav.find(nav => nav.state === true);
    if (sidebarNav[navLabel].state === true) {
      sidebarNav[navLabel].color = '#db0b19'
      console.log(sidebarNav[navLabel])
      // setColorChange('#db0b19')
    }

    // for (let i = 0; i < sidebarNav.length; i++) {
    //   if (sidebarNav[i].state === true){
    //     setColorChange('#db0b19')
    //   }
    //   colorchange = '#db0b19'; 
    // }


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
          <ListItemButton onClick={() => sidebarHandler(0)} sx={{ backgroundColor: sidebarNav[0].color }} >
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