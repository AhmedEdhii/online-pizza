import React, { Fragment } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { logout } from '../../actions/userActions'

import {
  Link, AppBar, createTheme, styled, Grid, Toolbar, Typography, ThemeProvider, Avatar, IconButton,
  Box, Menu, MenuItem, Tooltip, Button, CssBaseline, Badge, ButtonGroup, Divider, ListItemIcon
} from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { PersonAdd, Settings, Logout, Person } from '@mui/icons-material';

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
    height: 60,
    padding: 10
  });



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

  const logoutHandler = () => {
    dispatch(logout());
    alert.success('Logged out successfully.')
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        {!user ? (
          <AppBar elevation={0} position='static' sx={{ backgroundColor: "#fff" }} >

            <Toolbar >

              <Grid display="flex" container sx={{
                padding: 0.5, justifyContent: 'space-between', alignItems: 'center',
                marginRight: 3, marginLeft: 3, marginTop: 0.5
              }}>


                <Grid item display='flex'>

                  <a href='/' > <Img alt="complex" src="/images/OP.png" /></a>

                </Grid>

                <Grid sx={{ display: { xs: 'none', md: 'flex' } }}>


                  <Button variant="text" color='secondary' href="/">One</Button>
                  <Button variant="text" color='secondary' href="/">Two</Button>
                  <Button variant="text" color='secondary' href="/">Three</Button>

                </Grid>
                {/* sx={{ border: 1 }} */}
                <Grid item display="flex" >
                  <Link href="/login">
                    <Button variant='contained' color='primary' startIcon={<AccountCircleIcon />} size="large"
                      sx={{ borderRadius: 2 }} > Login/Signup</Button>
                  </Link>


                  <Badge badgeContent={4} color={"secondary"}  >


                    <IconButton color="secondary" size='large' >
                      <ShoppingCartOutlinedIcon />
                    </IconButton>
                  </Badge>

                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        )
          :


          <AppBar elevation={0} position='static' sx={{ backgroundColor: "#fff" }} >

            <Toolbar >

              <Grid display="flex" container sx={{
                padding: 0.5, justifyContent: 'space-between', alignItems: 'center',
                marginRight: 3, marginLeft: 3, marginTop: 0.5
              }}>


                <Grid item display='flex'>

                  <a href='/' > <Img alt="complex" src="/images/OP.png" /></a>

                </Grid>


                {/* sx={{ border: 1 }} */}
                <Grid item display="flex" >


                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt="Avatar" src={(user.avatar && user.avatar.url) || '/images/default_avatar.jpg'}
                        sx={{ height: 75, width: 75 }} />
                    </IconButton>
                  </Tooltip>


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


                    <MenuItem>
                      <Link href='/dashboard'>
                        <ListItemIcon>
                          <Person fontSize="small" />
                        </ListItemIcon>
                        Dashboard
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href='/settings'>
                        <ListItemIcon>
                          <Settings fontSize="small" />
                        </ListItemIcon>
                        Settings
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href='/' onClick={() => {
                        dispatch(logout());
                        alert.success('Logged out successfully.')
                      }}>
                        <ListItemIcon>
                          <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                      </Link>
                    </MenuItem>
                  </Menu>

                </Grid>

              </Grid>

            </Toolbar>

          </AppBar>
          }

      </ThemeProvider>

    </>
  )
}

export default Mynavbar