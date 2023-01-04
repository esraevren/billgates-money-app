import { createSlice } from "@reduxjs/toolkit";
import productsJSON from "../../products.json"


const data = productsJSON.products

export const productsSlice= createSlice({
  name:"products",
  initialState:{
    items:data,
    budget:100000000000,
    initialMoney:100000000000,
  },
  reducers: {}
})

export default productsSlice.reducer;