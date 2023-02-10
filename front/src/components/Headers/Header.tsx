import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/components/Headers/Header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image
          src={'/images/logo.svg'}
          alt={'まちコレ'}
          fill
          className={styles.image}
        ></Image>
      </div>

      <div>
        <input type={'checkbox'} id={styles.menu_btn_check} />
        <label htmlFor={styles.menu_btn_check} className={styles.menu_btn}>
          <span></span>
        </label>
        <div className={styles.menu_content}>
          <ul>
            <li>
              <Link href={'#top'}>トップ</Link>
            </li>
            <li>
              <Link href={'#intro'}>まちコレの特徴</Link>
            </li>
            <li>
              <Link href={'#stamp'}>スタンプラリー</Link>
            </li>
            <li>
              <Link href={'https://github.com/whooolemilk/machicolle'}>
                Github
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.menu_closelabel}>
          <label htmlFor={styles.menu_btn_check} className={styles.menu_cover}>
            <span></span>
          </label>
        </div>
      </div>
    </header>
  )
}
