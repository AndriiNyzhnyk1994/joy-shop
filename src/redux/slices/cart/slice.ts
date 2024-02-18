import { createSlice, PayloadAction } from "@reduxjs/toolkit";


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

const initialState: CartStateType = {
    items: [],
    totalPrice: 0
}


const calculateTotalPrice = (cartItems: CartItemType[]) => {
    const totalPrice = cartItems.reduce((acc, el) => {
        return (el.count * el.price) + acc
    }
        , 0)
    return totalPrice
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
        }
    }
})

export const { addItem, minusItem, removeItem } = cartSlice.actions
export default cartSlice.reducer

