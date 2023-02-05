import styles from '@/styles/components/Forms/FormCreateStamcard.module.scss'
import { ButtonMain, ButtonSecondary } from '@/components/Buttons'
import { HiOutlineExclamation } from 'react-icons/hi'
import { InputColor, InputEmoji } from '@/components/Inputs'
import { useFormCreateStampcard } from '@/hooks/form'

export const FormCreateStampcard = () => {
  const { register, handleSubmit, control, errors, onSubmit } =
    useFormCreateStampcard()

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.label} htmlFor={'emoji'}>
          アイキャッチ
          <InputEmoji name={'emoji'} control={control} />
        </label>
        <label className={styles.label}>
          スタンプラリーの名前
          <input
            {...register('stampcardName')}
            placeholder={'例）おすすめのカフェ'}
            className={styles.textbox}
          />
          {errors.stampcardName && (
            <span className={styles.form_error}>
              <HiOutlineExclamation size={'18px'} color={'#d41717'} />
              {errors.stampcardName.message}
            </span>
          )}
        </label>
        <label className={styles.label}>
          スタンプラリーの説明
          <textarea
            {...register('stampcardDescription', { required: true })}
            placeholder={
              '例）和歌山市駅中心のおすすめのカフェを集めたスタンプラリーです'
            }
            className={styles.textbox}
          />
          {errors.stampcardDescription && (
            <span className={styles.form_error}>
              <HiOutlineExclamation size={'18px'} color={'#d41717'} />
              {errors.stampcardDescription.message}
            </span>
          )}
        </label>
        <label className={styles.label} htmlFor={'color'}>
          カラーテーマ
          <InputColor register={register} label={'stampcardTheme'} />
        </label>
        <div className={styles.label}>
          スポット
          <div className={styles.add_spot_botton}>
            <ButtonSecondary>スポットを追加する</ButtonSecondary>
          </div>
        </div>
        <ButtonMain type={'submit'}>公開する</ButtonMain>
      </form>
    </>
  )
}
