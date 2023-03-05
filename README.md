# machicolle - まちコレ 
![Slide 16_9 - 1](https://user-images.githubusercontent.com/74092547/219981370-acf3e64c-3f35-43e4-a8de-3d92a88a53d1.png)

URL:[https://machicolle.vercel.app/](https://machicolle.vercel.app/)

※モバイルファーストで開発していますので、スマホで動作確認をお願いします。

<br>

## サービス概要
### 🌱 背景
***
`和歌山県`
- 既存施設も含めた市街地全体の拠点間の連携や、新たな客層・リピーター獲得のための取組が現状では不十分であるため、既存施設の誘客性・回遊率向上が求められている
- 学生は市外や郊外の商業施設に行くことが多く、中心市街地の商店街で活動をする若者の増加に関しては十分な効果が出ていない

(参考：[地域再生計画](https://www.pref.wakayama.lg.jp/prefg/020100/tokku/s_ichiran_d/fil/030820.pdf))

<br>

### 🌷 解決する課題
***
`県民の課題`
- 住み慣れたまちを巡らない

`既存施設の課題`
- 新規顧客・リピーター獲得が難しい（特に若者へのアプローチ）

<br>

### 📱 まちコレの概要
***
`サービス概要`
- 街の好きな場所やお店をスタンプラリー形式でまとめ、友達や家族に共有し、街を楽しく巡ってもらうだけで、提携店からお得なクーポンがもらえるWebサービス

`目的`
- 街の既存施設の新規顧客・リピーターの獲得支援
- 新しいまちめぐり体験の提供

<br>

### 🎉 提供価値
***
`既存施設（まちコレ提携店）のメリット`
- まちコレユーザ１人１人がもつコミュニティでの拡散力を利用し、従来の集客とは違った形でアプローチできる

`まちコレユーザ（スタンプラリー作成者）のメリット`
- 自分の友達や家族に、街のおすすめしたい場所を位置情報を用いたスタンプラリーで楽しく共有できる
- 共有した相手がノルマ分スタンプを集めて街を巡ってくれたら、スタンプラリー上に追加した提携店のお得なクーポンがもらえる

`一般ユーザ（スタンプラリーで遊ぶ人）のメリット`
- 自分の友達や家族がおすすめする、まだ行ったことのない場所をスタンプラリーという楽しい形で知れる
- スタンプラリーをコンプリートすれば、提携店からお得なクーポンがもらえる

<br>

### 📝 今後の展望
***
`リリース版にむけて機能拡張`
- クーポンがもらえる機能
- スタンプラリーへのスポット追加時に提携店をリコメンドする機能
- 位置情報以外の、QRコードなどのスタンプを押す機能
- タイムライン機能
   - ユーザの作ったスタンプラリーで良質なものはタイムラインに流し拡散力UP

<br>

## 技術周りのこだわりポイント
### 💗 Technology used
***
```sh
# React Hook FormとYup
- input要素などに入力した値の取得やバリデーションを簡単に

# PWA
- スマホアプリに近いユーザ体験の提供

# Firebase Local Emulator Suite
- ローカル環境でFirestoreの機能を確認、開発効率アップ

# RTK Query
- Hooksを使って簡単に非同期データ取得

# react google maps
- 位置情報まわりのデータの取得、検索

# Storybook
- UI周りの開発効率アップ
```

<br>

### 🔑 Requirements
***
- [Docker Desktop](https://www.docker.com/products/docker-desktop)

<br>

### 🛠️ Build and Setup
***
```sh
# セットアップ
  $ docker compose build
  $ docker compose run --rm node sh
  # 初回のみログインが必要
  # 表示されたURLにアクセス
  # traveliアカウントでログイン
  # 画面の指示に従い，最後に出てくるトークンをコピペしてください
  # Success! Logged in as ~~~と出てきたらOKです
  $ firebase login --no-localhost
  # .envファイルに、別途添付の環境変数をコピペしてください
  $ cp .env.example .env
  # コンテナを出る
  $ exit
  # ホストにnode_modulesをコピー
  $ docker cp stamp-rally:/home/app/node_modules/ ./front/
```

<br>

### 💫 Start Node
***
```sh
  # 起動
  $ docker compose up
  # 落とす
  $ docker compose down
```

以下の URL にブラウザからアクセスできるか確認してください。
- http://localhost:3000 (Next.js)
- http://localhost:4000 (Firebase Emulator)
- http://localhost:6006 (Storybook)

<br>

### 🧸 Other Commands
***
全て、stamp-rallyを起動した状態で打ってください。  
```sh
  # コンテナに入る
    docker compose exec node sh
  # install packages
    docker compose exec node yarn install
    docker cp stamp-rally:/home/app/node_modules/ ./front/
  # formatting
    docker compose exec node yarn format
```
