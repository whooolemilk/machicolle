import React, { useState, CSSProperties, SetStateAction, Dispatch } from 'react'

import {
  StandaloneSearchBox,
  LoadScript,
} from '@react-google-maps/api'

type SearchBoxProps = {
  placeholder: string
  setName: Dispatch<SetStateAction<string | undefined>>
  setAddress: Dispatch<SetStateAction<string | undefined>>
  setLocation: Dispatch<SetStateAction<Location | undefined>>
  setUrl: Dispatch<SetStateAction<string | undefined>>
}

export type Location = {
  lat: number
  lng: number
}

export const SearchBox = ({
  placeholder,
  setName,
  setAddress,
  setLocation,
  setUrl
}: SearchBoxProps) => {
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
  let result: google.maps.places.PlaceResult
  let location: Location
  const [searchBox, setSearchBox] = useState<google.maps.places.SearchBox>()

  const onPlacesChanged = () => {
    result = searchBox?.getPlaces()![0] as google.maps.places.PlaceResult
    location = {
      lat: result.geometry?.location?.lat()!,
      lng: result.geometry?.location?.lng()!
    }

    setName(result.name)
    setAddress(result.formatted_address)
    setLocation(location)
    setUrl(result.url)
  }

  const onLoad = (ref: google.maps.places.SearchBox) => setSearchBox(ref)

  return (
    <>
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLEMAPS_API_KEY!}
        libraries={['places']}
      >
        <StandaloneSearchBox onPlacesChanged={onPlacesChanged} onLoad={onLoad}>
          <input type="text" placeholder={placeholder} style={style} />
        </StandaloneSearchBox>
      </LoadScript>
    </>
  )
}
