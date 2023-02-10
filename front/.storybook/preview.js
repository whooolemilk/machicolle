import * as nextImage from 'next/image'
import '@/styles/global.scss'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

const OriginalNextImage = nextImage.default

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => (
    <OriginalNextImage {...props} placeholder={undefined} unoptimized />
  )
})
