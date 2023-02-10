import { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from '@/styles/components/Buttons/ButtonMain.module.scss'

type ButtonMainProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
}

export const ButtonMain = ({ children, ...props }: ButtonMainProps) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  )
}
