import React from 'react'
import { Header } from '@/components/Headers'
import styles from '@/styles/components/Layouts/Layout.module.scss'

type LayoutProps = {
  children: React.ReactNode
}

export const LpLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <div className={styles.margin}></div>

      {children}
    </>
  )
}
