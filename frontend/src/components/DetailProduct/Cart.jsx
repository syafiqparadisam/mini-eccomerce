import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	HStack,
	Heading,
	Text,
	Button,
	Input,
} from "@chakra-ui/react";
import { BsPencil, BsCart4, BsTrash } from "react-icons/bs";
import toRupiah from "@develoka/angka-rupiah-js";
import BuyAlert from "../../utils/BuyAlert";
import { useDisclosure } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const Cart = ({ harga = null }) => {
	const { isOpen, onClose, onOpen } = useDisclosure();
	const { id } = useParams();
	const {
		upPrice,
		downPrice,
		resetPrice,
		changeQuantityWithKey,
		quantity,
		price,
	} = usePrice(harga);
	const { addToCart } = useCart();
	return (
		<>
			<Card
				border={"2px solid lightGreen"}
				borderRadius={"5px"}
				height={"70%"}
				margin={"auto"}
				width={"85%"}
			>
				<CardHeader>
					<Heading size={"md"} fontWeight={"bold"}>
						Masukkan Ke Keranjang
					</Heading>
				</CardHeader>
				<CardBody>
					<HStack>
						<Text>Stok : </Text>
						<Text fontWeight={"bold"}>100</Text>

						<HStack
							border={"1px solid lightGreen"}
							borderRadius={"10px"}
							w={"60%"}
						>
							<Button
								bg={"none"}
								_hover={{ backgroundColor: "none" }}
								onClick={upPrice}
							>
								+
							</Button>
							{/* <Box w={'25px'}> */}
							<Input
								border={"none"}
								type="number"
								value={quantity}
								onKeyDown={(e) => {
									changeQuantityWithKey(e);
								}}
							/>
							{/* </Box> */}
							<Button
								bg={"none"}
								_hover={{ backgroundColor: "none" }}
								onClick={downPrice}
							>
								-
							</Button>
						</HStack>
						<Text textAlign={"right"} onClick={resetPrice}>
							<BsTrash size={"20px"} />
						</Text>
					</HStack>
					<HStack mt={3} color={"green.600"} fontWeight={600}>
						<BsPencil color="green" style={{ fontWeight: "bolder" }} />
						<Text>Tambahkan Catatan</Text>
					</HStack>
					<HStack justifyContent={"space-between"} mt={3}>
						<Text fontSize={"20px"}>SubTotal :</Text>
						<Heading size={"lg"}>
							{toRupiah(price, { replaceZeroDecimals: true })}
						</Heading>
					</HStack>
				</CardBody>
				<CardFooter w={"100%"} flexDir={"column"}>
					<Button
						p={3}
						w={"100%"}
						bg={"green.400"}
						mb={2}
						onClick={() => {
							addToCart({ id: id, quantity: quantity });
						}}
					>
						<BsCart4 color="white" size={"20px"} />
					</Button>
					<Button
						p={3}
						w={"100%"}
						bgColor={"white"}
						border={"1px solid green"}
						color={"green.400"}
						/* BANYAK FUNGSI YANG HARUS DIPANGGIL */
						onClick={onOpen}
					>
						Beli
					</Button>
				</CardFooter>
				<BuyAlert isOpen={isOpen} onClose={onClose} />
			</Card>
		</>
	);
};

export default Cart;
