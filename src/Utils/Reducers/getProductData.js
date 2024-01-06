import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchproducts = createAsyncThunk('/fetchproducts',async()=>{
    const response = await axios.get('https://quick-click-o1yf.vercel.app/api/products/get')
    const data = response.data
    // console.log(data)
    return data
})

const ProductSlice = createSlice({
    name:'products',
    initialState:{
        products:[],
        filteredproducts:[]
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchproducts.pending,(state)=>{
            state.status = 'pending'
        }),
        builder.addCase(fetchproducts.fulfilled,(state,action)=>{
            state.products = action.payload,
            state.filteredproducts = action.payload,
            state.status = 'succeded'
        }),
        builder.addCase(fetchproducts.rejected,(state)=>{
            state.status = 'rejected'
        })
    }
})

export default ProductSlice.reducer