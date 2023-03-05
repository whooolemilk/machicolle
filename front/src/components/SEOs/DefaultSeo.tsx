import { DefaultSeo as NextSeo } from 'next-seo'

export const DefaultSeo = () => {
  return (
    <NextSeo
      defaultTitle="まちコレ - まちのスキをコレクションするお得なスタンプラリーアプリ"
      description={
        'まちコレは、街の好きな場所やお店をスタンプラリー形式でまとめ、友達や家族に共有し街を楽しく巡ってもらうだけで、提携店からお得なクーポンがもらえるWebサービスです。'
      }
      openGraph={{
        type: 'website',
        title:
          'まちコレ - まちのスキをコレクションするお得なスタンプラリーアプリ',
        description:
          'まちコレは、街の好きな場所やお店をスタンプラリー形式でまとめ、友達や家族に共有し街を楽しく巡ってもらうだけで、提携店からお得なクーポンがもらえるWebサービスです。',

        site_name:
          'まちコレ - まちのスキをコレクションするお得なスタンプラリーアプリ',
        url: 'https://machicolle.vercel.app/',
        images: [
          {
            url: 'https://machicolle.vercel.app/images/ogp.png',
            width: 1200,
            height: 630,
            alt: '',
            type: 'image/png'
          }
        ]
      }}
      twitter={{
        handle: '@traveli_jp',
        cardType: 'summary_large_image'
      }}
    />
  )
}
