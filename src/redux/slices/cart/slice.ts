import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCartFromLS } from "../../../utils/getCartFromLS";
import { calculateTotalPrice } from "../../../utils/calculateTotalPrice";


export type CartItemType = {
    id: string
    title: string
    price: number
    imageUrl: string
    count: number
}
export type CartStateType = {
    items: CartItemType[]
    totalPrice: number
}



const {items, totalPrice} = getCartFromLS()


const initialState: CartStateType = {
    items,
    totalPrice
}



const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<CartItemType>) {
            const foundItem = state.items.find(i => i.id === action.payload.id)
            if (foundItem) {
                foundItem.count++
            } else {
                state.items.push({ ...action.payload, count: 1 })
            }
            state.totalPrice = calculateTotalPrice(state.items)
        },
        minusItem(state, action: PayloadAction<string>) {
            const foundItem = state.items.find(i => i.id === action.payload)
            if (foundItem) {
                foundItem.count--
            }
            state.totalPrice = calculateTotalPrice(state.items)
        },
        removeItem(state, action: PayloadAction<string>) {
            state.items = state.items.filter(i => i.id !== action.payload)
            state.totalPrice = calculateTotalPrice(state.items)
        },
        clearCart(state) {
            state.items = []
            state.totalPrice = 0
        }
    }
})

export const { addItem, minusItem, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer

