import React, { SetStateAction, Dispatch } from 'react'
import { StandaloneSearchBox } from '@react-google-maps/api'
import styles from '@/styles/components/Forms/FormSearchSpot.module.scss'
import { useFormSearchSpot } from '@/hooks/form/useFormSearchSpot'
import { SpotDataType } from '@/rtk/api'

type SpotSearchBoxProps = {
  placeholder: string
  setSpotData: Dispatch<SetStateAction<SpotDataType>>
  setDisabled: Dispatch<SetStateAction<boolean>>
}

export const FormSearchSpot = ({
  placeholder,
  setSpotData,
  setDisabled
}: SpotSearchBoxProps) => {
  const { isLoaded, onPlacesChanged, onLoad } = useFormSearchSpot({
    setSpotData,
    setDisabled
  })

  return (
    <>
      {isLoaded && (
        <>
          <StandaloneSearchBox
            onPlacesChanged={onPlacesChanged}
            onLoad={onLoad}
          >
            <input
              type="text"
              placeholder={placeholder}
              className={styles.search_bar}
            />
          </StandaloneSearchBox>
        </>
      )}
    </>
  )
}
