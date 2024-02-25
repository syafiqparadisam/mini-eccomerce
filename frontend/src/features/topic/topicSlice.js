import { createSlice } from "@reduxjs/toolkit";

const topicSlice = createSlice({
	name: "topic",
	initialState: ["haha"],
	reducers: {
		setTopic: (state, action) => {
			state.push(action.payload.topic);
		},
	},
});

export default topicSlice.reducer;
export const { setTopic } = topicSlice.actions;
