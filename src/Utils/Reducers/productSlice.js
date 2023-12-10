import { createSlice } from "@reduxjs/toolkit";
import products from "../../Data/constant";

const productSlice = createSlice({
    name:'products',
    initialState:{
        product:products,
        filteredproducts:products
    },
    reducers:{
        getItems:(state)=>{
            state.product
        },
        filterproduct:(state,action)=>{
            if(!action.payload || action.payload == 'All'){
                state.filteredproducts = state.product
            }else{
            state.filteredproducts = state.product.filter((product)=>{
                return product.category.includes(action.payload)
            })
            }
        },
        Slideproduct:(state,action)=>{
            if(action.payload == '2000'){
                state.filteredproducts = state.product
            }else if(action.payload == '0'){
                state.filteredproducts = []
            }else if(action.payload > '1000' && action.payload < '2000'){
                state.filteredproducts = state.product.filter((product)=>{
                    return product.price.includes('1000')
                })
            }else if(action.payload > '0' && action.payload < '1000'){
                state.filteredproducts = state.product.filter((product)=>{
                    return product.price.includes('500')
                })
            }
            else{
                state.filteredproducts = state.product.filter((product)=>{
                    return product.price.includes(action.payload)
                })
            }
        }
    }
})

export const {getItems,filterproduct,Slideproduct} = productSlice.actions

export default productSlice.reducer