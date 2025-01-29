import Product from "../components/Product";
import ProductSkeleton from "../utils/Skeleton/ProductSkeleton";
import { Grid, GridItem,Avatar, Flex, Heading, Text } from "@chakra-ui/react";
import News from "../components/News";
import { useGetAllProductsQuery } from "../service/productServices.js";

const Home = () => {
	const { data,isLoading, isSuccess } = useGetAllProductsQuery();

	let components = (
		<>
			<News />
		</>
	);
	console.log(data)
	let content = (
		<>
				{isSuccess && data.data.length == 0 && (
					<>
						<Flex justifyContent={"center"} alignItems={"center"} width={"100%"}>
							<Text color={"black"} fontSize={"2xl"} fontWeight={"bold"}>Product is empty</Text>
						</Flex>
					</>
				)}
			<Grid
				templateColumns={"repeat(6, 170px)"}
				gap={10}
				alignContent={"center"}
				justifyContent={"center"}
			>
				{isSuccess &&
					data.data.map((product) => {
						return (
							<>
								<GridItem key={product._id}>
									<Product key={product._id} products={product} />
								</GridItem>
							</>
						);
					})}
			</Grid>
		</>
	);

	return isLoading ? (
		<>

			{components}

			<ProductSkeleton />
		</>
	) : (
		<>
			{components}
			{content}
		</>
	);
};

export default Home;
