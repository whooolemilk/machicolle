import Image from 'next/image'
import Link from 'next/link'
import { ButtonMain } from '@/components/Buttons'
import styles from '@/styles/components/Sections/SectionLpStamp.module.scss'

export const SectionLpStamp = () => {
  return (
    <section id={'stamp'}>
      <div className={styles.section}>
        <h1>スタンプラリー</h1>
        <div className={styles.intro_wrapper}>
          <h2>UI</h2>
          <div className={styles.img_wrapper}>
            <Image
              src={'/images/lp_04.png'}
              alt={'img'}
              fill
              className={styles.img}
            ></Image>
          </div>
          <div className={styles.img_wrapper}>
            <Image
              src={'/images/lp_05.png'}
              alt={'img'}
              fill
              className={styles.img}
            ></Image>
          </div>
          <p>
            シンプルでかわいい
            <br />
            スタンプラリーデザイン！
          </p>
        </div>
      </div>
      <Link href="/home" className={styles.button}>
        <ButtonMain>さっそく作ってみる！</ButtonMain>
      </Link>
    </section>
  )
}
