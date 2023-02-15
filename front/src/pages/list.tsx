import { ReactElement, useEffect, useState } from 'react'
import Link from 'next/link'
import { ListLayout } from '@/components/Layouts'
import { CardStampCard } from '@/components/Cards'
import { StampcardType, useGetMyStampcardsListQuery } from '@/rtk/api'

const List = () => {
  const [stampcardsList, setStampcardsList] = useState<StampcardType[]>()
  let myIdList: string[] = []

  try {
    const myList = localStorage.getItem('myList')
    if (typeof myList === 'string') {
      // すでにlocalstorageにkey:myListがあったら
      myIdList = myList.split(',')
    }
  } catch (e) {
    console.log(e)
  }

  const { data: myStampcards } = useGetMyStampcardsListQuery(myIdList)

  useEffect(() => {
    setStampcardsList(myStampcards)
  }, [myStampcards])
  return (
    <>
      <Link href="/stampcard">/stampcard</Link>
      {stampcardsList?.map((stampcard, index) => (
        <div key={index}>
          <CardStampCard data={stampcard} myIdList={myIdList} index={index} />
        </div>
      ))}
    </>
  )
}

List.getLayout = function getLayout(page: ReactElement) {
  return <ListLayout>{page}</ListLayout>
}

export default List
