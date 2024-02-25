import { usersApi } from "../app/api/usersApi";

const loginSlice = usersApi.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (data) => ({
				url: "/api/auth/login",
				method: "POST",
				body: JSON.stringify({
					username: data.username,
					password: data.password,
				}),
				credentials: "include",
			}),
		}),
	}),
});

export const { useLoginMutation } = loginSlice;
