import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import TextField from '@mui/material/TextField';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Divider, Typography } from '@mui/material';
const options = [
  'נפסל  - לא בוצע דיגום ',
  'נפסל- לא בוצע דגימת מי רקע ',
  'נפסל- לא בוצע דגימת מי רקע',
  'נפסל -  אין חישוב תוצאות דיגום',
  'ביטול הזמנה טרם ביצוע הדיגום',
  'ביצוע דיגום חלקי - יחושבו תוצאות דיגום',
  'ביצוע דיגום מי רקע חלקי - יחושבו תוצאות דיגום',
  'אחר- יבוצעו תוצאות דיגום'

];

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



  return (
    <Dialog dir='rtl'
      sx={{
        '& .MuiDialog-paper': { width: '80%', maxHeight: 1000, maxWidth: 1000 },
        '& .MuiTypography-root': { fontSize: '1rem' },
      }}
      maxWidth="xs"
      open={open}
      {...other}
    >
      <DialogTitle sx={{ textAlign: 'center', fontSize: '2.5rem' }}>ביטול/סגירת בדיקות מעבדה</DialogTitle>
      <DialogContent dividers>
        <Typography>סיבת ביטול/סגירת ההזמנה</Typography>
        <RadioGroup
          ref={radioGroupRef}
          aria-label="ringtone"
          name="ringtone"
          value={value}
        >
          {options.map((option) => (
            <FormControlLabel
              value={option}
              key={option}
              control={<Radio sx={{ '&.Mui-checked': { color: '#4caf50' } }} />} // Adjust checked color
              label={
                <span style={{ fontSize: '1rem', color: '#333' }}>{option}</span>
              }
            />
          ))}
        </RadioGroup>
      </DialogContent>


      <Box
        sx={{
          maxWidth: '600px',
          width: '100%',
          padding: '20px',
          margin: '0 auto', // Center the box horizontally
          direction: 'rtl',
        }}
      >
        <TextField
          label="הערות"
          variant="outlined"
          sx={{ width: '100%', height: '100%' }}
          InputLabelProps={{
            sx: {
              left: 'auto',
              right: 20,
            },
          }}
        />
      </Box>
      <Divider />
      <Box sx={{ direction: 'rtl,', padding: '20px', display: 'flex' }} >
        <Typography sx={{ marginTop: '9px' }}>ייצור הזמנה חלופית לביצוע דיגום או בדיקת מי רקע</Typography>
        <FormControlLabel
          control={<Checkbox />}
          label={<Typography>כן</Typography>}
        />
      </Box>


      <DialogActions sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <Button autoFocus onClick={handleCancel} sx={{ fontSize: '1rem', }}>
          שמור
        </Button>
      </DialogActions>

    </Dialog>

  );
}

ConfirmationDialogRaw.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

export default function PageGroup1() {
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
          <ListItemText primary="ביטול/סגירת בדיקות מעבדה" sx={{ textAlign: 'center', fontSize: '2.5rem', color: '#1976d2' }} />
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
