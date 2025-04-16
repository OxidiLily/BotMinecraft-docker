FROM node:22-alpine

WORKDIR /BotAFK

COPY package* /

RUN npm i

COPY . .


CMD [ "npm","run", "start" ]