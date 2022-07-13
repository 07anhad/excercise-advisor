import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target-image.png';
import EquipeImage from '../assets/icons/equipment.png'

const Detail = ({exerciseDetail}) => {

    const { bodyPart, target, gifUrl, name, equipment } = exerciseDetail;

  return (
      <Stack gap="60px" sx={{flexDirection:{lg:'row'}, p:'20px'}}>
          
    </Stack>
  )
}

export default Detail