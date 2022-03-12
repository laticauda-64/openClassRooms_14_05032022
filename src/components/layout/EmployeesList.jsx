import { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import store from "../../store/store";
import { employeeSelector } from "../../store/employees/employeeSlice";
import { styled } from "@mui/material";

export default function EmployeesList() {
	const allEmployees = employeeSelector.selectAll(store.getState());

	useEffect(() => {}, []);

	return (
		<TableContainer sx={{ borderRadius: 2 }}>
			<Table aria-label="Employees List">
				<TableHead>
					<TableRow>
						<StyledTableCell>First Name</StyledTableCell>
						<StyledTableCell>Last Name</StyledTableCell>
						<StyledTableCell>Start Date</StyledTableCell>
						<StyledTableCell>Departement</StyledTableCell>
						<StyledTableCell>Date of Birth</StyledTableCell>
						<StyledTableCell>Street</StyledTableCell>
						<StyledTableCell>City</StyledTableCell>
						<StyledTableCell>State</StyledTableCell>
						<StyledTableCell>Zip Code</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{allEmployees.map((employee) => (
						<StyledTableRow key={employee.id}>
							<StyledBodyTableCell component="th" scope="row">
								{employee.private.firstName}
							</StyledBodyTableCell>
							<StyledBodyTableCell>{employee.private.lastName}</StyledBodyTableCell>
							<StyledBodyTableCell>{new Date(employee.company.startDate).toLocaleDateString()}</StyledBodyTableCell>
							<StyledBodyTableCell>{employee.company.department}</StyledBodyTableCell>
							<StyledBodyTableCell>{new Date(employee.private.birthDate).toLocaleDateString()}</StyledBodyTableCell>
							<StyledBodyTableCell>{employee.private.street}</StyledBodyTableCell>
							<StyledBodyTableCell>{employee.private.city}</StyledBodyTableCell>
							<StyledBodyTableCell>{employee.private.state}</StyledBodyTableCell>
							<StyledBodyTableCell>{employee.private.zip}</StyledBodyTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: "#eaeddc",
		color: theme.palette.primary.dark,
		whiteSpace: "nowrap",
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	"&:nth-of-type(odd)": {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	"&:last-child td, &:last-child th": {
		border: 0,
	},
}));

const StyledBodyTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.body}`]: {
		whiteSpace: "wrap",
	},
}));
