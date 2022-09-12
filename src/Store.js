import { configureStore } from "@reduxjs/toolkit";
import { productsreducer } from "./Reducers/Productreducer";

export const store = configureStore({
  reducer: {
    allproducts: productsreducer,
  },
});
export default store;
