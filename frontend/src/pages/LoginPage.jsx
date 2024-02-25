import { Flex, Box, Text, Image } from "@chakra-ui/react";
import Footer from "../utils/components/Footer";
import Login from "../features/auth/Login";

const LoginPage = () => {
	return (
		<>
			<Flex h={"100vh"} justifyContent={"center"} alignItems={"center"} pt={10}>
				<Flex
					width={"70%"}
					justifyContent={"center"}
					backgroundColor={"blue"}
					border={"2px solid black"}
					p={2}
				>
					<Box w={"50%"}>
						<Image src="" />
						<Text>anjay</Text>
					</Box>
					<Box w={"50%"} bg={"white"} borderRadius={"20px"} p={2}>
						<Login />
					</Box>
				</Flex>
			</Flex>
		</>
	);
};

export default LoginPage;
