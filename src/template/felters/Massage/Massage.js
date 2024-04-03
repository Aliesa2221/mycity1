import * as React from 'react';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';

import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import SmsIcon from '@mui/icons-material/Sms';

export default function BadgeVisibility() {
  const [invisible, setInvisible] = React.useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  return (
    <Box
      sx={{
        color: 'action.active',
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
          marginBottom: 2,
        },
        '& .MuiBadge-root': {
          marginRight: 4,
        },
      }}
    >
      
      <div>
        <Badge color="secondary" variant="dot" invisible={invisible}>
          <SmsIcon />
        </Badge>
        <FormControlLabel
          sx={{ color: 'text.primary' }}
          control={<Switch checked={!invisible} onChange={handleBadgeVisibility} />}
          label="Show Badge"
        />
      </div>
    </Box>
  );
}