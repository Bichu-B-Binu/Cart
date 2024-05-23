import { createSlice } from "@reduxjs/toolkit";



const initialState=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):{cartItems:[]}
const addDecimals=(num)=>{
    return(Math.round(num*100)/100).toFixed(2)
}

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
        //Calculate the items price
        state.itemsPrice=addDecimals(state.cartItems.reduce((acc,item)=>acc+item.price*item.qty,0   ))
        //Calculate the shipping price | If item price is greater then 100 , shipping is free | If not, shipping is 10
        state.shippingPrice=addDecimals(state.itemsPrice>100?100:10)
        //Calculate the tax price | Tax is 15% of the items price
        state.taxPrice=addDecimals(Number(0.15*state.itemsPrice))
        
        
        //Calculate the total price | Total price is the sum of the items price, shipping price and tax price
        state.totalPrice=(
            Number(state.itemsPrice)+
            Number(state.shippingPrice)+
            Number(state.taxPrice)
        ).toFixed(2)
        // save the cart to localstorage
        localStorage.setItem("cart",JSON.stringify(state))

    }},
})
export const {addToCart}=cartslice.actions

export default cartslice.reducer