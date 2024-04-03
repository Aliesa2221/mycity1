import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Typography from '@mui/material/Typography';

export default function FileOpenItems() {
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <React.Fragment>
            <Typography onClick={handleClickOpen('paper')} sx={{ fontSize: '1.1rem' ,width:'100%',height:'45px', color:'#1976d2' }}>תאריכים</Typography>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title" textAlign={'center'}>תאריכים</DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    <DialogContentText
                    >
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', direction: 'rtl', flexWrap: 'wrap', width: '60%' }}>
                                <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ flexWrap: 'wrap' }}>
                                    <DatePicker />
                                </LocalizationProvider>
                                <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ flexWrap: 'wrap' }}>
                                    <DatePicker />
                                </LocalizationProvider>
                                <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ flexWrap: 'wrap' }}>
                                    <DatePicker />
                                </LocalizationProvider>
                                <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ flexWrap: 'wrap' }}>
                                    <DatePicker />
                                </LocalizationProvider>
                            </Box>
                            <Box sx={{ justifyContent: 'center', direction: 'rtl', flexWrap: 'wrap', width: '40%' }}>
                                <Box sx={{ padding: '20px' }}>
                                    <Typography variant="h7" sx={{ textAlign: 'center', flexWrap: 'wrap' }}>
                                        מתאריך
                                    </Typography>
                                </Box>
                                <Box sx={{ padding: '20px' }}>
                                    <Typography variant="h7" sx={{ textAlign: 'center', lexWrap: 'wrap' }}>
                                        עד תאריך
                                    </Typography>
                                </Box>
                                <Box sx={{ padding: '20px' }}>
                                    <Typography variant="h7" sx={{ textAlign: 'center', flexWrap: 'wrap' }}>
                                        מועד קליטת התוצאות
                                    </Typography>
                                </Box>
                                <Box sx={{ padding: '20px' }}>
                                    <Typography variant="h7" sx={{ textAlign: 'center', flexWrap: 'wrap' }}>
                                        מועד הדיגום
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button item onClick={handleClose} sx={{ fontSize: '1rem' }}>אישור</Button>
                    <Button item onClick={handleClose} sx={{ fontSize: '1rem' }}>ביטול</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}