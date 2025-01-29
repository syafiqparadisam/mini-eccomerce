import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";
import ProfilePage from "./pages/ProfilePage";
import PersistLogin from "./utils/PersistLogin";
import LoginPage from "./pages/LoginPage"
import CartPage from "./pages/CartPage";
import RegisterPage from './pages/RegisterPage';

function App() {
	
	return (
		<>
			<BrowserRouter>
				<Routes>
					{/* Public Routes */}
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						{/* { <Route path="/product/:id" element={<DetailProduct />} /> */}
						<Route path="/register" element={<RegisterPage />} />
						<Route path="/login" element={<LoginPage />} />
						{/* <Route path="/ordering" element={<Ordering />} /> */}
						{/* SEMENTARA AKU PINDAH KE PUBLIC ROUTE*/}

						{/* Protected Routes*/}
						<Route element={<PersistLogin />}>
							<Route path="/cart" element={<CartPage />} />
							<Route path="/users" element={<Dashboard />}></Route>
							<Route path="/users/profile" element={<ProfilePage />} />
						</Route> */
						<Route path="*" element={<h1>404 NOT FOUND</h1>} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
