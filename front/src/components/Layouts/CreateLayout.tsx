import React from 'react'
import { HeaderCreate } from '@/components/Headers'
import styles from '@/styles/components/Layouts/Layout.module.scss'

type LayoutProps = {
  children: React.ReactNode
}

export const CreateLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <HeaderCreate />
      <div className={styles.margin}></div>
      {children}
    </>
  )
}
