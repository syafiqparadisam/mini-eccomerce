import {
	Image,
	Text,
	Box,
	HStack,
	Heading,
	VStack,
} from "@chakra-ui/react";

const ProductWillUserBuy = ({ data }) => {
	return (
		<>
			<HStack border={"1px solid green"} w={"100%"} p={3} borderRadius={"15px"}>
				<Box>
					<Image
						src={data.productId.gambar}
						width={"150px"}
						borderRadius={"15px"}
					/>
				</Box>
				<VStack>
					<Heading size={"sm"}>{data.productId.nama}</Heading>
					<Text>quantity : {data.quantity}</Text>
				</VStack>
			</HStack>
		</>
	);
};

export default ProductWillUserBuy;
