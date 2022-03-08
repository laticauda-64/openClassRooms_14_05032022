import { Button, FormLabel, TextField } from "@mui/material";
import { styled } from "@mui/material";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import Autocomplete from "@mui/material/Autocomplete";
import { DatePicker } from "@mui/lab";
import getStates from "../service/listOfAmericanStates";
import getDepartment from "../service/listOfCompanyDepartments";
import Box from "@mui/material/Box";

export default function CreateEmployeeForm() {
	const americanStates = getStates();
	const companyDepartments = getDepartment();

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<EmployeeForm>
				<div className="topBox">
					<Box
						sx={{
							padding: "0 8px",
							width: "50%",
						}}>
						<FormLabel component="legend">Identity :</FormLabel>
						<TextField required fullWidth id="outlined-basic" label="First Name" variant="outlined" />
						<TextField required fullWidth id="outlined-basic" label="Last Name" variant="outlined" />
						<DatePicker
							label="Date of Birth"
							value={null}
							renderInput={(params) => <TextField fullWidth required variant="outlined" {...params} />}
						/>
					</Box>
					<Box
						sx={{
							padding: "0 8px",
							width: "50%",
						}}>
						<FormLabel component="legend">Address :</FormLabel>
						<TextField required fullWidth id="outlined-basic" label="Street" variant="outlined" />
						<TextField required fullWidth id="outlined-basic" label="City" variant="outlined" />
						<Autocomplete
							disablePortal
							id="state"
							options={americanStates}
							renderInput={(params) => <TextField {...params} label="State" />}
						/>
						<TextField required fullWidth id="outlined-basic" label="Zip Code" variant="outlined" />
					</Box>
				</div>
				<Box
					sx={{
						padding: "0 15px",
						marginTop: "25px",
					}}>
					<FormLabel sx={{ marginBottom: "10px" }} component="legend">
						Company Status :
					</FormLabel>
					<DatePicker
						label="Start Date"
						value={null}
						renderInput={(params) => <TextField fullWidth required variant="outlined" {...params} />}
					/>
					<Autocomplete
						disablePortal
						id="department"
						options={companyDepartments}
						renderInput={(params) => <TextField {...params} label="Department" />}
					/>
				</Box>
				<Box
					sx={{
						textAlign: "right",
						padding: "15px",
					}}>
					<Button sx={{ width: 100, marginRight: 2 }} variant="contained">
						Save
					</Button>
					<Button sx={{ width: 100 }} variant="outlined">
						Reset
					</Button>
				</Box>
			</EmployeeForm>
		</LocalizationProvider>
	);
}

const EmployeeForm = styled("form")`
	.topBox {
		display: flex;
	}

	.MuiFormControl-root {
		margin: 10px 0;
	}
`;
