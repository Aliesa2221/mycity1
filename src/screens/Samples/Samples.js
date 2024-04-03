import React from 'react'
import Header from "../../template/Header/Header";
import Tooleps from '../../template/felters/toolteps/toolteps'
import Typography from '@mui/material/Typography';
import {Box} from '@mui/material';
export default function Samples() {
  return (
    <div>
    <Header />
  <Box sx={{ margin: '130px auto', maxWidth: '800px', padding: '20px', background: '#f9f9f9', borderRadius: '10px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)' }}>
    <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '20px' }}>
      מי הגליל דיגומים
    </Typography>

  </Box>
  <Tooleps />
  </div>
  )
}

