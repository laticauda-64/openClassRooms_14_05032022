import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getEmployees } from "../../service/employeeService";

const employeesAdapter = createEntityAdapter();

export const employeeSlice = createSlice({
	name: "employeeList",
	initialState: employeesAdapter.upsertMany(employeesAdapter.getInitialState(), getEmployees()),

	reducers: { AddEmployee: employeesAdapter.addOne, RemoveEmployee: employeesAdapter.removeOne, UpdateEmployee: employeesAdapter.updateOne },
});

export default employeeSlice.reducer;

export const { AddEmployee, RemoveEmployee, UpdateEmployee } = employeeSlice.actions;

export const employeeSelector = employeesAdapter.getSelectors((state) => state.employee);
