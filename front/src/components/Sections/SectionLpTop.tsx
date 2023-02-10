import Image from 'next/image'
import Link from 'next/link'
import { ButtonMain } from '@/components/Buttons'
import styles from '@/styles/components/Sections/SectionLpTop.module.scss'

export const SectionLpTop = () => {
  return (
    <section className={styles.section} id={'top'}>
      <div className={styles.section}>
        <div className={styles.img_wrapper}>
          <Image
            src={'/images/lp_top.png'}
            alt={'img'}
            fill
            className={styles.img}
          ></Image>
        </div>
        <p>
          まちのスキなお店を
          <br />
          スタンプラリーでシェアして、
          <br />
          クーポンをGETしよう！
        </p>
        <Link href="/home" className={styles.button}>
          <ButtonMain>さっそく作ってみる！</ButtonMain>
        </Link>
      </div>
    </section>
  )
}
