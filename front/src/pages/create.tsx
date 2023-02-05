import { ModalAddSpot } from '@/components/ModalAddSpot'
import { CreateLayout } from '@/components/Layouts'
import Link from 'next/link'
import { ReactElement } from 'react'
import { NextPageWithLayout } from '@/pages/_app'
import { FormCreateStampcard } from '@/components/Forms'

const Create: NextPageWithLayout = () => {
  return (
    <>
      <Link href="/list">/list</Link>
      <FormCreateStampcard />
      <ModalAddSpot />
    </>
  )
}

Create.getLayout = function getLayout(page: ReactElement) {
  return <CreateLayout>{page}</CreateLayout>
}

export default Create
