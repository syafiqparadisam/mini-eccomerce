import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./api/usersApi";
import authReducer from "../features/auth/authSlice";
import { authApi } from "./api/authApi";
import productsReducer from "../features/products/productsSlice";
import { productApi } from "./api/productApi";

export const store = configureStore({
	reducer: {
		[usersApi.reducerPath]: usersApi.reducer,
		[authApi.reducerPath]: authApi.reducer,
		[productApi.reducerPath]: productApi.reducer,
		auth: authReducer,
		product: productsReducer,
	},
	middleware: (getDefaultMiddleware) => {
		return [
			...getDefaultMiddleware(),
			usersApi.middleware,
			authApi.middleware,
			productApi.middleware,
		];
	},
});
