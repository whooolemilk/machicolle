import styles from '@/styles/components/Cards/CardSpotEdit.module.scss'
import { UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { CardMiniSpotEdit } from '@/components/Cards'
import { Dispatch, SetStateAction, useState } from 'react'
import { SpotsListType, StampcardType } from '@/rtk/api'
import Image from 'next/image'
import { useInputImage, useUploadImage } from '@/hooks/form'

type CardSpotEditProps = {
  register: UseFormRegister<StampcardType>
  setValue: UseFormSetValue<StampcardType>
  index: number
  isClickNext: boolean
  setIsClickNext: Dispatch<SetStateAction<boolean>>
  spotsList: SpotsListType
  name: string | undefined
  address: string | undefined
  location: {
    lat: number | undefined
    lng: number | undefined
  }
  url: string | undefined
}

export const CardSpotEdit = ({
  register,
  setValue,
  index,
  isClickNext,
  setIsClickNext,
  spotsList,
  name,
  address,
  location,
  url
}: CardSpotEditProps) => {
  const [isMinimum, setIsMinimum] = useState(false)
  const { inputRef, onClickImage } = useInputImage()
  const { image, handleChangeImage } = useUploadImage({
    setValue: setValue,
    index: index
  })

  // スポットを追加するボタンを押された時、最後の要素以外は最小化する
  if (isClickNext && !isMinimum && spotsList.length !== index + 1) {
    setIsMinimum(true)
  }

  const onClickHandler = () => {
    setIsMinimum(false) // カード拡大
    setIsClickNext(false)
  }

  return (
    <>
      {isMinimum ? (
        // isMinimum===trueのときミニカード
        <CardMiniSpotEdit
          name={name}
          index={index + 1}
          onClickHandler={onClickHandler}
        />
      ) : (
        // isMinimum===falseのときミニカード
        <div className={styles.form_wrapper}>
          <label className={styles.label}>
            URL（GoogleMap）
            <input
              placeholder={'GoogleMapのURL'}
              {...register(`spots.${index}.url`)}
              className={styles.textbox}
              defaultValue={url}
            />
          </label>
          <label className={styles.label}>
            ラベル
            <input
              placeholder={'お店の名前'}
              {...register(`spots.${index}.name`)}
              className={styles.textbox}
              defaultValue={name}
            />
          </label>
          <label className={`${styles.label} ${styles.hidden}`}>
            address
            <input
              placeholder={'住所'}
              {...register(`spots.${index}.address`)}
              defaultValue={address}
              className={styles.textbox}
            />
          </label>
          <label className={styles.label}>
            画像
            <input
              className={styles.hidden}
              type={'file'}
              accept={'image/*'}
              ref={inputRef}
              onChange={handleChangeImage}
            />
            <input
              className={styles.hidden}
              {...register(`spots.${index}.thumbnail`)}
            />
          </label>
          <Image
            className={styles.image}
            src={
              image
                ? URL.createObjectURL(image as File)
                : '/images/image_default.svg'
            }
            alt={'img'}
            onClick={onClickImage}
            width={326}
            height={67}
          />

          <label className={`${styles.label} ${styles.hidden}`}>
            lat
            <input
              placeholder={'lat'}
              {...register(`spots.${index}.location.lat`, {
                valueAsNumber: true
              })}
              className={styles.textbox}
              type={'number'}
              defaultValue={location.lat}
            />
          </label>
          <label className={`${styles.label} ${styles.hidden}`}>
            lng
            <input
              placeholder={'lng'}
              {...register(`spots.${index}.location.lng`, {
                valueAsNumber: true
              })}
              className={styles.textbox}
              type={'number'}
              defaultValue={location.lng}
            />
          </label>
          <label className={styles.label}>
            コメント
            <textarea
              placeholder={'駅から５分の距離で、おすすめやで！'}
              {...register(`spots.${index}.memo`)}
              className={styles.textbox}
            />
          </label>
        </div>
      )}
    </>
  )
}
