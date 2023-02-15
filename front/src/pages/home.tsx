import { ReactElement } from 'react'
import { HomeLayout } from '@/components/Layouts'
import { CardHome } from '@/components/Cards'
import type { NextPageWithLayout } from '@/pages/_app'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <CardHome />
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <HomeLayout>{page}</HomeLayout>
}

export default Home
