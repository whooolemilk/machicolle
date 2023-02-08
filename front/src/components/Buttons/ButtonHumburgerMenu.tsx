import styles from '@/styles/components/Buttons/ButtonHumburger.module.scss'
import Link from 'next/link'

export const ButtonHumburgerMenu = () => {
  return (
    <>
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
    </>
  )
}
