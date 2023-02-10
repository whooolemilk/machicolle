import { ReactElement } from 'react'
import { LpLayout } from '@/components/Layouts'
import type { NextPageWithLayout } from '@/pages/_app'
import {
  SectionLpTop,
  SectionLpIntro,
  SectionLpStamp
} from '@/components/Sections'

const Index: NextPageWithLayout = () => {
  return (
    <>
      <SectionLpTop />
      <SectionLpIntro />
      <SectionLpStamp />
    </>
  )
}

Index.getLayout = function getLayout(page: ReactElement) {
  return <LpLayout>{page}</LpLayout>
}

export default Index
