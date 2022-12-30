import { createSlice } from "@reduxjs/toolkit";

// Employees slice reducer options 
const options = {
    name: 'login',
    initialState: [],
    reducers: {
        addEmployee: (state, action) => ([
            ...state,
            action.payload
        ]),
    },
}

// Employees slice
const employeesSlice = createSlice(options)

// Action creators
export const { addEmployee } = employeesSlice.actions

// Reducer
export default employeesSlice.reducer

// Selectors
export const selectEmployeesData = state => state.employees