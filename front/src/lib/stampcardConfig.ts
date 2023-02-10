export type ThemeColorType = {
  color: 'default' | 'orange' | 'yellow' | 'green' | 'blue' | 'pink'
}

export type SpotType = {
  name: string
  address: string
  location: {
    lat: number
    lng: number
  }
  url: string
  memo: string
}
