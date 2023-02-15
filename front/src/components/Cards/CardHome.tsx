import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/components/Cards/CardHome.module.scss'

export const CardHome = () => {
  return (
    <>
      <Link href="/create" className={styles.link}>
        <div className={styles.card}>
          <Image
            src={'/images/home_01.svg'}
            alt={'img'}
            width={160}
            height={160}
          />
          <p>
            スタンプラリーを
            <br />
            作成する
          </p>
        </div>
      </Link>
      <Link href="/stampcard/sample" className={styles.link}>
        <div className={`${styles.card} ${styles.green}`}>
          <Image
            src={'/images/home_02.svg'}
            alt={'img'}
            width={160}
            height={160}
          />
          <p>
            スタンプラリー
            <br />
            体験デモ
          </p>
        </div>
      </Link>
      <Link href="/list" className={styles.link}>
        <div className={`${styles.card} ${styles.blue}`}>
          <Image
            src={'/images/home_03.svg'}
            alt={'img'}
            width={160}
            height={160}
          />
          <p>
            Myスタンプラリー
            <br />
            リスト
          </p>
        </div>
      </Link>
    </>
  )
}
