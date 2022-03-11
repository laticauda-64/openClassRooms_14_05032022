import { FormLabel } from "@mui/material";
import Input from "../controls/Input";
import DateInput from "../controls/DateInput";
import Select from "../controls/Select";
import Button from "../controls/Button";
import { getStates, getDepartments } from "../../service/employeeService";
import Box from "@mui/material/Box";
import { Form, useForm } from "../useForm";
import { useDispatch } from "react-redux";
import { AddEmployee } from "../../store/employees/employeeSlice";
import { employeeSelector } from "../../store/employees/employeeSlice";
import store from "../../store/store";

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

	/**
	 * Validate fields in real time (onChange) and on form submit (onSubmit)
	 * @param {*} fieldValues
	 * @returns void || bool
	 */
	const validate = (fieldValues = values) => {
		let temp = { ...errors };
		if ("firstName" in fieldValues) temp.firstName = fieldValues.firstName ? "" : "This field is required.";
		if ("lastName" in fieldValues) temp.lastName = fieldValues.lastName ? "" : "This field is required.";
		if ("adress" in fieldValues) temp.adress = fieldValues.adress ? "" : "This field is required.";
		if ("city" in fieldValues) temp.city = fieldValues.city ? "" : "This field is required.";
		if ("zip" in fieldValues) temp.zip = /^\d{5}$/g.test(fieldValues.zip) ? "" : "Zip code must contain 5 numbers.";
		if ("birthDate" in fieldValues) temp.birthDate = fieldValues.birthDate !== null ? "" : "This field is required.";
		if ("startDate" in fieldValues) temp.startDate = fieldValues.startDate !== null ? "" : "This field is required.";
		if ("state" in fieldValues) temp.state = fieldValues.state !== null ? "" : "This field is required.";
		if ("department" in fieldValues) temp.department = fieldValues.department !== null ? "" : "This field is required.";

		setErrors({
			...temp,
		});
		// Used to validate each field when form is submitted
		if (fieldValues == values) return Object.values(temp).every((x) => x == "");
	};

	const { values, errors, setErrors, handleInputChange, resetForm } = useForm(initialValues, true, validate);

	const handleSubmit = (e) => {
		e.preventDefault();

		/**
		 * If form is valid, dispatch current form state (values) in the store
		 */
		if (validate()) {
			dispatch(
				AddEmployee({
					id: lastIndex + 1,
					private: {
						firstName: values.firstName,
						lastName: values.lastName,
						birthDate: values.birthDate,
						street: values.adress,
						city: values.city,
						state: values.state,
						zip: values.zip,
					},
					company: { startDate: values.startDate, department: values.department },
				})
			);
			resetForm();
		}
	};

	/**
	 * Store
	 */
	const lastIndex = Math.max(...employeeSelector.selectIds(store.getState()));
	const dispatch = useDispatch();

	return (
		<Form onSubmit={handleSubmit}>
			<div className="topBox">
				<Box
					sx={{
						padding: "0 8px",
						width: "50%",
					}}>
					<FormLabel component="legend">Identity :</FormLabel>
					<Input label="First Name" name="firstName" onChange={handleInputChange} value={values.firstName} error={errors.firstName} />
					<Input label="Last Name" name="lastName" onChange={handleInputChange} value={values.lastName} error={errors.lastName} />
					<DateInput
						name="birthDate"
						label="Date of Birth"
						disableFuture
						value={values.birthDate}
						onChange={handleInputChange}
						error={errors.birthDate}
					/>
				</Box>

				<Box
					sx={{
						padding: "0 8px",
						width: "50%",
					}}>
					<FormLabel component="legend">Address :</FormLabel>
					<Input label="Street" name="adress" onChange={handleInputChange} value={values.adress} error={errors.adress} />
					<Input label="City" name="city" onChange={handleInputChange} value={values.city} error={errors.city} />
					<Select name="state" label="State" value={values.state} onChange={handleInputChange} options={getStates()} error={errors.state} />
					<Input label="Zip Code" name="zip" onChange={handleInputChange} value={values.zip} error={errors.zip} />
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
				<DateInput name="startDate" label="Start Date" value={values.startDate} onChange={handleInputChange} error={errors.startDate} />
				<Select
					name="department"
					label="Department"
					value={values.department}
					onChange={handleInputChange}
					options={getDepartments()}
					error={errors.department}
				/>
			</Box>
			<Box
				sx={{
					textAlign: "right",
					padding: "15px",
				}}>
				<Button text="Save" type="submit" />
				<Button text="Reset" variant="outlined" onClick={resetForm} />
			</Box>
		</Form>
	);
}
