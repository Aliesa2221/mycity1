import { Box } from '@mui/material'
import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import StepsFlag from './StepsFlag'
import Header from '../../../Header/Header';
import Table2 from '../../../Table/Table2';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';


export default function AddConsumerPage2() {
    const navigate = useNavigate();
    const Back = () => {
        navigate('/AddConsumer');
    };
    const Next = () => {
        navigate('/AddConsumerPage3');
    };


    return (
        <Box sx={{ margin: '50px auto', maxWidth: '1600px', padding: '10px', background: '#f9f9f9', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            {/* <Header /> */}

            <Box sx={{ margin: '50px auto', maxWidth: '800px', padding: '10px', background: '#f9f9f9', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '20px' }}>
                פרטי צריכות מים       
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', padding: '20px', direction: 'rtl' , flexWrap: 'wrap'}}>

        <TextField id="outlined-basic" sx={{ width: '100%', maxWidth: '300px', padding: '5px', marginBottom: '20px' }} label="צריכת מים חודשית" />
        <TextField id="outlined-basic" sx={{ width: '100%', maxWidth: '300px', padding: '5px', marginBottom: '20px'}} label="ספיקות שפכים חודשיות" />
        <TextField id="outlined-basic" sx={{ width: '100%', maxWidth: '300px', padding: '5px', marginBottom: '20px'}} label="מספר מונה מים" />
        <TextField id="outlined-basic" sx={{ width: '100%', maxWidth: '300px', padding: '5px', marginBottom: '20px'}} label="סימון שוחה" />
        <TextField id="outlined-basic" sx={{ width: '100%', maxWidth: '300px', padding: '5px', marginBottom: '20px'}} label="אחוז ההזרמה לביוב לפי אישור" />



                <Box sx={{ display: 'flex', justifyContent: 'center' ,flexDirection: 'column', marginRight: '30px' }}>
                    <FormControl sx={{ marginRight: '30px' }}>
                        <FormLabel id="demo-row-radio-buttons-group-label">אישור מכון התקנים</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="true" control={<Radio />} label="קיים" />
                            <FormControlLabel value="false" control={<Radio />} label="לא קיים" />
                        </RadioGroup>
                    </FormControl>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center',flexDirection: 'column', marginRight: '30px'  }}>
                    <FormControl sx={{ marginRight: '30px' }}>
                        <FormLabel id="demo-row-radio-buttons-group-label">הקצאת מים</FormLabel>
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

            <Box sx={{ margin: '50px auto', maxWidth: '800px', padding: '10px', background: '#f9f9f9', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '20px' }}>
                נתוני צריכות מים לפי שנים
                </Typography>
            </Box>
            <Box  sx={{ justifyContent: 'center'  ,boxShadow:'2px 2px 2px 1px rgba(0, 0, 0, 0.2)', width:'75%' , marginLeft:'12%'}}>
            <Table2 />
            </Box>
           
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                {/* <StepsFlag /> */}
            <Button onClick={Back} variant="outlined" color="secondary" sx={{ fontSize: '16px' }}>Back</Button>
            <Button onClick={Next} variant="contained" color="primary" sx={{ fontSize: '16px' }}>Next</Button>
            </Box>


        </Box>
    )
}

