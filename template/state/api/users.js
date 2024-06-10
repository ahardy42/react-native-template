import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { returnBaseQueryWithReauth } from './baseQuery'

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: returnBaseQueryWithReauth('https://dummyjson.com/users'),
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token
        if (token) {
            // headers.set('Authorization', `Bearer ${token}`) // this is how you would set the token if you were using a token
        }
        return headers
    },
    tagTypes: ['User'],
    endpoints: builder => ({
        getUsers: builder.query({
            query: () => ({
                url: '/',
                method: 'GET',
            }),
            transformResponse: body => body.users,
            providesTags: ['User'],
        }),
        getUser: builder.query({
            query: id => ({
                url: `/${id}`,
                method: 'GET',
            }),
            providesTags: ['User'],
        }),
    }),
})

export const { useGetUsersQuery, useGetUserQuery, useLazyGetUserQuery } = usersApi