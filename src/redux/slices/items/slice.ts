import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import { addNewItem } from "../../thunks/addItem";

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}
export type ReviewType = {
    name: string
    text: string
    rate: number
}

export type ItemType = {
    id: string
    title: string
    price: number
    isAviable: boolean
    imageUrl: string
    category: string
    rating: number
}
export type ItemsStateType = {
    items: ItemType[]
    status: Status
}
type FetchItemsArgsType = {
    page: string
}




const initialState: ItemsStateType = {
    status: Status.LOADING,
    items: []
}

export const fetchItems = createAsyncThunk<ItemType[], FetchItemsArgsType>(
    'items/fetchItems',
    async (params) => {
        const {page} = params
        const {data} = await axios.get<ItemType[]>(`https://65c3cdbc4ac991e8059b1449.mockapi.io/items`)
        return data
    }

)

const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<ItemType[]>) {
            state.items = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchItems.pending, (state) => {
                state.items = []
                state.status = Status.LOADING
            })
            .addCase(fetchItems.fulfilled, (state, action) => {
                state.items = action.payload
                state.status = Status.SUCCESS
            })
            .addCase(fetchItems.rejected, (state) => {
                state.items = []
                state.status = Status.ERROR
            })
            .addCase(addNewItem.pending, (state, action) => {
                state.status = Status.LOADING
            })
            .addCase(addNewItem.fulfilled, (state, action) => {
                state.status = Status.SUCCESS
                state.items.push(action.payload)
            })
            .addCase(addNewItem.rejected, (state, action) => {
                state.status = Status.ERROR
                state.items = []
            })
    }
})


export const {setItems} = itemsSlice.actions
export default itemsSlice.reducer



