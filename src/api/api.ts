import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: 'postData',
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com'}),
    endpoints:(build) => ({

    })
})