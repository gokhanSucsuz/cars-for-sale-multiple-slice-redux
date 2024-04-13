/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { addCars } from "./carsForSaleSlice";

const formSlice = createSlice({
	name: "form",
	initialState: {
		title: "",
		company: "",
		img: "",
		price: 0,
	},
	reducers: {
		changeTitle: (state, action) => {
			state.title = action.payload;
		},
		changeCompany: (state, action) => {
			state.company = action.payload;
		},
		changePrice: (state, action) => {
			state.price = action.payload;
		},
		changeImg: (state, action) => {
			state.img = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(addCars, (state) => {
			state.title = "";
			state.company = "";
			state.img = "";
			state.price = 0;
		});
	},
});

export const { changeTitle, changeCompany, changePrice, changeImg } =
	formSlice.actions;
export default formSlice.reducer;
