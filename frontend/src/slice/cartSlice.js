import { createSlice } from "@reduxjs/toolkit";



const initialState=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):{cartItem:[]}

const cartslice=createSlice({
    name:"cart",
    initialState,
    reducers:{},
})
export default cartslice.reducer