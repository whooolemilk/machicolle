import { useEffect, useState } from 'react'
import Modal from 'react-modal'
import { ButtonThemeMain } from '@/components/Buttons'
import { Stamp } from '@/components/Stamps'
import { useCheckCanStamp } from '@/hooks/stampCard/useCheckCanStamp'
import styles from '@/styles/components/Modals/ModalStamp.module.scss'
import { LatLngLiteral } from '@/lib/googleMapsApiConfig'
import Image from 'next/image'

type ModalStampProps = {
  index: number
  name: string
  emoji: string
  color: string
  location: {
    lat: number
    lng: number
  }
  id: string
}

export const ModalStamp = ({
  index,
  name,
  emoji,
  color,
  location,
  id
}: ModalStampProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isStamped, setIsStamped] = useState<number[]>([])
  const [isClose, setIsClose] = useState(false)
  const [dist, setDist] = useState<number>(0)

  const canStamp = useCheckCanStamp({
    lat: location.lat,
    lng: location.lng
  } as unknown as LatLngLiteral)

  const openModal = (index: number) => {
    setIsOpen(true)
    canStamp.then(({ res, distance }) => {
      if (res) {
        setIsClose(true)
        // resがtrueの時、indexのスタンプを押したことにする
        const myStampedList = localStorage.getItem(id)

        if (myStampedList === null) {
          // localstorageにkey:myListがなかったら
          // 新しくkey:[id]にindexデータを保存
          const defaultList = index
          localStorage.setItem(id, defaultList.toString())
          setIsStamped([index])
        }

        if (typeof myStampedList === 'string') {
          // すでにlocalstorageにkey:[id]があり
          // indexが含まれていなかったら、
          // key:[id]にindexデータを追加
          const myStampcardList = myStampedList.split(',')
          const value = index.toString()
          if (!myStampcardList.includes(value)) {
            myStampcardList.push(value)
            localStorage.setItem(id, myStampcardList.toString())
            setIsStamped([...isStamped, index])
          }
        }
      } else {
        setIsClose(false)
        setDist(distance)
      }
    })
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    const getIsStamped = () => {
      const myStampedList = localStorage.getItem(id)

      if (typeof myStampedList === 'string') {
        // すでにlocalstorageにkey:myListがあったら
        const myStampcardList = myStampedList.split(',')
        setIsStamped(myStampcardList.map((str) => parseInt(str, 10)))
      }
    }
    getIsStamped()

  }, [localStorage.getItem(id)])

  return (
    <>
      {isStamped.includes(index) ? (
        <ButtonThemeMain
          color={color}
          onClick={() => openModal(index)}
          type={'button'}
          disabled={true}
        >
          取得済み！
        </ButtonThemeMain>
      ) : (
        <ButtonThemeMain
          color={color}
          onClick={() => openModal(index)}
          type={'button'}
        >
          スタンプを押す！
        </ButtonThemeMain>
      )}

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Modal Stamp"
        ariaHideApp={false}
        className={{
          base: styles.modal_content,
          afterOpen: styles.modal_content_after,
          beforeClose: styles.modal_content_before
        }}
        overlayClassName={{
          base: styles.modal_overlay,
          afterOpen: styles.modal_overlay_after,
          beforeClose: styles.modal_overlay_before
        }}
        closeTimeoutMS={300}
      >
        {isClose ? (
          <>
            <p className={styles.title}>スタンプ獲得！</p>
            <p className={styles.text}>まちコレスタンプラリー</p>
            <Stamp isStampedList={isStamped} emoji={emoji} />
            <p className={styles.text}>
              「{name}」<br />
              のスタンプを獲得しました！
            </p>
          </>
        ) : (
          <>
            <p className={styles.title}>もう少し近づいてみよう！</p>
            <Image
              src="/images/no_stamp.svg"
              alt="img"
              width={110}
              height={110}
            />
            <p className={styles.text}>
              登録されたお店や場所まで
              <br />
              <span>あと{Math.round(dist)}m！</span>
              <br />
            </p>

            <p className={styles.text}>
              もう少し近くまで行って、
              <br />
              再度スタンプを押してみてください！
            </p>
          </>
        )}
      </Modal>
    </>
  )
}
