import { Flex, HStack, Heading, Text } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import toRupiah from "@develoka/angka-rupiah-js"

const InformasiProduct = (props) => {
	return (
		<>
			<Flex flexDir={"column"} w={"100%"}>
				<Heading>{props.nama}</Heading>
				<HStack my={2}>
					<Text>Terjual 999+</Text>
					<AiFillStar
						color="yellow"
						style={{ marginTop: "-5px" }}
						size={"20px"}
					/>
					<Text>3.7 (3 Rating)</Text>
				</HStack>
			</Flex>
			<Flex flexDir={"column"}>
				<Heading>{toRupiah(props.harga.toString())}</Heading>
				<Text>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quisquam at numquam officia blanditiis provident doloremque ratione ab accusamus itaque.
				</Text>
			</Flex>
		</>
	);
};

export default InformasiProduct;
