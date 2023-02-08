import { useCreateStampcardMutation } from '@/rtk/api'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import type { StampcardType } from '@/rtk/api'

const schema = yup.object({
  emoji: yup.string(),
  stampcardName: yup
    .string()
    .required('スタンプラリーの名前を入力してください'),
  stampcardDescription: yup
    .string()
    .required('スタンプラリーの説明を入力してください'),
  stampcardTheme: yup.string().defined(),
  spots: yup.array().of(
    yup.object().shape({
      name: yup.string(),
      address: yup.string(),
      url: yup
        .string()
        .required('urlを入力してください')
        // urlの正規表現にマッチしなかったら弾く
        .matches(
          /^(https?|ftp)(:\/\/(maps.google.com)\/[-_.!~*'()a-zA-Z0-9;/?:@&=+$,%#]+)/,
          {
            message: '利用可能なURLを入力してください'
          }
        ),
      memo: yup.string()
    })
  )
})

export const useFormCreateStampcard = () => {
  const [createStampcard] = useCreateStampcardMutation()

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<StampcardType>({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    defaultValues: {
      emoji: '1f636'
    }
  })

  const createDataHandler = async (data: StampcardType) => {
    await createStampcard(data).unwrap()
  }

  const onSubmit: SubmitHandler<StampcardType> = (data) => {
    createDataHandler(data)
  }

  return {
    register,
    handleSubmit,
    control,
    errors,
    onSubmit
  }
}
