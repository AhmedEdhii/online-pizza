import React from 'react'
import { Typography, Link, IconButton, Checkbox, FormControlLabel, TextField, Box, Divider, Button, Grid, } from '@mui/material'

import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';


const MySignup = () => {

    const Input = styled('input')({
        display: 'none',
    });

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
                    <TextField label='Name' placeholder='Enter Name' fullWidth required />
                    <TextField label='Email' placeholder='Enter Email' fullWidth required />

                    {/* Address */}

                    <TextField
                        id="outlined-textarea"
                        label="Delivery Address"
                        placeholder='Enter Delivery Address'
                        multiline
                        fullWidth required
                    />

                    {/* Password input */}

                    <TextField label='Password' placeholder='Enter password' type='password' fullWidth required />
                    <TextField label='Confirm Password' placeholder='Confirm Password' type='password' fullWidth required />


                    {/* For Avatar */}

              

                    <label htmlFor="contained-button-file" >
                        <Input accept="image/*" id="contained-button-file" type="file" />
                        <Button variant="text" startIcon={<PhotoCamera />} sx={{ left: 90 }}component="span"> 
                            Upload your avatar
                        </Button>
                    </label>


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

                    <Button type='submit' color='primary' variant="contained" fullWidth sx={{ m: 1, height: 50 }}>Sign in</Button>


                </Box>
            </Box>


        </>
    )
}

export default MySignup