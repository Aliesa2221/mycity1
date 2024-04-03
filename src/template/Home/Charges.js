import React from "react";
// import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Tooleps from '../felters/toolteps/toolteps'
import Typography from '@mui/material/Typography';
import {Box} from '@mui/material';


export default function Charges() {
  return (
    <div className="contanier">
      <Header />
      <Box sx={{ margin: '130px auto', maxWidth: '800px', padding: '20px', background: '#f9f9f9', borderRadius: '10px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)' }}>
          <Typography variant="h4" sx={{ textAlign: 'center', justifyContent: 'center' }}>
            מי הגליל
          </Typography>
          
        </Box>
      <Tooleps />

    </div>
  );
}
