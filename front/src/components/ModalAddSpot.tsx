import { useGetSpotData } from '@/hooks/useGetSpotData'
import { SpotSearchBox } from '@/components/SpotSearchBox'

export const ModalAddSpot = () => {
  const { spotData, setSpotData } = useGetSpotData()

  return (
    <>
      <SpotSearchBox placeholder={'場所を入力'} setSpotData={setSpotData} />
      <div>{spotData?.name}</div>
      <div>{spotData?.address}</div>
      <div>
        {spotData?.location?.lat()}, {spotData?.location?.lng()}
      </div>
      <div>{spotData?.url}</div>
    </>
  )
}
