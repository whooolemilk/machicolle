import { ListLayout } from '@/components/Layouts'
import Link from 'next/link'
import { ReactElement } from 'react'

const List = () => {
  return (
    <>
      <Link href="/stampcard">/stampcard</Link>
    </>
  )
}

List.getLayout = function getLayout(page: ReactElement) {
  return <ListLayout>{page}</ListLayout>
}

export default List
