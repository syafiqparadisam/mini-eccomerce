import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
	baseUrl: "http://localhost:8080",
	prepareHeaders: (headers) => {
		headers.set("Content-type", "application/json");

		return headers;
	},
	credentials: "include",
});

export const usersApi = createApi({
	reducerPath: "usersApi",
	baseQuery: baseQuery,
	endpoints: () => ({}),
});
