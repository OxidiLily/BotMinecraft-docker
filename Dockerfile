FROM node:22-alpine

WORKDIR /BotAFK

COPY *.json .

RUN npm i

COPY . .

ENTRYPOINT [ "npm start" ]