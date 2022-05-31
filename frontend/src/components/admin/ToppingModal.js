import {
    Typography, Dialog, DialogTitle, DialogContent, Fab, Grid, Box, IconButton, Divider, Radio, FormLabel, Input,
    FormControlLabel, RadioGroup, FormControl, Checkbox, Button, styled, FormGroup, TextField, Select, MenuItem, InputLabel, Switch
} from '@mui/material'
import React, { Fragment, useEffect, useState } from 'react'

import CloseIcon from '@mui/icons-material/Close';

import PhotoCamera from '@mui/icons-material/PhotoCamera';

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { newTopping, clearErrors } from '../../actions/toppingActions'
import { NEW_TOPPING_RESET } from '../../constants/toppingConstants'

function ToppingModal({ title, openPopup, setOpenPopup, }) {

    const Input = styled('input')({
        display: 'none',
    });

    const Img = styled('img')({
        alignItems: "center",

        width: 200,
        height: 200,
        padding: 10,
        margin: 4,

        borderRadius: '1.5rem',
    });

    const [name, setName] = useState('')

    const [category, setCategory] = useState('Extra Topping')
    const [price, setPrice] = useState('')

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, success } = useSelector(state => state.newTopping);

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (success) {
            // alert.success('topping added successfully');
            dispatch({ type: NEW_TOPPING_RESET })
        }

    }, [dispatch, alert, error, success])


    const [avatar, setAvatar] = useState('')
    const [avatarPreview, setAvatarPreview] = useState('/images/default.png')

    const UploadHandler = () => {

        alert.success('Item Added Menu')
        setOpenPopup(false)
        setAvatarPreview('/images/default.png')
        setName('')
        setCategory('');
        setPrice('')
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setOpenPopup(false)
        const formData = new FormData();
        formData.set('name', name);
        formData.set('category', category);
        formData.set('price', price);
        dispatch(newTopping(formData))
        alert.success('Topping added successfully');
        setAvatarPreview('/images/default.png')
        setName('')
        setCategory('');
        setPrice('')
    }

    const clearHandler = () => {
        setOpenPopup(false)
        setAvatarPreview('/images/default.png')
        setName('')
        setCategory('');
        setPrice('')
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

                    <Grid display='flex' sx={{ flexDirection: 'column', alignItems: 'center', p: 1 }}>
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
                            <Typography variant='h5' sx={{ fontWeight: 'bold', marginBottom: 2, marginLeft: 1.2 }}>Add New Topping</Typography>
                            <Divider sx={{ marginBottom: 2 }} />
                            <Typography variant='body1' sx={{ fontWeight: 'bold', marginLeft: 1.2 }}>Item Details</Typography>



                            <TextField
                                label='Name'
                                placeholder='Enter Name' fullWidth required
                                defaultValue={name}
                                onChange={(e) => setName(e.target.value)}
                            />



                            <TextField
                                label='Price'
                                placeholder='Enter Price' fullWidth required

                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />

                        </Box>


                        <Img alt="complex" src={avatarPreview} />

                        <Fragment>
                            <Input name='avatar' accept="image/*" id="contained-button-file" type="file"
                                onChange={onChange}
                            />
                            <label htmlFor="contained-button-file">
                                <Button fullWidth variant='contained' component="span" startIcon={<PhotoCamera />}
                                    sx={{ marginTop: 2, marginBottom: 2, }}>Upload Picture</Button>
                            </label>


                        </Fragment>

                        <Button fullWidth variant='contained' sx={{ marginBottom: 1, }}
                            onClick={submitHandler}>Add Item</Button>


                    </Grid>

                </Grid>
            </Dialog>


        </>

    )
}

export default ToppingModal