import { store } from "@/shared/store";
import { AppProps } from "next/app";
import { Provider } from "react-redux";



export default function MyApp({Component, pageProps}: AppProps) {
    return <Provider store={store}>
            <Component {...pageProps}>

            </Component>
    </Provider>
}