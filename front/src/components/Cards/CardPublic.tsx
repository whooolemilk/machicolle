import Link from 'next/link'
import { useRouter } from 'next/router'
import { Emoji, EmojiStyle } from 'emoji-picker-react'
import { ButtonMain } from '@/components/Buttons'
import { useGetStampcard } from '@/hooks/stampCard'
import styles from '@/styles/components/Cards/CardPublic.module.scss'

type CardPublicProps = {
  id: string
}
export const CardPublic = ({ id }: CardPublicProps) => {
  const { stampcardData } = useGetStampcard({ isDemo: false, id: id })
  const router = useRouter()
  const urlText = `https://machicolle.vercel.app/stampcard/${id}`

  return (
    <>
      {stampcardData ? (
        <>
          <p className={styles.title}>スタンプラリーが公開されました！</p>
          <div
            className={`${styles.card_wrapper} ${
              stampcardData.stampcardTheme === 'yellow' && styles.yellow
            } ${stampcardData.stampcardTheme === 'green' && styles.green} ${
              stampcardData.stampcardTheme === 'blue' && styles.blue
            } ${stampcardData.stampcardTheme === 'pink' && styles.pink}`}
          >
            <div className={styles.emoji_wrapper}>
              <Emoji
                unified={stampcardData.emoji}
                emojiStyle={EmojiStyle.TWITTER}
                size={72}
              />
            </div>
            <p>{stampcardData.stampcardName}</p>
          </div>
          <p className={styles.text}>共有用URL</p>
          <Link
            href={{
              pathname: '/stampcard/[id]',
              query: { id: id }
            }}
            target="_blank"
            className={styles.link_text}
          >
            {urlText}
          </Link>
          <ButtonMain onClick={() => router.push(`/stampcard/${id}`)}>
            スタンプラリーを開く
          </ButtonMain>
          <Link href={'/home'} className={styles.link_home}>
            ホームに戻る
          </Link>
        </>
      ) : (
        <Link href={'/home'} className={styles.link_home}>
          ホームに戻る
        </Link>
      )}
    </>
  )
}
