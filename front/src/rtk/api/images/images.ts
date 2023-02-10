import { baseApi } from '@/rtk/api/baseApi'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

const stampcardsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    uploadImage: builder.mutation<string, File>({
      queryFn: async (imageFile) => {
        try {
          const firestorage = getStorage()
          const imageRef = ref(
            firestorage,
            `images/${encodeURI(imageFile.name)}`
          )
          const downloadUrl = await uploadBytes(imageRef, imageFile).then(
            () => {
              const url = getDownloadURL(imageRef)
              return url
            }
          )

          return { data: downloadUrl }
        } catch (err) {
          return { error: err }
        }
      },
      invalidatesTags: ['Image']
    })
  })
})

export const { useUploadImageMutation } = stampcardsApi
