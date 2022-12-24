import React from 'react'
import StyledTable from './Table.styled'
import { DataGrid } from '@mui/x-data-grid';

import { useSelector } from "react-redux";
import { selectEmployeesData } from "../../features/employees-slice";

const Table = () => {

  const employeesData = useSelector(selectEmployeesData)
  console.log('Table employees data: ', employeesData)

  const rows = employeesData
  
  const columns = [
    { field: 'firstName', headerName: 'First Name', width: 100 },
    { field: 'lastName', headerName: 'Last Name', width: 100 },
    { field: 'startDate', headerName: 'Start Date', width: 100 },
    { field: 'department', headerName: 'Department', width: 150 },
    { field: 'dateOfBirth', headerName: 'Date of Birth', width: 150 },
    { field: 'street', headerName: 'Street', width: 200 },
    { field: 'city', headerName: 'City', width: 150 },
    { field: 'state', headerName: 'State', width: 150 },
    { field: 'zipCode', headerName: 'Zip Code', width: 100 },
  ];
  return (
    <StyledTable>
      <DataGrid rows={rows} columns={columns} />
    </StyledTable>
  )
}

export default Table