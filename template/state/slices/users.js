import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        selectedUser: null,
    },
    // using a normal reducer to set up state (unlike the matchers in the auth slice)
    reducers: {
        setUsers(state, action) {
            state.users = action.payload
        },
        setSelectedUser(state, action) {
            state.selectedUser = action.payload
        },
    },
})

export default slice.reducer

export const { setUsers, setSelectedUser } = slice.actions

// Selectors to be used with useSelector
export const selectUsers = state => state.users.users
export const selectSelectedUser = state => state.users.selectedUser