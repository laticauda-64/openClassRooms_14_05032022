import { styled } from "@mui/system";
import Header from "../components/layout/Header";
import MenuTabs from "../components/layout/MenuTabs";

const MainComponent = styled("div")({
	color: "black",
	backgroundColor: "white",
	padding: 8,
	borderRadius: 12,
	boxShadow: " 4px 4px 10px 0 rgba(64, 64, 64, 0.23)",
	width: "50%",
	minWidth: "800px",
	margin: "auto",
});

export default function Home() {
	return (
		<MainComponent>
			<Header />
			<MenuTabs />
		</MainComponent>
	);
}
