export type Styles = {
  blue: string
  button: string
  green: string
  icon: string
  pink: string
  yellow: string
}

export type ClassNames = keyof Styles

declare const styles: Styles

export default styles
