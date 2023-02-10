import { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from '@/styles/components/Buttons/ButtonThemeMain.module.scss'
import { HiOutlineLocationMarker } from 'react-icons/hi'

type ButtonThemeMainProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  color: string
}

export const ButtonThemeMain = ({
  children,
  color,
  ...props
}: ButtonThemeMainProps) => {
  return (
    <button
      className={`${styles.button} ${color === 'yellow' && styles.yellow} ${
        color === 'green' && styles.green
      } ${color === 'blue' && styles.blue} ${color === 'pink' && styles.pink}`}
      {...props}
    >
      <span>
        <HiOutlineLocationMarker size={24} className={styles.icon} />
        <p>{children}</p>
      </span>
    </button>
  )
}
