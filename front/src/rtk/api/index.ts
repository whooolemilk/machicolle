// User
export {
  useGetUsersQuery,
  useCreateUserMutation,
  useDeleteUserMutation
} from '@/rtk/api/users/users'
export type { UserType } from '@/rtk/api/users/users'

// Stampcard
export {
  useGetStampcardsQuery,
  useCreateStampcardMutation,
  useGetMyStampcardQuery
} from '@/rtk/api/stampcards/stampcards'
export type { StampcardType } from '@/rtk/api/stampcards/stampcards'
export type { SpotDataType } from '@/rtk/api/stampcards/stampcards'
export type { SpotsListType } from '@/rtk/api/stampcards/stampcards'
