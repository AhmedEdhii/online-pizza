import { Drawer, Typography, Box } from '@mui/material'
import React from 'react'

const cart = (props) => {

    const { openDrawer, setOpenDrawer } = props;

  return (
    <Drawer
    anchor='right' 
    open={openDrawer}
    onClose={() => { setOpenDrawer(false) }}
    >
        <Box p={2} width='250px' role='presentation'>
            <Typography variant='h4'>This is drawer</Typography>

        </Box>
    </Drawer>
    )
}

export default cart