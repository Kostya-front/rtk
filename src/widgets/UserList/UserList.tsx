import GetUsers from "@/features/users/components/GetUsers/GetUsers"
import { RootState } from "@/shared/store"
import { useSelector } from "react-redux"



export default function UserList() {

    return <div>
        <GetUsers/>
    </div>
}