import { Outlet } from "react-router-dom";
import Sidebar from "../components/UsersPage/Sidebar";
import Topbar from "../components/Topbar";
import { Grid, GridItem } from "@chakra-ui/react";

const Dashboard = () => {
	return (
		<>
			<Grid
				gridTemplateColumns={"repeat(10, 10%)"}
				gridTemplateRows={"repeat(10, 10%)"}
			>
				<GridItem colStart={1} colEnd={11} rowSpan={1}>
					<Topbar />
				</GridItem>
				<GridItem colStart={1} colEnd={3} rowStart={2} rowEnd={11}>
					<Sidebar />
				</GridItem>
				<GridItem colStart={3} colEnd={11} rowStart={2} rowEnd={11}>
					<Outlet />
				</GridItem>
			</Grid>
		</>
	);
};

export default Dashboard;
