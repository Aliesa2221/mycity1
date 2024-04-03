import React from 'react'
import StepsFlag from './StepsFlag'
import { Box } from '@mui/material'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Header from '../../../Header/Header';
import Divider from '@mui/material/Divider';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function AddConsumer() {
    const navigate = useNavigate();
    const NivToConsumer = () => {
        navigate('/AddConsumerPage2');
    };

    const ClickBack = () => {
        navigate('/followPlan')
    }
    return (
        <Box sx={{ margin: '50px auto', maxWidth: '1600px', padding: '10px', background: '#f9f9f9', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>

            <Box sx={{ margin: '50px auto', maxWidth: '800px', padding: '20px', background: '#f9f9f9', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '20px' }}>
                    פרטים כללים של הצרכן
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', padding: '10px', direction: 'rtl', marginTop: '50px', flexWrap: 'wrap' }}>
                <TextField id="outlined-basic" sx={{ width: '300px', padding: '5px' }} label="שם צרכן" />
                <TextField id="outlined-basic" sx={{ width: '300px', padding: '5px' }} label="ח.פ צרכן " />
                <TextField id="outlined-basic" sx={{ width: '300px', padding: '5px' }} label="איש קשר" />
                <TextField id="outlined-basic" sx={{ width: '300px', padding: '5px' }} label="טלפון" />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', padding: '10px', direction: 'rtl', flexWrap: 'wrap' }}>
                <TextField id="outlined-basic" sx={{ width: '300px', padding: '5px' }} label="כתובת עסק" />
                <TextField id="outlined-basic" sx={{ width: '300px', padding: '5px' }} label="כתובת למשלוח דואר" />

                <TextField id="outlined-basic" sx={{ width: '300px', padding: '5px' }} label="מייל" />

                {/* <TextField id="outlined-basic" sx={{width:'300px', padding:'5px'}} label="מספר רישוי עסק" /> */}
                <Box sx={{ marginRight: '50px' }}>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">הרשאה למשלוח במייל</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="true" control={<Radio />} label="כן" />
                            <FormControlLabel value="false" control={<Radio />} label="לא" />
                        </RadioGroup>
                    </FormControl>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <FormControl sx={{ marginRight: '50px', }}>
                        <FormLabel id="demo-row-radio-buttons-group-label">סטטוס רישוי</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="true" control={<Radio />} label="תקין" />
                            <FormControlLabel value="false" control={<Radio />} label="לא תקין " />
                        </RadioGroup>
                    </FormControl>
                </Box>
            </Box>

            <Divider sx={{ marginY: '20px' }} />

            <Box sx={{ display: 'flex', justifyContent: 'center', padding: '20px', direction: 'rtl', flexWrap: 'wrap' }}>
                <TextField id="outlined-basic" sx={{ width: '300px', padding: '5px' }} label="תאור פריט רישוי/מגזר עסקי" />
                <TextField id="outlined-basic" sx={{ width: '300px', padding: '5px' }} label="מספר פריט רישוי" />
                <TextField id="outlined-basic" sx={{ width: '300px', padding: '5px' }} label="מהות העסק" />
                <TextField id="outlined-basic" sx={{ width: '300px', padding: '5px' }} label="מספר כרטיס מים" />
                <TextField id="outlined-basic" sx={{ width: '300px', padding: '5px' }} label="הערות" />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <FormControl sx={{ marginRight: '50px' }}>
                    <FormLabel id="demo-row-radio-buttons-group-label">סטטוס עסק</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="false" control={<Radio />} label="לא פעיל " />
                        <FormControlLabel value="true" control={<Radio />} label="פעיל" />

                    </RadioGroup>
                </FormControl>
            </Box>

            <Divider sx={{ marginY: '20px' }} />

            <Box sx={{ margin: '50px auto', maxWidth: '800px', padding: '20px', background: '#f9f9f9', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '20px' }}>
                    פרטי מז״ח
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', padding: '10px', direction: 'rtl', marginTop: '50px', flexWrap: 'wrap' }}>
                <TextField id="outlined-basic" sx={{ width: '300px', padding: '5px' }} label="כמות נדרשת" />
                <TextField id="outlined-basic" sx={{ width: '300px', padding: '5px' }} label="כמות בפועל" />
                <TextField id="outlined-basic" sx={{ width: '300px', padding: '5px' }} label="איש קשר לנושא מז״ח" />
                <TextField id="outlined-basic" sx={{ width: '300px', padding: '5px' }} label="טלפון" />
                <TextField id="outlined-basic" sx={{ width: '300px', padding: '5px' }} label="מייל" />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>

                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <FormControl sx={{ marginRight: '50px' }}>
                        <FormLabel id="demo-row-radio-buttons-group-label">קיים פטור</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="true" control={<Radio />} label="לא" />
                            <FormControlLabel value="false" control={<Radio />} label="כן" />
                        </RadioGroup>
                    </FormControl>
                </Box>


                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <FormControl sx={{ marginRight: '50px' }}>
                        <FormLabel id="demo-row-radio-buttons-group-label">נדרש מז״ח</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="true" control={<Radio />} label="לא" />
                            <FormControlLabel value="false" control={<Radio />} label="כן" />
                        </RadioGroup>
                    </FormControl>
                </Box>
            </Box>
            <Divider sx={{ marginY: '20px' }} />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                <Button onClick={ClickBack} variant="outlined" color="secondary" sx={{ fontSize: '16px' }}>
                    Back
                </Button>
                <Button onClick={NivToConsumer} variant="contained" color="primary" sx={{ fontSize: '16px' }}>
                    Next
                </Button>
            </Box>

        </Box>

    )
}