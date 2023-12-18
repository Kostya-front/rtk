import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../types";
const baseUrl = 'https://jsonplaceholder.typicode.com/'

export const getUsers = createAsyncThunk<IUser[]>('users/getUsers', async () => {
    const response = await fetch(`${baseUrl}/users`)
    const users = await response.json()
    return users
})

export const createUser = createAsyncThunk<IUser, {name: string}>('users/createUser', async (user: {name: string}) => {
    const response = await fetch(`${baseUrl}/users`, {
        method: 'post',
        headers:  {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    const newUser = await response.json()
    return newUser
})