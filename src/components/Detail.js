import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipeImage from '../assets/icons/equipment.png'

const Detail = ({exerciseDetail}) => {

    const { bodyPart, target, gifUrl, name, equipment } = exerciseDetail;

    // console.log(gifUrl);

    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart,
        },
        {
            icon: TargetImage,
            name: target,
        }, 
        {
            icon: EquipeImage,
            name: equipment,
        }    
    ]

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

              {extraDetail.map((item) => (
                  <Stack key={item.name} direction="row" gap="24px" alignItems="center">
                      <Button sx={{background:'#fff2db',borderRadius:"50%", width:"100px", height:"100px"}}>
                          <img src={item.icon} alt={bodyPart} style={{width:'50px', height:'50px'}}/>
                      </Button>
                      <Typography variant="h5" color="#064884" fontWeight="550" textTransform="capitalize">
                          {item.name}
                      </Typography>
                  </Stack>
              ))}

        </Stack>
    </Stack>
  )
}

export default Detail