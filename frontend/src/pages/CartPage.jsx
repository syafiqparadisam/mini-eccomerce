import { Flex, Heading, Text, VStack } from "@chakra-ui/react";

const CartPage = () => {
	
	const result = isLoading == false ? (
		<>
			<Flex pt={"100px"} flexDir={"column"}>
				<Flex>
					<Text>TESTING UI</Text>
				</Flex>
				<VStack w={"70%"} justifyContent={"right"}>
					{data != null &&
						data.data.items.map((product) => {
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
						})}
				</VStack>
				<Flex>
					<Flex w={"100%"} justifyContent={"center"} flexDir={"column"}>
						<Text textAlign={"left"} ml={4} fontSize={"20px"} mb={3}>
							Recommended Product
						</Text>
						<OtherProducts />
					</Flex>
				</Flex>
			</Flex>
		</>
	) : (
		<>
			<Text>ERROR</Text>
		</>
	)
	return result
};

export default CartPage;
