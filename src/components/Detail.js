import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipeImage from '../assets/icons/equipment.png'

const Detail = ({exerciseDetail}) => {

    const { bodyPart, target, gifUrl, name, equipment } = exerciseDetail;

    console.log(gifUrl);
  return (
      <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
        <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
          <Stack sx={{gap:{lg:'35px',sx:'20px'}}}>
              <Typography color="black" fontWeight="800" textTransform="capitalize" variant='h4' >
                  {name}
              </Typography>
              <Typography variant="h6">
                  Performing exercises keep you strong and healty. <Typography color="#064884" fontWeight="800" textTransform="capitalize" display="inline" variant="h5">{name}</Typography> is one of the best exercises to target your <Typography color="#064884" fontWeight="800" textTransform="capitalize" display="inline" variant="h5">{target}.</Typography> It'll help you improve your mood and lifestyle
              </Typography>

        </Stack>
    </Stack>
  )
}

export default Detail