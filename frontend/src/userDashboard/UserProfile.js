import {
    Typography, Card, Grid, Box, CardActions, CardContent, List,
    ListItem, Badge,
    ListItemButton, Input,
    ListItemIcon,
    ListItemText, TextField, IconButton, Fab,
    Drawer, Button, Container, Divider, styled
} from '@mui/material'

import MetaData from '../components/layout/MetaData';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

import React, { Fragment, useState, useEffect } from 'react'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfile, loadUser, clearErrors } from '../actions/userActions'
import { UPDATE_PROFILE_RESET } from '../constants/userConstants'
import { updatePassword } from '../actions/userActions'

import UserSidebar from './UserSidebar';
import EditIcon from '@mui/icons-material/Edit';


function UserProfile({ user }) {

    const Img = styled('img')({
        alignItems: "center",

        width: 200,
        height: 200,
        padding: 10,
        margin: 5,

        borderRadius: '100rem',
    });

    console.log(user.avatar)

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [phonenumber, setPhoneNumber] = useState(user.phonenumber)
    const [deliveryaddress, setDeliveryAddress] = useState(user.deliveryaddress)
    const [avatar, setAvatar] = useState(user.avatar.url)
    const [avatarPreview, setAvatarPreview] = useState('/images/default_avatar.jpg')

    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')

    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [number, setNumber] = useState('')

    // const [address, setAddress] = useState('')
    // const [avatar, setAvatar] = useState('')
    const alert = useAlert();
    const dispatch = useDispatch();

    // const { user } = useSelector(state => state.auth);
    const { error, isUpdated, loading } = useSelector(state => state.user)

    useEffect(() => {

        // if (user) {
        //     setName(user.name);
        //     setPhoneNumber(user.phonenumber);
        //     setEmail(user.email);
        //     setDeliveryAddress(user.deliveryaddress)
        //     setAvatarPreview((user && user.avatar.url) || '/images/default_avatar.jpg')
        // }

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        // if (isUpdated) {
        //     alert.success('User updated successfully')
        //     dispatch(loadUser());
        //     dispatch({
        //         type: UPDATE_PROFILE_RESET
        //     })
        // }

    }, [dispatch, alert, error, isUpdated])


    const SubmitHandler = () => {
        const formData = new FormData();
        formData.set('name', name);
        formData.set('phonenumber', phonenumber);
        formData.set('email', email);
        formData.set('deliveryaddress', deliveryaddress);
        formData.set('avatar', avatar);
        dispatch(updateProfile(formData))
        alert.success('Profile Edited')
    }
    const UploadHandler = () => {

        alert.success('Avatar Uploaded')

    }

    const ChangePasswordHandler = () => {
        const formData = new FormData();
        formData.set('oldPassword', oldPassword);
        if (newPassword != confirmPassword) {
            alert.error("Passwords must Match");
            return 0;
        }
        else {
            formData.set('password', newPassword);
            dispatch(updatePassword(formData))
            alert.success('Password Changed')
        }
    }
    const Input = styled('input')({
        display: 'none',
    });

    return (
        <>
            <MetaData title={'User Profile'} />

            <Grid>
                <Typography variant="h4" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', paddingTop: 2 }}>
                    Your Profile
                </Typography>


            </Grid>
            <Divider sx={{ marginTop: 1, marginBottom: 3 }} />
            <Grid display='flex'>
                <Grid item xs={12} display='flex' sx={{ flexDirection: 'column' }}>

                    <Typography variant='body1' sx={{ fontWeight: 'bold', marginBottom: 1, marginLeft: 1.2 }}>Personal Details</Typography>
                    <Divider sx={{ marginBottom: 1 }} />

                    {/* Prefilled form for details*/}

                    <Grid display='flex'>
                        <Grid item>
                            <Box container display='flex'
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, },

                                    width: '300px',
                                    flexDirection: 'column',

                                }}
                                noValidate
                                autoComplete="off"
                            >


                                {/* Name and Email */}
                                <TextField
                                    label='Name'
                                    placeholder='Enter Name' fullWidth required
                                    defaultValue={name}
                                    onChange={(e) => setName(e.target.value)}
                                />


                                <TextField
                                    label='Email'
                                    placeholder='Enter Email' fullWidth required multiline

                                    defaultValue={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />


                                <TextField
                                    label='Phone Number'
                                    placeholder='Enter Phone Number' fullWidth required multiline

                                    defaultValue={phonenumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />

                                <TextField
                                    label='Delivery Address'
                                    placeholder='Enter Address' fullWidth required multiline

                                    defaultValue={deliveryaddress}
                                    onChange={(e) => setDeliveryAddress(e.target.value)}
                                />

                            </Box>
                        </Grid>




                        {/* Avatar Handling */}
                        <Grid item>
                            <Box container display='flex'
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, },

                                    width: '300px',
                                    flexDirection: 'column',

                                }}

                            >

                                <Img alt="complex" src='/images/default.png' sx={{ ml: 8, }} />


                                <Input accept="image/*" id="icon-button-file" type="file" />
                                <label htmlFor="icon-button-file">
                                    <IconButton size='small' color="primary" aria-label="upload picture" component="span" sx={{ border: 5, borderColor: '#FFF', ml: 28, mt: -14, backgroundColor: '#f30c1c', "&:hover, &.Mui-focusVisible": { backgroundColor: "#FCAB04" } }} >
                                        <EditIcon sx={{ color: "#fff" }} />
                                    </IconButton>
                                </label>



                                <Button variant='contained' sx={{ marginTop: 1, marginLeft: 8, marginBottom: 1, }}
                                    onClick={SubmitHandler}>Edit Profile</Button>

                            </Box>
                        </Grid>
                    </Grid>

                    {/* Deactivate Account */}

                    {/* <Typography variant='body1' sx={{ fontWeight: 'bold', mt:5, marginBottom: 1,   marginLeft: 1.2 }}>Deactivate Account</Typography>
                    <Divider sx={{ marginBottom: 1, }} />
                    <Grid display='flex' >
                    <Typography variant='body2' sx={{  mt:2, marginBottom: 1,   marginLeft: 1.2 }}>To deactivate your account click on the button.</Typography>
                    
                    <Button  size='small' variant='contained' 
                                onClick={ChangePasswordHandler} sx={{ml:15,mt:1 }}>Deactivate Account</Button>           
                    </Grid> */}
                </Grid>

                {/* Chnage Password */}

                <Grid item xs={12} display='flex' sx={{ flexDirection: 'column', ml: 20, }}>

                    <Typography variant='body1' sx={{ fontWeight: 'bold', marginBottom: 1, marginLeft: 1.2 }}>Change Password</Typography>
                    <Divider sx={{ marginBottom: 1 }} />
                    <Grid item >
                        <Box container display='flex'
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, },

                                width: '300px',
                                flexDirection: 'column',

                            }}
                            noValidate
                            autoComplete="off"
                        >


                            {/* Name and Email */}
                            <TextField
                                label='Old Password'
                                placeholder='Enter Old Password' fullWidth required
                                defaultValue={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)}
                            />


                            <TextField
                                label='New Password'
                                placeholder='Enter New Password' fullWidth required multiline

                                defaultValue={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />


                            <TextField
                                label='Confirm Password'
                                placeholder='Confirm Password' fullWidth required multiline

                                defaultValue={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <Button fullWidth variant='contained' sx={{ marginTop: 5.5, marginLeft: 1, }}
                                onClick={ChangePasswordHandler}>Change Password</Button>


                        </Box>
                    </Grid>




                </Grid>


            </Grid>
        </>
    )
}

export default UserProfile