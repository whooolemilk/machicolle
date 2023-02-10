import { ReactElement } from 'react'
import { StampcardLayout } from '@/components/Layouts'
import { StampcardIndex } from '@/components/Stampcards'
import { NextPageWithLayout } from '@/pages/_app'

const Stampcard: NextPageWithLayout = () => {
  return (
    <>
      <StampcardIndex />
    </>
  )
}

Stampcard.getLayout = function getLayout(page: ReactElement) {
  return <StampcardLayout>{page}</StampcardLayout>
}

export default Stampcard
