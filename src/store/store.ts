import {configureStore} from "@reduxjs/toolkit";
// @ts-ignore
import {cartSlice} from "./cart-slice.ts";

export const store = configureStore({
    reducer :{
        cart : cartSlice.reducer
    }
})