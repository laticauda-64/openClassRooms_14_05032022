import { useState } from "react";
import { styled } from "@mui/material";

/**
 * This part of code render all the reusables functions and states of the form
 */

export function useForm(initialFValues, validateOnChange = false, validate) {
	const [values, setValues] = useState(initialFValues);
	const [errors, setErrors] = useState({});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
		if (validateOnChange) validate({ [name]: value });
	};

	const resetForm = () => {
		setValues(initialFValues);
		setErrors({});
	};

	return {
		values,
		setValues,
		errors,
		setErrors,
		handleInputChange,
		resetForm,
	};
}

/**
 * This part of code render the Html structure of the form
 */

export function Form(props) {
	const { children, ...other } = props;
	return (
		<EmployeeForm autoComplete="off" {...other}>
			{children}
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
