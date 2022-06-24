import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImg from '../assets/images/banner.png'
import { padding } from '@mui/system';

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg: '170px', xs: '70px' },
      ml:{ sm: '50px'}
    }} position="relative" p="20px">
      <Typography color="#2F4F4F" fontWeight="400" fontSize="28px">
        Fitness Club
      </Typography>

      <Typography fontWeight={600} sx={{fontSize:{lg:'54px',xs:'40px'}}} mb="23px" mt="30px" fontStyle='sans-serif' color="#2F4F4F">
         Do It For The <br/> After Selfie 
      </Typography>

      <Typography fontSize= "22px" lineHeight="35px" mb={3} fontWeight={400}>
        The most effective exercises 
      </Typography>

      <Button href="#exercises" className="search-btn"
        sx={{backgroundColor:'#2F4F4F', padding:'10px', color:'#fff'}}
      >
        Explore Exercises
      </Button>

      <Typography
        className='opacity-excercise'
        fontWeight={600}
        // color="#2F4F4F"
        sx={{
          opacity: 0.35,
          display: { lg: 'block', xs: 'none' }
        }}
        fontSize="200px"
      >
        EXERCISES
      </Typography>
      <img src={HeroBannerImg}className="hero-banner-img"/>
    </Box>
  )
}

export default HeroBanner