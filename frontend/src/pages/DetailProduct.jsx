import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Flex, VStack, Text } from "@chakra-ui/react";
import DetailImage from "../components/DetailProduct/DetailImage";
import InformasiProduct from "../components/DetailProduct/InformasiProduct";
import SpesifikasiDetail from "../components/DetailProduct/SpesifikasiDetail";
import Cart from "../components/DetailProduct/Cart";
import OtherProducts from "../utils/components/OtherProducts";
import { useGetProductByIdQuery } from "../service/productServicesjsx";

const DetailProduct = () => {
	const { id } = useParams();
	const {data,error,isSuccess} = useGetProductByIdQuery(id)

	return (
		<>
			<Flex flexDir={"column"} pt={"80px"}>
				{data && (
					<>
						<Flex justifyContent={"space-around"} alignContent={"center"}>
							{/* Gambar Product*/}
							<VStack w={"30%"}>
								<DetailImage gambar={data.gambar} />
							</VStack>
							{/* Judul Product */}
							<VStack w={"40%"} textAlign={"left"}>
								<InformasiProduct nama={data.nama} harga={data.harga} />

								{/* Spesifikasi Product */}
								<SpesifikasiDetail deskripsi={data.deskripsi} />
							</VStack>
							{/* Cart Feature */}
							<VStack w={"30%"} h={"80vh"}>
								<Cart harga={data.harga} />
							</VStack>
						</Flex>
					</>
				)}
				<Flex py={5} ml={5}>
					<Text fontWeight={500} fontSize={"20px"}>
						Product Lainnya
					</Text>
				</Flex>
				{/* Other Products*/}
				<OtherProducts/>
			</Flex>
		</>
	);
};

export default DetailProduct;
