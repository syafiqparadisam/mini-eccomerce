import {
  Flex,
  TableContainer,
  Thead,
  Tr,
  Tbody,
  Table,
  Th,
  Td,
  Button,
  TableCaption,
  Tfoot,
  Heading,
} from "@chakra-ui/react";

const Tables = () => {
  return (
    <Flex h={"100%"} flexDir={"column"}>
      <Flex justifyContent={"center"} alignItems={"center"} p={10} m={10}>
        <Heading fontStyle={"italic"} as={"h1"}>
          Do It Now
        </Heading>
      </Flex>
      <Flex alignItems={"center"} justifyContent={"center"}>
        <TableContainer>
          <Table variant={"simple"} border={"1px solid black"} size={"lg"}>
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr bg={'green.300'}>
                <Th>Nama Aktivitas</Th>
                <Th>Waktu Deadline</Th>
                <Th>Keberhasilan</Th>
                <Th>Dikerjakan</Th>
                <Th>Setting</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td isNumeric>30.48</Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td isNumeric>0.91444</Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Flex>
    </Flex>
  );
};

export default Tables;
