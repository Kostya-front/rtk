// Согласно FSD, виджеты - это блоки, способные существовать автономно,
// несущие оконченную информацию, по факту, являющиеся контейнерами для
// каких-либо сущностей, для постов, карточек товаров, комментариев, либо
// для SEO-компонентов - header, footer, aside и так далее
// Как правило, компоненты-features, хрянятся именно здесь

import CreateUser from "@/features/users/components/CreateUser/CreateUser";


export default function UserForm() {
    return <section>
        <CreateUser/>
    </section>
}