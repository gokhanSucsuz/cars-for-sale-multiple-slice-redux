import { createSlice } from "@reduxjs/toolkit";

// title: "",
// 	company: "",
// 	price: 0,

const initialState = {
	searchTerm: "",
	data: [],
};

const carsForSaleSlice = createSlice({
	name: "carForSale",
	initialState,
	reducers: {
		addCars: (state, action) => {
			state.data.push({
				title: action.payload.title,
				company: action.payload.company,
				price: action.payload.price,
				img: action.payload.img,
				id: crypto.randomUUID(),
			});
		},
		deleteCar: (state, action) => {
			state.data = state.data.filter((data) => data.id !== action.payload);
		},
		searchCar: (state, action) => {
			state.searchTerm = action.payload;
		},
	},
});

export const { addCars, deleteCar, searchCar } = carsForSaleSlice.actions;

export default carsForSaleSlice.reducer;
