import Link from 'next/link'
import { ReactElement } from 'react'
import { HomeLayout } from '@/components/Layouts'
import type { NextPageWithLayout } from './_app'
import { ButtonHamburgerMenu } from '@/components/Buttons/ButtonHamburgerMenu'

const Home: NextPageWithLayout = () => {
  return (
    <>
    {/* //PR確認用 */}
    <ButtonHamburgerMenu/>
    
      <Link href="/create">/create</Link>
      <Link href="/list">/list</Link>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <HomeLayout>{page}</HomeLayout>
}

export default Home
