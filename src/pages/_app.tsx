// Поскольку современный реакт по-дефолту предлагает использовать Next.Js,
// стандартный проект рекомендуется дополнять этим файлом именно с таким именем,
// по сути, это обычный App.jsx, только слегка адаптированный создателями
// react под современные нужды, как правило здесь подключается редакс и основные
// лэйауты (общие компоненты, по типу header, footer и так далее, хотя есть
//     и другие способы
// ). В данном контексте, наличие этого файла обусловленно подключением редакса


import { store } from "@/shared/store";
import { AppProps } from "next/app";
import { Provider } from "react-redux";



export default function MyApp({Component, pageProps}: AppProps) {
    return <Provider store={store}>
            <Component {...pageProps}>

            </Component>
    </Provider>
}