import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/cartUtils";



const initialState=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):{cartItems:[]}


const cartslice=createSlice({
    name:"cart",
    initialState,
    reducers:{ addToCart(state,action){
        //The item to add to the cart 
        const item= action.payload;
        //Check if the item is already in the cart 
        const existingItem=state.cartItems.find((x)=>x._id===item._id)
        //If exists, updqate quantity
        if (existingItem) {
        state.cartItems=state.cartItems.map((x)=>{
        return x._id===existingItem._id?item:x;
        })
    
        } else {
        //If not exists, add new item to cartItems
        state.cartItems=[...state.cartItems,item];  
        }
        return updateCart(state,item)
        },
         removeFromCart(state,action){
        //Filter out the item remove from cart
        state.cartItems=state.cartItems.filter((x)=>x._id!==action.payload)
        return updateCart(state)
        }
},
})
export const {addToCart,removeFromCart}=cartslice.actions

export default cartslice.reducer