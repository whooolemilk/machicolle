import { ReactElement } from 'react'
import { PublicLayout } from '@/components/Layouts'
import { NextPageWithLayout } from '@/pages/_app'
import { CardPublic } from '@/components/Cards'

const Public: NextPageWithLayout = () => {
  return (
    <>
      <CardPublic />
    </>
  )
}
Public.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>
}

export default Public
