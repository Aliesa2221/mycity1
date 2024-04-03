import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import { TextField } from '@mui/material';

function createData(Year, calories, fat, carbs, protein, cont) {
  return { Year, calories, fat, carbs, protein, cont };
}

const rows = [
  createData('2023',),
  createData('2022',),
  createData('2021',),
  createData('2020',),
  createData('2019',),
];

function Table2() {

  return (
    <Box sx={{ boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.1)', overflowX: 'auto' }}>
      <TableContainer component={Paper} sx={{ minWidth: 650 }}>
        <Table sx={{ minWidth: 50 }} size="small" aria-label="a dense table">
          <TableHead sx={{}}>
            <TableRow sx={{}}>

              <TableCell sx={{ border: '1px black solid' }}>שנה/חודש</TableCell>
              <TableCell sx={{ border: '1px black solid' }} align="right">ינאור</TableCell>
              <TableCell sx={{ border: '1px black solid' }} align="right">פברואר</TableCell>
              <TableCell sx={{ border: '1px black solid' }} align="right">מרץ</TableCell>
              <TableCell sx={{ border: '1px black solid' }} align="right">אפריל</TableCell>
              <TableCell sx={{ border: '1px black solid' }} align="right">מאי</TableCell>
              <TableCell sx={{ border: '1px black solid' }} align="right">יוני</TableCell>
              <TableCell sx={{ border: '1px black solid' }} align="right">יולי</TableCell>
              <TableCell sx={{ border: '1px black solid' }} align="right">אוגוסט</TableCell>
              <TableCell sx={{ border: '1px black solid' }} align="right">ספטמבר</TableCell>
              <TableCell sx={{ border: '1px black solid' }} align="right">אוקטובר</TableCell>
              <TableCell sx={{ border: '1px black solid' }} align="right">נובמבר</TableCell>
              <TableCell sx={{ border: '1px black solid' }} align="right">דצמבר</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.Year}

              >
                <TableCell component="th" scope="row" >
                  {row.Year}
                </TableCell>
                <TableCell sx={{ border: '1px black solid' }} align="right"><TextField id="outlined-basic" sx={{}} /> </TableCell>
                <TableCell sx={{ border: '1px black solid' }} align="right"><TextField id="outlined-basic" sx={{}} /> </TableCell>
                <TableCell sx={{ border: '1px black solid' }} align="right"><TextField id="outlined-basic" sx={{}} /> </TableCell>
                <TableCell sx={{ border: '1px black solid' }} align="right"><TextField id="outlined-basic" sx={{}} /> </TableCell>
                <TableCell sx={{ border: '1px black solid' }} align="right"><TextField id="outlined-basic" sx={{}} /> </TableCell>
                <TableCell sx={{ border: '1px black solid' }} align="right"><TextField id="outlined-basic" sx={{}} /> </TableCell>
                <TableCell sx={{ border: '1px black solid' }} align="right"><TextField id="outlined-basic" sx={{}} /> </TableCell>
                <TableCell sx={{ border: '1px black solid' }} align="right"><TextField id="outlined-basic" sx={{}} /> </TableCell>
                <TableCell sx={{ border: '1px black solid' }} align="right"><TextField id="outlined-basic" sx={{}} /> </TableCell>
                <TableCell sx={{ border: '1px black solid' }} align="right"><TextField id="outlined-basic" sx={{}} /> </TableCell>
                <TableCell sx={{ border: '1px black solid' }} align="right"><TextField id="outlined-basic" sx={{}} /> </TableCell>
                <TableCell sx={{ border: '1px black solid' }} align="right"><TextField id="outlined-basic" sx={{}} /> </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </Box>
  )
}

export default Table2

