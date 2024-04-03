import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, styled } from '@mui/system';

const TotalsBox = styled(Box)({
    backgroundColor: '#f0f0f0',
    padding: '16px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: 'auto',
    marginTop: '16px',
});

const TotalItem = styled(Typography)({
    marginBottom: '8px',
    '&:last-child': {
        marginBottom: 0,
    },
});

function TotalsSummary({ totalResults, totalPrice, TexttotalResults , TexttotalPrice ,}) {
    const totalMaximum = totalResults + totalPrice;

    return (
        <TotalsBox>
            <TotalItem variant="h6" align="center">
                {TexttotalResults}: {totalResults.toFixed(2)}
            </TotalItem>
            <TotalItem variant="h6" align="center">
                {TexttotalPrice} : {totalPrice.toFixed(2)}
            </TotalItem>
            <TotalItem variant="h6" align="center">
                סה"כ חיוב: {totalMaximum.toFixed(2)}
            </TotalItem>
        </TotalsBox>
    );
}

export default TotalsSummary;
