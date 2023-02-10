import { useEffect, useState } from 'react'

type LatLng = google.maps.LatLng
type LatLngLiteral = google.maps.LatLngLiteral

export const useGetCurrentLocation = () => {
  const [currentLocation, setCurrentLocation] = useState<
    LatLng | LatLngLiteral
  >()

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) =>
        setCurrentLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        }),
      (err) => console.log(err)
    )
  }, [])

  return { currentLocation }
}
