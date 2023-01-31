import { LoadScript, StandaloneSearchBox } from '@react-google-maps/api'
import { CSSProperties } from 'react'

type SearchBoxProps = {
  placeholder: string
}

export const SearchBox = ({ placeholder }: SearchBoxProps) => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLEMAPS_API_KEY
  const style: CSSProperties = {
    boxSizing: 'border-box',
    border: `1px solid transparent`,
    width: `270px`,
    height: `40px`,
    padding: `0 12px`,
    borderRadius: `3px`,
    boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
    fontSize: `14px`,
    outline: `none`,
    margin: 'center',
    textOverflow: `ellipses`,
    position: 'absolute',
    top: '40px',
    marginLeft: '50%'
  }
  return (
    <>
      <LoadScript googleMapsApiKey={apiKey!} libraries={['places']}>
        <StandaloneSearchBox>
          <input type={'text'} placeholder={placeholder} style={style} />
        </StandaloneSearchBox>
      </LoadScript>
    </>
  )
}
