import React from 'react'
import styles from '@/styles/components/Layouts/Layout.module.scss'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.flex}>
      <main className={styles.container}>{children}</main>
    </div>
  )
}
