import { useState } from 'react'
import PropTypes from 'prop-types'

// Material UI imports
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker as Picker } from '@mui/x-date-pickers/DatePicker';



/**
 * DatePicker component
 * @component
 * @returns {JSX.Element} 
 */
const DatePicker = ({label, name, setEmployeeData}) => {

  // Local state containing the choosen date
  const [value, setValue] = useState(null);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterMoment} >
      <Picker
        label={label}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);

          // Transfer the choosen date to the Form component state
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
    </>
  )
}


DatePicker.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  setEmployeeData: PropTypes.func.isRequired
}

export default DatePicker