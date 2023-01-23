# stamp-rally 
## 🔑 Requirements
- [Docker Desktop](https://www.docker.com/products/docker-desktop)

## 🛠️ Build and Setup
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

## 💫 Start Node
```sh
  # 起動
  $ docker compose up
  # 落とす
  $ docker compose down
```

以下の URL にブラウザからアクセスできるか確認してください。
- http://localhost:3000
- http://localhost:4000

## 🧸 Other Commands
全て、stamp-rallyを起動した状態で打ってください。  
```sh
  # コンテナに入る
    docker compose exec node sh
  # install packages
    docker compose exec node npm install
    docker cp stamp-rally:/home/app/node_modules/ ./front/
  # formatting
    docker compose exec front npm run format
```