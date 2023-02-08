import { ButtonMain } from '@/components/Buttons'
import { ListLayout } from '@/components/Layouts'
import Link from 'next/link'
import { useCheckCanStamp } from '@/hooks/stampCard/useCheckCanStamp'
import { ReactElement } from 'react'

type LatLngLiteral = google.maps.LatLngLiteral
const List = () => {
  const canStamp = useCheckCanStamp({
    //TODO:仮行き先データ（和歌山大学）対象の行き先の座標を渡す
    lat: 34.26556150790495,
    lng: 135.15164162920647
  } as LatLngLiteral)

  return (
    <>
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
