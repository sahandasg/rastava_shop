import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

type cartItem = {
    id: string
    title: string
    price: number
    quantity: number
}

type cartState = {
    items: cartItem[]
}

const initialState: cartState = {
    items: []
}
export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state: cartState, action: PayloadAction<{ id: string, title: string, price: number }>) => {
            const itemIndex = state.items.findIndex((item) => item.id === action.payload.id)

            if (itemIndex >= 0) {
                state.items[itemIndex].quantity++
            } else {
                state.items.push({...action.payload, quantity: 1})
            }
        },
        removeFromCart: (state: cartState, action: PayloadAction<string>) => {
            const itemIndex = state.items.findIndex((item) => item.id === action.payload)
            if (state.items[itemIndex].quantity > 1) {
                state.items[itemIndex].quantity--
            } else {
                state.items.splice(itemIndex, 1)
            }
        },
    }
})
