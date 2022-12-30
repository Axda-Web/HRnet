import React from 'react'
import StyledCreateEmployee from './CreateEmployee.styled'

// React Router import
import { Link as RouterLink } from 'react-router-dom';

// Material UI imports
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

// Component import
import Form from '../../components/form'


/**
 * CreateEmployee component
 * @component
 * @returns {JSX.Element} 
 */
const CreateEmployee = () => {

  return (
    <StyledCreateEmployee>
      <Link component={RouterLink} to="/employee-list" className="link" fontSize="1.2rem">
        View Current Employees
      </Link>
      <Typography component="h1" level="h1" fontSize="2rem" fontWeight="bold" textAlign="center" margin="2rem 0">Create Employee</Typography>
      <Form />
    </StyledCreateEmployee>
  )
}

export default CreateEmployee