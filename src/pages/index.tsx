// В этой папке будут храниться компоненты отдельных страниц. Название
// pages - обязательно, на это название будет реагировать реакт, когда займётся
// рендерингом страниц. Компоненты pages, как правило, состоят из 
// компонентов widgets - блоки верстки отдельных самостоятельных секций, по типу
// блока с постами, продуктами, пользователями и тд

import UserForm from "@/widgets/UserForm/UserForm";
import styles from './style.module.css'
import UserList from "@/widgets/UserList/UserList";


export default function Home() {
    return <div>
        <div className={styles.container}>
            Application
            <UserForm/>
            <UserList/>
        </div>
    </div>
}