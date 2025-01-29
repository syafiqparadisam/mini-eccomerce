import { Flex, Grid, GridItem } from "@chakra-ui/react";
import Product from "./Product";
import { useGetAllProductsQuery } from "../service/productServices.js";

const OtherProducts = () => {
	const { data: products, error, isError, isLoading, isSuccess } = useGetAllProductsQuery();

	return (
		<>
			<Grid
				templateColumns={"repeat(6, 170px)"}
				gap={10}
				alignContent={"center"}
				justifyContent={"center"}
			>
				{products &&
					products.data.map((product) => {
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
};

export default OtherProducts;
