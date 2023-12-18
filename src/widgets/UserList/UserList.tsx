// Согласно FSD, виджеты - это блоки, способные существовать автономно,
// несущие оконченную информацию, по факту, являющиеся контейнерами для
// каких-либо сущностей, для постов, карточек товаров, комментариев, либо
// для SEO-компонентов - header, footer, aside и так далее
// Как правило, компоненты-features, хрянятся именно здесь

import GetUsers from "@/features/users/components/GetUsers/GetUsers"
import { RootState } from "@/shared/store"
import { useSelector } from "react-redux"



export default function UserList() {

    return <div>
        <GetUsers/>
    </div>
}