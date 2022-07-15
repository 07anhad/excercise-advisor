import React from 'react';
import { Typography, Box, Stack } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
    <center>
      <Typography sx={{ fontSize: { lg: '35px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000">
        Same <Typography color="#064884" fontWeight="800" textTransform="capitalize" display="inline" variant="h4">Muscles Groups</Typography> Targeted
      </Typography>
    </center>
    <Stack sx={{ p: 2, position: 'relative' }}>
      {targetMuscleExercises.length !== 0 ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
    </Stack>
    <center>
      <Typography sx={{ fontSize: { lg: '35px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mt="30px">
        Exercises with <Typography color="#064884" fontWeight="800" textTransform="capitalize" display="inline" variant="h4"> Similar Equipment</Typography>
      </Typography>
    </center>
    <Stack  sx={{ p: 2, position: 'relative' }}>
      {equipmentExercises.length !== 0 ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
    </Stack>
  </Box>
);

export default SimilarExercises;