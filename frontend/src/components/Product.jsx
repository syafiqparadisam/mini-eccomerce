import { Heading, Image, Box, Text, Flex, LinkBox } from "@chakra-ui/react";
import toRupiah from "@develoka/angka-rupiah-js";
import { BsStar } from "react-icons/bs";
import { FaCity } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = ({
	products: { nama, deskripsi, ulasan, gambar, harga, _id },
}) => {
	
	return (
		<Link to={`/product/${_id}`} reloadDocument>
			<Flex flexDir={"column"} boxShadow={"md"} borderRadius={"10px"} pb={2}>
				<Image
					src={gambar}
					alt={nama}
					width={"170px"}
					height={"170px"}
					borderRadius={"10px 10px 0px 0px"}
				/>
				{/* Judul Dan Harga Product */}
				<Flex
					flexDir={"column"}
					flexWrap={"wrap"}
					h={"60px"}
					overflow={"hidden"}
					lineHeight={"short"}
					ml={3}
					justifyContent={'center'}
				>
					<Text
						pt={1}
						fontFamily={"sans-serif"}
						fontSize={"12px"}
						fontWeight={400}
					>
						{nama}
					</Text>
					<Heading size={"xs"}>
						{toRupiah(harga, { replaceZeroDecimals: true })}
					</Heading>
				</Flex>
				{/* Cashback Toko Rating Product */}
				<Flex
					w={"100%"}
					alignItems={"left"}
					fontSize={"13px"}
					flexDir={"column"}
				>
					<Box ml={3} w={"60%"} borderRadius={'3px'}bg={"green.100"} color={"green"}>
						<Text fontWeight={'bold'} textAlign={'center'}>Cashback 20%</Text>
					</Box>	
					<Flex alignItems={"center"} ml={3}>
						<FaCity />
						<Text ml={1} textAlign={"center"}>
							Bandung
						</Text>
					</Flex>
					<Flex alignItems={"center"} ml={2}>
						<AiFillStar
							color="yellow"
							size={"20px"}
							style={{ marginTop: "-2px" }}
						/>
						<Text textAlign={"left"} ml={1}>
							5.0 | 999+ Terjual
						</Text>
					</Flex>
				</Flex>
			</Flex>
		</Link>
	);
};

export default Product;
