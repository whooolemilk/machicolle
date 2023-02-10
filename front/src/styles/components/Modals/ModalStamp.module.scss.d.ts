export type Styles = {
  modal_content: string
  modal_content_after: string
  modal_content_before: string
  modal_overlay: string
  modal_overlay_after: string
  modal_overlay_before: string
  text: string
  title: string
}

export type ClassNames = keyof Styles

declare const styles: Styles

export default styles
