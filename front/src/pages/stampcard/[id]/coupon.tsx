import { ReactElement } from 'react'
import { StampcardLayout } from '@/components/Layouts'
import { StampcardCoupon } from '@/components/Stampcards'
import { NextPageWithLayout } from '@/pages/_app'

const Coupon: NextPageWithLayout = () => {
  return (
    <>
      <StampcardCoupon />
    </>
  )
}
Coupon.getLayout = function getLayout(page: ReactElement) {
  return <StampcardLayout>{page}</StampcardLayout>
}
export default Coupon
