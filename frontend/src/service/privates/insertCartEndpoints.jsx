import { authApi } from "../../app/api/authApi";

const cart = authApi.injectEndpoints({
	endpoints: (builder) => ({
		addToCart: builder.mutation({
			query: (data) => ({
				url: `/api/user/cart/product/${data.id}`,
				method: "POST",
				body: JSON.stringify({
					quantity: data.quantity,
				}),

			}),
		}),
	}),
});

export const { useAddToCartMutation } = cart;
