import { Flex, Text } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";

const DropdownSearch = ({ value, topicList }) => {
	const content = (
		<>
			<Flex
				bg={"black"}
				left={"50%"}
				transform={"translateX(-50%)"}
				width={"565px"}
				marginLeft={"-4px"}
				position={"absolute"}
				alignItems={"center"}
				borderRadius={"15px"}
				zIndex={-1}
			>
				<Flex
					mt={"110px"}
					ml={2}
					p={"10px"}
					alignContent={"center"}
					color={"white"}
                    flexDir={'column'}
				>
					{value !== "" && (
						<>
							<Flex
								alignItems={"center"}
								justifyContent={"flex-start"}
								fontSize={"18px"}
							>
								<LuSearch />
								<Text align={"left"} ml={1}>
									<option>{value}</option>
								</Text>
							</Flex>
							{topicList}
						</>
					)}
				</Flex>
			</Flex>
		</>
	);
	return content;
};

export default DropdownSearch;
