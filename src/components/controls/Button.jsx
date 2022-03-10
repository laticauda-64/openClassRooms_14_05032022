import { Button as MuiButton, styled } from "@mui/material";

export default function Button(props) {
	const { text, size, color, variant, onClick, ...other } = props;

	return (
		<CustomButton
			variant={variant || "contained"}
			size={size || "large"}
			color={color || "primary"}
			onClick={onClick}
			sx={{ width: 100, margin: 1 }}
			{...other}>
			{text}
		</CustomButton>
	);
}

const CustomButton = styled(MuiButton)`
	text-transform: none;
`;
