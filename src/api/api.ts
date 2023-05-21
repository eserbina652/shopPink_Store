import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ILoginForm} from "../screens/authorization/interface";
import {ILoginedUser} from "./types/userstypes";
import {IProducts} from "../components/products/types";
import {IUser, IUserPosts} from "../screens/profile/types";

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
        getSingleUser: build.query<IUser, number>({
            query: userId => `/users/${userId}`
        }),
        getUserPosts: build.query<IUserPosts, number>({
            query: userId => `/users/${userId}/posts`
        }),
    })
})

export const {
    useLoginMutation,
    useGetCategoriesQuery,
    useGetProductsQuery,
    useGetSingleUserQuery,
    useGetUserPostsQuery
} = api
