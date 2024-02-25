import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../service/loginEndpoints";
import {useNavigate } from "react-router-dom";
import {
	selectAuthToken,
	selectUser,
	setCredentials,
} from "../features/auth/authSlice.jsx";

const useLogin = () => {
	const token = useSelector(selectAuthToken);
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [login, { data, isError, isLoading, isSuccess, error }] =
		useLoginMutation();
	console.log(data);
	console.log(isLoading);
	if (error && isError) {
		alert(error.data.error.details)
	}

	if (isSuccess && data?.data.accessToken) {
		dispatch(
			setCredentials({ token: data.data.accessToken, user: data.data.user })
		);
		navigate("/")
		console.log({ token, user });
	}

	return { login };
};

export default useLogin;
