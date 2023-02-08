import { Dispatch, SetStateAction, useState } from 'react'
import { SpotDataType } from '@/hooks/modal/useModalAddSpot'
import { useJsApiLoader } from '@react-google-maps/api'
type PlaceResult = google.maps.places.PlaceResult
type SearchBox = google.maps.places.SearchBox

const libraries: (
  | 'drawing'
  | 'geometry'
  | 'localContext'
  | 'places'
  | 'visualization'
)[] = ['places']

type Props = {
  setSpotData: Dispatch<SetStateAction<SpotDataType>>
  setDisabled: Dispatch<SetStateAction<boolean>>
}

export const useFormSearchSpot = ({ setSpotData, setDisabled }: Props) => {
  const apiKey: string | undefined = process.env.NEXT_PUBLIC_GOOGLEMAPS_API_KEY

  const [searchBox, setSearchBox] = useState<SearchBox | undefined>()
  let results: PlaceResult[] | undefined
  let data: SpotDataType

  const onPlacesChanged = () => {
    if (searchBox) results = searchBox.getPlaces()
    if (results && results[0] && results[0].geometry) {
      data = {
        name: results[0].name,
        address: results[0].formatted_address,
        location: results[0].geometry.location,
        url: results[0].url
      }
    }
    setSpotData(data)
    setDisabled(false)
  }

  const onLoad = (ref: SearchBox) => {
    setSearchBox(ref)
    setSpotData({
      name: '',
      address: '',
      location: undefined,
      url: ''
    })
  }

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey ? apiKey : '',
    libraries: libraries
  })

  return {
    isLoaded,
    onPlacesChanged,
    onLoad
  }
}
