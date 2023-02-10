import React from 'react'
import { HeaderPublic } from '@/components/Headers'
import styles from '@/styles/components/Layouts/Layout.module.scss'

type LayoutProps = {
  children: React.ReactNode
}

export const PublicLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <HeaderPublic />
      <div className={styles.margin}></div>
      {children}
    </>
  )
}
