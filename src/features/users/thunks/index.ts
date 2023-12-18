// Здесь непосредственно мы прописываем запросы на бэкенд, в надежде
// либо что-то оправить на сервер, либо что-то получить
// Каждая санка состоит из одного шаблона - это объект, получаемый из
// функции createAsyncThunk, который берёт в себя два аргумента - условно
// id каждой санки, его традиционно описывают по формуле 
// "сущность/действие с сущностью", и непосредственно сама асинхронная функция,
// делающая http-запросы, которая обязательно должна что-то вернуть, так как,
// именно то, что мы возвращаем и попадает дальше в наш стор, в частности в
// action.payload
// На каждый запрос должна быть своя санка

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