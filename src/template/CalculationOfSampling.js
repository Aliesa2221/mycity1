import React, { useState } from 'react';
import { Box, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import Header from './Header/Header';
import TotalsSummary from './TotalsSummary';

function CalculationOfSampling() {
    // Sample data for the table
    const tableData = [
        { id: 1, column1: 'Data 1', column2: 'Data 2', column3: 'Data 3', column4: 'Data 4', column5: 'Data 5', column6: 'Data 6', column7: 'Data 7' },
        { id: 2, column1: 'Data 8', column2: 'Data 9', column3: 'Data 10', column4: 'Data 11', column5: 'Data 12', column6: 'Data 13', column7: 'Data 14' },
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
                חישוב תוצאות הדיגום
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
                    <TextField id="numberorder" label="מספר הזמנה למעבדה" variant="outlined" sx={{ marginRight: '10px' }} />
                    <TextField id="digom" label="דיגום מיום" variant="outlined" sx={{ marginRight: '10px' }} />
                </Box>

                <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: '20px' }}>
                    פירוט הדיגום נדרש והבדיקות
                </Typography>

                <TableContainer component={Paper} sx={{ direction: 'rtl' }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 'bold', fontSize: '16px', textAlign: 'center' }}>מספר סידורי</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', fontSize: '16px', textAlign: 'center' }}>סוגי דגימות</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', fontSize: '16px', textAlign: 'center' }}>יחידה</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', fontSize: '16px', textAlign: 'center' }}>ערכי מינימום</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', fontSize: '16px', textAlign: 'center' }}>ערכי מקסימום</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', fontSize: '16px', textAlign: 'center' }}>תוצאה</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', fontSize: '16px', textAlign: 'center' }}>מחיר</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {paginatedData.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell sx={{ textAlign: 'center' }}>{row.column1}</TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>{row.column2}</TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>{row.column3}</TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>{row.column4}</TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>{row.column5}</TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>{row.column6}</TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>{row.column7}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                {/* <Pagination
        count={Math.ceil(tableData.length / rowsPerPage)}
        page={page}
        onChange={(event, value) => setPage(value)}
        variant="outlined"
        shape="rounded"
        sx={{ justifyContent: 'center' }}
      /> */}

                <TotalsSummary
                    totalResults={120}
                    totalPrice={200}
                    TexttotalResults={'סה״כ עלות הבדיקות'}
                    TexttotalPrice={'סה"כ עלות דיגום'}
                />

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    marginTop: '20px',
                    direction: 'rtl'
                }}>
                    <TextField id="date" label="אסמכתא/חשבונית לחיוב" variant="outlined" sx={{ padding: '10px' }} />
                    <TextField id="numbermshalim" label="מספר משלם" variant="outlined" sx={{ padding: '10px' }} />
                    <TextField id="numberniks" label="מספר נכס" variant="outlined" sx={{ padding: '10px' }} />
                    <TextField id="dateforbuy" label="תאריך תשלום נדרש" variant="outlined" sx={{ padding: '10px' }} />

                </Box>
            </Box>

        </Box>
    )
}

export default CalculationOfSampling;
