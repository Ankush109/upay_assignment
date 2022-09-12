import { createReducer } from "@reduxjs/toolkit";
const initialstate = {};
export const productsreducer = createReducer(initialstate, {
  allproductsrequest: (state) => {
    state.loading = true;
  },
  allproductssuccess: (state, action) => {
    state.loading = false;
    state.products = action.payload.products;
  },
  allproductsfailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  productdetailsrequest: (state) => {
    state.loading = true;
  },
  productdetailssuccess: (state, action) => {
    state.loading = false;
    state.products = action.payload.product;
  },
  productdetailsfailure: (state, action) => {
    state.loading = false;
    state.error = action.payload.message;
  },
  addproductrequest: (state) => {
    state.loading = true;
  },
  addproductsuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  addproductfailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
});
