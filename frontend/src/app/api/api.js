import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logout, setCredentials } from "../../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
	baseUrl: "http://localhost:8080",
	credentials: "include",
	prepareHeaders: (headers, { getState }) => {
		const token = getState().auth.token;
		console.log(token);
		if (token) {
			headers.set("Authorization", `Bearer ${token}`);
			headers.set("Content-type", "application/json");
		}
	},
});

const baseQueryWithReAuth = async (args, api, extraOptions) => {
	let result = await baseQuery(args, api, extraOptions);
	if (
		result.error.originalStatus == 403 ||
		result.error.originalStatus == 401
	) {
		// try to get a new token
		const refreshResult = await baseQuery(
			"/api/auth/refresh/",
			api,
			extraOptions
			);
			console.log("SEND REFRESH TOKEN" + refreshResult.data)
		if (refreshResult.data) {
			// store the new token
			api.dispatch(
				setCredentials({
					token: refreshResult.data.data.accessToken,
					user: refreshResult.data.data.user,
				})
			);
			// retry the initial query

			result = await baseQuery(args, api, extraOptions);
		} else {
			api.dispatch(logout());
		}
	}
	return result;
};

export const api = createApi({
    reducerPath: "api",
	baseQuery: baseQueryWithReAuth,
	endpoints: () => ({}),
});
