import React, { Fragment } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { logout } from '../../actions/userActions'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react'


import {
  AppBar, createTheme, styled, Grid, Toolbar, Typography, ThemeProvider, Avatar, IconButton,
  Box, Menu, MenuItem, Tooltip, Button, CssBaseline, Badge, ButtonGroup, Divider, ListItemIcon
} from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { PersonAdd, Settings, Logout, Person } from '@mui/icons-material';
import Cart from './Cart';

const Mynavbar = () => {

  const theme = createTheme({
    palette: {

      primary: {
        main: "#f30c1c"
      },
      secondary: {
        main: "#FCAB04"
      }

    },
    overrides: {
      MuiButton: {
        MuiButtonText: {
          color: 'white',
        },
      },
    },
    typography: {

      button: {
        fontSize: 20,
        fontStyle: 'normal'

      }
    }

  });

  const Img = styled('img')({


    alignItems: "center",
    maxwidth: "100%",
    height: 50,
    padding: 10
  });

  const [openDrawer, setOpenDrawer] = React.useState(false);

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const alert = useAlert();
  const dispatch = useDispatch();

  const { user, loading } = useSelector(state => state.auth)
  const { cartItems } = useSelector(state => state.cart)

  const logoutHandler = () => {
    dispatch(logout());
    alert.success('Logged out successfully.')
  }

  return (
    <>
      {!loading && (
        <ThemeProvider theme={theme}>
          {!user ? (
            <AppBar elevation={0} position='sticky' sx={{ backgroundColor: "#fff", zIndex: 1400 }} >

              <Toolbar >

                <Grid display="flex" container sx={{
                  padding: 0.5, justifyContent: 'space-between', alignItems: 'center',
                  marginRight: 3, marginLeft: 3, marginTop: 0.5
                }}>


                  <Grid item display='flex'>

                    <Link to="/">
                      <a> <Img alt="complex" src="/images/OP.png" /></a>
                    </Link>
                    {/* <a href='/' > <Img alt="complex" src="/images/OP.png" /></a> */}

                  </Grid>
                  {/* 
                  <Grid sx={{ display: { xs: 'none', md: 'flex' } }}>

                    <Button variant="text" color='secondary' component={Link} to="/">One</Button>
                    <Button variant="text" color='secondary' component={Link} to="/">Two</Button>
                    <Button variant="text" color='secondary' component={Link} to="/">Three</Button>

                  </Grid> */}

                  {/* sx={{ border: 1 }} */}
                  <Grid item display="flex" >
                    <NavLink to="/login" style={{ textDecoration: 'none', color: 'unset' }} >

                      <Button variant='contained'
                        color='primary'
                        startIcon={<AccountCircleIcon />}
                        size="large"
                        sx={{ borderRadius: 2 }}
                      > Login/Signup</Button>
                    </NavLink>

                    <Badge badgeContent={cartItems.length} color={"secondary"}  >
                      <IconButton color="secondary" size='large' onClick={() => { setOpenDrawer(true); }}>
                        <ShoppingCartOutlinedIcon />
                      </IconButton>
                    </Badge>

                  </Grid>
                </Grid>
              </Toolbar>
            </AppBar>
          )
            :
            (!loading) &&

            <AppBar position='sticky' elevation={2} sx={{ backgroundColor: "#fff", zIndex: 1400 }}  >

              <Toolbar >

                <Grid display="flex" container sx={{
                  padding: 0.5, justifyContent: 'space-between', alignItems: 'center',
                  marginRight: 3, marginLeft: 3, marginTop: 0.5
                }}>


                  <Grid item display='flex'>

                    <Link to="/homepage">
                      <a> <Img alt="complex" src="/images/OP.png" /></a>
                    </Link>
                    {/* <a href='/' > <Img alt="complex" src="/images/OP.png" /></a> */}

                  </Grid>


                  {/* sx={{ border: 1 }} */}
                  <Grid item display="flex" sx={{ alignItems: 'center' }} >


                    <Tooltip title="Open settings">
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Avatar" src={(user.avatar && user.avatar.url) || '/images/default_avatar.jpg'}
                          sx={{ height: 45, width: 45 }} />
                      </IconButton>
                    </Tooltip>
                    <Typography variant='body1' sx={{ marginLeft: 2, marginRight: 2, color: '#0e0e0e' }}>{user.name}</Typography>


                    <Menu
                      sx={{ mt: '75px' }}
                      id="account-menu"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}

                    >
                      {(user.role === 'user') && (
                        <Fragment>
                          <NavLink to="/UserDashboard" style={{ textDecoration: 'none', color: 'unset' }} >
                            <MenuItem onClick={handleCloseUserMenu}>
                              <ListItemIcon>
                                <Person fontSize="small" />
                              </ListItemIcon>
                              Dashboard
                            </MenuItem>
                          </NavLink>

                          <NavLink to="/UserProfile" style={{ textDecoration: 'none', color: 'unset' }} >
                            <MenuItem onClick={handleCloseUserMenu}>
                              <ListItemIcon>
                                <Settings fontSize="small" />
                              </ListItemIcon>
                              Profile
                            </MenuItem>
                          </NavLink>

                          <NavLink to="/userOrders" style={{ textDecoration: 'none', color: 'unset' }} >
                            <MenuItem onClick={handleCloseUserMenu}>
                              <ListItemIcon>
                                <Settings fontSize="small" />
                              </ListItemIcon>
                              Orders
                            </MenuItem>
                          </NavLink>
                        </Fragment>
                      )}

                    {(user.role === 'admin') && (
                      <Fragment>
                        <NavLink to="/AdminDashboard" style={{ textDecoration: 'none', color: 'unset' }} >
                          <MenuItem onClick={handleCloseUserMenu}>
                            <ListItemIcon>
                              <Person fontSize="small" />
                            </ListItemIcon>
                            Admin Dashboard
                          </MenuItem>
                        </NavLink>

                        {/* <NavLink to="/UserProfile" style={{ textDecoration: 'none', color: 'unset' }} >
                            <MenuItem onClick={handleCloseUserMenu}>
                              <ListItemIcon>
                                <Settings fontSize="small" />
                              </ListItemIcon>
                              Settings
                            </MenuItem>
                          </NavLink> */}
                      </Fragment>
                    )}

                    <NavLink to="/homepage" style={{ textDecoration: 'none', color: 'unset' }} onClick={logoutHandler}>
                      <MenuItem onClick={handleCloseUserMenu}>
                        <ListItemIcon>
                          <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                      </MenuItem>
                    </NavLink>
                  </Menu>

                </Grid>

              </Grid>

            </Toolbar>

            </AppBar>


            //     <ProductModal
            //     title="Employee Form"
            //     openPopup={openPopup}
            //     setOpenPopup={setOpenPopup}
            // >
            //     <Typography variant='h2'>my anme is modal</Typography>

            // </ProductModal>
          }
      <Cart
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}>

      </Cart>
    </ThemeProvider>


  )
}

    </>
  )
}

export default Mynavbar