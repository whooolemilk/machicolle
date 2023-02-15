import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  HiOutlineHome,
  HiOutlineLocationMarker,
  HiOutlineInbox
} from 'react-icons/hi'
import styles from '@/styles/components/Navigation/NavigationStampcard.module.scss'

export const NavigationSampleStampcard = () => {
  const router = useRouter()
  const pathName = router.asPath
  const currentPath = pathName.split('/')[3] // /stamcard/[id]/---のため

  return (
    <>
      <ul className={styles.wrapper}>
        <li className={styles.link}>
          <Link
            href={'/stampcard/sample'}
            className={`${styles.default} ${
              currentPath === '' && styles.focus
            }`}
          >
            <HiOutlineHome size={24} />
            <p>ホーム</p>
          </Link>
        </li>
        <li className={styles.link}>
          <Link
            href={'/stampcard/sample/spot'}
            className={`${styles.default} ${
              currentPath === 'spot' && styles.focus
            }`}
          >
            <HiOutlineLocationMarker size={24} />
            <p>スポット</p>
          </Link>
        </li>
        <li className={styles.link}>
          <Link
            href={'/stampcard/sample/coupon'}
            className={`${styles.default} ${
              currentPath === 'coupon' && styles.focus
            }`}
          >
            <HiOutlineInbox size={24} />
            <p>クーポン</p>
          </Link>
        </li>
      </ul>
    </>
  )
}
