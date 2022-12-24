import { useState } from 'react'
import StyledDatePicker from './DatePicker.styled'

import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker as Picker } from '@mui/x-date-pickers';

const DatePicker = ({label, name, setEmployeeData}) => {

  const [value, setValue] = useState(null);
  // console.log(typeof (value._d))


  return (
    <StyledDatePicker>
      <LocalizationProvider dateAdapter={AdapterMoment} >
      <Picker
        label={label}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          setEmployeeData( prevState => {
            const date = new Date(newValue)

            return {
              ...prevState,
              [name]: date.toLocaleDateString()
            }
          })
        }}
        renderInput={(params) => <TextField {...params} fullWidth />}
      />
      </LocalizationProvider>
    </StyledDatePicker>
  )
}

export default DatePicker