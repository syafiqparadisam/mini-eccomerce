import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthToken, selectUser, setCredentials } from "../features/auth/authSlice";
import { useRefreshQuery } from "../service/refreshEndpoints";
import {  Outlet, useNavigate } from "react-router-dom";

const PersistLogin = () => {
	const [isLoading, setIsLoading] = useState(true);
	const token = useSelector(selectAuthToken);
	const user = useSelector(selectUser)
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { data, error, isSuccess } = useRefreshQuery();
	if (error?.originalStatus === 401 || error?.originalStatus == 403) {
		navigate('/login')
	}
	if (error) {
		navigate('/login')
	}
	useEffect(() => {
		const verifyRefreshToken = () => {
			if(!error) {
				setIsLoading(false)
			}
			if (isSuccess) {
				console.log({token, user});
				dispatch(setCredentials({ token: data.data.accessToken, user: data.data.user}));
				setIsLoading(false);
				console.log(token)
			}
		};
		
		!token ? verifyRefreshToken() : setIsLoading(false);
	}, []);
	//WARNING CHECK NOT ISLOADING MUATBE FALSE}
	return isLoading === false ? <Outlet/> : <p>Loading...</p>;
};

export default PersistLogin;
