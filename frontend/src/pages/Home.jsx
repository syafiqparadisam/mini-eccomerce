import { useEffect, useState } from "react";
import Product from "../components/Product";
import ProductSkeleton from "../utils/Skeleton/ProductSkeleton";
import { Grid, GridItem,Avatar } from "@chakra-ui/react";
import News from "../components/News";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../features/products/productsSlice";
import { useProductQuery } from "../service/productEndpoints";

const Home = () => {
	const dispatch = useDispatch();
	const { data, error, isError, isLoading, isSuccess } = useProductQuery();
	dispatch(setProducts(data));

	let components = (
		<>
			<News />
		</>
	);
	let content = (
		<>
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
