import { productApi } from "../app/api/productApi";

const detailProduct = productApi.injectEndpoints({
	endpoints: (builder) => ({
		detailProduct: builder.query({
			query: ({id}) => `/api/products/${id}`,
		}),
	}),
});

export const { useDetailProductQuery } = detailProduct;
