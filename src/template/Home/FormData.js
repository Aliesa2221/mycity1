import React from 'react'
import './FormData.css';
import { Box, IconButton } from '@mui/material';
import UserHomeData from '../General/HomeData/UserHomeData';
import UserFormData from '../General/FormData/UserFormData';
import Accordiion from '../Table/Accordiion/Accordiion'
import Header from '../Header/Header';
import GeneralTable from '../Table/GeneralTable';
import SearchIcon from '@mui/icons-material/Search';
import Tooleps from '../felters/toolteps/toolteps'
import Typography from '@mui/material/Typography';


export default function FormData() {

  return (

    <div className='contanier' >
      <Header />
      <div className='formdata_content'>

      <Box sx={{ margin: '130px auto', maxWidth: '800px', padding: '20px', background: '#f9f9f9', borderRadius: '10px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)' }}>
          <Typography variant="h4" sx={{ textAlign: 'center', justifyContent: 'center' }}>
            מי הגליל
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', width: '80%', marginLeft: '10%' }}>
          <UserHomeData text={`: פרטי המפעל`} content={"שם המפעל"} />
        </Box>
        <Box sx={{ width: '100%', justifyContent: 'center' }}>
          <UserFormData text={`פרטים`} content={"########"} className="page2data" />
        </Box>
        <div className='search'>

          <IconButton sx={{ color: '#55c7ec' }}>
            <SearchIcon />
          </IconButton>

          <input type="text" className='searchInput' placeholder="Enter your search query" />
        </div>
        <Box className='formdatatable'>
          <GeneralTable />
          <Accordiion />
          <Tooleps />
        </Box>
      </div>
    </div>

  )
}

