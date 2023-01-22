FROM node:18.12-alpine
ENV APP_ROOT /home/app

WORKDIR $APP_ROOT

COPY ./package.json $APP_ROOT
COPY ./package-lock.json $APP_ROOT

RUN npm install

COPY . $APP_ROOT

EXPOSE 3000
CMD ["npm", "run", "dev"]