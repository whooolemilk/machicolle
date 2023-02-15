import { ReactElement } from 'react'
import { StampcardSampleLayout } from '@/components/Layouts'
import { StampcardCoupon } from '@/components/Stampcards'
import { NextPageWithLayout } from '@/pages/_app'

const SampleCoupon: NextPageWithLayout = () => {
  const isDemo = true
  const id = 'sample'
  return (
    <>
      <StampcardCoupon isDemo={isDemo} id={id} />
    </>
  )
}
SampleCoupon.getLayout = function getLayout(page: ReactElement) {
  return <StampcardSampleLayout>{page}</StampcardSampleLayout>
}
export default SampleCoupon
