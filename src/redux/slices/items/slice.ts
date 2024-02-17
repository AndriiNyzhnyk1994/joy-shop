import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}
export type ReviewType = {
    name: string
    text: string
}

export type ItemType = {
    id: number
    title: string
    price: number
    isAviable: boolean
    imageUrl: string
    category: string
    description: string
    rating: number
    reviews: ReviewType[] 
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
        const {data} = await axios.get<ItemType[]>(`https://653db286f52310ee6a9a45a9.mockapi.io/elements`)
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
    }
})


export const {setItems} = itemsSlice.actions
export default itemsSlice.reducer



