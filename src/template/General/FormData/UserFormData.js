import { Typography } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


function UserFormData({ text, content }) {

    return (
        <Box sx={{padding:'5px', width:'100%', maxWidth:'100%', height:'165px' , marginRight:'200px' ,boxShadow:'0px 0px 50px rgba(0, 0, 0, 0.1)'}}>
            <Card sx={{ border:'1px solid #55c7ec',display: 'flex',justifyContent:'space-around',padding:'2px', alignItems:'center', height:'150px' , marginBottom:'10px'}}>
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

export default UserFormData