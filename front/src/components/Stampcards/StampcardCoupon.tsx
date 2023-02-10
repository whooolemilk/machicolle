import Image from 'next/image'
import { ButtonThemeLinkSecondary } from '@/components/Buttons'
import { BackgroundWave } from '@/components/Backgrounds'
import { useStampcard } from '@/hooks/stampCard'
import styles from '@/styles/components/Stampcards/StampcardCoupon.module.scss'

export const StampcardCoupon = () => {
  const { stampcardData } = useStampcard()

  return (
    <>
      {stampcardData ? (
        <>
          <BackgroundWave color={stampcardData.stampcardTheme} />
          <div className={styles.wrapper}>
            <div className={styles.card_wrapper}>
              <p className={styles.title}>リリース版のみ限定機能</p>
              <div className={styles.img_wrapper}>
                <Image
                  src={'/images/coupon_person.svg'}
                  alt={'image'}
                  fill
                  className={styles.img}
                />
              </div>
              <p>
                あなたのまちコレスタンプラリーを友達に共有して、
                <br />
                まちコレスタンプをコレクションしてもらうだけで、対象スポットのクーポンプレゼント！
                <br />
                ※一部提携店のみに限ります。
              </p>

              <ButtonThemeLinkSecondary
                color={stampcardData.stampcardTheme}
                label={'デモで体験してみる'}
                url={'https://maps.google.com/?cid=7141037060495360067'}
              />
            </div>
          </div>
        </>
      ) : (
        <>no data</>
      )}
    </>
  )
}
