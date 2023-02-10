import { ButtonMain } from '@/components/Buttons'
import { ListLayout } from '@/components/Layouts'
import Link from 'next/link'
import { ReactElement, useEffect, useState } from 'react'
import { Emoji, EmojiStyle } from 'emoji-picker-react'
import { StampcardType, useGetMyStampcardsListQuery } from '@/rtk/api'
import { useCheckCanStamp } from '@/hooks/stampCard/useCheckCanStamp'

type LatLngLiteral = google.maps.LatLngLiteral
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

  const canStamp = useCheckCanStamp({
    //TODO:仮行き先データ（和歌山大学）対象の行き先の座標を渡す
    lat: 34.26556150790495,
    lng: 135.15164162920647
  } as LatLngLiteral)

  const { data: myStampcards } = useGetMyStampcardsListQuery(myIdList)

  useEffect(() => {
    setStampcardsList(myStampcards)
  }, [myStampcards])
  return (
    <>
      <Link href="/stampcard">/stampcard</Link>
      {stampcardsList?.map((stampcard, index) => (
        <div key={index}>
          <h1>{stampcard.stampcardName}</h1>
          <p>{stampcard.stampcardDescription}</p>
          <p>{stampcard.emoji}</p>
          <Emoji
            unified={stampcard.emoji}
            emojiStyle={EmojiStyle.TWITTER}
            size={28}
          />
          {stampcard.spots?.map((spot, key) => (
            <div key={key}>
              <p>{spot.name}</p>
              <p>{spot.url}</p>
              <p>{spot.memo}</p>
            </div>
          ))}
        </div>
      ))}
      <Link href="/stampcard">/stampcard</Link>
      {/* //TODO: 確認用の仮置きボタン */}
      <ButtonMain onClick={() => canStamp.then((res) => console.log(res))}>
        CHECK CANSTAMP
      </ButtonMain>
    </>
  )
}

List.getLayout = function getLayout(page: ReactElement) {
  return <ListLayout>{page}</ListLayout>
}

export default List
