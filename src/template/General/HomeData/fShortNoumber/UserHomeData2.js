import React from 'react'
import AppWidgetSummary from './app-widget-summary'
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';

export default function UserHomeData2() {
  return (
    <Container maxWidth="xxl">
      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Weekly Sales"
            total={714000}
            color="success"
            icon={<img alt="icon" src="https://minimal-kit-react.vercel.app/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="New Users"
            total={1352831}
            color="info"
            icon={<img alt="icon" src="https://minimal-kit-react.vercel.app/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Item Orders"
            total={1723315}
            color="warning"
            icon={<img alt="icon" src="https://minimal-kit-react.vercel.app/assets/icons/glass/ic_glass_buy.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Bug Reports"
            total={234}
            color="error"
            icon={<img alt="icon" src="https://minimal-kit-react.vercel.app/assets/icons/glass/ic_glass_message.png" />}
          />
        </Grid>
      </Grid>

    </Container>
  )
};

