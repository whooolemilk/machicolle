import { useEffect, useState } from 'react'
import { demoData } from '@/lib/stampcardConfig'
import { StampcardType, useGetStampcardQuery } from '@/rtk/api'

type Props = {
  isDemo: boolean
  id: string
}

export const useGetStampcard = ({ isDemo, id }: Props) => {
  const [stampcardData, setStampcardData] = useState<StampcardType>()
  const [isStamped, setIsStamped] = useState<number[]>([])
  let myStampedList

  const { data: myStampcard } = useGetStampcardQuery(id)

  useEffect(() => {
    const getStampcard = () => {
      if (myStampcard && typeof myStampcard !== 'string') {
        setStampcardData(myStampcard)
      }
    }
    const getIsStamped = () => {
      const myStampedList = localStorage.getItem(id)
      console.log(myStampedList)

      if (typeof myStampedList === 'string') {
        // すでにlocalstorageにkey:myListがあったら
        const myStampcardList = myStampedList.split(',')
        setIsStamped(myStampcardList.map((str) => parseInt(str, 10)))
      }
    }

    const getDemoStampcard = () => {
      setStampcardData(demoData)
    }

    if (isDemo) {
      getDemoStampcard()
    } else {
      getStampcard()
    }
    getIsStamped()
  }, [myStampcard, myStampedList])
  return {
    stampcardData,
    isStamped
  }
}
