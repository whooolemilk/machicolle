import { Control, Controller, Path, FieldValues } from 'react-hook-form'
import { InputEmojiPicker } from '@/components/Inputs/InputEmojiPicker'

type Props<T extends FieldValues> = {
  name: Path<T>
  control: Control<T>
}

export const InputEmoji = <T extends FieldValues>({
  name,
  control
}: Props<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange } }) => (
        <InputEmojiPicker onChange={onChange} />
      )}
    />
  )
}
