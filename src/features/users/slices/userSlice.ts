// Здесь сердце любого стора - объект, получаемый из функции createSlice,
// В данном случае (да и в большинстве случаев), наш слайс состоит из
// имени (своего рода id), из начального стейта и двух редусеров - экстра-редусера,
// и обычного. Разница между ними в том, что в экстра-редусере у нас 
// выполняются санки, а в обычно редусере - только синхронные запросы
// extraReducer - это по сути функция, которая получается в себя определенный
// объект buildCreateApi, состоящий из трех методов, и в 99% нас будет 
// интересовать только метод addCase, поскольку именно он и занимается
// отслеживанием состояния запроса (pending, fullfilled, rejected), а также
// всей работой с результатом этих запросов, то есть с тем, что придёт с сервера
// Поскольку этот метод addCase сделан по паттерну Chain, у нас есть возможность
// вызывать эти методы по цепочке, последовательность тут не решает.
// Каждый addCase занимается своей задачей, в зависимости от статуса запроса.
// Обычный редусер содержит синхронные функции, в частности, тут функция, 
// отвечающая за то, чтобы всё, что написано в инпуте, сразу же сохранялось
// в сторе

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