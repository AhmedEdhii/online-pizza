import {
    Typography, Dialog, DialogTitle, DialogContent, Fab, Grid, Box, IconButton, Divider, Radio, FormLabel,
    FormControlLabel, RadioGroup, FormControl, Checkbox, Button, styled, FormGroup, TextField, Select, MenuItem, InputLabel, Switch
} from '@mui/material'
import React, { Fragment, useEffect, useState } from 'react'

import CloseIcon from '@mui/icons-material/Close';

import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { getToppings } from '../../actions/toppingActions';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

function OtherItemsModal({ title, openPopup, setOpenPopup, }) {

    const Img = styled('img')({
        alignItems: "center",

        width: 200,
        height: 200,
        padding: 10,
        margin: 4,

        borderRadius: '1.5rem',
    });

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const [generalPrice, setGeneralPrice] = useState('')
    const [smallPrice, setSmallPrice] = useState('')
    const [mediumPrice, setMediumPrice] = useState('')
    const [largePrice, setLargePrice] = useState('')
    const [jumboPrice, setJumboPrice] = useState('')



    const [category, setCategory] = useState('')

    const [activeState, setActiveState] = useState('true');
    const [confirmPassword, setConfirmPassword] = useState('')

    const [avatar, setAvatar] = useState('')
    const [avatarPreview, setAvatarPreview] = useState('/images/default_avatar.jpg')

    const UploadHandler = () => {

        alert.success('Item Added to Cart')
        setOpenPopup(false)
    }



    const alert = useAlert();
    const dispatch = useDispatch();

    console.log(openPopup)

    return (
        <>
            <Dialog open={openPopup} maxWidth="md" sx={{ borderRadius: '1.5rem', zIndex: 1200 }} onClose={() => { setOpenPopup(false) }}>

                <Grid display='flex' sm={12} sx={{ p: 2, }}>

                    <Grid display='flex' sx={{ flexDirection: 'column', p: 1 }}>
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
                            <Typography variant='h5' sx={{ fontWeight: 'bold', marginBottom: 2, marginLeft: 1.2 }}>Add New Other Items</Typography>
                            <Divider sx={{ marginBottom: 2 }} />
                            <Typography variant='body1' sx={{ fontWeight: 'bold', marginLeft: 1.2 }}>Product Details</Typography>
                            {/* Name and Email */}
                            <TextField
                                label='Name'
                                placeholder='Enter Name' fullWidth required
                                defaultValue={name}
                                onChange={(e) => setName(e.target.value)}
                            />


                            <TextField
                                label='Description'
                                placeholder='Enter Email' fullWidth required multiline

                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />


                            <FormControl fullWidth sx={{ marginTop: 1, marginLeft: 1, marginBottom: 1, }}>
                                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                <Select

                                    defaultValue='pizza'
                                    label="Category"
                                    onChange={(e) => setCategory(e.target.value)}
                                >
                                    <MenuItem value='beverages'>Beverages</MenuItem>
                                    <MenuItem value='sauces'>Sauces</MenuItem>

                                </Select>

                            </FormControl>

                            <Typography variant='body1' sx={{ marginTop: 2, fontWeight: 'bold', marginLeft: 1.2 }}>Product Price</Typography>

                            <TextField
                                label='Price '
                                placeholder='Price for Product' fullWidth required
                                defaultValue={smallPrice}
                                onChange={(e) => setSmallPrice(e.target.value)}
                            />

                           




                            

                        </Box>
                    </Grid>



                    <Grid display='flex' sx={{ m: 1, p: 1,marginLeft:3, width: "80%", flexDirection: "column", alignItems: 'center', justifyContent: 'center '}}>

                        <Img alt="complex" src='/images/default.png'/>
                        <Button fullWidth variant='contained' startIcon={<PhotoCamera />}
                            sx={{ marginTop: 2,marginBottom: 2, }} onClick={UploadHandler}>Upload Picture</Button>
                         <Typography
                         variant='body1'
                         sx={{ fontWeight: 'bold', textAlign:'left' }}>Set Product Active</Typography>
                         <Switch
                                    defaultChecked={true} size='medium'
                                    checked={activeState}
                                    onChange={(e) => setActiveState(e.target.checked)}
                          
                        />

                                <Button fullWidth variant='contained' sx={{ marginTop: 2,  marginLeft: 1, marginBottom: 1, }}
                                onClick={UploadHandler}>Add Item</Button>
                        
                        
                    </Grid>

                </Grid>
            </Dialog>


        </>

    )
}

export default OtherItemsModal