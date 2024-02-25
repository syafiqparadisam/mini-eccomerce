import { Flex, Grid, GridItem, Heading, Text, VStack } from "@chakra-ui/react";
import ProductWillUserBuy from "../components/CartPage/ProductWillUserBuy";
import Sidebar from "../components/UsersPage/Sidebar";
import OtherProducts from "../utils/components/OtherProducts";
import { useGetCartQuery } from "../service/privates/getCartEndpoints";
import Cart from "../components/DetailProduct/Cart";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthToken, setCredentials } from "../features/auth/authSlice";
import { useState } from "react";

const CartPage = () => {
	const token = useSelector(selectAuthToken);
	const { data, error,isSuccess, isLoading } = useGetCartQuery();
	console.log(error)
	console.log(data)
	console.log(isSuccess)
	const dispatch = useDispatch();
	// const [data,setData] = useState(null)
	// async function getCart(token) {
	// 	const data = await axios.get(
	// 		"http://localhost:8080/api/user/cart/product",
	// 		{
	// 			headers: {
	// 				Authorization: "Bearer " + token,
	// 			},
	// 		}
	// 	);
	// 	if (data.status === 403) {
	// 		const token = await axios.get("http://localhost:8080/api/auth/refresh", {
	// 			withCredentials: true,
	// 		});
	// 		dispatch(
	// 			setCredentials({
	// 				token: token.data.data.accessToken,
	// 				user: token.data.data.user,
	// 			})
	// 		);
	// 	} else if (data.status === 200) {
	// 		setData(data.data)
	// 	}

	// }
	// getCart(token)
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
									<ProductWillUserBuy
										data={product}
										key={product.productId._id}
									/>
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
