import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
	baseUrl: import.meta.env.VITE_API_URL + "/api/v1",
	credentials: "include",
	prepareHeaders: (h, api) => {
		h.set("Content-type", "application/json")
		return h
	}
});

export const api = createApi({
    reducerPath: "api",
	baseQuery: baseQuery,
	endpoints: () => ({}),
});
