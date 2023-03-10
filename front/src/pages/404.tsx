import { LpLayout } from '@/components/Layouts'
import Image from 'next/image'
import Link from 'next/link'
import { ReactElement } from 'react'

const Custom404 = () => {
  return (
    <>
      <Image
        src="/images/person_bowing.svg"
        alt={'๐'}
        width={64}
        height={64}
      />
      <p>404 Not Found</p>
      <p>
        ใๆขใใฎใใผใธใ่ฆใคใใใพใใใงใใ
        <br />
        ใๆๆฐใใใใใใพใใใ
        <br />
        ใใใใใฎใใผใ ใใใ
        <br />
        ๅๅบฆใใใใใใใ ใใพใใใ
        <br />
        ใ้กใใใใใพใใ
      </p>

      <Link href="/home">ใใผใ ใธใใฉใ</Link>
    </>
  )
}

Custom404.getLayout = function getLayout(page: ReactElement) {
  return <LpLayout>{page}</LpLayout>
}

export default Custom404
