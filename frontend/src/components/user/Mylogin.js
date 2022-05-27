import React from 'react'
import { Typography, Link,  Checkbox, TextField, Box, Divider, Button, Grid, } from '@mui/material'

const Mylogin = () => {
    return (
        <>
            <Box sx={{width:500}}>
                <Box container display='flex'
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, }, p:2, margin:'auto', flexDirection: 'column'
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <Typography variant='h4' sx={{ fontWeight: 'bold', marginBottom: 2 }}>Login</Typography>
                    <Divider sx={{ marginBottom: 2 }} />
                    
                    <TextField label='Email' placeholder='Enter Email' fullWidth required />
                    <TextField label='Password' placeholder='Enter password' type='password' fullWidth required />
                    
                    <Button type='submit' color='primary' variant="contained" fullWidth sx={{ m: 1,  height: 50  }}>Sign in</Button>
                    <Typography align='center' sx={{ m: 1, }} >
                     <Link href="#" >
                        Forgot password
                </Link>
                </Typography>

                </Box>

                </Box>

        </>
    )
}

export default Mylogin