import { ReactElement } from 'react'
import { PublicLayout } from '@/components/Layouts'
import { NextPageWithLayout } from '@/pages/_app'
import { CardPublic } from '@/components/Cards'
import { useGetStampcardId } from '@/hooks/stampCard'

const Public: NextPageWithLayout = () => {
  const { id } = useGetStampcardId()
  return <>{id && <CardPublic id={id} />}</>
}
Public.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>
}

export default Public
