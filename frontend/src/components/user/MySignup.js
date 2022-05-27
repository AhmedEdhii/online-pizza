import React, { Fragment, useState, useEffect } from 'react'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { register, clearErrors } from '../../actions/userActions'
import { Typography, Link, IconButton, Checkbox, FormControlLabel, TextField, Box, Divider, Button, Grid, } from '@mui/material'

import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';


const MySignup = ({ history }) => {

    const Input = styled('input')({
        display: 'none',
    });

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phonenumber, setPhoneNumber] = useState('')
    const [deliveryaddress, setDeliveryAddress] = useState('')
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')

    const [avatar, setAvatar] = useState('')
    const [avatarPreview, setAvatarPreview] = useState('/images/default_avatar.jpg')
    const [path, setpath] = useState('')

    const alert = useAlert();
    const dispatch = useDispatch();
    const { isAuthenticated, error, loading } = useSelector(state => state.auth);

    useEffect(() => {
        if (isAuthenticated) {
            history.push('/')
        }

        if (error) {
            //alert.error(error);
            dispatch(clearErrors());
        }

    }, [dispatch, alert, isAuthenticated, error, history])

    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.set('name', name);
        formData.set('phonenumber', phonenumber);
        formData.set('email', email);
        if (password === confirmPassword) {
            formData.set('password', password);
        }
        else {
            alert.error("Passwords must Match");
        }
        formData.set('deliveryaddress', deliveryaddress);
        formData.set('avatar', avatar);
        dispatch(register(formData))
    }

    /*const onChange = e => {
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
    }*/

    return (
        <>
            <Box sx={{
                width: 400, paddingLeft: 8, paddingRight: 10, paddingTop: 2, paddingBottom: 2, border: 2,
                borderRadius: '1.5rem',
                boxShadow: '0 8px 24px 0 rgba(0,0,0,0.12)', backgroundColor: '#FEFEFd'
            }}>

                <Box container display='flex'
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, }, p: 2, margin: 'auto', flexDirection: 'column',

                    }}
                    noValidate
                    autoComplete="off"
                >
                    <Typography variant='h4' sx={{ fontWeight: 'bold', marginBottom: 2 }}>Signup</Typography>
                    <Divider sx={{ marginBottom: 2 }} />

                    {/* Name and Email */}
                    <TextField
                        label='Name'
                        placeholder='Enter Name' fullWidth required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />


                    <TextField
                        label='Email'
                        placeholder='Enter Email' fullWidth required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <TextField
                        label='PhoneNumber'
                        placeholder='Enter Phone Number' fullWidth required
                        value={phonenumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />

                    {/* Address */}

                    <TextField
                        id="outlined-textarea"
                        label="Delivery Address"
                        placeholder='Enter Delivery Address'
                        multiline
                        fullWidth required
                        value={deliveryaddress}
                        onChange={(e) => setDeliveryAddress(e.target.value)}
                    />

                    {/* Password input */}

                    <TextField
                        label='Password'
                        placeholder='Enter password'
                        type='password' fullWidth required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <TextField
                        label='Confirm Password'
                        placeholder='Confirm Password'
                        type='password' fullWidth required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />


                    {/* For Avatar */}


                    <Fragment>
                    <Input name='avatar' accept="image/*" id="contained-button-file" type="file"
                        onChange={(e) => {
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
                        }}
                    />
                    <label htmlFor="contained-button-file" >
                        <Button variant="text" startIcon={<PhotoCamera />} sx={{ left: 90 }} component="span">
                            Upload your avatar
                        </Button>
                    </label>
                    </Fragment>


                    {/* For Terms & Conditions checkbox */}

                    <FormControlLabel sx={{ justifyContent: 'center' }}
                        control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="I have read the Terms and Conditions"
                    />
                    {/* Signup Button */}

                    <Button type='submit' onClick={submitHandler} color='primary' variant="contained" fullWidth sx={{ m: 1, height: 50 }}>Sign up</Button>


                </Box>
            </Box>


        </>
    )
}

export default MySignup