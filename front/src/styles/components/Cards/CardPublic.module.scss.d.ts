export type Styles = {
  blue: string
  card_wrapper: string
  emoji_wrapper: string
  green: string
  link_home: string
  link_text: string
  pink: string
  text: string
  title: string
  yellow: string
}

export type ClassNames = keyof Styles

declare const styles: Styles

export default styles
