import { Layout, LpLayout } from '@/components/Layouts'
import { ButtonMain } from '@/components/Buttons'
import {
  useCreateUserMutation,
  useDeleteUserMutation,
  useGetUsersQuery,
  UserType
} from '@/rtk/api'
import Link from 'next/link'
import { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'

const Index: NextPageWithLayout = () => {
  const { data, isLoading, isFetching } = useGetUsersQuery()
  const [createUser] = useCreateUserMutation()
  const [deleteUser] = useDeleteUserMutation()

  const createDataHandler = async () => {
    const data = {
      name: 'あいうえお',
      uid: Math.random().toString(32).substring(2)
    }
    const id = await createUser(data).unwrap()
    console.log(id)
  }

  const deleteDataHandler = async (data: UserType[]) => {
    const id = data[0].uid
    await deleteUser(id).unwrap()
  }

  return (
    <>
      {!data || isLoading || isFetching ? (
        <>{'ローディング'}</>
      ) : (
        <>
          <ul>
            {data.map((item) => (
              <li key={item.uid}>uid: {item.uid}</li>
            ))}
          </ul>
          <button onClick={createDataHandler}>データ追加</button>
          <button onClick={() => deleteDataHandler(data)}>データ削除</button>
        </>
      )}
      <Link href="/home">
        <ButtonMain>さっそく作ってみる！</ButtonMain>
      </Link>
    </>
  )
}

Index.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <LpLayout>{page}</LpLayout>
    </Layout>
  )
}

export default Index
