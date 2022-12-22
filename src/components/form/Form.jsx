import StyledForm from "./Form.styled";
import { TextField, Typography, Button } from "@mui/material";
import Dropdown from "../dropdown";
import DatePicker from '../date-picker'



/**
 * Form component
 * @component
 * @returns {JSX.Element} 
 */
const Form = () => {

  return (
      <StyledForm>
        <TextField
          label="First Name"
          fullWidth
        />
        <TextField
          label="Last Name"
          fullWidth
        />
        <DatePicker label="Date of Birth" />
        <DatePicker label="Start Date" />
        <Typography fontSize="1.3rem">Address</Typography>
        <TextField
          label="Street"
          fullWidth
        />
        <TextField
          label="City"
          fullWidth
        />
        <Dropdown name="State" />
        <TextField
          label="Zip Code"
          type="number"
          fullWidth
        />
        <Dropdown name="Department" />
        <Button variant="contained" className="form-btn" size="large">Save</Button>
      </StyledForm>
  );
};

export default Form;
