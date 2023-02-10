import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Emoji, EmojiStyle } from 'emoji-picker-react'
import { Stamp } from '@/components/Stamps'
import { BackgroundWave } from '@/components/Backgrounds'
import { useStampcard } from '@/hooks/stampCard'
import styles from '@/styles/components/Stampcards/StampcardIndex.module.scss'

export const StampcardIndex = () => {
  const { stampcardData, id } = useStampcard()
  const [isStamped, setIsStamped] = useState<number[]>([])

  useEffect(() => {
    const myStampedList = localStorage.getItem(id)
    if (typeof myStampedList === 'string') {
      // すでにlocalstorageにkey:myListがあったら
      const myStampcardList = myStampedList.split(',')
      setIsStamped(myStampcardList.map((str) => parseInt(str, 10)))
    }
  }, [])

  return (
    <>
      {stampcardData ? (
        <>
          <BackgroundWave color={stampcardData.stampcardTheme} />
          <div className={styles.wrapper}>
            <div className={styles.emoji_wrapper}>
              <Emoji
                unified={stampcardData.emoji}
                emojiStyle={EmojiStyle.TWITTER}
                size={72}
              />
            </div>
            <p className={styles.title}>{stampcardData.stampcardName}</p>
            <div className={styles.description_wrapper}>
              <Image
                src={'/images/user.svg'}
                alt={'user'}
                width={72}
                height={72}
              />
              <div className={styles.comment}>
                <p>{stampcardData.stampcardDescription}</p>
              </div>
            </div>
            <div className={styles.stampcard_wrapper}>
              <p>まちコレスタンプラリー</p>
              <Stamp isStampedList={isStamped} emoji={stampcardData.emoji} />
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  )
}
