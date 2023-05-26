import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import BookingCard from './BookingCard';
import { useState } from 'react';

function createData(
  practice,
  time,
  availablePlaces,
  instructor,
  studio,
  book
) {
  return { practice, time, availablePlaces, instructor, studio,book };
}

const rows = [
  createData('Hatha Yoga', "19:00-20:00", "0/30", "Anna", "Mula","Book"),
  createData('Vinyasa Flow', "19:00-20:00", "0/30", "George", "Uddiyana","Book"),
  createData('Power Yoga', "19:00-20:00", "0/30", "Diana", "Uddiyana","Book"),
  createData('Regression', "19:00-20:00", "0/30", "Valencia", "Jalandhara","Book"),
  createData('Vinyasa Flow', "19:00-20:00", "0/30", "Anna", "Mula","Book"),
];

export default function BasicTable() {

  const [isShown, setIsShown] = useState(false);

  const handleBookClick = event => {
    setIsShown(current => !current);
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >Practice</TableCell>
            <TableCell >Time</TableCell>
            <TableCell >Available Places</TableCell>
            <TableCell>Instructor</TableCell>
            <TableCell >Studio</TableCell>
            <TableCell ></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell > {row.practice}</TableCell>
              <TableCell >{row.time}</TableCell>
              <TableCell>{row.availablePlaces}</TableCell>
              <TableCell >{row.instructor}</TableCell>
              <TableCell >{row.studio}</TableCell>
              <TableCell ><Button variant="text" onClick={handleBookClick}>{row.book}</Button></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
      {isShown && <BookingCard/>}
    </TableContainer>
  );
}
