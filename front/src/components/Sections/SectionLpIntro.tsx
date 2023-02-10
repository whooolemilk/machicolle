import Image from 'next/image'
import styles from '@/styles/components/Sections/SectionLpIntro.module.scss'

export const SectionLpIntro = () => {
  return (
    <section id={'intro'}>
      <div className={styles.section}>
        <h1>まちコレの特徴</h1>
        <div className={styles.intro_wrapper}>
          <h2>01</h2>
          <div className={styles.img_wrapper}>
            <Image
              src={'/images/lp_01.svg'}
              alt={'img'}
              fill
              className={styles.img}
            ></Image>
          </div>
          <p>
            あなたのまちのスキなお店を
            <br />
            スタンプラリー形式で紹介！
          </p>
        </div>
        <div className={styles.intro_wrapper}>
          <h2>02</h2>
          <div className={styles.img_wrapper}>
            <Image
              src={'/images/lp_02.svg'}
              alt={'img'}
              fill
              className={styles.img}
            ></Image>
          </div>
          <p>
            作ったスタンプラリーは共有して
            <br />
            友だちや知り合いに
            <br />
            まちをめぐってもらおう！
          </p>
        </div>
        <div className={styles.intro_wrapper}>
          <h2>03</h2>
          <div className={styles.img_wrapper}>
            <Image
              src={'/images/lp_03.svg'}
              alt={'img'}
              fill
              className={styles.img}
            ></Image>
          </div>
          <p>
            共有した相手が
            <br />
            提携店でお買い物をすると
            <br />
            あなたにクーポンが届く！
          </p>
        </div>
      </div>
    </section>
  )
}
