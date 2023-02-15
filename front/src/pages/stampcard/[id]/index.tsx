import { ReactElement } from 'react'
import { StampcardLayout } from '@/components/Layouts'
import { StampcardIndex } from '@/components/Stampcards'
import { NextPageWithLayout } from '@/pages/_app'
import { useGetStampcardId } from '@/hooks/stampCard'

const Stampcard: NextPageWithLayout = () => {
  const isDemo = false
  const { id } = useGetStampcardId()
  return <>{id && <StampcardIndex isDemo={isDemo} id={id} />}</>
}

Stampcard.getLayout = function getLayout(page: ReactElement) {
  return <StampcardLayout>{page}</StampcardLayout>
}

export default Stampcard
