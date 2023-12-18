// В папке shared хранится всё максимально общее для проекта, что в теории,
// может вообще переходить из одного проекта в другой.
// В частности, тут создаются общие ui-компоненты для проекта
interface IProps {
    title: string
}

export default function UiButton({title}:IProps) {
    return <button>{title}</button>
}