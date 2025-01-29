import { VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const DropdownNavbar = () => {
	return (
		<>
			<VStack
				position={"absolute"}
				zIndex={999}
				bg={"gray.400"}
				right={4}
				top={"60px"}
                borderRadius={'3px'}
				justifyContent={"center"}
				alignItems={"center"}
				p={2}
			>
				<Link>Your Profile</Link>
			</VStack>
		</>
	);
};

export default DropdownNavbar;
