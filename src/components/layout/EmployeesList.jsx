import { useState } from "react";
import useTable from "../useTable";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Input from "../controls/Input";
import store from "../../store/store";
import { employeeSelector } from "../../store/employees/employeeSlice";
import { InputAdornment, styled, Toolbar } from "@mui/material";
import { Search } from "@mui/icons-material";

/**
 * Titles for the employees table
 */
const headCells = [
	{ id: "private.firstName", label: "First Name" },
	{ id: "private.lastName", label: "Last Name" },
	{ id: "company.startDate", label: "Start Date" },
	{ id: "company.department", label: "Department" },
	{ id: "private.birthDate", label: "Date of Birth" },
	{ id: "private.street", label: "Street" },
	{ id: "private.city", label: "City" },
	{ id: "private.state", label: "State" },
	{ id: "private.zip", label: "Zip Code" },
];

export default function EmployeesList() {
	/**
	 * Store
	 */
	const allEmployees = employeeSelector.selectAll(store.getState());

	/**
	 * Component states & functions
	 */
	const [records, setRecords] = useState(allEmployees);
	const [filterFn, setFilterFn] = useState({
		fn: (items) => {
			return items;
		},
	});

	const handleSearch = (e) => {
		let target = e.target;
		setFilterFn({
			fn: (items) => {
				if (target.value == "") return items;
				else
					return items.filter(
						(x) =>
							x.private.firstName.toLowerCase().includes(target.value) ||
							x.private.lastName.toLowerCase().includes(target.value) ||
							x.private.street.toLowerCase().includes(target.value) ||
							x.private.city.toLowerCase().includes(target.value) ||
							x.private.state.toLowerCase().includes(target.value) ||
							x.private.zip.toLowerCase().includes(target.value) ||
							x.company.department.toLowerCase().includes(target.value)
					);
			},
		});
	};

	/**
	 * States & functions from useTable reusable component
	 */
	const { TableContainer, Table, TblHead, TblPagination, recordsAfterPagingAndSorting } = useTable(records, headCells, filterFn);

	return (
		<>
			<CustomToolbar>
				<Input
					label="Search Employees"
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<Search />
							</InputAdornment>
						),
					}}
					onChange={handleSearch}
				/>
			</CustomToolbar>
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

const CustomToolbar = styled(Toolbar)(({ theme }) => ({
	paddingTop: "20px",
	paddingBottom: "20px",
	paddingLeft: 0,
	paddingRight: 0,
	width: "50%",
}));
