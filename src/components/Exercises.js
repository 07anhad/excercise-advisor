import React, { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Typography, Stack } from '@mui/material/';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  // console.log(exercises);

  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 8;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercise = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth'})
  }

  return (
    <Box id="exercises"
      sx={{ mt: { lg: '110px' } }}
      mt='50px'
      p='20px'
    >
      <Typography variant= 'h4' fontWeight={600} sx={{fontSize:{lg:'40px',xs:'40px'}}} mb="23px" mt="30px" fontStyle='sans-serif' color="#2F4F4F">
        <center>Showing Results</center>
      </Typography>
      <Stack direction='row' sx={{ gap: { lg: '110px', xs: '50px' } }}
        flexWrap="wrap" justifyContent="center">
        
        {currentExercise.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise}/>
        ))}

      </Stack>

      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}

      </Stack>

    </Box>
  )
}

export default Exercises