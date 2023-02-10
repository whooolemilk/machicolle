import { SpotDataType, SpotsListType } from '@/rtk/api'
import { useState } from 'react'

export const useModalAddSpot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [spotData, setSpotData] = useState<SpotDataType>({
    name: '',
    address: '',
    location: {
      lat: undefined,
      lng: undefined
    },
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
