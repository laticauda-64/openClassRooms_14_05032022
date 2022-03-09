import { Button, FormLabel } from "@mui/material";
import Input from "../controls/Input";
import DateInput from "../controls/DateInput";
import Select from "../controls/Select";
import { styled } from "@mui/material";
import { getStates, getDepartments } from "../../service/employeeService";
import Box from "@mui/material/Box";
import { useState } from "react";

export default function CreateEmployeeForm() {
	/**
	 * Form states & functions
	 */
	const initialFormValues = {
		firstName: "",
		lastName: "",
		birthDate: null,
		adress: "",
		city: "",
		state: null,
		zip: "",
		startDate: null,
		department: null,
	};
	const [formValues, setFormValues] = useState(initialFormValues);

	const handleInputChange = (e) => {
		let { name, value } = e.target;

		setFormValues({
			...formValues,
			[name]: value,
		});
	};

	/**
	 * Store
	 */
	// Dispatch some actions here

	return (
		<EmployeeForm autoComplete="off">
			<div className="topBox">
				<Box
					sx={{
						padding: "0 8px",
						width: "50%",
					}}>
					<FormLabel component="legend">Identity :</FormLabel>
					<Input label="First Name" name="firstName" onChange={handleInputChange} value={formValues.firstName} />
					<Input label="Last Name" name="lastName" onChange={handleInputChange} value={formValues.lastName} />
					<DateInput name="birthDate" label="Date of Birth" value={formValues.birthDate} onChange={handleInputChange} />
				</Box>

				<Box
					sx={{
						padding: "0 8px",
						width: "50%",
					}}>
					<FormLabel component="legend">Address :</FormLabel>
					<Input label="Street" name="adress" onChange={handleInputChange} value={formValues.adress} />
					<Input label="City" name="city" onChange={handleInputChange} value={formValues.city} />
					<Select name="state" label="State" value={formValues.state} onChange={handleInputChange} options={getStates()} />
					<Input label="Zip Code" name="zip" onChange={handleInputChange} value={formValues.zip} />
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
				<DateInput name="startDate" label="Start Date" value={formValues.startDate} onChange={handleInputChange} />
				<Select name="department" label="Department" value={formValues.department} onChange={handleInputChange} options={getDepartments()} />
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
