FROM ubuntu:22.04

RUN apt-get update -y
RUN apt-get install -y curl openjdk-17-jre-headless
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs

RUN npm install -g firebase-tools firebase-admin yarn

ENV APP_ROOT /home/app

WORKDIR $APP_ROOT

COPY ./package.json $APP_ROOT
COPY ./yarn.lock $APP_ROOT

RUN yarn install

COPY . $APP_ROOT

EXPOSE 3000
CMD ["yarn", "dev"]
