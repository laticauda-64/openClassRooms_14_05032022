import { styled } from "@mui/system";
import Home from "./pages/Home";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#7e940e",
		},
	},
});

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<BaseLayout>
				<Home />
			</BaseLayout>
		</ThemeProvider>
	);
}

const BaseLayout = styled("div")`
	height: 100vh;
	background-color: #d2d8b3;
	padding-top: 40px;
`;
