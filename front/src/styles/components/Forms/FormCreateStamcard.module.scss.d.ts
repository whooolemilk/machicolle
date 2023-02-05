export type Styles = {
  add_spot_botton: string
  blue: string
  checkmark: string
  color_label: string
  color_theme: string
  default: string
  form_error: string
  green: string
  label: string
  orange: string
  pink: string
  radiobutton: string
  textbox: string
  visually_hidden: string
  yellow: string
}

export type ClassNames = keyof Styles

declare const styles: Styles

export default styles
