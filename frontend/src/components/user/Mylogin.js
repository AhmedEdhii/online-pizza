import React, { Fragment, useState, useEffect } from 'react'
import { Typography, Checkbox, TextField, Box, Divider, Button, Grid, } from '@mui/material'

import { Link } from 'react-router-dom';
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { login, clearErrors } from '../../actions/userActions'

const Mylogin = ({history}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const alert = useAlert();
    const dispatch = useDispatch();

    const { isAuthenticated, error, loading } = useSelector(state => state.auth);

    //const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {

        if (isAuthenticated) {
            history.push('/')
        }

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

    }, [dispatch, alert, isAuthenticated, error, history])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
    }

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
                    
                    <TextField 
                    label='Email' 
                    placeholder='Enter Email' fullWidth required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />

                    <TextField 
                    label='Password' 
                    placeholder='Enter password' 
                    type='password' fullWidth required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    
                    <Button type='submit' color='primary' variant="contained" fullWidth sx={{ m: 1,  height: 50  }} onClick={submitHandler}>Sign in</Button>
                    
                    <Typography align='center' sx={{ m: 1, }} >
                     <Link to="#" >
                        Forgot password
                </Link>
                </Typography>

                </Box>

                </Box>

        </>
    )
}

export default Mylogin