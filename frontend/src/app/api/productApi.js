import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
	baseUrl: "http://localhost:8080",
	prepareHeaders: (headers) => {
		headers.set("Content-type", "application/json");

		return headers;
	},
});

export const productApi = createApi({
	reducerPath: "productApi",
	baseQuery: baseQuery,
	endpoints: () => ({}),
});
