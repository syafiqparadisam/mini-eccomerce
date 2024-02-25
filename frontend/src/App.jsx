import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Layout from "./utils/components/Layout";
import ProfilePage from "./pages/ProfilePage";
import PersistLogin from "./utils/PersistLogin";
import DetailProduct from "./pages/DetailProduct";
import CartPage from "./pages/CartPage";
import Ordering from "./pages/Ordering";
import { useSelector, useDispatch } from "react-redux";
import {
	selectAuthToken,
	selectUser,
	setCredentials,
} from "./features/auth/authSlice";
import { useRefreshQuery } from "./service/refreshEndpoints";
import { Heading } from "@chakra-ui/react";

function App() {
	const token = useSelector(selectAuthToken);
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	const { data, error, isSuccess } = useRefreshQuery();

	if (error) {
		return (
			<Heading>Ups Something went wrong</Heading>
		)
	}
	if (isSuccess) {
		dispatch(
			setCredentials({ token: data.data.accessToken, user: data.data.user })
		);
		console.log({ token, user });
	}

	console.log(token);
	return (
		<>
			<BrowserRouter>
				<Routes>
					{/* Public Routes */}
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="/product/:id" element={<DetailProduct />} />
						<Route path="/register" element={<RegisterPage />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/ordering" element={<Ordering />} />
						{/* SEMENTARA AKU PINDAH KE PUBLIC ROUTE*/}

						{/* Protected Routes*/}
						<Route element={<PersistLogin />}>
						<Route path="/pesanan" element={<CartPage />} />
							<Route path="/users" element={<Dashboard />}></Route>
							<Route path="/users/profile" element={<ProfilePage />} />
						</Route>
						<Route path="*" element={<h1>404 NOT FOUND</h1>} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
