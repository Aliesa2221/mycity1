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
import { Checkbox, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { Divider, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

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
      <DialogTitle sx={{ textAlign: 'center', fontSize: '2.5rem' }}>הזמנה לביצוע דיגום מעבדה - שפכי תעשייה</DialogTitle>
      <Box sx={{ overflow: 'auto' }}>


        <DialogContent dividers >
          <Typography>בחר</Typography>
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

        <Box sx={{ padding: '20px', width: '250px', flexDirection: 'row', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography>מספר הזמנה</Typography>
          <Typography>{numberOfOrder}</Typography>
        </Box>
        <Divider />
        <Box sx={{ padding: '20px', width: '450px', flexDirection: 'row', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography>מועד ביצוע הדיגום</Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ flexWrap: 'wrap' }}>
            <DatePicker />
          </LocalizationProvider>
        </Box>
        <Divider />
        <Box sx={{ width: '100%', justifyContent: 'center', textAlign: 'center', padding: '10px' }}>
          <Button autoFocus onClick={handleCancel} sx={{ fontSize: '1rem', width: '150px' }}>
            בחר צרכן
          </Button>
        </Box>
        <Divider />

        <Box sx={{ padding: '20px', width: '250px', flexDirection: 'row', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography>שעת ביצוע הדיגום</Typography>
          <Typography>{hoursForDigom}</Typography>
        </Box>
        <Box sx={{ padding: '20px', width: '250px', flexDirection: 'row', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography>כתובת</Typography>
          <Typography>ערערה</Typography>
        </Box>
        <Box sx={{ padding: '20px', width: '250px', flexDirection: 'row', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography>ישוב</Typography>
          <Typography>אלבאטן</Typography>
        </Box>
        <Box sx={{ padding: '20px', width: '300px', flexDirection: 'row', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography>טלפון איש קשר לדיגום</Typography>
          <Typography>0501234567</Typography>
        </Box>
        <Box sx={{ padding: '20px', width: '250px', flexDirection: 'row', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography>סוג דיגום</Typography>
          <Typography>q1</Typography>
        </Box>

        <DialogContent dividers >
          <Typography>מבצע הדיגום</Typography>
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

        <Box sx={{ padding: '20px', width: '400px', flexDirection: 'row', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography>שם הדוגם</Typography>
          <TextField id="name" label='' variant="outlined" sx={{ padding: '10px' }} />
        </Box>
        <Divider />
        <Box sx={{ padding: '20px', width: '250px', flexDirection: 'row', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography>כתובת נקודת הדיגום</Typography>
          <Typography>S1</Typography>
        </Box>
        <Box sx={{ padding: '20px', width: '250px', flexDirection: 'row', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography>תמונה של נקודת הדיגום</Typography>
          <Typography>s2</Typography>
        </Box>
        <Divider />

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


        <DialogActions sx={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
          <Button autoFocus onClick={handleCancel} sx={{ fontSize: '1rem', }}>
            שמור בלבד
          </Button>
          <Button onClick={handleOk} sx={{ fontSize: '1rem' }}>
            שמור ושלח מייל לצרכן
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

export default function PageGroup2() {
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
          <ListItemText primary='הזמנה לביצוע דיגום' sx={{ textAlign: 'center', fontSize: '2.5rem', color: '#1976d2' }} />
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
