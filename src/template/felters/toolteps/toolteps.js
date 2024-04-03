import React , {useState} from 'react'
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

const actions = [
    { icon: <MailIcon />, name: 'מייל' },
    { icon: <PhoneIcon sx={{flexDirection :'row'}}/>, name: ' נציג' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
  ];


  
  export default function Toolteps() {
    // const [open, setOpen] = useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);

  return (
      <Box sx={{ height: 100, transform: 'translateZ(0px)' , position:'fixed' , bottom:'0'}}>
        {/* <Backdrop open={open} /> */}
        <SpeedDial
          ariaLabel="SpeedDial tooltip example"
          sx={{ position: 'absolute', bottom: 10, left:40 ,tooltipPlacement: 'right'}}
          icon={<SpeedDialIcon />}
          // onClose={handleClose}
          // onOpen={handleOpen}
          // open={open}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              tooltipOpen 
              tooltipPlacement= 'right'
              // onClick={handleClose}
            />
          ))}
        </SpeedDial>
      </Box>
  )
}

