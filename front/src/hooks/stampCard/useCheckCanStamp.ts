import { useGetDistance } from '@/hooks/stampCard/useGetDistance'
import { useGetCurrentLocation } from '@/hooks/stampCard/useGetCurrentLocation'

type LatLng = google.maps.LatLng
type LatLngLiteral = google.maps.LatLngLiteral

export const useCheckCanStamp = async (
  spotLocation: LatLng | LatLngLiteral
) => {
  const range = 15.0

  const { currentLocation } = useGetCurrentLocation()
  const distance = (await useGetDistance(
    currentLocation,
    spotLocation
  )) as number

  const res: boolean = distance <= range

  return res
}
