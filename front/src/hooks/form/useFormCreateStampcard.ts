import { LatLng } from '@/components/Forms/FormSearchSpot'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'

export type Inputs = {
  emoji: string
  stampcardName: string
  stampcardDescription: string
  stampcardTheme: string
  spots: {
    name: string
    address: string
    location: LatLng
    url: string
    memo: string
  }[]
}

const schema = yup.object({
  emoji: yup.string(),
  stampcardName: yup
    .string()
    .required('スタンプラリーの名前を入力してください'),
  stampcardDescription: yup
    .string()
    .required('スタンプラリーの説明を入力してください'),
  stampcardTheme: yup.string().defined(),
  links: yup.array().of(
    yup.object().shape({
      name: yup.string(),
      address: yup.string(),
      url: yup
        .string()
        .required('urlを入力してください')
        // urlの正規表現にマッチしなかったら弾く
        .matches(/^(https?|ftp)(:\/\/[-_.!~*'()a-zA-Z0-9;/?:@&=+$,%#]+)/, {
          message: '利用可能なURLを入力してください'
        }),
      memo: yup.string()
    })
  )
})

export const useFormCreateStampcard = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    defaultValues: {
      emoji: '1f636'
    }
  })

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return {
    register,
    handleSubmit,
    control,
    errors,
    onSubmit
  }
}
