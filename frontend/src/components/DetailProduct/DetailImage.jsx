import React from "react";
import { Flex, Image } from "@chakra-ui/react";

const DetailImage = ({ gambar }) => {
	return (
		<>
			<Flex boxShadow={"lg"} justifyContent={"center"} alignItems={"center"} w={'90%'}>
				<Image src={gambar} width={"100%"} borderRadius={"5px"} />
			</Flex>
			<Flex mt={3} justifyContent={"space-between"} w={'90%'}>
				<Image borderRadius={"5px"} src="https://placeholder.com/80x80" />
				<Image borderRadius={"5px"} src="https://placeholder.com/80x80" />
				<Image borderRadius={"5px"} src="https://placeholder.com/80x80" />
				<Image borderRadius={"5px"} src="https://placeholder.com/80x80" />
			</Flex>
		</>
	);
};

export default DetailImage;
