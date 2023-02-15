import React from 'react'
import { HeaderList } from '@/components/Headers'
import styles from '@/styles/components/Layouts/Layout.module.scss'

type LayoutProps = {
  children: React.ReactNode
}

export const ListLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <HeaderList />
      <div className={styles.margin}></div>
      {children}
    </>
  )
}
