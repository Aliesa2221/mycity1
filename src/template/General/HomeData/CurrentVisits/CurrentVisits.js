import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import AppCurrentVisits from './AppCurrentVisits';
export default function CurrentVisits() {
  return (
    <Grid xs={12} md={6} lg={4} >
          <AppCurrentVisits
            title="Current Visits"
            chart={{
              series: [
                { label: 'America', value: 4344 },
                { label: 'Asia', value: 5435 },
                { label: 'Europe', value: 1443 },
                { label: 'Africa', value: 4443 },
              ],
            }}
          />
        </Grid>
  )
}

