import { Inputs } from '@/hooks/form/useFormCreateStampcard'
import styles from '@/styles/components/Cards/CardSpotEdit.module.scss'
import { UseFormRegister } from 'react-hook-form'
import { LatLng } from '@/components/Forms/FormSearchSpot'
import { CardMiniSpotEdit } from '@/components/Cards'
import { Dispatch, SetStateAction, useState } from 'react'
import { SpotsListType } from '@/hooks/modal/useModalAddSpot'

type CardSpotEditProps = {
  register: UseFormRegister<Inputs>
  index: number
  isClickNext: boolean
  setIsClickNext: Dispatch<SetStateAction<boolean>>
  spotsList: SpotsListType
  name: string | undefined
  address: string | undefined
  location: LatLng | undefined
  url: string | undefined
}

export const CardSpotEdit = ({
  register,
  index,
  isClickNext,
  setIsClickNext,
  spotsList,
  name,
  address,
  location,
  url
}: CardSpotEditProps) => {
  let locationValue = ''
  if (location?.lat() !== undefined) {
    locationValue = `${location?.lat()},${location?.lng()}`
  }

  const [isMinimum, setIsMinimum] = useState(false)

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
          <label className={styles.label}>
            住所
            <input
              placeholder={'住所'}
              {...register(`spots.${index}.address`)}
              defaultValue={address}
              className={styles.textbox}
            />
          </label>
          <label className={`${styles.label} ${styles.hidden}`}>
            座標
            <input
              placeholder={'座標'}
              {...register(`spots.${index}.location`)}
              defaultValue={locationValue}
              className={styles.textbox}
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
