
interface IProps {
    title: string
}

export default function UiButton({title}:IProps) {
    return <button>{title}</button>
}