import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"


export const apiSlice=createApi({
    baseQuery:fetchBaseQuery({baseUrl:""}),
    tagTypes:["Product","User","Order"],
    // eslint-disable-next-line no-unused-vars
    endpoints:(builder)=>({}),
})