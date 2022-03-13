/**
 *
 * Reusable tables component: the aim is to split apart the logic of the table component in order
 * to avoid ending with a too big main 'table display' component
 *
 */

import {
	Table as MuiTable,
	TableHead,
	TableRow,
	TableCell,
	TablePagination,
	TableSortLabel,
	TableContainer,
	tableCellClasses,
	styled,
} from "@mui/material";
import { useState } from "react";

export default function useTable(records, headCells, filterFn) {
	const pages = [5, 10, 25];
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(pages[page]);
	const [order, setOrder] = useState();
	const [orderBy, setOrderBy] = useState();

	const Table = (props) => {
		const { children, ...others } = props;
		return <MuiTable {...others}>{children}</MuiTable>;
	};

	const TblHead = (props) => {
		const handleSortRequest = (cellId) => {
			const isAsc = orderBy === cellId && order === "asc";
			setOrder(isAsc ? "desc" : "asc");
			setOrderBy(cellId);
		};

		return (
			<TableHead>
				<TableRow>
					{headCells.map((headCell) => {
						return (
							<StyledTableCell key={headCell.id} sortDirection={orderBy === headCell.id ? order : false}>
								{headCell.disableSorting ? (
									headCell.label
								) : (
									<TableSortLabel
										active={orderBy === headCell.id}
										direction={orderBy === headCell.id ? order : "asc"}
										onClick={() => {
											handleSortRequest(headCell.id);
										}}>
										{headCell.label}
									</TableSortLabel>
								)}
							</StyledTableCell>
						);
					})}
				</TableRow>
			</TableHead>
		);
	};

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const TblPagination = () => (
		<TablePagination
			component="div"
			page={page}
			rowsPerPageOptions={pages}
			rowsPerPage={rowsPerPage}
			count={records.length}
			onPageChange={handleChangePage}
			onRowsPerPageChange={handleChangeRowsPerPage}
		/>
	);

	function stableSort(array, comparator) {
		const stabilizedThis = array.map((el, index) => [el, index]);
		stabilizedThis.sort((a, b) => {
			const order = comparator(a[0], b[0]);
			if (order !== 0) return order;
			return a[1] - b[1];
		});
		return stabilizedThis.map((el) => el[0]);
	}

	function getComparator(order, orderBy) {
		return order === "desc" ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
	}

	function descendingComparator(a, b, orderBy) {
		/**
		 * Custom function adaptater to make it works with nested prop objects.
		 * Ex: ["private"]["firstName"]
		 */
		if (!orderBy) return 0;
		const [firstObjProp, secondObjProp] = orderBy.split(".");

		if (b[firstObjProp][secondObjProp] < a[firstObjProp][secondObjProp]) {
			return -1;
		}
		if (b[firstObjProp][secondObjProp] > a[firstObjProp][secondObjProp]) {
			return 1;
		}
		return 0;
	}

	const recordsAfterPagingAndSorting = () => {
		return stableSort(filterFn.fn(records), getComparator(order, orderBy)).slice(page * rowsPerPage, (page + 1) * rowsPerPage);
	};

	return {
		TableContainer,
		Table,
		TblHead,
		TblPagination,
		recordsAfterPagingAndSorting,
	};
}

/**
 * Styled components
 */

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: "#eaeddc",
		color: theme.palette.primary.dark,
		whiteSpace: "nowrap",
	},
}));
