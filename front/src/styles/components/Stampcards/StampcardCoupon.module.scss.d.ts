export type Styles = {
  card_wrapper: string
  img: string
  img_wrapper: string
  title: string
  wrapper: string
}

export type ClassNames = keyof Styles

declare const styles: Styles

export default styles
