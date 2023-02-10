export type Styles = {
  bg_img: string
  blue: string
  green: string
  img_wrapper: string
  pink: string
  wrapper: string
  yellow: string
}

export type ClassNames = keyof Styles

declare const styles: Styles

export default styles
