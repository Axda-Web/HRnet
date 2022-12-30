import React, { Suspense } from 'react'
import StyledEmployeeList from './EmployeeList.styled'

// React Router import
import { Link as RouterLink } from 'react-router-dom'

// Material UI imports
import Link from '@mui/material/Link'
import CircularProgress from '@mui/material/CircularProgress'

// Big component with lazy imports to reduce the size of the JS bundle
const Table = React.lazy( async () => await import ('../../components/table'))



/**
 * EmployeeList component
 * @component
 * @returns {JSX.Element} 
 */
const EmployeeList = () => {
  return (
    <StyledEmployeeList>
      <Suspense fallback={<CircularProgress />}>
        <Table />
      </Suspense>
      <Link component={RouterLink} to="/" className="link" fontSize="1.2rem" marginTop="3rem" marginBottom="3rem">
        Home
      </Link>
    </StyledEmployeeList>
  )
}

export default EmployeeList