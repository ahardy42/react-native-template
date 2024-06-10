import { configureStore, combineReducers } from '@reduxjs/toolkit'
// persist setup
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import { setupListeners } from '@reduxjs/toolkit/query'
import { usersApi } from './api/users'
import { authApi } from './api/auth'
import usersSlice from './slices/users'
import authSlice from './slices/auth'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['auth'],
    blacklist: [usersApi.reducerPath, authApi.reducerPath], // don't persist these it leads to bugs
    version: 1,
}

const rootReducer = combineReducers({
    [authApi.reducerPath]: authApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    users: usersSlice,
    auth: authSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat([usersApi.middleware, authApi.middleware]),
})

export const persistor = persistStore(store)

setupListeners(store.dispatch)

export default store
