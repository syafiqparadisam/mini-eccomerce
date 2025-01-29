import { api } from "../app/api/api";

const productSlice = api.injectEndpoints({
	endpoints: (builder) => ({
		getAllProducts: builder.query({
			query: () => ({
				url: "/products"
			}),
			providesTags: ["products"]
		}),
		getProductById: builder.query({
			query: (id) => ({
				url: `/product/${id}`,
			}),
			providesTags: ["product"]
		}),
		createProduct: builder.mutation({
			query: (data) => ({
				url: "/products",
				method: "POST",
			}),
			invalidatesTags: ["products", "product"]
		}),
		uploadImageProduct: builder.mutation({
			query: (file) => ({
				url: "/products/image",
				method: "POST",
				body: file
			}),
			invalidatesTags: ["products", "product"]
		})
	}),
});

export const { useGetAllProductsQuery,useGetProductByIdQuery } = productSlice;
