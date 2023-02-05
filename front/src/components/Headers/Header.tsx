import styles from '@/styles/components/Headers/Header.module.scss'
import Link from 'next/link'
import Image from 'next/image'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image
          src="/images/logo.svg"
          alt="まちコレ"
          fill
          className={styles.image}
        ></Image>
      </div>

      <div>
        <input type="checkbox" id={styles.menu_btn_check} />
        <label htmlFor={styles.menu_btn_check} className={styles.menu_btn}>
          <span></span>
        </label>
        <div className={styles.menu_content}>
          {/* サイドバーの内容はのちに追加 */}
          <ul>
            <li>
              <Link href="/">メニューリンク1</Link>
            </li>
            <li>
              <Link href="#">メニューリンク2</Link>
            </li>
            <li>
              <Link href="#">メニューリンク3</Link>
            </li>
          </ul>
        </div>
        {/* <div className={styles.hamburger_cover}></div> */}
        <div className={styles.menu_closelabel}>
          <label htmlFor={styles.menu_btn_check} className={styles.menu_cover}>
            <span></span>
          </label>
        </div>
      </div>
    </header>
  )
}
