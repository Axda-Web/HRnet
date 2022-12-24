import { useEffect, useState } from "react";
import StyledForm from "./Form.styled";
import { TextField, Typography, Button } from "@mui/material";
import Dropdown from "../dropdown";
import DatePicker from '../date-picker'

import { v4 as uuidv4 } from 'uuid';

import { useDispatch, useSelector } from "react-redux";
import { addEmployee, selectEmployeesData } from "../../features/employees-slice";




/**
 * Form component
 * @component
 * @returns {JSX.Element} 
 */
const Form = () => {

  const dispatch = useDispatch()
  const employeesData = useSelector(selectEmployeesData)

  
  const [ employeeData, setEmployeeData ] = useState({
    id: uuidv4(),
    firstName: '',
    lastName: '',
    startDate: '',
    department: '',
    dateOfBirth: '',
    street: '',
    city:'',
    state: '',
    zipCode: ''
  })
  
  useEffect( () => {
    setEmployeeData( prevState => ({
      ...prevState,
      id: uuidv4()
    }))
  }, [employeesData])

  const handleChange = e => {
    const { name, value } = e.target
    setEmployeeData( prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(addEmployee(employeeData))
  }


  return (
      <StyledForm onSubmit={handleSubmit}>
        <TextField
          name="firstName"
          value={employeeData.firstName}
          onChange={handleChange}
          label="First Name"
          fullWidth
        />
        <TextField
          name="lastName"
          value={employeeData.lastName}
          onChange={handleChange}
          label="Last Name"
          fullWidth
        />
        <DatePicker
          label="Date of Birth"
          name="dateOfBirth"
          setEmployeeData={setEmployeeData}
          />
        <DatePicker
          label="Start Date"
          name="startDate"
          setEmployeeData={setEmployeeData}
        />
        <Typography fontSize="1.3rem">Address</Typography>
        <TextField
          name="street"
          value={employeeData.street}
          onChange={handleChange}
          label="Street"
          fullWidth
        />
        <TextField
          name="city"
          value={employeeData.city}
          onChange={handleChange}
          label="City"
          fullWidth
        />
        <Dropdown
          dropdownName="State"
          name="state"
          setEmployeeData={setEmployeeData}
        />
        <TextField
          name="zipCode"
          value={employeeData.zipCode}
          onChange={handleChange}
          label="Zip Code"
          type="number"
          fullWidth
        />
        <Dropdown
          dropdownName="Department"
          name="department"
          setEmployeeData={setEmployeeData}
        />
        <Button type="submit" variant="contained" className="form-btn" size="large">Save</Button>
      </StyledForm>
  );
};

export default Form;
