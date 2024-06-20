import { api } from "../app/api/api";

const cart = api.injectEndpoints({
	endpoints: (builder) => ({
		getAllCarts: builder.query({
			query: () => ({
				url: "/user/cart/product",
			}),
			providesTags: ["carts"]
		}),
		getCartById: builder.query({
			query: (id) => ({
				url: `/user/cart/product/${id}`,
			}),
			providesTags: ["cart"]
		}),
		insertCart: builder.mutation({
			query: (id) => ({
				url: `/user/cart/product/${id}`,
			}),
			invalidatesTags: ["cart","carts"]
		}),
		deleteAllCarts: builder.mutation({
			query: () => ({
				url: "/user/cart/product",
				method: "DELETE"
			})
		})
	}),
});

export const { useGetAllCartsQuery, useGetCartByIdQuery} = cart;
