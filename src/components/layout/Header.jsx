import { styled } from "@mui/material";
import logo from "../../assets/img/wealth_health_logo.png";

export default function Header() {
	return (
		<HeaderBloc>
			{/* <img src={logo} width="150px" height="138px" alt="Logo de Wealth Health" /> */}
			<AppTitle>HRnet</AppTitle>
		</HeaderBloc>
	);
}

const HeaderBloc = styled("div")`
	display: flex;
	align-items: center;

	img {
		width: 150px;
	}
`;

const AppTitle = styled("h1")`
	color: #7e940e;
	text-align: center;
	font-family: "Permanent Marker", cursive;
	font-size: 50px;
	margin-left: 20px;
`;
