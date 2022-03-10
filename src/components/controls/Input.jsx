import { TextField } from "@mui/material";

export default function Input(props) {
	const { name, label, value, onChange, error = null, ...other } = props;

	return (
		<TextField
			fullWidth
			variant="outlined"
			label={label}
			name={name}
			onChange={onChange}
			value={value}
			{...other}
			{...(error && { error: true, helperText: error })}
		/>
	);
}
