import { Draft, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { createUser, getUsers } from "../thunks";
import { IUser } from "../types";

interface IState {
    loading: boolean
    error: boolean
    newUser: IUser
    users: IUser[]
}
const initialState: IState = {
    loading: false,
    error: false,
    newUser: {} as IUser,
    users:[]
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUserName: (state, action: PayloadAction<string>) => {
            state.newUser.name = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getUsers.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
            state.error = false
        })
        .addCase(getUsers.rejected, (state, action) => {
            state.error = true
        })
        .addCase(getUsers.pending, (state, action) => {
            state.loading = true
        })
        .addCase(createUser.fulfilled, (state, action) => {
            state.users.push(action.payload)
            state.newUser.name = ''
            state.loading = false
            state.error = false
        })
        .addCase(createUser.pending, (state) => {
            state.loading = true
        })
        .addCase(createUser.rejected, (state) => {
            state.error = true
        })
    }
})

export const {setUserName} = userSlice.actions
export default userSlice