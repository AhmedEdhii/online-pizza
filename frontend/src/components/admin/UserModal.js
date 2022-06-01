import {
    Typography, Dialog, DialogTitle, DialogContent, Fab, Grid, Box, IconButton, Divider, Radio, FormLabel, Input,
    FormControlLabel, RadioGroup, FormControl, Checkbox, Button, styled, FormGroup, TextField, Select, MenuUser, InputLabel, Switch
} from '@mui/material'
import React, { Fragment, useEffect, useState } from 'react'

import CloseIcon from '@mui/icons-material/Close';

import PhotoCamera from '@mui/icons-material/PhotoCamera';

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { register, clearErrors } from '../../actions/userActions'
import { ALL_USERS_REQUEST } from '../../constants/userConstants'

function UserModal({ title, openPopup, setOpenPopup, }) {

    const Input = styled('input')({
        display: 'none',
    });

    

    const [name, setName] = useState('')

    const [phonenumber, setPhoneNumber] = useState('Extra User')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('')

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, success } = useSelector(state => state.register);

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (success) {
            // alert.success('user added successfully');
            dispatch({ type: ALL_USERS_REQUEST })
        }

    }, [dispatch, alert, error, success])


    const [avatar, setAvatar] = useState('')
    const [avatarPreview, setAvatarPreview] = useState('/images/default.png')

    const UploadHandler = () => {

        alert.success('User Added Menu')
        setOpenPopup(false)
        setAvatarPreview('/images/default.png')
        setName('')
        setPhoneNumber('');
        setEmail('')
        setRole('')
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setOpenPopup(false)
        const formData = new FormData();
        formData.set('name', name);
        formData.set('phonenumber', phonenumber);
        formData.set('email', email);
        dispatch(register(formData))
        alert.success('User added successfully');
        setAvatarPreview('/images/default.png')
        setName('')
        setPhoneNumber('');
        setEmail('')
        setRole('')
    }

    const clearHandler = () => {
        setOpenPopup(false)
        setAvatarPreview('/images/default.png')
        setName('')
        setPhoneNumber('');
        setEmail('')
        setRole('')
    }

    const onChange = e => {
        if (e.target.name === 'avatar') {
            const reader = new FileReader();
            console.log("444" + e.target.value)
            reader.onload = () => {
                console.log(reader.readyState)
                if (reader.readyState === 2) {
                    setAvatarPreview(reader.result)
                    setAvatar(reader.result)
                }
            }
            reader.readAsDataURL(e.target.files[0])
        }
    }

    console.log(openPopup)

    return (
        <>
            <Dialog open={openPopup} maxWidth="md" sx={{ borderRadius: '1.5rem', zIndex: 1200, }} onClose={clearHandler}>

                <Grid display='flex' sm={12} sx={{ p: 2, mr: 3 }}>

                    <Grid display='flex' sx={{ flexDirection: 'column', alignUsers: 'center', p: 1 }}>
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
                            <Typography variant='h5' sx={{ fontWeight: 'bold', marginBottom: 2, marginLeft: 1.2 }}>Add New User</Typography>
                            <Divider sx={{ marginBottom: 2 }} />
                            <Typography variant='body1' sx={{ fontWeight: 'bold', marginLeft: 1.2 }}>User Details</Typography>



                            <TextField
                                label='Name'
                                placeholder='Enter Name' fullWidth required
                                defaultValue={name}
                                onChange={(e) => setName(e.target.value)}
                            />

                            <TextField
                                label='Email'
                                placeholder='Enter Email' fullWidth required

                                value={email}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />


                            <TextField
                                label='Email'
                                placeholder='Enter Email' fullWidth required

                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                        </Box>


                        

                      

                        <Button fullWidth variant='contained' sx={{ marginBottom: 1, }}
                            onClick={submitHandler}>Add User</Button>


                    </Grid>

                </Grid>
            </Dialog>


        </>

    )
}

export default UserModal