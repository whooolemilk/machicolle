export type Styles = {
  description: string
  eye_catch: string
  name: string
  stampcard: string
  stampcard_w: string
  text_w: string
}

export type ClassNames = keyof Styles

declare const styles: Styles

export default styles
