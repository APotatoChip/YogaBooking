import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import RadioButtonsGroup from './RadioButtonsGroup';
import { useState } from 'react';

export default function BookingCard() {
    const [isShown, setIsShown] = useState(true);

  const handleBookClick = event => {
    setIsShown(current=>!current);
  };
  return (
    <>
    {isShown &&
    <Card sx={{ minWidth: 275 }}>
    
      <CardContent>
      
  
        <Typography variant="h5" component="div">
          Hatha Yoga
        </Typography>
        <Typography color="text.secondary">
        Instructor: Anna
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        When: 02.06.2023 | 16:00 - 17:00
        </Typography>

        <Card>Available places: 20</Card>
      </CardContent>
      <RadioButtonsGroup/>
      <CardActions>
        <Button size="small" >Book</Button>
        <Button size="small" onClick={handleBookClick}>Cancel</Button>
      </CardActions>
    </Card>
    }
    </>
  );
}