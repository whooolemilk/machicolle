import { ReactElement } from 'react'
import { StampcardLayout } from '@/components/Layouts'
import { StampcardCoupon } from '@/components/Stampcards'
import { NextPageWithLayout } from '@/pages/_app'
import { useGetStampcardId } from '@/hooks/stampCard'

const Coupon: NextPageWithLayout = () => {
  const isDemo = false
  const { id } = useGetStampcardId()
  return <>{id && <StampcardCoupon isDemo={isDemo} id={id} />}</>
}
Coupon.getLayout = function getLayout(page: ReactElement) {
  return <StampcardLayout>{page}</StampcardLayout>
}
export default Coupon
