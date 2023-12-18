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