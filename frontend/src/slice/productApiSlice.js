import { apiSlice } from "./apiSlice";
export const productSlice=apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        getProducts:builder.query({
            query:()=>({
                url:"/api/products",
            }),
            keepUnusedDataFor:5,
        }),
        getProductsDetails:builder.query({
            query:(productId)=>({
                url:`/api/products/${productId}`,
            }),
            keepUnusedDataFor:5,
        })
    })
})


export const {useGetProductsQuery,useGetProductsDetailsQuery}=productSlice;