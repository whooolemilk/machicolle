import React from 'react'
import { NavigationSampleStampcard } from '@/components/Navigation'
import { ButtonHamburgerMenu } from '@/components/Buttons'

type LayoutProps = {
  children: React.ReactNode
}

export const StampcardSampleLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <ButtonHamburgerMenu />
      {children}
      <NavigationSampleStampcard />
    </>
  )
}
