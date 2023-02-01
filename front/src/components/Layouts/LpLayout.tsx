import React from 'react'
import { Header } from '@/components/Headers'

type LayoutProps = {
  children: React.ReactNode
}

export const LpLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
