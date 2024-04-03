import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

const options = [
    'הכל',
    'תוצאוצ תקינות',
    'ערכים חריגים',
    'ערכים אסורים',
    'חריגים שאינם בהסדר',
    'ערכים חריגים ואסורים',

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

    const handleEntering = () => {
        if (radioGroupRef.current != null) {
            radioGroupRef.current.focus();
        }
    };

    const handleCancel = () => {
        onClose();
    };

    const handleOk = () => {
        onClose(value);
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Dialog dir='rtl'
            sx={{
                '& .MuiDialog-paper': { width: '80%', maxHeight: 435 },
                '& .MuiTypography-root': { fontSize: '1rem' }, // Adjust font size
            }}
            maxWidth="xs"
            TransitionProps={{ onEntering: handleEntering }}
            open={open}
            {...other}
        >
            <DialogTitle sx={{ textAlign: 'center', fontSize: '2.5rem' }}>תוצאה</DialogTitle>
            <DialogContent dividers>
                <RadioGroup
                    ref={radioGroupRef}
                    aria-label="ringtone"
                    name="ringtone"
                    value={value}
                    onChange={handleChange}
                >
                    {options.map((option) => (
                        <FormControlLabel
                            value={option}
                            key={option}
                            control={<Radio sx={{ '&.Mui-checked': { color: '#4caf50' } }} />} // Adjust checked color
                            label={
                                <span style={{ fontSize: '1rem', color: '#333' }}>{option}</span>
                            } // Adjust label styles
                        />
                    ))}
                </RadioGroup>
            </DialogContent>
            <DialogActions sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button autoFocus onClick={handleCancel} sx={{ fontSize: '1rem' }}>
                    ביטול
                </Button>
                <Button onClick={handleOk} sx={{ fontSize: '1rem' }}>
                    אישור
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

export default function ConfirmationDialog() {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('הכל');

    const handleClickListItem = () => {
        setOpen(true);
    };

    const handleClose = (newValue) => {
        setOpen(false);

        if (newValue) {
            setValue(newValue);
        }
    };

    const BoxStyle = {
        width: '100%',
        textTransform: 'none',
        borderRadius: '100px',
        maxWidth: '300px',
        fontSize: '1.5rem',
        fontWeight: 600,
        maxHeight: '100px',
       
    };

    return (
        <Box sx={BoxStyle} >
            <List component="div" role="group" >
                <ListItemButton
                    aria-haspopup="true"
                    aria-controls="ringtone-menu"
                    aria-label="ringtone"
                    onClick={handleClickListItem}
                    sx={{
                        background: '#f9f9f9', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', borderRadius: '10px',
                        maxWidth: '100%',
                    }}
                >
                    <ListItemText primary="תוצאה" secondary={value} sx={{ textAlign: 'center', fontSize: '2.5rem' }} />
                </ListItemButton >
                <ConfirmationDialogRaw
                    id="ringtone-menu"
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    value={value}
                />
            </List>
        </Box>
    );
}
