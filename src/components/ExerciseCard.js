import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles({
//     root: {
//         "&:hover": {
//             backgroundColor: "none"
//         }
//     }
// });

const ExerciseCard = ({ exercise }) => {
    // const classes = useStyles();
    return (
        <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
          <img src={exercise.gifUrl} alt={exercise.name} loading="lazy"></img>
          <Stack direction='row'>
              <Button sx={{ ml: '21px', color: 'white', background: '#00645f82', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize',  }}>
                  {exercise.bodyPart}
              </Button>
              <Button sx={{ ml: '21px', color: 'white', background: '#00645f82', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize',  }}>
                  {exercise.target}
              </Button>
          </Stack>
        </Link>
  )
}

export default ExerciseCard