import Link from 'next/link'
import { HiOutlineExternalLink } from 'react-icons/hi'
import styles from '@/styles/components/Buttons/ButtonThemeLinkSecondary.module.scss'

type ButtonThemeLinkSecondaryProps = {
  label: string
  url: string
  color: string
}

export const ButtonThemeLinkSecondary = ({
  label,
  url,
  color,
  ...props
}: ButtonThemeLinkSecondaryProps) => {
  return (
    <Link
      href={url}
      className={`${styles.button} ${color === 'yellow' && styles.yellow} ${
        color === 'green' && styles.green
      } ${color === 'blue' && styles.blue} ${color === 'pink' && styles.pink}`}
      {...props}
    >
      <span>
        <HiOutlineExternalLink size={24} className={styles.icon} />
        <p>{label}</p>
      </span>
    </Link>
  )
}
