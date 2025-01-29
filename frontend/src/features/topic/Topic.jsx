import {Flex, Text} from '@chakra-ui/react'
import { LuSearch } from 'react-icons/lu';

const Topic = ({value}) => {
	return (
		<Flex alignItems={"center"} justifyContent={"flex-start"} fontSize={"18px"}>
			<LuSearch />
			<Text align={"left"} ml={1}>
				<option>{value}</option>
			</Text>
		</Flex>
	);
};

export default Topic;
