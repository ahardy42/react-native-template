import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import { setToken, setRefreshToken } from '../slices/auth'
import { Mutex } from 'async-mutex'
import { refreshEndpoint, authApi } from './auth'

// Create a baseQuery with automatic reauthentication
// from https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#implementing-a-custom-basequery
export const returnBaseQueryWithReauth = baseUrl => {
    // create a new mutex
    const mutex = new Mutex()
    // create a baseQuery using the baseUrl
    const baseQuery = fetchBaseQuery({ baseUrl })
    // create a baseQuery for the refresh endpoint
    const baseRefreshQuery = fetchBaseQuery({ baseUrl: refreshEndpoint, method: 'POST'})
    const baseQueryWithReauth = async (args, api, extraOptions) => {
        // wait until the mutex is available without locking it
        await mutex.waitForUnlock()
        let result = await baseQuery(args, api, extraOptions)
        if (result.error && result.error.status === 401) {
            // checking whether the mutex is locked
            if (!mutex.isLocked()) {
                const release = await mutex.acquire()
                try {
                    const refreshToken = api.getState().auth.refreshToken
                    const refreshResult = await baseRefreshQuery(
                        { body: { refreshToken } },
                        api,
                        extraOptions,
                    )
                    if (refreshResult.data) {
                        // update the auth state with the new tokens
                        console.log('refreshResult success', refreshResult.data)
                        api.dispatch(setRefreshToken(refreshResult.data.refreshToken))
                        api.dispatch(setToken(refreshResult.data.token))
                        // retry the initial query
                        result = await baseQuery(args, api, extraOptions)
                    } else {
                        // if the refresh request fails, log out the user
                        api.dispatch(authApi.endpoints.logout.initiate())
                    }
                } catch (e) {
                    // if the refresh request fails, log out the user
                    api.dispatch(authApi.endpoints.logout.initiate())
                } finally {
                    // release must be called once the mutex should be released again.
                    release()
                }
            } else {
                // wait until the mutex is available without locking it
                await mutex.waitForUnlock()
                result = await baseQuery(args, api, extraOptions)
            }
        }
        return result
    }
    return baseQueryWithReauth
}
