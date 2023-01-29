import type { AppProps } from 'next/app'
import { store } from '@/rtk/store'
import { Provider } from 'react-redux'
import 'normalize.css'
import '@/styles/global.scss'
import '@/lib/firebase'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
