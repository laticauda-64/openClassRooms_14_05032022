import { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import store from "../../store/store";
import { employeeSelector } from "../../store/employees/employeeSlice";

export default function EmployeesList() {
	const allEmployees = employeeSelector.selectAll(store.getState());

	useEffect(() => {
		console.log("Employees List :");
		console.log(allEmployees);
	}, []);

	return (
		<TableContainer>
			<Table aria-label="Employees List">
				<TableHead>
					<TableRow>
						<TableCell>First Name</TableCell>
						<TableCell>Last Name</TableCell>
						<TableCell>Start Date</TableCell>
						<TableCell>Departement</TableCell>
						<TableCell>Date of Birth</TableCell>
						<TableCell>Street</TableCell>
						<TableCell>City</TableCell>
						<TableCell>State</TableCell>
						<TableCell>Zip Code</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{allEmployees.map((employee) => (
						<TableRow key={employee.id}>
							<TableCell component="th" scope="row">
								{employee.private.firstName}
							</TableCell>
							<TableCell>{employee.private.lastName}</TableCell>
							<TableCell>{new Date(employee.company.startDate).toLocaleDateString()}</TableCell>
							<TableCell>{employee.company.department}</TableCell>
							<TableCell>{new Date(employee.private.birthDate).toLocaleDateString()}</TableCell>
							<TableCell>{employee.private.street}</TableCell>
							<TableCell>{employee.private.city}</TableCell>
							<TableCell>{employee.private.state}</TableCell>
							<TableCell>{employee.private.zip}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
