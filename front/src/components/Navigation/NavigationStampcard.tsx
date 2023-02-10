import {
  HiOutlineHome,
  HiOutlineLocationMarker,
  HiOutlineInbox
} from 'react-icons/hi'
import styles from '@/styles/components/Navigation/NavigationStampcard.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const NavigationStampcard = () => {
  const router = useRouter()
  const id = router.query.id
  const pathName = router.asPath
  const currentPath = pathName.split('/')[3] // /stamcard/[id]/---のため

  return (
    <>
      <ul className={styles.wrapper}>
        <li className={styles.link}>
          <Link
            href={{ pathname: '/stampcard/[id]', query: { id: id } }}
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
            href={{ pathname: '/stampcard/[id]/spot', query: { id: id } }}
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
            href={{ pathname: '/stampcard/[id]/coupon', query: { id: id } }}
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
