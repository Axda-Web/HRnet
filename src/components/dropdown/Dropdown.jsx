import { useState } from 'react'
import StyledDropdown from './Dropdown.styled'
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material'
import states from '../../data/stateList'


const Dropdown = ({dropdownName, setEmployeeData, name}) => {

  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
    setEmployeeData( prevState => ({
      ...prevState,
      [name]: e.target.value
    }))
  };

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

  const data = dropdownName === 'State' ? states : departments


  return (
    <StyledDropdown>
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
    </StyledDropdown>
  )
}

export default Dropdown