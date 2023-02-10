export type Styles = {
  default: string
  focus: string
  link: string
  wrapper: string
}

export type ClassNames = keyof Styles

declare const styles: Styles

export default styles
