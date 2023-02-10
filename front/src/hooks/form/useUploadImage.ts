import { useState } from 'react'
import { StampcardType, useUploadImageMutation } from '@/rtk/api'
import { UseFormSetValue } from 'react-hook-form'

type useUploadImageProps = {
  setValue: UseFormSetValue<StampcardType>
  index: number
}

export const useUploadImage = ({ setValue, index }: useUploadImageProps) => {
  const [uploadImage] = useUploadImageMutation()
  const [image, setImage] = useState<File | null>()

  const handleChangeImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      const file = e.target.files[0]
      setImage(file)
      const url = await uploadImage(file).unwrap()
      setValue(`spots.${index}.thumbnail`, url)
    }
  }
  return {
    image,
    handleChangeImage
  }
}
