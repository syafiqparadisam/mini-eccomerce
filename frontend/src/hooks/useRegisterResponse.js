import { useRegisterMutation } from "../service/registerEndpoints";
import { useNavigate } from "react-router-dom";

const useRegisterResponse = () => {
	const navigate = useNavigate();

	const [register, { data, isError, isLoading, isSuccess, error }] =
		useRegisterMutation();

	if (error && isError) {
		const err1 = error.data.data;
		const err2 = error.data;
		console.log(err1 || err2);
	}
	if (data && isSuccess) {
		console.log(data.data);
		navigate("/login");
	}

	return { send: register, isLoading: isLoading };
};

export default useRegisterResponse;
