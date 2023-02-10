import styles from '@/styles/components/Cards/CardMiniSpotEdit.module.scss'

type CardMiniSpotEditProps = {
  index: number
  name: string | undefined
  onClickHandler: () => void
}

export const CardMiniSpotEdit = ({
  index,
  name,
  onClickHandler
}: CardMiniSpotEditProps) => {
  return (
    <button
      key={index}
      className={styles.card_wrapper}
      onClick={onClickHandler}
    >
      <p className={styles.num}>{index}</p>
      <p className={styles.name}>{name}</p>
    </button>
  )
}
