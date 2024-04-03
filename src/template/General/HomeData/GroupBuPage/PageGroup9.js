import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';


const options = [
  'עצמי',
  'דוגם חיצוני',
  'מעבדה',
];
const numberOfOrder = 200
const hoursForDigom = '14:00'

function ConfirmationDialogRaw(props) {
  const { onClose, value: valueProp, open, ...other } = props;
  const [value, setValue] = React.useState(valueProp);
  const radioGroupRef = React.useRef(null);

  React.useEffect(() => {
    if (!open) {
      setValue(valueProp);
    }
  }, [valueProp, open]);



  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    onClose(value);
  };
  const boxStyle = {
    margin: '50px auto',
    maxWidth: '800px',
    padding: '20px',
    background: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };


  return (
    <Dialog dir='rtl'
      sx={{
        '& .MuiDialog-paper': { width: '80%', maxWidth: 1000, padding: '20px', },
        '& .MuiTypography-root': { fontSize: '1rem' },
      }}
      maxWidth="xs"
      open={open}
      {...other}
    >
      <DialogTitle sx={{ textAlign: 'center', fontSize: '2.5rem' }}>עדכון מועדי דיגום</DialogTitle>
      <Box sx={{ overflow: 'auto' }}>

      




        <DialogActions sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <Button autoFocus onClick={handleCancel} sx={{ fontSize: '1rem', }}>
            עדכן הזמנת דיגום
          </Button>
        </DialogActions>
      </Box>
    </Dialog>

  );
}

ConfirmationDialogRaw.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

export default function PageGroup9() {
  const [open, setOpen] = React.useState(false);

  const handleClickListItem = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);


  };

  const BoxStyle = {
    width: '100%',
    color: '#blue',
    background: '#e9e9e9',
    margin: '5px',
    textAlign: 'center',
    display: 'inline-block',
    fontSize: '16px',
    border: 'none',
    '&:hover': {
      backgroundColor: '#bdbdbd',
    },
  };

  return (
    <Box sx={BoxStyle} >
      <List component="div" role="group" >
        <ListItemButton
          onClick={handleClickListItem}
        >
          <ListItemText primary='עדכון מועדי דיגום' sx={{ textAlign: 'center', fontSize: '2.5rem', color: '#1976d2' }} />
        </ListItemButton >
        <ConfirmationDialogRaw
          id="ringtone-menu"
          open={open}
          onClose={handleClose}
        />
      </List>

    </Box>
  );
}
