import React from 'react'
import { HeaderCreate } from '@/components/Headers'

type LayoutProps = {
  children: React.ReactNode
}

export const CreateLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <HeaderCreate />
      {children}
    </>
  )
}
