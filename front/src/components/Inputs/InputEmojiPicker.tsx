import dynamic from 'next/dynamic'
import { Emoji, EmojiStyle } from 'emoji-picker-react'
import { useState } from 'react'
import styles from '@/styles/components/Inputs/InputEmojiPicker.module.scss'

const Picker = dynamic(
  () => {
    return import('emoji-picker-react')
  },
  { ssr: false }
)

type EmojiInputs = {
  emoji: string
  unified: string
}

type Props = {
  onChange: (...event: unknown[]) => void
}

export const InputEmojiPicker = ({ onChange }: Props) => {
  const [emojiData, setEmojiData] = useState<EmojiInputs>({
    emoji: '😶',
    unified: '1f636'
  })
  const [open, setOpen] = useState(false)

  const handleEmojiClick = (emojiData: EmojiInputs) => {
    setEmojiData(emojiData)
    setOpen(false)
  }

  return (
    <>
      <button
        onClick={() => {
          open ? setOpen(false) : setOpen(true)
        }}
        type={'button'}
        className={styles.emoji_button}
      >
        <Emoji
          unified={emojiData.unified}
          emojiStyle={EmojiStyle.TWITTER}
          size={28}
        />
      </button>
      <div className={open ? styles.visible : styles.hidden}>
        <Picker
          emojiStyle={EmojiStyle.TWITTER}
          onEmojiClick={(emoji) => {
            onChange(emoji.unified)
            handleEmojiClick(emoji)
          }}
        />
      </div>
    </>
  )
}
