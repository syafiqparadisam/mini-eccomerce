import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
	name: "product",
	initialState: {
		nama: "",
		deskripsi: "",
		gambar: "",
		ulasan: "",
		harga: null
	},
	reducers: {
		setProducts: (state, action) => {
			state = action.payload
		},
	},
});

export default productSlice.reducer;
export const { setProducts } = productSlice.actions;
