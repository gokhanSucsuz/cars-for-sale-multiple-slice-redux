import { configureStore } from "@reduxjs/toolkit";
import carsForSaleReducer from "./slices/carsForSaleSlice";
import formReducer from "./slices/formSlice";

const store = configureStore({
	reducer: {
		carsForSale: carsForSaleReducer,
		formCars: formReducer,
	},
});

export default store;
