import { baseApi } from '@/rtk/api/baseApi'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore
} from 'firebase/firestore'

export type UserType = {
  name: string
  uid: string
}

const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<UserType[], void>({
      queryFn: async () => {
        try {
          const db = getFirestore()
          const snapshot = await getDocs(collection(db, 'users'))
          const ret = snapshot.docs.map((doc) => {
            return { ...doc.data(), uid: doc.id } as UserType
          })

          return { data: ret }
        } catch (err) {
          return { error: err }
        }
      },
      providesTags: ['User']
    }),
    createUser: builder.mutation<string, UserType>({
      queryFn: async (arg) => {
        try {
          const db = getFirestore()
          const ref = await addDoc(collection(db, 'users'), arg)

          return { data: ref.id }
        } catch (err) {
          return { error: err }
        }
      },
      invalidatesTags: ['User']
    }),
    deleteUser: builder.mutation<string, string>({
      queryFn: async (arg) => {
        try {
          const db = getFirestore()
          const ref = doc(collection(db, 'users'), arg)
          await deleteDoc(ref)
          return { data: 'sucsess' }
        } catch (err) {
          return { error: err }
        }
      },
      invalidatesTags: ['User']
    })
  }),
  overrideExisting: false
})

export const {
  useGetUsersQuery,
  useCreateUserMutation,
  useDeleteUserMutation
} = usersApi
