import { useState } from 'react'
import { LatLng } from '@/components/Forms/FormSearchSpot'

export type spotDataType = {
  name: string | undefined
  address: string | undefined
  location: LatLng | undefined
  url: string | undefined
}

export const useGetSpotData = () => {
  const [spotData, setSpotData] = useState<spotDataType>()
  return {
    spotData,
    setSpotData
  }
}
