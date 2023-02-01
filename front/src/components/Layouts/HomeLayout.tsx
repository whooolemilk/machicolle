import React from 'react'
import { Header } from '@/components/Headers'

type LayoutProps = {
  children: React.ReactNode
}

export const HomeLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
