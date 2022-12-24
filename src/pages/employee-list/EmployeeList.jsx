import React from 'react'
import StyledEmployeeList from './EmployeeList.styled'
import { Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import Table from '../../components/table'


/**
 * EmployeeList component
 * @component
 * @returns {JSX.Element} 
 */
const EmployeeList = () => {
  return (
    <StyledEmployeeList>
      <Table />
      <Link component={RouterLink} to="/" className="link" fontSize="1.2rem" marginTop="3rem" marginBottom="3rem">
        Home
      </Link>
    </StyledEmployeeList>
  )
}

export default EmployeeList