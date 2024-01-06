import { createSlice } from "@reduxjs/toolkit";

const quantity = createSlice({
    name:'quantity',
    initialState:{
        quantity:1
    },
    reducers:{
        increase:(state)=>{
            state.quantity = state.quantity + 1
        },
        decrease:(state)=>{
            state.quantity = state.quantity - 1
        }
    }
})

export const {increase,decrease} = quantity.actions

export default quantity.reducer