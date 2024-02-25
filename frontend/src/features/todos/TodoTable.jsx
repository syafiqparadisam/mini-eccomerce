import { Table, Tbody, Td, Thead, Tr } from "@chakra-ui/react";

const TodoTable = () => {
	return (
		<>
			<Table border={'1px solid blue'}>
				<Thead>
					<Tr>
						<Td>No.</Td>
					</Tr>
				</Thead>
				<Tbody>
					<Tr>
						<Td>1</Td>
					</Tr>
				</Tbody>
			</Table>
		</>
	);
};

export default TodoTable;
