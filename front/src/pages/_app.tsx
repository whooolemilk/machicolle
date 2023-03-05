import type { AppProps } from 'next/app'
import { store } from '@/rtk/store'
import { Provider } from 'react-redux'
import 'normalize.css'
import '@/styles/global.scss'
import '@/lib/firebase'
import { Layout } from '@/components/Layouts'
import { NextPage } from 'next'
import type { ReactElement, ReactNode } from 'react'
import { DefaultSeo } from '@/components/SEOs'

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // pageごとにレイアウト切り替える
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    <Provider store={store}>
      <DefaultSeo />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
