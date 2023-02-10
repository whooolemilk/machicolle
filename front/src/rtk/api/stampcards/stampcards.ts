import { baseApi } from '@/rtk/api/baseApi'
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore
} from 'firebase/firestore'

export type StampcardType = {
  emoji: string
  stampcardName: string
  stampcardDescription: string
  stampcardTheme: string
  spots: {
    name: string
    address: string
    location: {
      lat: number
      lng: number
    }
    thumbnail: string
    url: string
    memo: string
  }[]
}

export type SpotDataType = {
  name: string | undefined
  address: string | undefined
  location: {
    lat: number | undefined
    lng: number | undefined
  }
  url: string | undefined
}

export type SpotsListType = {
  name: string | undefined
  address: string | undefined
  location: {
    lat: number | undefined
    lng: number | undefined
  }
  url: string | undefined
}[]

const stampcardsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getStampcard: builder.query<StampcardType | string, string>({
      queryFn: async (id) => {
        if (id === '') return { data: '' }
        try {
          const db = getFirestore()
          const ref = doc(collection(db, 'stampcards'), id)
          const stampcardDoc = await getDoc(ref)
          const ret = stampcardDoc.data() as StampcardType

          return { data: ret }
        } catch (err) {
          return { error: err }
        }
      },
      providesTags: ['Stampcard']
    }),
    getAllStampcards: builder.query<StampcardType[], void>({
      queryFn: async () => {
        try {
          const db = getFirestore()
          const snapshot = await getDocs(collection(db, 'stampcards'))
          const ret = snapshot.docs.map((doc) => {
            return { ...doc.data() } as StampcardType
          })

          return { data: ret }
        } catch (err) {
          return { error: err }
        }
      },
      providesTags: ['Stampcard']
    }),
    getMyStampcardsList: builder.query<StampcardType[], string[]>({
      queryFn: async (arg) => {
        try {
          const db = getFirestore()
          const myStampcardList = []
          if (arg.length > 0) {
            for (const id of arg) {
              const ref = doc(collection(db, 'stampcards'), id)
              const stampcardDoc = await getDoc(ref)
              const stampcard = stampcardDoc.data() as StampcardType
              myStampcardList.push(stampcard)
            }
          }
          const ret = myStampcardList
          return { data: ret }
        } catch (err) {
          return { error: err }
        }
      },
      providesTags: ['Stampcard']
    }),
    createStampcard: builder.mutation<string, StampcardType>({
      queryFn: async (arg) => {
        try {
          const db = getFirestore()
          const ref = await addDoc(collection(db, 'stampcards'), arg)

          const myList = localStorage.getItem('myList')

          if (myList === null) {
            // localstorageにkey:myListがなかったら
            // 新しくkey:myListのデータを保存
            const defaultList = ref.id
            localStorage.setItem('myList', defaultList.toString())
          }

          if (typeof myList === 'string') {
            // すでにlocalstorageにkey:myListがあったら
            const myStampcardList = myList.split(',')
            myStampcardList.push(ref.id)
            localStorage.setItem('myList', myStampcardList.toString())
          }

          return { data: ref.id }
        } catch (err) {
          return { error: err }
        }
      },
      invalidatesTags: ['Stampcard']
    })
  }),
  overrideExisting: false
})

export const {
  useGetStampcardQuery,
  useGetAllStampcardsQuery,
  useCreateStampcardMutation,
  useGetMyStampcardsListQuery
} = stampcardsApi
