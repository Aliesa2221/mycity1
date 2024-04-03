import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import TextField from '@mui/material/TextField';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import { Divider, Typography } from '@mui/material';
import UpLoadFile from '../../../felters/UPLOADFILE/UpLoadFile';



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
      <DialogTitle sx={{ textAlign: 'center', fontSize: '2.5rem' }}>שליחת מייל לצרכן</DialogTitle>
      <Box sx={{ overflow: 'auto' }}>

        <Box sx={{ padding: '20px', width: '250px', flexDirection: 'row', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography>לכבוד</Typography>
          <Typography>מוחמד אל מסארוה</Typography>
        </Box>
        <Divider />
        <Box sx={{ width: '100%', justifyContent: 'center', textAlign: 'center', padding: '10px' }}>
          <Button autoFocus onClick={handleCancel} sx={{ fontSize: '1rem', width: '150px' }}>
            בחר צרכן
          </Button>
        </Box>
        <Divider />

        <Box sx={{ padding: '20px', width: '450px', flexDirection: 'row', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography>כתובת מייל</Typography>
          <Typography>mhmdmsao188@gmail.com</Typography>
        </Box>
        <Box sx={{ padding: '20px', width: '450px', flexDirection: 'row', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography>כתובת מייל נוסף</Typography>
          <TextField>mhmdmsao188@gmail.com</TextField>
        </Box>
        <Box sx={{ padding: '20px', width: '450px', flexDirection: 'row', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography>מספר נכס</Typography>
          <Typography>140</Typography>
        </Box>
        <Box sx={{ padding: '20px', width: '450px', flexDirection: 'row', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography>מספר משלם</Typography>
          <Typography>140</Typography>
        </Box>
        <Box sx={{ padding: '20px', width: '450px', flexDirection: 'row', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography>כתובת למשלוח מייל</Typography>
          <Typography>mhmdmsao188@gmail.com</Typography>
        </Box>

        <Divider />
        <Box sx={{ direction: 'rtl', marginTop: '20px', marginRight: '20px' }}>
          <Typography>1 - הודעת דיגום שנתית</Typography>
        </Box>
        <Box sx={boxStyle}>
          <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '20px' }}>
            מצ״ב מכתב המודיע על  הכללת מפעלך בתכנית הניטור השנתית של חברת
          </Typography>
          <UpLoadFile />
        </Box>
        <Divider />
        <Box sx={{ direction: 'rtl', marginTop: '20px', marginRight: '20px' }}>
          <Typography>2 - הודעה על תוצאות דיגום שבוצע במפעלך</Typography>
        </Box>
        <Box sx={boxStyle}>
          <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '20px' }}>
            מצ״ב הודעה על מציאת חומרים חריגים/אסורים בדיגום שבוצע במפעלך.           </Typography>
          <UpLoadFile />
        </Box>

        <DialogActions sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <Button autoFocus onClick={handleCancel} sx={{ fontSize: '1rem', }}>
            שלח
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

export default function PageGroup6() {
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
          <ListItemText primary='שליחת מייל לצרכן' sx={{ textAlign: 'center', fontSize: '2.5rem', color: '#1976d2' }} />
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
