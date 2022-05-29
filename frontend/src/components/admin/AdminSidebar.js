
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

const AdminSidebar = () => {

  let  sidebarNav = {

    dashboard: true,
    menu: false,
    toppings: false,
    orders: false,
    users: false,
  };
    
  const sidebarHandler = (navLabel) => {
    
    sidebarNav = Object.assign(...Object.keys(sidebarNav).map(k => ({ [k]: false })));
    sidebarHandler['dashboard']=true;
   console.log(sidebarNav);
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
            <ListItemButton onClick={sidebarHandler("dashboard")} >
              <ListItemIcon sx={{ color: '#fff' }}>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
        

      <NavLink to="/AdminDashboardMenu" style={{ textDecoration: 'none', color: 'unset' }} >
        <ListItem sx={{ color: '#fff' }}>
          <ListItemButton component="a" href="#home" >
            <ListItemIcon sx={{ color: '#fff' }}>
              <RestaurantMenuIcon />
            </ListItemIcon>
            <ListItemText primary="Menu" />
          </ListItemButton>
        </ListItem>
      </NavLink>

        <ListItem sx={{ color: '#fff' }}>
          <ListItemButton component="a" href="#home" >
            <ListItemIcon sx={{ color: '#fff' }}>
              <ListAltIcon />
            </ListItemIcon>
            <ListItemText primary="Orders" />
          </ListItemButton>
        </ListItem>

        <ListItem sx={{ color: '#fff' }}>
          <ListItemButton component="a" href="#home" >
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