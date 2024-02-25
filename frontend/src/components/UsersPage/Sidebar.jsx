import { Flex, Text, VStack } from "@chakra-ui/react";
import { PiListBold } from "react-icons/pi";
import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FcTodoList } from "react-icons/fc";

const Sidebar = () => {
	return (
		<VStack
			w={"200px"}
			alignItems={"center"}
			height={"100%"}
			borderRight={"2px solid green"}
		>

			<Link
				style={{
					color: "white",
					display: "flex",
					alignContent: "center",
					justifyContent: "center",
					textAlign: "center",
					width: "100%",
					padding: "10px",
					borderBottom: "1px solid white",
				}}
			>
				<FiHome style={{ marginTop: "1px" }} />
				<Text ml={1}>Home</Text>
			</Link>
			<Link
				style={{
					color: "white",
					display: "flex",
					alignContent: "center",
					justifyContent: "center",
					textAlign: "center",
					width: "100%",
					padding: "10px",
					borderBottom: "1px solid white",
				}}
			>
				<FcTodoList color="white" style={{ marginTop: "1px" }} />
				<Text ml={1}>Activity</Text>
			</Link>
		</VStack>
	);
};

export default Sidebar;
