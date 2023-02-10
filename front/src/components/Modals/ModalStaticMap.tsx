import Image from 'next/image'

type ModalStaticMapProps = {
  lat: number
  lng: number
  width: number
  height: number
}

export const ModalStaticMap = ({
  lat,
  lng,
  width,
  height
}: ModalStaticMapProps) => {
  const googleMapsUrl = 'https://maps.googleapis.com/maps/api/'
  const apiKey = process.env.NEXT_PUBLIC_GOOGLEMAPS_API_KEY
  const zoom = 16

  return (
    <>
      <Image
        src={`${googleMapsUrl}staticmap?center=${lat},${lng}&size=${width}x${height}&zoom=${zoom}&markers=%7C${lat},${lng}&key=${apiKey}`}
        height={height}
        width={width}
        alt={'GoogleMapの画像'}
      />
    </>
  )
}
