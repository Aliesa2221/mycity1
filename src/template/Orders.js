import React, { useState } from 'react';
import { Box, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Header from './Header/Header';
import Typography from '@mui/material/Typography';
import TotalsSummary from './TotalsSummary';

function Orders() {

    const tableData = [
        { id: 1, column1: 'Data 1', column2: 'Data 2', column3: 'Data 3', column4: 'Data 4'},
        { id: 2, column1: 'Data 8', column2: 'Data 9', column3: 'Data 10', column4: 'Data 11'},
        // Add more data as needed
    ];

        // Pagination state
        const [page, setPage] = useState(1);
        const rowsPerPage = 3;
    
        // Calculate page start and end indices
        const startIndex = (page - 1) * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;
    
        // Paginate the data
        const paginatedData = tableData.slice(startIndex, endIndex);
    return (
        <Box sx={{ maxWidth: '100%', padding: '20px', marginTop: '150px' }}>
            <Header />

            <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '20px' }}>
                הזמנות
            </Typography>

            <Box sx={{
                margin: '50px auto',
                maxWidth: '1600px',
                padding: '10px',
                background: '#f9f9f9',
                borderRadius: '10px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
            }}>


                <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', marginTop: '20px', direction: 'rtl' }}>
                    <TextField id="date" label="תאריך" variant="outlined" sx={{ marginRight: '10px' }} />
                    <TextField id="name" label="שם הצרכן" variant="outlined" sx={{ marginRight: '10px' }} />
                    <TextField id="location" label="כתובת" variant="outlined" sx={{ marginRight: '10px' }} />
                    <TextField id="namePerson" label="איש קשר לדיגום" variant="outlined" sx={{ marginRight: '10px' }} />
                    <TextField id="numberForPhonePerson" label="טלפון איש קשר לדיגום" variant="outlined" sx={{ marginRight: '10px' }} />

                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', marginTop: '20px', direction: 'rtl' }}>

                    <TextField id="locationForDigom" label="כתובת נקודת הדיגום" variant="outlined" sx={{ marginRight: '10px' }} />
                    <TextField id="typeDigom" label="סוג הדיגום" variant="outlined" sx={{ marginRight: '10px' }} />
                    <TextField id="description" label="הערות למיקום הדיגום" variant="outlined" sx={{ marginRight: '10px' }} />
                    <TextField id="Coordinates" label="קורדינטות" variant="outlined" sx={{ marginRight: '10px' }} />
                    <TextField id="dateOfSample" label="מועד ביצוע הדיגום" variant="outlined" sx={{ marginRight: '10px' }} />
                </Box>

                <TableContainer component={Paper} sx={{ direction: 'rtl' }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 'bold', fontSize: '16px', textAlign: 'center' }}>מספר סידורי</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', fontSize: '16px', textAlign: 'center' }}>סוגי דגימות</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', fontSize: '16px', textAlign: 'center' }}>יחידה</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', fontSize: '16px', textAlign: 'center' }}>עולת</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {paginatedData.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell sx={{ textAlign: 'center' }}>{row.column1}</TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>{row.column2}</TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>{row.column3}</TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>{row.column4}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                
                <TotalsSummary
                    totalResults={120}
                    totalPrice={122.2}
                    TexttotalResults={'סה״כ בגין עלות הדיגומים'}
                    TexttotalPrice={'עלות חד פעמית לכל דיגום'}
                />
            </Box>


        </Box>
    )
}

export default Orders