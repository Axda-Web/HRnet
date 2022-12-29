import { useEffect, useState } from "react";
import StyledForm from "./Form.styled";
import { TextField, Typography, Button } from "@mui/material";
import Dropdown from "../dropdown";
import DatePicker from '../date-picker'
import { Modal } from '@axda/react-modal'

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

  const [showModal, setShowModal] = useState(false);

  const modalStyle = {
      modalOverlay: {
          background: ''
      },
      modalWrapper: {
          width: '',
          height: '',
          boxShadow: '',
          background: '',
          borderRadius: '',
          border: '',
      },
      modalContent: {
          color: '',
          background: '#FFF',
          fontSize: '1.5rem',
          fontWeight: '700',
          fontFamily: 'Arial'
      },
      closeModalButton: {
          color: ''
      }
  }
  
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
    setShowModal(prev => !prev)
  }


  return (
      <StyledForm onSubmit={handleSubmit}>
        <Typography fontSize="1.3rem">Employee</Typography>
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
        <Modal showModal={showModal} setShowModal={setShowModal} modalStyle={modalStyle}>
            <p>Employee created!</p>
        </Modal>
      </StyledForm>
  );
};

export default Form;
