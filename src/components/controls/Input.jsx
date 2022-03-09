import { TextField } from "@mui/material";

export default function Input(props) {
	const { name, label, value, onChange } = props;

	return <TextField required fullWidth variant="outlined" label={label} name={name} onChange={onChange} value={value} />;
}
