import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import itemsReducer from './slices/items/slice'

export const store = configureStore({
    reducer: {
        items: itemsReducer
    }
})


type FuncType = typeof store.getState

export type RootState = ReturnType<FuncType>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()