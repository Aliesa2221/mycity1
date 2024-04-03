import React from 'react';
import { Box, Button, ButtonGroup } from '@mui/material';
import PageGroup1 from '../GroupBuPage/PageGroup1';
import PageGroup2 from '../GroupBuPage/PageGroup2';
import PageGroup3 from '../GroupBuPage/PageGroup3';
import PageGroup4 from '../GroupBuPage/PageGroup4';
import PageGroup5 from '../GroupBuPage/PageGroup5';
import PageGroup6 from '../GroupBuPage/PageGroup6';
import PageGroup7 from '../GroupBuPage/PageGroup7';
import PageGroup8 from '../GroupBuPage/PageGroup8';
import PageGroup9 from '../GroupBuPage/PageGroup9';
export default function ButtonActive() {

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', padding: '20px', width: '100%', direction: 'rtl' }}>
      <ButtonGroup orientation="vertical" aria-label="vertical outlined button group" sx={buttonGroupStyles}>
        <PageGroup1/>
        {/* <Button sx={buttonStyles} onClick={linkPage2Group}>הזמנה לביצוע דיגום</Button> */}
        <PageGroup2/>
        {/* <Button sx={buttonStyles} onClick={linkPage3Group}>הזמנה לדיגום מי רקע</Button> */}
        <PageGroup3/>
      </ButtonGroup>

      <ButtonGroup orientation="vertical" aria-label="vertical outlined button group" sx={buttonGroupStyles}>
        <PageGroup4/>
        {/* <Button sx={buttonStyles} onClick={linkPage4Group}>עדכון תוצאות דיגום מי רקע</Button> */}
        <PageGroup5/>
        {/* <Button sx={buttonStyles} onClick={linkPage5Group}>עדכון תוצאות דיגום שפכי תעשייה</Button> */}
        <PageGroup6/>
        {/* <Button sx={buttonStyles} onClick={linkPage6Group}>שליחת מייל לצרכן</Button> */}
      </ButtonGroup>

      <ButtonGroup orientation="vertical" aria-label="vertical outlined button group" sx={buttonGroupStyles}>
        {/* <Button sx={buttonStyles} onClick={linkPage7Group}>אישור תשלום למעבדה</Button> */}
        <PageGroup7/>
        {/* <Button sx={buttonStyles}>ביטול התראות דיגום</Button> */}
        <PageGroup8/>
        {/* <Button sx={buttonStyles}>עדכון מועדי דיגום</Button> */}
        <PageGroup9/>

      </ButtonGroup>
    </Box>

  );
}

const buttonGroupStyles = {
  flex: '0 1 30%', // Adjust the width as needed
};

const buttonStyles = {
  width: '100%',
  color: '#blue',
  background: '#e9e9e9',
  borderRadius: '5px',
  margin: '5px',
  padding: '10px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  cursor: 'pointer',
  border: 'none',
  
  '&:hover': {
    backgroundColor: '#bdbdbd',
  },

};
