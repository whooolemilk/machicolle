import { CreateLayout, Layout } from '@/components/Layouts'
import Link from 'next/link'
import { ReactElement } from 'react'
import { NextPageWithLayout } from '@/pages/_app'

const Create: NextPageWithLayout = () => {
  return (
    <>
      <Link href="/list">/list</Link>
    </>
  )
}

Create.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <CreateLayout>{page}</CreateLayout>
    </Layout>
  )
}

export default Create
