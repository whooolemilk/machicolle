export type Styles = {
  img: string
  img_wrapper: string
  intro_wrapper: string
  section: string
}

export type ClassNames = keyof Styles

declare const styles: Styles

export default styles
