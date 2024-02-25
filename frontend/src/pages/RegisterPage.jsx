import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Register from "../features/register/Register";

const RegisterPage = () => {
	return (
		<Flex
			height={"100vh"}
			pt={10}
			justifyContent={"center"}
			alignItems={"center"}
		>
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
					<Register />
				</Box>
			</Flex>
		</Flex>
	);
};

export default RegisterPage;
