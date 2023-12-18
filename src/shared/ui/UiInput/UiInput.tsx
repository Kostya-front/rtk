import { ChangeEvent } from "react"

interface IProps {
    onInput: (text: string) => void
    value: string
}

export default function UiInput({onInput, value}: IProps) {
    return <input 
    onInput={(event: ChangeEvent<HTMLInputElement>) => onInput(event.target.value)} 
    value={value}
    type="text" />
}