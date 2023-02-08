import { LatLng } from '@/components/Forms/FormSearchSpot'
import { useState } from 'react'

export type SpotDataType = {
  name: string | undefined
  address: string | undefined
  location: LatLng | undefined
  url: string | undefined
}

export type SpotsListType = {
  name: string | undefined
  address: string | undefined
  location: LatLng | undefined
  url: string | undefined
}[]

export const useModalAddSpot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [spotData, setSpotData] = useState<SpotDataType>({
    name: '',
    address: '',
    location: undefined,
    url: ''
  })

  const [spotsList, setSpotsList] = useState<SpotsListType>([])
  const [disabled, setDisabled] = useState<boolean>(true)

  // リンクを追加ボタンを押すと、今開いてるeditは全部閉じる
  const [isClickNext, setIsClickNext] = useState(spotData ? true : false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeSaveModal = () => {
    setIsOpen(false)
    setSpotsList([...spotsList, spotData])
    setIsClickNext(true)
    setDisabled(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setDisabled(true)
  }

  return {
    isOpen,
    spotData,
    setSpotData,
    spotsList,
    setSpotsList,
    disabled,
    setDisabled,
    isClickNext,
    setIsClickNext,
    openModal,
    closeSaveModal,
    closeModal
  }
}
