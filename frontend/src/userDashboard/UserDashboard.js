import {
    Typography, Card, Grid, Box, CardActions, CardContent, List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Drawer, Button, Container, Divider
} from '@mui/material'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListAltIcon from '@mui/icons-material/ListAlt';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MetaData from '../components/layout/MetaData';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

import UserDashboardMain from './UserDashboardMain';
import UserProfile from './UserProfile';
import UserOrders from './UserOrders';

import React, { useState } from 'react'

import UserSidebar from './UserSidebar';



const drawerWidth = 240;


function UserDashboard() {

    const [dashboard, setDashboard] = useState(true)
    const [profile, setProfile] = useState(false)
    const [order, setOrder] = useState(false)

    const sidebarHandler = (navLabel) => {

        if (navLabel === 0) {
            setDashboard(true)
            setProfile(false)
            setOrder(false)
        }
        else if (navLabel === 1) {
            setProfile(true)
            setDashboard(false)
            setOrder(false)
        }
        else if (navLabel === 2) {
            setOrder(true)
            setDashboard(false)
            setProfile(false)
        }
    }

    return (
        <>
            <MetaData title={'User Dashboard'} />
            <Grid display='flex'>
                <Drawer
                    sx={{
                        position: 'sticky',
                        width: drawerWidth,
                        flexShrink: 0,

                        '& .MuiDrawer-paper': {
                            paddingTop: '86px',
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
                            <ListItemButton onClick={() => sidebarHandler(0)}>
                                <ListItemIcon sx={{ color: '#fff' }}>
                                    <DashboardIcon />
                                </ListItemIcon>
                                <ListItemText primary="Dashboard" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem sx={{ color: '#fff' }}>
                            <ListItemButton onClick={() => sidebarHandler(1)}>
                                <ListItemIcon sx={{ color: '#fff' }}>
                                    <AccountCircleIcon />
                                </ListItemIcon>
                                <ListItemText primary="Profile" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem sx={{ color: '#fff' }}>
                            <ListItemButton onClick={() => sidebarHandler(2)}>
                                <ListItemIcon sx={{ color: '#fff' }}>
                                    <ListAltIcon />
                                </ListItemIcon>
                                <ListItemText primary="My Orders" />
                            </ListItemButton>
                        </ListItem>

                    </List>
                </Drawer>


                <Grid display='flex' sx={{ m: 5, marginTop: 2, width: "80%", flexDirection: "column" }}>
                    {(dashboard === true) && (
                        <UserDashboardMain />
                    )}
                    {(profile === true) && (
                        <UserProfile />
                    )}
                    {(order === true) && (
                        <UserOrders />
                    )}
                </Grid>
            </Grid>



        </>
    )
}

export default UserDashboard