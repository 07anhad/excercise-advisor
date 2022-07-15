import React from 'react';
import { Link } from '@mui/material';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo-1.png'

const Navbar = () => {
  return (
    <Stack
      direction='row'
      justifyContent='space-around'
      sx={{ gap: { sm: '122px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none', px: '20px' }}
    >
      
      <Stack
        direction='row'
        gap='40px'
        fontSize='24px'
        alignItems='flex-end'
      >
        <a href= "#home" style={{ textDecoration: 'none', color: '#3A1212', borderBottom:'3px solid #5A6351',cursor: 'pointer'}}>Home</a>

        <a href="#exercises" style={{textDecoration:'none',color: '#3A1212', cursor: 'pointer'}}>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar;