import { Typography } from '@mui/material'
import React from 'react'
import "./UserHomeData.css";
// import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


function UserHomeData({ text, content }) {
    // const theme = useTheme();

    return (
        <Box sx={{padding:'5px', width:'400px', maxWidth:'500px'}}>
            <Card sx={{ border:'1px solid #55c7ec',display: 'flex',justifyContent:'space-around',padding:'2px', alignItems:'center'}}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography color={'gray'} variant="h5">
                            {content}
                        </Typography>
                    </CardContent>
                </Box>
                <Typography color={'gray'} variant='h5'>{text}</Typography>
            </Card>
        </Box>
    )
}

export default UserHomeData