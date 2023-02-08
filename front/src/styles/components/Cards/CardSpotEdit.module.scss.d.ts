export type Styles = {
  form_error: string
  form_wrapper: string
  hidden: string
  label: string
  textbox: string
}

export type ClassNames = keyof Styles

declare const styles: Styles

export default styles
