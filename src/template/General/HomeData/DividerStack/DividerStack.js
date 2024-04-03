import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import FileOpenItems from '../FileOpenItems/FileOpenItems';
import FileOpenItems2 from '../FileOpenItems/FileOpenItems2'
import FileOpenItems3 from '../FileOpenItems/FileOpenItems3'
import FileOpenItems4 from '../FileOpenItems/FileOpenItems4';

const Item = styled(Paper)(({ theme }) => ({
  padding: '15px',
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  width: '350px', 
  fontSize: '1.5rem',
  direction:'rtl',
  backgroundColor:'#f9f9f9'
  
}));

export default function ResponsiveWrapStack() {
  const buttonSx = {
    width: '100%',
    color: '#blue',
    borderRadius: '5px',
    padding: '10px',
    '&:hover': {
      backgroundColor: '#ededed',
    },
  };
  
  return (
    <Stack
    direction="rtl"
    spacing={{ xs: 2, md: 3, lg: 4 }}
    flexWrap={{ xs: 'wrap', md: 'nowrap' }}
  >
    <Button sx={buttonSx} item>
      <FileOpenItems4 />
    </Button>
    <Button sx={buttonSx} item>
      <FileOpenItems3 />
    </Button>
    <Button sx={buttonSx} item>
      <FileOpenItems2 />
    </Button>
    <Button sx={buttonSx} item>
      <Item>
        <FileOpenItems />
      </Item>
    </Button>
  </Stack>
  );
}
