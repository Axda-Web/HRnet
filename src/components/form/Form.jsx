import React, { useEffect, useState, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import StyledForm from "./Form.styled";

// Material UI imports
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

// This library is used to generate random id
import { v4 as uuidv4 } from "uuid";

// Redux imports
import { useDispatch, useSelector } from "react-redux";
import {
  addEmployee,
  selectEmployeesData,
} from "../../features/employees-slice";

// Big components with lazy imports to reduce the size of the JS bundle
const Modal = React.lazy(async () => await import("../modal"));
const Dropdown = React.lazy(async () => await import("../dropdown"));
const DatePicker = React.lazy(async () => await import("../date-picker"));

/**
 * Form component
 * @component
 * @returns {JSX.Element}
 */
const Form = () => {
  const navigate = useNavigate();
  // Redux logic
  const dispatch = useDispatch();
  const employeesData = useSelector(selectEmployeesData);

  // Modal library state
  const [showModal, setShowModal] = useState(false);

  // Local Form state
  const [employeeData, setEmployeeData] = useState({
    id: uuidv4(),
    firstName: "",
    lastName: "",
    startDate: "",
    department: "",
    dateOfBirth: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
  });

  // Generate a new id everytime the Form state change
  useEffect(() => {
    setEmployeeData((prevState) => ({
      ...prevState,
      id: uuidv4(),
    }));
  }, [employeesData]);

  // Update Form state when a form input is changing
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Send the Form data to the Redux Store + Display the Modal when the form is submited
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEmployee(employeeData));
    setShowModal((prev) => !prev);
    setEmployeeData({
      id: uuidv4(),
      firstName: "",
      lastName: "",
      startDate: "",
      department: "",
      dateOfBirth: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
    });
    navigate("/employee-list");
  };

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
      <Suspense fallback={<CircularProgress />}>
        <DatePicker
          label="Date of Birth"
          name="dateOfBirth"
          setEmployeeData={setEmployeeData}
        />
      </Suspense>
      <Suspense fallback={<CircularProgress />}>
        <DatePicker
          label="Start Date"
          name="startDate"
          setEmployeeData={setEmployeeData}
        />
      </Suspense>
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
      <Suspense fallback={<CircularProgress />}>
        <Dropdown
          dropdownName="State"
          name="state"
          setEmployeeData={setEmployeeData}
        />
      </Suspense>
      <TextField
        name="zipCode"
        value={employeeData.zipCode}
        onChange={handleChange}
        label="Zip Code"
        type="number"
        fullWidth
      />
      <Suspense fallback={<CircularProgress />}>
        <Dropdown
          dropdownName="Department"
          name="department"
          setEmployeeData={setEmployeeData}
        />
      </Suspense>
      <Button
        type="submit"
        variant="contained"
        className="form-btn"
        size="large"
      >
        Save
      </Button>
      <Suspense fallback={<CircularProgress />}>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </Suspense>
    </StyledForm>
  );
};

export default Form;
