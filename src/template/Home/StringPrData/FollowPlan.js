import React from "react";
import Header from "../../Header/Header";
import Button from '@mui/material/Button';
import { Box } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import TableVeiw from "../..//Table/TableSearch/TableVeiw";
import Typography from '@mui/material/Typography';


export default function FollowPlan() {
  const navigate = useNavigate();
  const NivToConsumer = () => {
    navigate('/AddConsumer');
  };
  return (
    <div className="contanier">
      <Header />

      <Box sx={{ margin: '130px auto', maxWidth: '800px', padding: '20px', background: '#f9f9f9', borderRadius: '10px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)' }}>
          <Typography variant="h4" sx={{ textAlign: 'center', justifyContent: 'center' }}>
            מי הגליל
          </Typography>
        </Box>
      <Box sx={{ width: '90%', marginTop: '10px', display: 'flex', justifyContent: 'center', marginLeft: '5%' }}>
        <Box sx={{ padding: '25px' }}>
          <Button variant="contained" onClick={NivToConsumer} sx={{ width: '200px', height: '50px', fontSize: '130%' }} startIcon={<AddIcon />}>
            הוספת צרכן
          </Button>
        </Box>
      </Box>
      {/* <Box sx={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
        <TableVeiw />
      </Box> */}

    </div>
  );
}
