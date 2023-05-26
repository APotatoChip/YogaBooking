import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function VariantButtonMenu() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
  {/* add as many buttons as class
  add left and right arrows
  add title */}

   <ButtonGroup variant="outlined" aria-label="outlined button group">
   <>Pick a class</>
      <Button startIcon={<ArrowBackIosIcon/>}/>
        <Button>Hatha Yoga</Button>
        <Button>Vinyasa Flow</Button>
        <Button>Stretching</Button>
        <Button startIcon={<ArrowForwardIosIcon/>}/>
      </ButtonGroup>

    </Box>
  );
}
