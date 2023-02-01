import Link from 'next/link'
import { ReactElement } from 'react'
import { HomeLayout } from '@/components/Layouts'
import type { NextPageWithLayout } from './_app'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Link href="/create">/create</Link>
      <Link href="/list">/list</Link>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <HomeLayout>{page}</HomeLayout>
}

export default Home
