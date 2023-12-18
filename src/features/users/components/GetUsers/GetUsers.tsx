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
    return <ul>
        {userState.users.map(user => {
            return <li key={user.id}>{user.name}</li>
        })}
    </ul>
}