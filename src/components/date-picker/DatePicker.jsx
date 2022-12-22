import { useState } from 'react'
import StyledDatePicker from './DatePicker.styled'

import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers'
import { Moment } from 'moment';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker as Picker } from '@mui/x-date-pickers';

const DatePicker = ({label}) => {

  const [value, setValue] = useState(null);


  return (
    <StyledDatePicker>
      <LocalizationProvider dateAdapter={AdapterMoment} >
      <Picker
        label={label}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} fullWidth />}
      />
      </LocalizationProvider>
    </StyledDatePicker>
  )
}

export default DatePicker