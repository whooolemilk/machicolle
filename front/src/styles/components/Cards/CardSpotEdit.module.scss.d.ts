export type Styles = {
  form_error: string
  form_wrapper: string
  hidden: string
  image: string
  label: string
  textbox: string
}

export type ClassNames = keyof Styles

declare const styles: Styles

export default styles
