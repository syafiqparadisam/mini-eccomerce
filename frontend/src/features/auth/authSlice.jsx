import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		token: null,
		user: null
	},
	reducers: {
		setCredentials: (state, action) => {
			state.token = action.payload.token;
			state.user = action.payload.user;
		},
		logout : (state) => {
			state.token = null
			state.user = null
		}
	},
});

export const { setCredentials,logout } = authSlice.actions;
export const selectAuthToken = (state) => state.auth.token;
export const selectUser = (state) => state.auth.user;
export default authSlice.reducer;
