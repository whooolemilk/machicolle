import styles from '@/styles/components/Headers/Header.module.scss'
import Link from 'next/link'
import { HiChevronLeft } from 'react-icons/hi'

export const HeaderList = () => {
  return (
    <header className={styles.header}>
      <Link href="/home" className={styles.return}>
        <HiChevronLeft size={'3.2rem'} color={'#000'} />
      </Link>
      <p className={styles.home}>Myまちコレスタンプラリー</p>
    </header>
  )
}
