// Согласно архитектуре FSD, здесь у нас просто хранятся компоненты,
// которые связаны с функциями из стора и по-большей части, js-логика, в идеале,
// должна быть только у этих компонентов

import { AppDispatch, RootState } from "@/shared/store"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from "../../thunks"




export default function GetUsers() {
    const userState = useSelector((state: RootState) => state.users)
    const disptach = useDispatch<AppDispatch>()

    useEffect(() => {
        disptach(getUsers())
    },[])

    if(userState.error) {
        return <p>error</p>
    }

    if(userState.loading) {
        return <p>loading</p>
    }

    return <ul>
        {userState.users.map(user => {
            return <li key={user.id}>{user.name}</li>
        })}
    </ul>
}