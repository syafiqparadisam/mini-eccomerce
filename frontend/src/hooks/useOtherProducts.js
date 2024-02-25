import { useProductQuery } from "../service/productEndpoints";

const useOtherProducts = () => {
	const { data, error, isError, isLoading, isSuccess } =
		useProductQuery();

	if (error && isError && !isSuccess) {
		alert("error");
	} else if (data && isSuccess && !isError) {
		return { products: data, isLoading };
	}
};

export default useOtherProducts;
