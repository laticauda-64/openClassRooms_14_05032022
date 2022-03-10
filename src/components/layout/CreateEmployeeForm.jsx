import { FormLabel } from "@mui/material";
import Input from "../controls/Input";
import DateInput from "../controls/DateInput";
import Select from "../controls/Select";
import Button from "../controls/Button";
import { getStates, getDepartments } from "../../service/employeeService";
import Box from "@mui/material/Box";
import { Form, useForm } from "../useForm";

/**
 * Initial form values
 */

const initialValues = {
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

export default function CreateEmployeeForm() {
	/**
	 * Form states & functions
	 */

	const validate = (fieldValues = values) => {
		let temp = { ...errors };
		if ("firstName" in fieldValues) temp.firstName = fieldValues.firstName ? "" : "This field is required.";
		if ("lastName" in fieldValues) temp.lastName = fieldValues.lastName ? "" : "This field is required.";
		// if ("departmentId" in fieldValues) temp.departmentId = fieldValues.departmentId.length != 0 ? "" : "This field is required.";
		setErrors({
			...temp,
		});

		if (fieldValues == values) return Object.values(temp).every((x) => x == "");
	};

	const { values, errors, setErrors, handleInputChange, resetForm } = useForm(initialValues, true, validate);

	/**
	 * Store
	 */
	// Dispatch some actions here

	return (
		<Form>
			<div className="topBox">
				<Box
					sx={{
						padding: "0 8px",
						width: "50%",
					}}>
					<FormLabel component="legend">Identity :</FormLabel>
					<Input label="First Name" name="firstName" onChange={handleInputChange} value={values.firstName} />
					<Input label="Last Name" name="lastName" onChange={handleInputChange} value={values.lastName} />
					<DateInput name="birthDate" label="Date of Birth" value={values.birthDate} onChange={handleInputChange} />
				</Box>

				<Box
					sx={{
						padding: "0 8px",
						width: "50%",
					}}>
					<FormLabel component="legend">Address :</FormLabel>
					<Input label="Street" name="adress" onChange={handleInputChange} value={values.adress} />
					<Input label="City" name="city" onChange={handleInputChange} value={values.city} />
					<Select name="state" label="State" value={values.state} onChange={handleInputChange} options={getStates()} />
					<Input label="Zip Code" name="zip" onChange={handleInputChange} value={values.zip} />
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
				<DateInput name="startDate" label="Start Date" value={values.startDate} onChange={handleInputChange} />
				<Select name="department" label="Department" value={values.department} onChange={handleInputChange} options={getDepartments()} />
			</Box>
			<Box
				sx={{
					textAlign: "right",
					padding: "15px",
				}}>
				<Button text="Save" />
				<Button text="Reset" variant="outlined" onClick={resetForm} />
			</Box>
		</Form>
	);
}
