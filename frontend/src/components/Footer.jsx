import { Text, Flex, Heading, Link, HStack, Box } from "@chakra-ui/react";
import { AiFillYoutube } from "react-icons/ai";
import { BiCopyright, BiLogoTiktok } from "react-icons/bi";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
	return (
		<>
			<Flex
				bg={"black"}
				boxShadow={'lg'}
				color={"white"}
				mt={5}
				py={5}
				flexDir={"column"}
			>
				<HStack justifyContent={"space-around"} w={"100%"} >
					<Flex
						flexDir={"column"}
						justifyContent={"center"}
						alignItems={"center"}
						textAlign={"center"}
					>
						<Heading size={"sm"} as={"h5"} pb={3}>
							Contact me
						</Heading>
						<HStack w={'100%'} alignItems={"center"} justifyContent={'start'}>
							<AiFillYoutube
								style={{ marginTop: "-4px" }}
								color="red"
								size={"20px"}
							/>
							<Link
								href=""
								_hover={{ textDecoration: "none" }}
							>
								FikkzKetchee
							</Link>
						</HStack>
						<HStack w={'100%'} alignItems={"center"} justifyContent={'start'}>
							<BiLogoTiktok style={{ marginTop: "-4px" }} size={"15px"} />
							<Link
								href=""
								_hover={{ textDecoration: "none" }}
								textAlign={'left'}
							>
								@fikkzketchee
							</Link>
						</HStack>
						<HStack w={'100%'} alignItems={"center"} justifyContent={'start'}>
							<AiFillLinkedin style={{ marginTop: "-4px" }} color="skyBlue" size={"15px"} />
							<Link
								href=""
								_hover={{ textDecoration: "none" }}
							>
								syafiqparadisam
							</Link>
						</HStack>
					</Flex>
					<Flex
						flexDir={"column"}
						textAlign={"center"}
						alignItems={'center'}
						justifyContent={'center'}
					>
						<Heading as={"h4"} size={"sm"}>
							Develop By
						</Heading>
						<Text>Syafiq Paradisam</Text>
						<Text>Fullstack Developer | | Indonesia</Text>
					</Flex>
				</HStack>
				<Flex justifyContent={"center"} w={"100%"} flexDir={"column"}>
					<Box>
						<Heading size={"sm"} as={"h5"} textAlign="center">
							Reference By :{" "}
							<Link color={"green.500"} href="https://tokopedia.com">
								Tokopedia
							</Link>
						</Heading>
					</Box>
					<HStack w={"100%"} justifyContent={"center"} alignItems={"center"}>
						<BiCopyright style={{ marginTop: "-4px" }} size={"20px"} />
						<Heading size={"sm"} ml={-2} as={"h5"} textAlign={"center"}>
							Copyright 2023 All Right Reserved
						</Heading>
					</HStack>
				</Flex>
			</Flex>
		</>
	);
};

export default Footer;
