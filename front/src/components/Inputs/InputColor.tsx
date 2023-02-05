import { Inputs } from '@/hooks/form/useFormCreateStampcard'
import styles from '@/styles/components/Forms/FormCreateStamcard.module.scss'
import { Path, UseFormRegister } from 'react-hook-form'

type InputProps = {
  label: Path<Inputs>
  register: UseFormRegister<Inputs>
}

export const InputColor = ({ label, register }: InputProps) => {
  return (
    <div className={styles.color_theme}>
      {/* default_theme */}
      <input
        type={'radio'}
        id={'default_theme'}
        defaultChecked
        {...register(label)}
        defaultValue={'default'}
        className={`${styles.visually_hidden} ${styles.radiobutton}`}
      />
      <label
        htmlFor={'default_theme'}
        className={`${styles.color_label} ${styles.default}`}
      >
        <span className={styles.checkmark}></span>
        標準
      </label>
      {/* orange_theme */}
      <input
        type={'radio'}
        id={'orange_theme'}
        {...register(label)}
        defaultValue={'orange'}
        className={`${styles.visually_hidden} ${styles.radiobutton}`}
      />
      <label
        htmlFor={'orange_theme'}
        className={`${styles.color_label} ${styles.orange}`}
      >
        <span className={styles.checkmark}></span>
        オレンジ
      </label>
      {/* yellow_theme */}
      <input
        type={'radio'}
        id={'yellow_theme'}
        {...register(label)}
        defaultValue={'yellow'}
        className={`${styles.visually_hidden} ${styles.radiobutton}`}
      />
      <label
        htmlFor={'yellow_theme'}
        className={`${styles.color_label} ${styles.yellow}`}
      >
        <span className={styles.checkmark}></span>
        イエロー
      </label>
      {/* green_theme */}
      <input
        type={'radio'}
        id={'green_theme'}
        {...register(label)}
        defaultValue={'green'}
        className={`${styles.visually_hidden} ${styles.radiobutton}`}
      />
      <label
        htmlFor={'green_theme'}
        className={`${styles.color_label} ${styles.green}`}
      >
        <span className={styles.checkmark}></span>
        グリーン
      </label>
      {/* blue_theme */}
      <input
        type={'radio'}
        id={'blue_theme'}
        {...register(label)}
        defaultValue={'blue'}
        className={`${styles.visually_hidden} ${styles.radiobutton}`}
      />
      <label
        htmlFor={'blue_theme'}
        className={`${styles.color_label} ${styles.blue}`}
      >
        <span className={styles.checkmark}></span>
        ブルー
      </label>
      {/* pink_theme */}
      <input
        type={'radio'}
        id={'pink_theme'}
        {...register(label)}
        defaultValue={'pink'}
        className={`${styles.visually_hidden} ${styles.radiobutton}`}
      />
      <label
        htmlFor={'pink_theme'}
        className={`${styles.color_label} ${styles.pink}`}
      >
        <span className={styles.checkmark}></span>
        ピンク
      </label>
    </div>
  )
}
