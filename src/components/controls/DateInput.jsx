import { DatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { fr } from "date-fns/locale";
import { TextField } from "@mui/material";

export default function DateInput(props) {
	const { name, label, value, onChange } = props;

	/**
	 * Adapter pattern
	 * => Convert event object from date input to be use with input handleChange function
	 */
	const convertToDefEventPara = (name, value) => ({
		target: {
			name,
			value,
		},
	});

	return (
		<LocalizationProvider locale={fr} dateAdapter={AdapterDateFns}>
			<DatePicker
				label={label}
				value={value}
				onChange={(date) => onChange(convertToDefEventPara(name, Date.parse(date)))}
				renderInput={(params) => <TextField fullWidth required variant="outlined" {...params} />}
			/>
		</LocalizationProvider>
	);
}
