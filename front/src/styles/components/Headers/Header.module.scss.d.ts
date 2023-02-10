export type Styles = {
  header: string
  home: string
  image: string
  logo: string
  menu_btn: string
  menu_btn_check: string
  menu_closelabel: string
  menu_content: string
  menu_cover: string
  return: string
}

export type ClassNames = keyof Styles

declare const styles: Styles

export default styles
