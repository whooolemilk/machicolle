import Image from 'next/image'
import { Emoji, EmojiStyle } from 'emoji-picker-react'
import { Stamp } from '@/components/Stamps'
import { BackgroundWave } from '@/components/Backgrounds'
import styles from '@/styles/components/Stampcards/StampcardIndex.module.scss'
import { useGetStampcard } from '@/hooks/stampCard'

type StampcardIndexProps = {
  isDemo: boolean
  id: string
}

export const StampcardIndex = ({ isDemo, id }: StampcardIndexProps) => {
  const { stampcardData, isStamped } = useGetStampcard({
    isDemo: isDemo,
    id: id
  })

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
        <>no data</>
      )}
    </>
  )
}
