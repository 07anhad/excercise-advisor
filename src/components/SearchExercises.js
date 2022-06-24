import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import{exerciseOptions,fetchData} from '../utils/fetchData'

const SearchExercises = () => {

  const [search, setSearch] = useState('');
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises')
    }
  }, [])
  

  const handleSearch = async() => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
          || exercise.target.toLowerCase().includes(search)
          || exercise.equipment.toLowerCase().includes(search)
          || exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch('');
      setExercises(searchedExercises);
    }
  }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="cente" p="20px">
      <Typography fontWeight={500} sx={{fontSize:{lg:'44px', xs:'30px'}}} mb='50px' textAlign="center" color="#2F4F4F">
        Which Muscle Group <br/>Are We Targeting Today?
      </Typography>
      <Box position="relative" mb='72px'>
        <TextField
          sx={{
            input: { fontWeight: '700', border: 'none', borderRadius: '40px' },
            width: { lg: '800px', xs: '350px' }, 
            backgroundColor: '#fff',
          }}
          height="72px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder='Search Exercises'
          type="text"
        />
        <Button className="search-btn"
          sx={{
            bgcolor: '#2F4F4F', 
            color: '#fff',
            width: { lg: '160px', xs: '80px' },
            fontSize: { lg: '16px', xs: '14px' },
            height: '56px', 
            position: 'absolute',
            right:'0'
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Stack>
  )
}

export default SearchExercises