import { Emoji, EmojiStyle } from 'emoji-picker-react'
import styles from '@/styles/components/Stamps/Stamp.module.scss'

type StampProps = {
  isStampedList: number[]
  emoji: string
}

export const Stamp = ({ isStampedList, emoji }: StampProps) => {
  const list = [1, 2, 3] // スタンプ３つ分
  return (
    <>
      <div className={styles.stamp_wrapper}>
        {list.map((num, index) => (
          <div key={index}>
            {isStampedList.includes(index) ? (
              <div className={styles.stamp}>
                <Emoji
                  unified={emoji}
                  size={72}
                  emojiStyle={EmojiStyle.TWITTER}
                />
              </div>
            ) : (
              <div key={index} className={styles.stamp}>
                {num}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}
