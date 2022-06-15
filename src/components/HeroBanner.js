import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImg from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg: '180px', xs: '70px' },
      ml:{ sm: '50px'}
    }} position="relative" p="20px">
      <Typography color="#ff2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>

      <Typography fontWeight={500} sx={{fontSize:{lg:'44px',xs:'40px'}}} mb="23px" mt="30px">
         Do It For The <br/> After Selfie 
      </Typography>

      <Typography fontSize= "22px" lineHeight="35px" mb={3}>
        The most effective exercises 
      </Typography>

      <Button variant="contained" color="error" href="#exercises">
        Explore Exercises
      </Button>

      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{
          opacity: 0.2,
          display: {lg:'block',xs:'none'}
        }}
        fontSize="200px"
      >
        EXERCISE
      </Typography>
      <img src={HeroBannerImg}className="hero-banner-img"/>
    </Box>
  )
}

export default HeroBanner