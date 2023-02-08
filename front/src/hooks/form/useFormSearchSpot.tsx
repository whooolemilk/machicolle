import { Dispatch, SetStateAction, useState } from 'react'
import { useJsApiLoader } from '@react-google-maps/api'
import { SpotDataType } from '@/rtk/api'
import { PlaceResult, SearchBox } from '@/lib/googleMapsApiConfig'

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
    // [{}]で帰ってくるのでresult[0]
    if (results && results[0] && results[0].geometry) {
      data = {
        name: results[0].name,
        address: results[0].formatted_address,
        location: {
          lat: results[0].geometry.location?.lat(),
          lng: results[0].geometry.location?.lng()
        },
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
      location: {
        lat: undefined,
        lng: undefined
      },
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
