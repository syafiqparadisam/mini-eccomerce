import { usersApi } from "../app/api/usersApi";

const registerSlice = usersApi.injectEndpoints({
	endpoints: (builder) => ({
		register: builder.mutation({
			query: (data) => ({
				url: "/api/auth/register",
				method: "POST",
				body: JSON.stringify({
					username: data.username,
					password: data.password,
					email: data.email,
					confirmPassword: data.confirmPassword,
				}),
			}),
		}),
	}),
});

export const { useRegisterMutation } = registerSlice;
