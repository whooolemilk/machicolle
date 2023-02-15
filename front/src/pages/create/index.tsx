import { ReactElement } from 'react'
import { CreateLayout } from '@/components/Layouts'
import { FormCreateStampcard } from '@/components/Forms'
import { NextPageWithLayout } from '@/pages/_app'

const Create: NextPageWithLayout = () => {
  return (
    <>
      <FormCreateStampcard />
    </>
  )
}

Create.getLayout = function getLayout(page: ReactElement) {
  return <CreateLayout>{page}</CreateLayout>
}

export default Create
