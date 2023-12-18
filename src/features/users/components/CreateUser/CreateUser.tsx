import UiButton from "@/shared/ui/UiButton/UiButton";
import UiInput from "@/shared/ui/UiInput/UiInput";
import styles from './style.module.css'
import { ChangeEvent, FormEvent, useState } from "react";
import { AppDispatch, RootState } from "@/shared/store";
import { useDispatch, useSelector } from "react-redux";
import { createUser, getUsers } from "../../thunks";
import { setUserName } from "../../slices/userSlice";



export default function CreateUser() {
    const userState = useSelector((state: RootState) => state.users)
    const dispatch = useDispatch<AppDispatch>()

    function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        dispatch(createUser({name: userState.newUser.name}))
    }
    return <form onSubmit={(event) => onSubmit(event)} className={styles.form}>
        <UiInput onInput={(text: string) => dispatch(setUserName(text))} value={userState.newUser.name} />
        <UiButton title="Создать"/>
    </form>
}