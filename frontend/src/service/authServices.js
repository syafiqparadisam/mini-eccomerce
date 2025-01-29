import { api } from "../app/api/api";

const registerSlice = api.injectEndpoints({
	endpoints: (builder) => ({
		register: builder.mutation({
			query: (data) => ({
				url: "/auth/register",
				method: "POST",
				body: JSON.stringify({
					username: data.username,
					password: data.password,
					email: data.email,
					confirmPassword: data.confirmPassword,
				}),
			}),
			invalidatesTags: ["products", "product","carts","cart"]
		}),
		login: builder.mutation({
			query: (data) => ({
				url: "/auth/login",
				method: "POST",
				body: JSON.stringify({
					username: data.username,
					password: data.password,
				}),
				credentials: "include",
			}),
			invalidatesTags: ["products", "product","carts","cart"]
		}),
		refresh: builder.query({
			query: () => ({
				url: "/auth/refresh",
				credentials: "include",
			}),
		}),
		logout: builder.mutation({
			query: () => ({
				url: "/auth/logout",
				credentials: "include"
			}),
			invalidatesTags: ["products", "product","carts","cart"]
		})
	}),
});

export const { useRegisterMutation,useLoginMutation,useRefreshQuery, useLogoutMutation} = registerSlice;
