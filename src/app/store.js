import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from '../features/employees-slice'

export const store = configureStore({
  reducer: {
    employees: employeesReducer,
  },
});
