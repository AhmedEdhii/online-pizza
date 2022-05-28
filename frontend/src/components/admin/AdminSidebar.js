import {
  AccountBox,
  Article,
  Group,
  Home,
  ModeNight,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import ListAltIcon from '@mui/icons-material/ListAlt';
import GroupIcon from '@mui/icons-material/Group';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';

import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import React from "react";

const AdminSidebar = ({ mode, setMode }) => {
  return (

    <Box position="fixed" sx={{
      backgroundColor: '#f30c1c',
      width: '250px',
      height: '100%',
      p: 1,
    }}>
      <List>
        <ListItem sx={{ color: '#fff' }}>
          <ListItemButton component="a" href="#home" >
            <ListItemIcon sx={{ color: '#fff' }}>
              <RestaurantMenuIcon />
            </ListItemIcon>
            <ListItemText primary="Menu" />
          </ListItemButton>
        </ListItem>

        <ListItem sx={{ color: '#fff' }}>
          <ListItemButton component="a" href="#home" >
            <ListItemIcon sx={{ color: '#fff' }}>
              <ListAltIcon />
            </ListItemIcon>
            <ListItemText primary="Menu" />
          </ListItemButton>
        </ListItem>

        <ListItem sx={{ color: '#fff' }}>
          <ListItemButton component="a" href="#home" >
            <ListItemIcon sx={{ color: '#fff' }}>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="Menu" />
          </ListItemButton>
        </ListItem>
        
        <ListItem sx={{ color: '#fff' }}>
          <ListItemButton component="a" href="#home" >
            <ListItemIcon sx={{ color: '#fff' }}>
              <PointOfSaleIcon />
            </ListItemIcon>
            <ListItemText primary="Menu" />
          </ListItemButton>
        </ListItem>
   
   
        

      </List>
    </Box>

  );
};

export default AdminSidebar;