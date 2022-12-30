import { useState } from 'react'
import PropTypes from 'prop-types'

// Material UI imports
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'

// Dropdown State options
import states from '../../data/stateList'



/**
 * Dropdown component
 * @component
 * @returns {JSX.Element} 
 */
const Dropdown = ({dropdownName, setEmployeeData, name}) => {

  // Local state containing the selected value
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);

    // Transfer the selected value to the Form component state
    setEmployeeData( prevState => ({
      ...prevState,
      [name]: e.target.value
    }))
  };

  // Dropdown Department options
  const departments = [{
      id: 1,
      name: 'Sales'
    }, {
      id: 2,
      name: 'Marketing'
    }, {
      id: 3,
      name: 'Engineering'
    }, {
      id: 4,
      name: 'Human Resources'
    }, {
      id: 5,
      name: 'Legal'
    }
  ]

  // Check which option list to choose
  const data = dropdownName === 'State' ? states : departments


  return (
    <>
      <FormControl fullWidth>
        <InputLabel id={`${dropdownName}-select-label`}>{dropdownName}</InputLabel>
        <Select
          labelId={`${dropdownName}-select-label`}
          id={`${dropdownName}-select`}
          value={value}
          label={dropdownName}
          onChange={handleChange}
        >
          {data.map( (item, index) => <MenuItem key={index} value={item.name}>{item.name}</MenuItem> )}
        </Select>
      </FormControl>
    </>
  )
}


Dropdown.propTypes = {
  dropdownName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  setEmployeeData: PropTypes.func.isRequired
}

export default Dropdown