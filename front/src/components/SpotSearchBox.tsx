import React, { useState, CSSProperties, SetStateAction, Dispatch } from 'react'

import { StandaloneSearchBox, LoadScript } from '@react-google-maps/api'
import { spotDataType } from '@/hooks/useGetSpotData'

type PlaceResult = google.maps.places.PlaceResult
type SearchBox = google.maps.places.SearchBox
export type LatLng = google.maps.LatLng

type SpotSearchBoxProps = {
  placeholder: string
  setSpotData: Dispatch<SetStateAction<spotDataType | undefined>>
}

export const SpotSearchBox = ({
  placeholder,
  setSpotData
}: SpotSearchBoxProps) => {
  const apiKey: string | undefined = process.env.NEXT_PUBLIC_GOOGLEMAPS_API_KEY
  const style: CSSProperties = {
    //仮
    boxSizing: 'border-box',
    border: `1px solid transparent`,
    borderColor: 'gray',
    width: `300px`,
    height: `40px`,
    padding: `0 12px`,
    borderRadius: `8px`,
    fontSize: `1.5md`,
    outline: `none`,
    margin: 'center',
    textOverflow: `ellipses`
  }
  const [searchBox, setSearchBox] = useState<SearchBox | undefined>()
  let results: PlaceResult[] | undefined
  let spotData: spotDataType

  const onPlacesChanged = () => {
    if (searchBox) results = searchBox.getPlaces()
    if (results && results[0] && results[0].geometry) {
      spotData = {
        name: results[0].name,
        address: results[0].formatted_address,
        location: results[0].geometry.location,
        url: results[0].url
      }
    }
    setSpotData(spotData)
  }

  const onLoad = (ref: SearchBox) => {
    setSearchBox(ref)
  }

  return (
    <>
      <LoadScript
        googleMapsApiKey={apiKey ? apiKey : ''}
        libraries={['places']}
      >
        <StandaloneSearchBox onPlacesChanged={onPlacesChanged} onLoad={onLoad}>
          <input type="text" placeholder={placeholder} style={style} />
        </StandaloneSearchBox>
      </LoadScript>
    </>
  )
}
