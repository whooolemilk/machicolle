import { ReactElement } from 'react'
import { StampcardLayout } from '@/components/Layouts'
import { StampcardSpot } from '@/components/Stampcards'
import { NextPageWithLayout } from '@/pages/_app'
import { useGetStampcardId } from '@/hooks/stampCard'

const Spot: NextPageWithLayout = () => {
  const isDemo = false
  const { id } = useGetStampcardId()

  return <>{id && <StampcardSpot isDemo={isDemo} id={id} />}</>
}

Spot.getLayout = function getLayout(page: ReactElement) {
  return <StampcardLayout>{page}</StampcardLayout>
}
export default Spot
