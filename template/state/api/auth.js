import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Create an api slice with login, logout and refreshToken endpoints
export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/auth/' }),
    endpoints: builder => ({
        login: builder.mutation({
            query: ({ username, password }) => ({
                url: 'login',
                method: 'POST',
                body: { username, password },
            }),
            transformResponse: body => {
                // Extract the token and user from the response
                const { token, refreshToken, ...user } = body
                return { token, refreshToken, user }
            },
        }),
        logout: builder.mutation({
            query: () => ({
                url: 'logout',
                method: 'POST',
            }),
        }),
        refreshToken: builder.mutation({
            query: refreshToken => ({
                url: 'refresh',
                method: 'POST',
                body: { refreshToken },
            }),
        }),
    }),
})

export const { logout } = authApi.endpoints
export const refreshEndpoint = 'https://dummyjson.com/auth/refresh'