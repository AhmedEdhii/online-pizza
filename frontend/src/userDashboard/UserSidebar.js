
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React, { useState } from 'react'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListAltIcon from '@mui/icons-material/ListAlt';

import DashboardIcon from '@mui/icons-material/Dashboard';


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


function UserSidebar() {

  const [colorchange, setColorChange] = useState('#f30c1c')
  const [nav, setNav] = useState('')
  

  return (

    <Drawer
                    sx={{
                        position: 'sticky',
                        width: drawerWidth,
                        flexShrink: 0,

                        '& .MuiDrawer-paper': {
                            paddingTop:'86px',
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

                    <NavLink to="/UserDashboard"style={{ textDecoration: 'none', color: 'unset' }} >
                        <ListItem sx={{ color: '#fff' }}>
                            <ListItemButton >
                                <ListItemIcon sx={{ color: '#fff' }}>
                                    <DashboardIcon />
                                </ListItemIcon>
                                <ListItemText primary="Dashboard" />
                            </ListItemButton>
                        </ListItem>
                        </NavLink>

                        
                        <NavLink to="/UserProfile" style={{ textDecoration: 'none', color: 'unset' }} >
                        <ListItem sx={{ color: '#fff' }}>
                            <ListItemButton >
                                <ListItemIcon sx={{ color: '#fff' }}>
                                    <AccountCircleIcon />
                                </ListItemIcon>
                                <ListItemText primary="Profile" />
                            </ListItemButton>
                        </ListItem>
                        </NavLink>

                        <NavLink to="/UserOrders" style={{ textDecoration: 'none', color: 'unset' }} >
                        <ListItem sx={{ color: '#fff' }}>
                            <ListItemButton >
                                <ListItemIcon sx={{ color: '#fff' }}>
                                    <ListAltIcon />
                                </ListItemIcon>
                                <ListItemText primary="My Orders" />
                            </ListItemButton>
                        </ListItem>
                        </NavLink>


                        




                    </List>
                </Drawer>

  );
};

export default UserSidebar;