import { Button, Flex, HStack,Text, Heading } from "@chakra-ui/react";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const Ordering = () => {
	const navigate = useNavigate();
	return (
		<Flex
			h={"100vh"}
			justifyContent={"center"}
			alignItems={"center"}
			flexDir={"column"}
		>
			<Heading size={"2xl"}>COMING SOON !!!</Heading>
			<HStack
				alignItems={"center"}
				onClick={() => navigate(-1)}
				fontWeight={"bolder"}
				mt={4}
				_hover={{ background: "lightGreen" }}
				p={3}
				borderRadius={"10px"}
			>
				<BsArrowLeft
					style={{ fontWeight: "bold", marginTop: "-2px" }}
					size={"20px"}
				/>
				<Text variant={"ghost"} _ho>
					Back
				</Text>
			</HStack>
		</Flex>
	);
};

export default Ordering;
