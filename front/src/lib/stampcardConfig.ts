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
  thumbnail: string
  url: string
  memo: string
}

export const demoData = {
  emoji: '1f356',
  stampcardDescription: '和歌山市に３年住んでイチオシのお店！味は保証します笑',
  stampcardName: '和歌山市でおすすめのお店',
  stampcardTheme: 'orange',
  spots: [
    {
      address: '日本、〒640-8342 和歌山県和歌山市友田町４丁目１１３',
      location: { lat: 34.2322222, lng: 135.1880556 },
      memo: 'おいしい生魚食べるなら、間違い無くここ！',
      name: '太平洋酒場',
      thumbnail:
        'https://firebasestorage.googleapis.com/v0/b/stamp-rally-387e1.appspot.com/o/images%2F22-03-05-13-25-56-575_photo.jpg?alt=media&token=024f72ce-89e1-4ff4-987a-6f9f27ebc490',

      url: 'https://maps.google.com/?cid=8894971303383556620'
    },
    {
      address:
        '日本、〒640-8212 和歌山県和歌山市杉ノ馬場１丁目２７−２７ ビジネスイン南海',
      location: { lat: 34.2357866, lng: 135.1688699 },
      memo: '週末じゃないと生鳥食べれないけど、まじでおいしい。',
      name: '味而鳥 AJITO',
      thumbnail:
        'https://firebasestorage.googleapis.com/v0/b/stamp-rally-387e1.appspot.com/o/images%2F21-08-07-21-07-26-655_photo.jpg?alt=media&token=27ea411e-1588-41c6-ad44-d8da60a9c4e2',
      url: 'https://maps.google.com/?cid=4386738870532811460'
    },
    {
      address: '日本、〒640-8216 和歌山県和歌山市元博労町３',
      location: {
        lat: 34.2351896,
        lng: 135.1686146
      },
      memo: 'ホルモンの脂が甘くて美味しすぎて、ぜひ食べて欲しい！',
      name: 'ライオンホルモン 和歌山店',
      thumbnail:
        'https://firebasestorage.googleapis.com/v0/b/stamp-rally-387e1.appspot.com/o/images%2F22-02-22-19-14-32-043_photo.jpg?alt=media&token=d69881c0-e33e-4ee6-b2e5-165c25bff6e0',
      url: 'https://maps.google.com/?cid=4236173787720283133'
    }
  ]
}
