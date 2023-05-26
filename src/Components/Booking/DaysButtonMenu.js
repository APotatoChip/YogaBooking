import * as React from 'react';

import Box from '@mui/material/Box';
import BasicDatePicker from './BasicDatePicker';


export default function DaysButtonMenu() {
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
<BasicDatePicker/>

    </Box>
  );
}
