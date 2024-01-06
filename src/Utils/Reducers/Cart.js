import { createSlice } from "@reduxjs/toolkit";

const Cart = createSlice({
    name:'cart',
    initialState:{
        cart:[],
        totalPrice:0
    },
    reducers:{
        addToCart:(state,action)=>{
            state.cart.push(action.payload)
        },
        totalprice: (state) => {
            // Calculate total price
            let totalPrice = 0;
            state.cart.forEach((item) => {
              totalPrice += item.price * item.quantity;
            });
      
            // Store the total price in the state
            state.totalPrice = totalPrice;
        },
        removecart:(state,action)=>{
            state.cart.splice(action.payload,1)
        }
    }
})

export const {addToCart,totalprice,removecart} = Cart.actions

export default Cart.reducer