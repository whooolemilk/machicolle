import { ReactElement } from 'react'
import { StampcardLayout } from '@/components/Layouts'
import { StampcardSpot } from '@/components/Stampcards'
import { NextPageWithLayout } from '@/pages/_app'

const Spot: NextPageWithLayout = () => {
  return (
    <>
      <StampcardSpot />
    </>
  )
}

Spot.getLayout = function getLayout(page: ReactElement) {
  return <StampcardLayout>{page}</StampcardLayout>
}
export default Spot
