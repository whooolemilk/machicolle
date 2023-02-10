import Modal from 'react-modal'
import { FormSearchSpot } from '@/components/Forms'
import styles from '@/styles/components/Modals/ModalAddSpot.module.scss'
import { ButtonMain, ButtonSecondary } from '@/components/Buttons'
import { useModalAddSpot } from '@/hooks/modal/useModalAddSpot'
import { CardSpotEdit } from '@/components/Cards'
import { UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { StampcardType } from '@/rtk/api'
import { ModalStaticMap } from '@/components/Modals/ModalStaticMap'
type ModalAddSpotProps = {
  register: UseFormRegister<StampcardType>
  setValue: UseFormSetValue<StampcardType>
}

export const ModalAddSpot = ({ register, setValue }: ModalAddSpotProps) => {
  const {
    isOpen,
    spotData,
    setSpotData,
    spotsList,
    disabled,
    setDisabled,
    isClickNext,
    setIsClickNext,
    openModal,
    closeSaveModal,
    closeModal
  } = useModalAddSpot()

  return (
    <>
      {spotsList.map((spot, index) => (
        <CardSpotEdit
          url={spot.url}
          name={spot.name}
          address={spot.address}
          location={spot.location}
          register={register}
          setValue={setValue}
          spotsList={spotsList}
          key={index}
          index={index}
          isClickNext={isClickNext}
          setIsClickNext={setIsClickNext}
        />
      ))}
      <div className={styles.add_spot_botton}>
        <ButtonSecondary onClick={openModal} type={'button'}>
          スポットを追加する
        </ButtonSecondary>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Add Spot Modal"
        ariaHideApp={false}
        className={styles.modal_content}
        overlayClassName={styles.modal_overlay}
      >
        <FormSearchSpot
          placeholder={'場所を入力'}
          setSpotData={setSpotData}
          setDisabled={setDisabled}
        />
        {spotData?.name === '' ? (
          <div className={styles.message}>
            <p>
              スタンプラリーに追加したい
              <br />
              スポットを検索しよう！
            </p>
          </div>
        ) : (
          <>
            <div className={styles.spot_data}>
              <p className={styles.spot_name}>{spotData?.name}</p>
              <p className={styles.spot_address}>{spotData?.address}</p>
              {typeof spotData?.location.lat == 'number' &&
              typeof spotData?.location.lng == 'number' ? (
                <ModalStaticMap
                  lat={spotData?.location.lat}
                  lng={spotData?.location.lng}
                  width={289}
                  height={200}
                />
              ) : (
                <></>
              )}
            </div>
          </>
        )}

        <div className={styles.button_wrapper}>
          <ButtonSecondary
            onClick={closeModal}
            type={'button'}
            className={styles.button_round}
          >
            キャンセル
          </ButtonSecondary>
          <ButtonMain
            onClick={closeSaveModal}
            type={'button'}
            disabled={disabled}
          >
            スポットを追加
          </ButtonMain>
        </div>
      </Modal>
    </>
  )
}
