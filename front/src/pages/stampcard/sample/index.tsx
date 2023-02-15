import { ReactElement } from 'react'
import { StampcardSampleLayout } from '@/components/Layouts'
import { StampcardIndex } from '@/components/Stampcards'
import { NextPageWithLayout } from '@/pages/_app'

const SampleStampcard: NextPageWithLayout = () => {
  const isDemo = true
  const id = 'sample'

  return (
    <>
      <StampcardIndex isDemo={isDemo} id={id} />
    </>
  )
}

SampleStampcard.getLayout = function getLayout(page: ReactElement) {
  return <StampcardSampleLayout>{page}</StampcardSampleLayout>
}

export default SampleStampcard
