import React from 'react';
import { Typography, Box, MenuItem, Select } from '@mui/material';
import RecurringSession from './RecurringSession';

const myStyles = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: '#fbfcc7',
  minHeight: '100vh',
};

const App = () => {
  const [eventType, setEventType] = React.useState('classroom');

  const handleChange = (event) => {
    setEventType(event.target.value);
  };
  return (
    <Box sx={myStyles}>
      <Typography variant='h3'>
        Support of Recurring session from ALM
      </Typography>
      <Typography variant='h4' sx={{ margin: '15px' }}>
        Schedule an event
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Typography variant='body1' sx={{ width: '200px' }}>
          Event Type
        </Typography>
        <Select
          labelId='event-simple-select-label'
          id='event-simple-select'
          value={eventType}
          onChange={handleChange}
          sx={{ width: '275px' }}
        >
          <MenuItem value={'classroom'}>Classroom</MenuItem>
          <MenuItem value={'vc'}>VC</MenuItem>
        </Select>
      </Box>
      <RecurringSession eventType={eventType} />
    </Box>
  );
};

export default App;
