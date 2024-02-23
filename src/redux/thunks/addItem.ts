import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ItemFullInfoType } from "../../Pages/FullItem/FullItem";



const newItem: ItemFullInfoType = {
    category: "TV",
    description: "TV",
    id: "7",
    imageUrl: "https://content2.rozetka.com.ua/goods/images/big_tile/364924761.jpg",
    isAviable: true,
    price: 5000,
    rating: 4,
    reviews: [],
    title: "TV 4K",
    characteristics: [],
    photos: []
}

export const addNewItem = createAsyncThunk(
    'items/add',
    async () => {
        const response = await axios.delete(`https://65c3cdbc4ac991e8059b1449.mockapi.io/items/7`)
        return response.data
    }
)