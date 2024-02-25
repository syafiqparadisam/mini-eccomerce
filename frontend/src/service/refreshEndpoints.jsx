import { usersApi } from "../app/api/usersApi";

const refreshSlice = usersApi.injectEndpoints({
	endpoints: (builder) => ({
		refresh: builder.query({
			query: () => ({
				url: "/api/auth/refresh",
				credentials: "include",
			}),
		}),
	}),
});

export const { useRefreshQuery } = refreshSlice;
