import Image from 'next/image'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ButtonThemeLinkSecondary } from '@/components/Buttons'
import { BackgroundWave } from '@/components/Backgrounds'
import { ModalStamp } from '@/components/Modals'
import { useGetStampcard } from '@/hooks/stampCard'
import styles from '@/styles/components/Stampcards/StampcardSpot.module.scss'
import { SpotType } from '@/lib/stampcardConfig'

// swiper用にスタイルをインポート
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

type StampcardSpotProps = {
  isDemo: boolean
  id: string
}

export const StampcardSpot = ({ isDemo, id }: StampcardSpotProps) => {
  const { stampcardData } = useGetStampcard({ isDemo: isDemo, id: id })
  return (
    <>
      {stampcardData ? (
        <>
          <BackgroundWave color={stampcardData.stampcardTheme} />
          <div className={styles.wrapper}>
            <Swiper
              spaceBetween={32}
              modules={[Pagination]}
              pagination={{ clickable: true }}
              slidesPerView={1}
              loop={true}
              className={styles.swiper}
            >
              {stampcardData.spots.map((spot: SpotType, index: number) => {
                return (
                  <SwiperSlide
                    key={`${index}`}
                    className={styles.slide_wrapper}
                  >
                    <div className={styles.card_wrapper}>
                      <div className={styles.image_wrapper}>
                        {spot.thumbnail !== '' ? (
                          <Image
                            src={spot.thumbnail}
                            alt={'img'}
                            fill
                            className={styles.image}
                          />
                        ) : (
                          <Image
                            src={'/images/no_image.svg'}
                            alt={'img'}
                            fill
                            className={styles.image}
                          />
                        )}
                      </div>
                      <div className={styles.name_wrapper}>
                        <div
                          className={`${styles.number} ${
                            stampcardData.stampcardTheme === 'yellow' &&
                            styles.yellow
                          } ${
                            stampcardData.stampcardTheme === 'green' &&
                            styles.green
                          } ${
                            stampcardData.stampcardTheme === 'blue' &&
                            styles.blue
                          } ${
                            stampcardData.stampcardTheme === 'pink' &&
                            styles.pink
                          }`}
                        >
                          {index + 1}
                        </div>
                        <div>
                          <p className={styles.name}>{spot.name}</p>
                          <p className={styles.address}>{spot.address}</p>
                        </div>
                      </div>
                      <div className={styles.description_wrapper}>
                        <Image
                          src={'/images/user.svg'}
                          alt={'user'}
                          width={40}
                          height={40}
                        />
                        <div className={styles.comment}>
                          <p>{spot.memo}</p>
                        </div>
                      </div>
                      <div className={styles.buttons_wrapper}>
                        <ButtonThemeLinkSecondary
                          color={stampcardData.stampcardTheme}
                          label={'Googleマップで開く'}
                          url={spot.url}
                        />
                        <ModalStamp
                          color={stampcardData.stampcardTheme}
                          name={spot.name}
                          index={index}
                          location={spot.location}
                          emoji={stampcardData.emoji}
                          id={id}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </>
      ) : (
        <>no data</>
      )}
    </>
  )
}
