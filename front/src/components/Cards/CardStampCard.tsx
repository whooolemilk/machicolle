import Link from 'next/link'
import { Emoji, EmojiStyle } from 'emoji-picker-react'
import styles from '@/styles/components/Cards/CardStampCard.module.scss'
import { StampcardType } from '@/rtk/api'

type StampCardProps = {
  data: StampcardType
  myIdList: string[]
  index: number
}

export const CardStampCard = ({ data, myIdList, index }: StampCardProps) => {
  return (
    <>
      <Link href={`/stampcard/${myIdList[index]}`} className={styles.link}>
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
      </Link>
    </>
  )
}
