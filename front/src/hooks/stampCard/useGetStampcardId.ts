import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const useGetStampcardId = () => {
  const router = useRouter()
  const query = router.query
  const [id, setId] = useState<string>() // stampcardのid

  let queryId: string | string[] | undefined = undefined

  useEffect(() => {
    if (router.isReady && typeof query.id === 'string') {
      queryId = query.id
      setId(queryId)
    }
  }, [router, query, id])

  return {
    id
  }
}
