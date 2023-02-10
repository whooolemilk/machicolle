import Image from 'next/image'
import styles from '@/styles/components/Backgrounds/Background.module.scss'

type BackgroundWaveProps = {
  color: string
}

export const BackgroundWave = ({ color }: BackgroundWaveProps) => {
  return (
    <>
      <div
        className={`${styles.wrapper} ${color === 'yellow' && styles.yellow} ${
          color === 'green' && styles.green
        } ${color === 'blue' && styles.blue} ${
          color === 'pink' && styles.pink
        }`}
      ></div>
      <div className={styles.img_wrapper}>
        <Image
          src={'/images/bg_wave.svg'}
          alt={'bg'}
          fill
          className={styles.bg_img}
        ></Image>
      </div>
    </>
  )
}
