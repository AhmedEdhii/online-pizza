import React from 'react'
import { Box, Grid } from '@mui/material'
function BannerCarousel() {
  return (
    <Grid sx={{flexGrow: 1}} >
      <Grid item>
      <Box
        sx={{
          marginBottom:3,
          marginTop: 2,
          width: '100%',
          height: 450,
          
          backgroundColor: '#F0F0F0',
          '&:hover': {
            backgroundColor: '#D8D8D8',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      />
    </Grid>
    </Grid>
      
  )
}

export default BannerCarousel