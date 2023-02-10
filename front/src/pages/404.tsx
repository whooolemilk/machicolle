import { LpLayout } from '@/components/Layouts'
import Image from 'next/image'
import Link from 'next/link'
import { ReactElement } from 'react'

const Custom404 = () => {
  return (
    <>
      <Image
        src="/images/person_bowing.svg"
        alt={'🙇'}
        width={64}
        height={64}
      />
      <p>404 Not Found</p>
      <p>
        お探しのページが見つかりませんでした
        <br />
        お手数をおかけしますが、
        <br />
        〇〇〇〇のホームより、
        <br />
        再度おさがしいただきますよう
        <br />
        お願いいたします。
      </p>

      <Link href="/home">ホームへもどる</Link>
    </>
  )
}

Custom404.getLayout = function getLayout(page: ReactElement) {
  return <LpLayout>{page}</LpLayout>
}

export default Custom404
