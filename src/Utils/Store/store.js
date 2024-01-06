import { configureStore } from "@reduxjs/toolkit";
import getProductData from "../Reducers/getProductData";
import Cart from "../Reducers/Cart";
import Quantity from "../Reducers/Quantity";

const store = configureStore({
    reducer:{
        getproduct:getProductData,
        cart:Cart,
        quantity:Quantity
    }
})

export default store