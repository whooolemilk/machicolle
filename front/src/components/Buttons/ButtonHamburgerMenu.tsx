import styles from '@/styles/components/Buttons/ButtonHamburger.module.scss'
import Link from 'next/link'

export const ButtonHamburgerMenu = () => {
  return (
    <>
      <input type="checkbox" id={styles.menu_btn_check} />
      <label htmlFor={styles.menu_btn_check} className={styles.menu_btn}>
        <span></span>
      </label>
      <div className={styles.menu_content}>
        <ul>
          <li>
            <Link href="/home">ホーム</Link>
          </li>
          <li>
            <Link href="/">LP</Link>
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
