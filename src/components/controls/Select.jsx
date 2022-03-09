import { Autocomplete, TextField } from "@mui/material";

export default function Select(props) {
	const { name, label, value, onChange, options } = props;

	return (
		<Autocomplete
			value={value || null}
			isOptionEqualToValue={(option, value) => option.label === value}
			disablePortal
			options={options}
			onChange={(event) => {
				event.target.name = name;
				onChange(event);
			}}
			renderInput={(params) => <TextField {...params} label={label} required />}
		/>
	);
}
