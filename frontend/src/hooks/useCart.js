import { useSelector } from "react-redux";
import { selectAuthToken } from "../features/auth/authSlice";
import { useAddToCartMutation } from "../service/privates/insertCartEndpoints";

const useCart = () => {
	const token = useSelector(selectAuthToken);
	const [addToCart, { data, error, isLoading, isError, isSuccess }] =
		useAddToCartMutation();
	console.log(data);
	console.log(token);

	if (!token || token === null) {
		console.log("TIDAK BISA MEMBELI");
	}

	return { addToCart, isSuccess };
};

export default useCart;
