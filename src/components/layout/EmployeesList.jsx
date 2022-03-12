import { useState } from "react";
import useTable from "../useTable";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import store from "../../store/store";
import { employeeSelector } from "../../store/employees/employeeSlice";
import { styled } from "@mui/material";

/**
 * Titles for the employees table
 */
const headCells = [
	{ id: "private.firstName", label: "First Name" },
	{ id: "private.lastName", label: "Last Name" },
	{ id: "company.startDate", label: "Start Date" },
	{ id: "company.department", label: "Department" },
	{ id: "private.birthDate", label: "Date of Birth" },
	{ id: "employee.private.street", label: "Street" },
	{ id: "employee.private.city", label: "City" },
	{ id: "employee.private.state", label: "State" },
	{ id: "employee.private.zip", label: "Zip Code" },
];

export default function EmployeesList() {
	/**
	 * Store
	 */
	const allEmployees = employeeSelector.selectAll(store.getState());

	/**
	 * Component states
	 */
	const [records, setRecords] = useState(allEmployees);
	const [filterFn, setFilterFn] = useState({
		fn: (items) => {
			return items;
		},
	});

	/**
	 * States & functions from useTable reusable component
	 */
	const { TableContainer, Table, TblHead, TblPagination, recordsAfterPagingAndSorting } = useTable(records, headCells, filterFn);

	return (
		<>
			<TableContainer sx={{ borderRadius: 2 }}>
				<Table aria-label="Employees List">
					<TblHead />
					<TableBody>
						{recordsAfterPagingAndSorting().map((employee) => (
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
			<TblPagination />
		</>
	);
}

/**
 * Styled components
 */

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
