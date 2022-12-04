import React from 'react';
import {
  Box,
  TextField,
  Typography,
  styled,
  MenuItem,
  Select,
  Button,
} from '@mui/material';
import axios from 'axios';

const formStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  margin: '10px',
};

const CustomBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '15px',
  '& .MuiFormControl-root': {
    width: '275px',
  },
  '& .MuiSelect-select': {
    width: '275px',
    boxSizing: 'border-box',
  },
});

const RecurringSession = ({ eventType }) => {
  const [inputData, setInputData] = React.useState({
    startDate: '',
    startTime: '',
    duration: 0,
    occurence: '',
    location: '',
    sessionURL: '',
    repeatEvent: 'monthly',
  });
  const url =
    'https://elastic.snaplogic.com/api/1/rest/slsched/feed/AdobeStage/projects/ProductCaptivatePrime_LMS/RecurringILT-Session';

  const handleInputChange = (event) => {
    setInputData({ ...inputData, [event.target.id]: event.target.value });
  };

  const handleSubmit = () => {
    console.log(inputData, 'll');
    axios
      .post(url, inputData, {
        headers: {
          Authorization: `Bearer ksj5t5ShTbWCtogGqbfMl0C7PD6ELNM0`,
          'Content-Type': 'application/json',
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message));
  };

  return (
    <Box sx={formStyles}>
      <CustomBox>
        <Typography variant='body1' sx={{ width: '200px' }}>
          Start Date
        </Typography>
        <TextField
          id='startDate'
          type='date'
          value={inputData.startDate}
          onChange={handleInputChange}
          required
        />
      </CustomBox>
      <CustomBox>
        <Typography variant='body1' sx={{ width: '200px' }}>
          Start Time
        </Typography>
        <TextField
          id='startTime'
          type='time'
          value={inputData.startTime}
          onChange={handleInputChange}
          required
        />
      </CustomBox>

      <CustomBox>
        <Typography variant='body1' sx={{ width: '200px' }}>
          Duration
        </Typography>
        <TextField
          id='duration'
          label='Duration'
          type='number'
          value={inputData.duration}
          onChange={handleInputChange}
          required
        />
      </CustomBox>
      <CustomBox>
        <Typography variant='body1' sx={{ width: '200px' }}>
          Repeat Event
        </Typography>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={inputData.repeatEvent}
          onChange={handleInputChange}
          required
        >
          <MenuItem value={'monthly'}>Monthly</MenuItem>
          <MenuItem value={'weekly'}>Weekly</MenuItem>
          <MenuItem value={'daily'}>Daily</MenuItem>
        </Select>
      </CustomBox>
      <CustomBox>
        <Typography variant='body1' sx={{ width: '200px' }}>
          Occurence
        </Typography>
        <TextField
          id='occurence'
          label='Occurence'
          type='text'
          value={inputData.occurence}
          onChange={handleInputChange}
        />
      </CustomBox>
      {eventType === 'classroom' ? (
        <CustomBox>
          <Typography variant='body1' sx={{ width: '200px' }}>
            Location
          </Typography>
          <TextField
            id='location'
            label='location'
            type='text'
            value={inputData.location}
            onChange={handleInputChange}
          />
        </CustomBox>
      ) : (
        <CustomBox>
          <Typography variant='body1' sx={{ width: '200px' }}>
            Session URL
          </Typography>
          <TextField
            id='sessionURL'
            label='sessionURL'
            type='text'
            value={inputData.sessionURL}
            onChange={handleInputChange}
          />
        </CustomBox>
      )}
      <Button variant='contained' onClick={handleSubmit}>
        Sync Data
      </Button>
    </Box>
  );
};

export default RecurringSession;
