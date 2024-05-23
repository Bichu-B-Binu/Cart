export const addDecimals=(num)=>{
    return(Math.round(num*100)/100).toFixed(2)
}

export const updateCart=(state,item)=>{

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
return state
}