import React, { useState } from 'react';
import './Home.css';
import { Box, IconButton, Button, ButtonGroup } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Header from '../Header/Header';
import GeneralTable from '../Table/GeneralTable';
import Card from '../Card/Card'
import Tooleps from '../felters/toolteps/toolteps'
import UserHomeData2 from '../General/HomeData/fShortNoumber/UserHomeData2';
import VisitChat from '../General/HomeData/DataChart/VisitChat'
import CurrentVisits from '../General/HomeData/CurrentVisits/CurrentVisits';
import ConversionRates from '../General/HomeData/ConversionRates/ConversionRates';
import Typography from '@mui/material/Typography';
import DividerStack from '../General/HomeData/DividerStack/DividerStack'
import ButtonActive from '../General/HomeData/GroupButton/ButtonActive';
import TableVeiw from '../Table/TableSearch/TableVeiw';
import { makeStyles } from '@mui/styles';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, InputAdornment } from '@mui/material';

export default function Home() {
  const classes = useStyles();

  const [searchQuery, setSearchQuery] = useState('');
  const exampleData = [
    {
      id: 1,
      name: 'John',
      age: 25,
      work: 'Engineer',
      city: 'New York',
      maritalStatus: 'Single',
      hasCar: true,
      carType: 'SUV',
      numberOfChildren: 0
    },
    {
      id: 2,
      name: 'Alice',
      age: 30,
      work: 'Doctor',
      city: 'Los Angeles',
      maritalStatus: 'Married',
      hasCar: true,
      carType: 'Sedan',
      numberOfChildren: 2
    },
    {
      id: 3,
      name: 'Bob',
      age: 28,
      work: 'Teacher',
      city: 'Chicago',
      maritalStatus: 'Single',
      hasCar: false,
      carType: null,
      numberOfChildren: 0
    },
  ];



  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = exampleData.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.work.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (

    <div className='contanier' >
      <Header />
      <div className='home_content'>

        <Box sx={{ margin: '130px auto', maxWidth: '800px', padding: '20px', background: '#f9f9f9', borderRadius: '10px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)' }}>
          <Typography variant="h4" sx={{ textAlign: 'center', justifyContent: 'center' }}>
            מי הגליל
          </Typography>
        </Box>


        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          {/* <UserHomeData2 /> */}
          <DividerStack />
        </Box>

        {/* <Box sx={{ display: 'flex', justifyContent: 'center' }}> */}
        {/* <TableVeiw /> */}
        {/* <Box className='search' style={{ width: '100%' }}>
            <IconButton sx={{ color: '#55c7ec' }}>
              <SearchIcon />
            </IconButton>
            <input type="text" className='searchInput' placeholder="Enter your search query" />
          </Box>
        </Box> */}
        <Box sx={{}}>

        <Box sx={{ display: 'flex', justifyContent: 'center',}}>
          <TextField
            fullWidth
            className='search'
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchInputChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton sx={{direction:'rtl',textAlign:'right'}} size="small">
                    <SearchIcon sx={{direction:'rtl',textAlign:'right'}} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <TableContainer sx={{border:'1px grey solid'}}>
          <Table className='home_table'>
            <TableHead>
              <TableRow>
                <TableCell className={classes.centerText}>ID</TableCell>
                <TableCell className={classes.centerText}>Name</TableCell>
                <TableCell className={classes.centerText}>Age</TableCell>
                <TableCell className={classes.centerText}>Work</TableCell>
                <TableCell className={classes.centerText}>City</TableCell>
                <TableCell className={classes.centerText}>Marital Status</TableCell>
                <TableCell className={classes.centerText}>Has Car</TableCell>
                <TableCell className={classes.centerText}>Car Type</TableCell>
                <TableCell className={classes.centerText}>Number of Children</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.map((row) => (
                <TableRow className={classes.centerText} key={row.id}>
                  <TableCell className={classes.centerText}>{row.id}</TableCell>
                  <TableCell className={classes.centerText}>{row.name}</TableCell>
                  <TableCell className={classes.centerText}>{row.age}</TableCell>
                  <TableCell className={classes.centerText}>{row.work}</TableCell>
                  <TableCell className={classes.centerText}>{row.city}</TableCell>
                  <TableCell className={classes.centerText}>{row.maritalStatus}</TableCell>
                  <TableCell className={classes.centerText}>{row.hasCar ? 'Yes' : 'No'}</TableCell>
                  <TableCell className={classes.centerText}>{row.carType || '-'}</TableCell>
                  <TableCell className={classes.centerText}>{row.numberOfChildren}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </Box>

        <ButtonActive />

        {/* <Box sx={{ display: 'flex', flexWrap: 'wrap', padding: '20px' }}>
          <Box sx={{ flex: '1', maxWidth: '70%', padding: '2px' }}>
            <VisitChat />
          </Box>
          <Box sx={{ flex: '2', maxWidth: '30%', padding: '2px' }}>
            <CurrentVisits />
          </Box>
        </Box> */}


        {/* <Box sx={{ padding: '20px' }}>
          <ConversionRates />
        </Box> */}



        {/* <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
          <Card sx={{ width: '61%' }} />
          <Card />
        </Box> */}

        {/* <Box sx={{ padding: '20px' }}>
          <div className='home_table'>
            <GeneralTable />
          </div>
        </Box> */}
        <Tooleps />
      </div>

    </div>

  )
}

const useStyles = makeStyles({
  centerText: {
    textAlign: 'center',
    color: 'black',
    alignItems:'center'
  },
});