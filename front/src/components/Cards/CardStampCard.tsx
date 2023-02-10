import { StampcardType } from '@/rtk/api'
import { Emoji, EmojiStyle } from 'emoji-picker-react'
import styles from '@/styles/components/Cards/CardStampCard.module.scss'
type StampCardProps = {
  data: StampcardType
}
export const CardStampCard = ({ data }: StampCardProps) => {
  return (
    <>
      <div className={styles.stampcard}>
        <div className={styles.stampcard_w}>
          <div className={styles.eye_catch}>
            <Emoji
              unified={data?.emoji}
              emojiStyle={EmojiStyle.TWITTER}
              size={46}
            />
          </div>

          <div className={styles.text_w}>
            <div className={styles.name}>{data?.stampcardName}</div>
            <div className={styles.description}>
              {data?.stampcardDescription}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
