import { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from '@/styles/components/Buttons/ButtonSecondary.module.scss'

type ButtonSecondaryProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
}

export const ButtonSecondary = ({
  children,
  ...props
}: ButtonSecondaryProps) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  )
}
