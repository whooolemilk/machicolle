import { StampcardType, useGetStampcardQuery } from '@/rtk/api'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const useStampcard = () => {
  const router = useRouter()
  const [stampcardData, setStampcardData] = useState<StampcardType>()
  let id = ''

  if (typeof router.query.id === 'string') {
    id = router.query.id
  }
  const { data: myStampcard } = useGetStampcardQuery(id)

  useEffect(() => {
    if (typeof myStampcard !== 'string') {
      setStampcardData(myStampcard)
    }
  }, [myStampcard])
  return {
    stampcardData,
    id
  }
}
