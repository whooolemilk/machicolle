import React from 'react'
import { NavigationStampcard } from '@/components/Navigation'
import { ButtonHamburgerMenu } from '@/components/Buttons'

type LayoutProps = {
  children: React.ReactNode
}

export const StampcardLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <ButtonHamburgerMenu />
      {children}
      <NavigationStampcard />
    </>
  )
}
