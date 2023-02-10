import { Loader } from '@googlemaps/js-api-loader'

type LatLng = google.maps.LatLng
type LatLngLiteral = google.maps.LatLngLiteral

export const useGetDistance = async (
  from: LatLng | LatLngLiteral | undefined,
  to: LatLng | LatLngLiteral
) => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLEMAPS_API_KEY ?? ''
  const loader = new Loader({ apiKey, libraries: ['geometry'] })
  const google = await loader.load()

  if (typeof from != 'undefined') {
    const distance = google.maps.geometry?.spherical.computeDistanceBetween(
      from,
      to
    )
    return distance
  }
}
