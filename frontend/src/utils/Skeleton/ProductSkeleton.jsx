import {
	Skeleton,
	SkeletonCircle,
	Grid,
	GridItem,
	SkeletonText,
	Flex,
} from "@chakra-ui/react";

const ProductSkeleton = () => {
	let content = [];
	for (let index = 1; index <= 12; index++) {
		content.push(<LoopSkeleton />);
	}
	return (
		<>
			<Grid
				templateColumns={"repeat(6, 170px)"}
				gap={10}
				alignContent={"center"}
				justifyContent={"center"}
			>
				{content}
			</Grid>
		</>
	);
};

export default ProductSkeleton;

function LoopSkeleton() {
	return (
		<>
			<GridItem>
				<Flex flexDir={"column"} borderRadius={"10px"} pb={2}>
					<Skeleton
						width={"170px"}
						height={"170px"}
						borderRadius={"10px 10px 0px 0px"}
					></Skeleton>
					<Flex w={"100%"} alignItems={"left"} fontSize={"13px"} mt={3}>
						<SkeletonText
							fontWeight={"bold"}
							noOfLines={5}
							w={"90%"}
							textAlign={"center"}
						/>
					</Flex>
				</Flex>
			</GridItem>
		</>
	);
}
