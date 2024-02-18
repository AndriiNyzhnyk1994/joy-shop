import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import itemsReducer from './slices/items/slice'
import cartReducer from './slices/cart/slice'

export const store = configureStore({
    reducer: {
        items: itemsReducer,
        cart: cartReducer
    }
})


type FuncType = typeof store.getState

export type RootState = ReturnType<FuncType>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()