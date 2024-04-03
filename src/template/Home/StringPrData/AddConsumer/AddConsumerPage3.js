import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React from 'react'
import Header from '../../../Header/Header'
import { useNavigate } from 'react-router-dom';
import UpLoadFile from '../../../felters/UPLOADFILE/UpLoadFile';
import ButtonAlertSuccess from '../../../felters/ButtonAlertSuccess/ButtonAlertSuccess'
import Divider from '@mui/material/Divider';

export default function AddConsumerPage3() {
    const navigate = useNavigate();
    const Back = () => {
        navigate('/AddConsumerPage2');
    };
    const Next = () => {
        navigate('/followPlan');
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
        <Box sx={{ margin: '50px auto', maxWidth: '1600px', padding: '10px', background: '#f9f9f9', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            {/* <Header /> */}
            <Box sx={{ margin: '50px auto', maxWidth: '800px', padding: '10px', background: '#f9f9f9', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '20px' }}>
                    תכנית הניטור לצרכן
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', padding: '20px', direction: 'rtl', flexWrap: 'wrap' }}>
                <TextField id="outlined-basic" sx={{ width: '250px', padding: '5px' }} label="כמות דיגומים שנתית נדרשת" />
                <TextField id="outlined-basic" sx={{ width: '250px', padding: '5px' }} label="כמות דיגומים בפועל" />
                <TextField id="outlined-basic" sx={{ width: '250px', padding: '5px' }} label="נקודת הדיגום על פי הכללים" />
                <TextField id="outlined-basic" sx={{ width: '250px', padding: '5px' }} label="הערות למיקום נקודת הדיגום" />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', padding: '20px', direction: 'rtl', flexWrap: 'wrap' }}>
                <TextField id="outlined-basic" sx={{ width: '250px', padding: '5px' }} label="קרדינטות" />
                <TextField id="outlined-basic" sx={{ width: '250px', padding: '5px' }} label="הוספת תמונה לנקודת הדיגום" />
                <TextField id="outlined-basic" sx={{ width: '250px', padding: '5px' }} label="כתובת נקודת הדיגום" />
                <TextField id="outlined-basic" sx={{ width: '250px', padding: '5px' }} label="מט״ש קולט שפכים" />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', padding: '20px', direction: 'rtl', flexWrap: 'wrap' }}>
                <TextField id="outlined-basic" sx={{ width: '250px', padding: '5px' }} label="איש קשר לדיגום" />
                <TextField id="outlined-basic" sx={{ width: '250px', padding: '5px' }} label="תפקיד" />
                <TextField id="outlined-basic" sx={{ width: '250px', padding: '5px' }} label="טלפון איש קשר לדיגום" />
                <TextField id="outlined-basic" sx={{ width: '250px', padding: '5px' }} label="מייל" />

            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', padding: '20px', direction: 'rtl', flexWrap: 'wrap' }}>
                <TextField id="outlined-basic" sx={{ width: '250px', padding: '5px' }} label="סיבות להקלות" />

                <TextField id="outlined-basic" sx={{ width: '250px', padding: '5px' }} label="שנת הדיגום" />
                <TextField id="outlined-basic" sx={{ width: '250px', padding: '5px' }} label="סוג דיגום" />
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <FormControl sx={{ marginRight: '30px' }}>
                        <FormLabel id="demo-row-radio-buttons-group-label">קיים הסדר שפכים חריגים מול צרכן</FormLabel>
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
            </Box>
            <Divider sx={{ marginY: '20px' }} />

            {/* Section 1 */}
            <Box sx={boxStyle}>
                <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '20px' }}>
                    תקשורת עם הצרכן
                </Typography>
            </Box>

            {/* Section 2 */}
            <Box sx={boxStyle}>
                <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '20px' }}>
                    סיכומי דיונים
                </Typography>
                <UpLoadFile />
            </Box>

            <Divider sx={{ marginY: '20px' }} />

            {/* Section 3 */}
            <Box sx={boxStyle}>
                <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '20px' }}>
                    מכתבים שיצאו
                </Typography>
                <UpLoadFile />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                {/* <StepsFlag /> */}
                <Button onClick={Back} variant="outlined" color="secondary" sx={{ fontSize: '16px' }}>Back</Button>
                <ButtonAlertSuccess name='successful' variant="contained" color="primary" sx={{ fontSize: '16px' }} />
            </Box>
        </Box>
    )
}

