export type Styles = {
  comment: string
  description_wrapper: string
  emoji_wrapper: string
  stampcard_wrapper: string
  title: string
  wrapper: string
}

export type ClassNames = keyof Styles

declare const styles: Styles

export default styles
