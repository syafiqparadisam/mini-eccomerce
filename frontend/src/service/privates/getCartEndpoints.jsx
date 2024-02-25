import { authApi } from "../../app/api/authApi";

const cart = authApi.injectEndpoints({
	endpoints: (builder) => ({
		getCart: builder.query({
			query: () => ({
				url: "/api/user/cart/product",
				credentials: "include"
			}),
		}),
	}),
});

export const { useGetCartQuery } = cart;
