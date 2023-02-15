import { ReactElement } from 'react'
import { StampcardSampleLayout } from '@/components/Layouts'
import { StampcardSpot } from '@/components/Stampcards'
import { NextPageWithLayout } from '@/pages/_app'

const SampleSpot: NextPageWithLayout = () => {
  const isDemo = true
  const id = 'sample'
  return (
    <>
      <StampcardSpot isDemo={isDemo} id={id} />
    </>
  )
}

SampleSpot.getLayout = function getLayout(page: ReactElement) {
  return <StampcardSampleLayout>{page}</StampcardSampleLayout>
}
export default SampleSpot
