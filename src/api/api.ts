import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ILoginForm} from "../screens/authorization/interface";
import {ILoginedUser} from "./types/userstypes";
import {IProducts} from "../components/products/types";

export const api = createApi({
    reducerPath: 'postData',
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com'}),
    endpoints: (build) => ({
        login: build.mutation<ILoginedUser, ILoginForm>({
            query: (request: ILoginForm) => ({
                url: `/auth/login`,
                body: request,
                method: 'POST',
            })
        }),
        getCategories: build.query<string[], void>({
            query: () => `/products/categories`
        }),
        getProducts: build.query<IProducts, string>({
            query: categoryName => `/products/category/${categoryName}`
        }),
    })
})

export const {
    useLoginMutation,
    useGetCategoriesQuery,
    useGetProductsQuery,
} = api