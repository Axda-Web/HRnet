import React from 'react'
import StyledTable from './Table.styled'
import { DataGrid } from '@mui/x-data-grid';

const Table = () => {

  const rows = [
    { id: 1, firstName: 'Alyx', lastName: 'DARENNE', startDate: '01/09/2022', department: 'Engineering', dateOfBirth: '17/02/1990', street: '1 B Chemin de la Terrasse', city: 'Toulouse', state: 'NY', zipCode: '10001' },
    { id: 2, firstName: 'Julien', lastName: 'SUBRA', startDate: '01/09/2022', department: 'Marketing', dateOfBirth: '17/02/1990', street: '1 B Chemin de la Terrasse', city: 'Toulouse', state: 'NY', zipCode: '10001' },
    { id: 3, firstName: 'Greg', lastName: 'HYPPOLYTE', startDate: '01/09/2022', department: 'Marketing', dateOfBirth: '17/02/1990', street: '1 B Chemin de la Terrasse', city: 'Toulouse', state: 'NY', zipCode: '10001' }
  ];
  
  const columns = [
    { field: 'firstName', headerName: 'First Name', width: 150 },
    { field: 'lastName', headerName: 'Last Name', width: 150 },
    { field: 'startDate', headerName: 'Start Date', width: 150 },
    { field: 'department', headerName: 'Department', width: 150 },
    { field: 'dateOfBirth', headerName: 'Date of Birth', width: 150 },
    { field: 'street', headerName: 'Street', width: 100 },
    { field: 'city', headerName: 'City', width: 100 },
    { field: 'state', headerName: 'State', width: 100 },
    { field: 'zipCode', headerName: 'Zip Code', width: 100 },
  ];
  return (
    <StyledTable>
      <DataGrid rows={rows} columns={columns} />
    </StyledTable>
  )
}

export default Table