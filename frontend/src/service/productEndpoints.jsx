import { productApi } from "../app/api/productApi";

const productSlice = productApi.injectEndpoints({
	endpoints: (builder) => ({
		product: builder.query({
			query: () => ({
				url: "/api/products",
			}),
		}),
	}),
});

export const { useProductQuery } = productSlice;
