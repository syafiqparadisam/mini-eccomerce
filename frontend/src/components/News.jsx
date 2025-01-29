import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const News = () => {
	return (
		<Flex
			width={"100%"}
			height={"400px"}
			justifyContent={"center"}
			alignItems={"center"}
			flexDir={'column'}
			bg={'#000'}
      pb={2}
      mb={5}
		>
			<Heading color={'white'}>Toko Barokah The Best Marketplace In World</Heading>
			<Text>Here You Can Find Your Things you want</Text>
		</Flex>
	);
};

export default News;
